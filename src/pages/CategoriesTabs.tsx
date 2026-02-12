import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES } from "../data/site-data";
import { Layout } from "../components/Layout";
import { Chip } from "../components/Chip";
import { ContactCard } from "../components/ContactCard";

const CategoriesTabs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabQuery = searchParams.get("tab");

  // 若 query 不存在或不匹配，預設選取第一個
  const defaultTab = CATEGORIES.find(c => c.id === tabQuery) ? tabQuery : CATEGORIES[0].id;
  const [activeTab, setActiveTab] = useState(defaultTab || "access");

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
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Block 2: Targets */}
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

            {/* Block 3: Subdomains & CTA */}
            <section className="bg-bgSurface p-8 rounded-2xl border border-borderSubtle flex flex-col justify-between">
              <div>
                <h3 className="font-bold mb-4 text-textMain">涵蓋領域</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentData.subDomains.map(sub => (
                    <Chip key={sub} label={sub} url={currentData.ctaUrl} />
                  ))}
                </div>
              </div>
              <a 
                href={currentData.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-btnPrimary hover:bg-btnPrimaryHover text-white font-bold py-3 rounded-xl transition-colors"
              >
                查看目前開班
              </a>
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