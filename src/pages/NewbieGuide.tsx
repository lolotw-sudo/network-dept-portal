// src/pages/NewbieGuide.tsx
import { TIS_SAMPLE_URL, CATEGORIES } from "../data/site-data";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";
import { ExternalLink, AlertCircle, HelpCircle, ArrowRight, Clock, MonitorPlay } from "lucide-react";
import { Accordion } from "../components/Accordion";

const NewbieGuide = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8">
        
        {/* Block 0｜頁面定位 (Hero) */}
        <header className="mb-12 border-l-4 border-btnPrimary pl-6">
          <h1 className="text-3xl font-black text-textMain mb-3 italic">新人怎麼找課，才不會走錯？</h1>
          <p className="text-textMuted text-lg leading-relaxed">
            這一頁不是課程介紹，而是教你怎麼使用公司的培訓系統。
          </p>
        </header>
{/* Block 0.5｜起點引導 - 雙圖片可點擊版本 */}
<section className="mb-16">
  <div className="bg-bgSurface border-2 border-dashed border-borderSubtle rounded-3xl p-8">
    <div className="flex flex-col md:flex-row gap-8 items-center">
      
      {/* 左側：文字說明 */}
      <div className="flex-1">
        <div className="inline-block px-3 py-1 rounded-full bg-btnPrimary/10 text-btnPrimary text-xs font-bold mb-4">
          STEP 0：起點
        </div>
        <h2 className="text-2xl font-bold text-textMain mb-4">先從公司 EIP 入口進入</h2>
        <p className="text-textBody leading-relaxed mb-6">
          所有的學習資源都整合在公司的入口網站。請先登入公司首頁 EIP 系統，在首頁左側選單找到「<span className="text-btnPrimary font-bold">課程學習</span>」（圖示為一本藍色的書），點擊後即可進入電信學院課程平台。
        </p>
        
        {/* 網址提示小卡 */}
        <div className="bg-bgPage p-4 rounded-xl border border-borderSubtle border-l-4 border-l-btnPrimary">
          <p className="text-xs font-bold text-textMain mb-1">培訓系統直接連結：</p>
          <code className="text-sm text-btnPrimary font-mono">https://elearning.cht.com.tw</code>
        </div>
      </div>

      {/* 右側：雙圖片點擊區 */}
      <div className="flex-1 grid grid-cols-1 gap-4 w-full">
        
        {/* 圖一：EIP 入口 (點擊前往 EIP) */}
        <a 
          href="https://eip.cht.com.tw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative group overflow-hidden rounded-xl border border-borderSubtle shadow-sm block"
        >
          {/* 穿透層 */}
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            <span className="bg-white/90 text-textMain px-3 py-1.5 rounded-lg font-bold text-xs shadow-md">
              前往 EIP 首頁
            </span>
          </div>
          <img 
            src={`${import.meta.env.BASE_URL}images/eip_portal.png`} 
            alt="EIP 入口選單" 
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105" 
          />
        </a>

        {/* 圖二：TIS 入口 (點擊前往 TIS) */}
        <a 
          href="https://elearning.cht.com.tw/allsearch/index.jsp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative group overflow-hidden rounded-xl border-2 border-transparent hover:border-btnPrimary transition-all shadow-sm block"
        >
          {/* 穿透層：加上 pointer-events-none 確保不擋住點擊 */}
          <div className="absolute inset-0 bg-btnPrimary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
            <span className="bg-btnPrimary text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg">
              點擊前往學院課程入口
            </span>
          </div>
          <img 
            src={`${import.meta.env.BASE_URL}images/tis_home.png`} 
            alt="培訓系統首頁" 
            className="w-full h-auto" 
          />
        </a>
      </div>
    </div>
  </div>

  {/* 下向引導箭頭 */}
  <div className="flex justify-center mt-8">
    <div className="animate-bounce p-2 bg-bgSurface rounded-full border border-borderSubtle shadow-sm">
      <ArrowRight size={24} className="text-btnPrimary rotate-90" />
    </div>
  </div>
</section>

        {/* Block 1｜主路徑選擇 */}
        <section className="grid md:grid-cols-2 gap-6 mb-16">
          {/* A 卡：同步課程 */}
          <div className="bg-bgSurface border border-borderSubtle rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 text-btnPrimary rounded-lg"><Clock size={24} /></div>
              <h2 className="text-xl font-bold text-textMain">A. 實體課 / 直播課</h2>
            </div>
            <p className="text-sm font-bold text-btnPrimary mb-2">有排定開課時間的課</p>
            <ul className="text-sm text-textBody space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-2">• 同步、有固定時間</li>
              <li className="flex items-start gap-2">• 課程分批排出來（近兩個月較完整）</li>
              <li className="flex items-start gap-2">• 先找到課再看時間能否配合</li>
            </ul>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {CATEGORIES.find(cat => cat.id === "access")?.subDomains.map(sub => (
                <a
                  key={sub.label}
                  href={`${TIS_SAMPLE_URL}${sub.dtype2 ? `&dtype2=${sub.dtype2}` : ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-borderSubtle bg-white/80 text-sm font-semibold text-textMain hover:border-btnPrimary hover:bg-btnPrimary/10 transition"
                >
                  {sub.label}
                </a>
              ))}
            </div>
          </div>

          {/* B 卡：非同步課程 */}
          <div className="bg-bgSurface border border-borderSubtle rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><MonitorPlay size={24} /></div>
              <h2 className="text-xl font-bold text-textMain">B. 預錄課 (E-Learning)</h2>
            </div>
            <p className="text-sm font-bold text-emerald-600 mb-2">沒有時間限制的課 隨時可上</p>
            <div className="text-sm text-textBody space-y-3 mb-6 flex-grow">
              <p>• 補觀念/補能力；不用等開課、不用搶名額</p>
              <p>• 適合在找不到實體課時使用</p>
              <div className="bg-bgTabs p-4 rounded-xl flex gap-3 items-start mt-4 border border-borderSubtle">
                <AlertCircle size={20} className="text-btnPrimary shrink-0" />
                <p className="text-xs font-bold text-textMain leading-relaxed">
                  ⚠️ 重要：找預錄課請用「<span className="underline decoration-2 underline-offset-4">分類課程</span>」，<br/>不要用「經驗傳承」。
                </p>
              </div>
            </div>
            <a 
              href={TIS_SAMPLE_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white border-2 border-btnPrimary text-btnPrimary hover:bg-bgTabs text-center py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
            >
              前往 elearning（分類課程） <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Block 2｜常見誤會澄清 */}
        <section className="mb-16 bg-bgTabs/50 p-8 rounded-3xl border border-borderSubtle">
          <h2 className="text-xl font-bold text-textMain mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle size={22} className="text-btnPrimary" /> 常見誤會澄清
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { q: "查不到課 ≠ 沒有課", a: "可能只是還沒排出來。" },
              { q: "填了培訓調查 ≠ 報名", a: "那只是意願調查，正式報名需回系統點選。" },
              { q: "看不到某些課 ≠ 不存在", a: "可能是特定單位的「派訓課」。" },
              { q: "看得到報不到 ≠ 你慢", a: "可能是職等、年資或單位限制。" },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="text-btnPrimary font-black text-xl opacity-20">0{idx + 1}</div>
                <div>
                  <div className="text-sm text-textMuted mb-1 italic">你可能會以為...</div>
                  <div className="font-bold text-textMain mb-1">{item.q}</div>
                  <div className="text-sm text-btnPrimary font-medium flex items-center gap-1">
                    <ArrowRight size={14} /> 其實是：{item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Block 3｜補充說明 (Accordion) */}
        <section className="mb-16">
          <h2 className="text-sm font-black text-textMuted uppercase tracking-widest mb-6 text-center">補充說明 (FAQ)</h2>
          <Accordion title="為什麼有些課要用派訓？">
            為了確保特定業務單位的同仁能優先取得必備證照或技術，系統會根據組織名單直接帶入受訓人員。這類課程不對全公司開放。
          </Accordion>
          <Accordion title="為什麼系統近兩個月資訊比較完整？">
            技術課程多由內部專家授課，需配合專案維運動態調整。建議以此兩月內的資訊為主要報名依據。
          </Accordion>
        </section>

        {/* Block 4｜出口與延伸 */}
        <footer className="flex flex-col sm:flex-row items-center justify-between p-8 border-t border-borderSubtle bg-white rounded-2xl">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold text-textMain mb-1">我已懂怎麼找課</h3>
            <p className="text-xs text-textMuted">下一步，去看看具體的四大技術領域吧！</p>
          </div>
          <div className="flex gap-4">
            <Link to="/categories" className="px-6 py-2 rounded-lg text-sm font-bold bg-bgTabs text-textMain hover:bg-tabHover transition-colors">
              去看四大領域
            </Link>
            <a href={TIS_SAMPLE_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg text-sm font-bold text-textMuted hover:text-textMain transition-colors flex items-center gap-1">
              再次前往培訓系統 <ExternalLink size={14} />
            </a>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default NewbieGuide;
