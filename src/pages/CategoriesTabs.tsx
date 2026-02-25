import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, SubDomain } from "../data/site-data";
import { Layout } from "../components/Layout";
import { ContactCard } from "../components/ContactCard";

const CategoriesTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabQuery = searchParams.get("tab");

  // 若 query 不存在或不匹配，預設選取第一個
  const defaultTab = CATEGORIES.find(c => c.id === tabQuery) ? tabQuery : CATEGORIES[0].id;
  const [activeTab, setActiveTab] = useState(defaultTab || "access");
  const [activeGroupLabel, setActiveGroupLabel] = useState<string | null>(null);

  // 當 URL Query 改變時同步 State
  useEffect(() => {
    if (tabQuery && CATEGORIES.find(c => c.id === tabQuery)) {
      setActiveTab(tabQuery);
    }
  }, [tabQuery]);

  const currentData = CATEGORIES.find(c => c.id === activeTab)!;

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  useEffect(() => {
    if (currentData.subDomainGroups?.length) {
      setActiveGroupLabel(currentData.subDomainGroups[0].label);
    } else {
      setActiveGroupLabel(null);
    }
  }, [currentData.subDomainGroups]);

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-6">學系分類指南</h1>
        
        {/* Tabs 導航 */}
        <div className="bg-bgTabs p-1 rounded-xl flex gap-1 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => handleTabChange(cat.id)}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                activeTab === cat.id 
                ? "bg-bgSurface text-textMain shadow-sm" 
                : "text-textMuted hover:bg-tabHover"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 內容區塊 */}
        <div className="space-y-10 animate-in fade-in duration-500">
          {/* Block 1: Title & Description */}
          <section className="bg-bgSurface p-8 rounded-2xl border border-borderSubtle">
            <h2 className="text-2xl font-bold text-textMain mb-2">{currentData.title}</h2>
            <p className="text-btnPrimary font-bold text-lg mb-4 italic">「{currentData.slogan}」</p>
            <p className="text-textBody leading-relaxed max-w-3xl">{currentData.description}</p>
            <div className="mt-6">
              <h3 className="text-lg font-bold text-textMain mb-3">近期開課（實體課/直播課）</h3>
              <div className="flex flex-wrap gap-3">
                {currentData.subDomains.slice(0, 2).map((sub: SubDomain) => (
                  <a
                    key={`${sub.label}-${sub.dtype2 ?? ""}`}
                    href={`${currentData.ctaUrl}${sub.dtype2 ? `&dtype2=${sub.dtype2}` : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-2xl bg-gradient-to-r from-blue-500 to-sky-500 text-white text-sm font-semibold shadow-sm"
                  >
                    {sub.label}
                  </a>
                ))}
              </div>
            </div>
          </section>

          <div className="space-y-8">
          {/* Block 3: Subdomains & CTA */}
          <section className="bg-bgSurface p-8 rounded-2xl border border-borderSubtle space-y-6">
            <div>
              <h3 className="text-lg font-bold text-textMain mb-3">預錄課(數位教材eLearning）</h3>
               <div className="text-sm text-textMuted leading-relaxed">
              eLearning 的預錄課程沒有時間限制，隨時可上，不用等開課、不用搶名額，適合在找不到實體課時使用。
            </div>
            </div>
           
            <a
              href="https://elearning.cht.com.tw/portal/cate_list.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-btnPrimary hover:bg-btnPrimaryHover text-white font-bold py-3 rounded-xl transition-colors"
            >
              查詢預錄課程
            </a>
            <p className="text-sm text-textMuted leading-relaxed">
                這些分類指引你到 eLearning 分類課程中的主題區塊，你可以從這些分類開始你的預錄教材學習歷程。
              </p>
            <div className="flex flex-wrap gap-4">
              {(currentData.subDomainGroups ?? []).map(group => (
                <details
                  key={group.label}
                  className="group rounded-xl border border-borderSubtle bg-white/80 transition hover:-translate-y-1 w-full md:w-1/4 lg:w-1/5"
                >
                  <summary className="px-4 py-2 text-sm font-semibold text-emerald-700 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-t-2xl cursor-pointer">
                    {group.label}
                  </summary>
                  <div className="px-6 pb-3 space-y-2 text-sm text-textBody">
                    {group.children.map(child => (
                      <div key={child} className="text-sm">
                        {child}
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
            
          </section>
          <section className="bg-bgSurface p-8 rounded-2xl border border-borderSubtle">
            <h3 className="font-bold mb-4 text-textMain">主要對應單位／角色</h3>
            <ul className="space-y-2">
              {currentData.orgTargets.map((item, i) => (
                <li key={i} className="flex items-start text-textBody text-sm">
                  <span className="text-btnPrimary mr-2">•</span> {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

          {/* Block 4: Contacts */}
          <section>
            <h3 className="font-bold mb-6 text-textMain text-xl">師資窗口</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentData.contacts.map((contact, i) => (
                <ContactCard key={i} contact={contact} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CategoriesTabs;
