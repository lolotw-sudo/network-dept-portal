// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { CATEGORIES } from "../data/site-data";
import { ArrowRight, Globe, Shield, Cpu, Activity, BookOpen, Users, MapPin } from "lucide-react";

// 定義分類對應的圖示（增加視覺科技感）
const ICON_MAP: Record<string, any> = {
  access: Globe,
  core: Cpu,
  security: Shield,
  aiot: Activity,
};

const HERO_QUICK_NAV = [
  {
    to: "/categories",
    label: "課程介紹",
    desc: "探索分類與路徑",
    Icon: BookOpen,
  },
  {
    to: "/guide/org",
    label: "師資介紹",
    desc: "認識授課專家",
    Icon: Users,
  },
  {
    to: "/guide/newbie",
    label: "新人導覽",
    desc: "快速上手",
    Icon: MapPin,
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - 科技感大標題區 */}
      <div className="relative overflow-hidden rounded-3xl mb-12 bg-slate-900 py-20 px-8 text-center shadow-2xl">
        {/* 背景裝飾圖片 - 使用你上傳的 bg_hero.jpg */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('./images/bg_hero.jpg')" }}
        ></div>
        
       {/* 動態科技紋理 - 呼吸慢一點的版本 */}
<div 
  className="absolute inset-0 opacity-10 animate-[pulse_4s_ease-in-out_infinite]"
  style={{ backgroundImage: "url('./images/pattern_circuit.png')", backgroundSize: '400px' }}
></div>

        <div className="relative z-10">
          <div className="inline-block px-4 py-1.5 mb-6 text-m font-bold tracking-widest text-blue-400 uppercase bg-blue-400/10 border border-blue-400/20 rounded-full">
            中華電信學院 網路學系 板橋院本部
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            掌握網路技術脈絡 <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              賦能數位連結未來
            </span>
          </h1>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            這是專為中華電信同仁設計的網路學系導覽入口，<br className="hidden md:block"/>
            從基礎線路到 AI 智聯網，加速您的專業成長曲線，為您串聯海地星空。
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {HERO_QUICK_NAV.map(({ to, label, desc, Icon }) => (
              <Link
                key={label}
                to={to}
                className="group relative flex flex-col items-center gap-3 min-w-[240px] px-6 pt-6 pb-4 bg-white/5 backdrop-blur-sm shadow-[0_20px_45px_rgba(2,6,23,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] rounded-none bg-gradient-to-t from-slate-200/80 via-sky-400/60 to-sky-500/80 opacity-0 translate-y-full transition-[opacity,transform] duration-700 ease-out delay-100 group-hover:opacity-90 group-hover:translate-y-0"
                  style={{
                    clipPath:
                      'path("M0 80 Q40 40 80 70 T160 60 T240 75 T320 55 L360 120 L0 120 Z")',
                  }}
                ></span>
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] rounded-none opacity-0 translate-y-full transition-[opacity,transform] duration-700 ease-out delay-150 group-hover:opacity-80 group-hover:translate-y-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 0, rgba(255,255,255,0.45), rgba(255,255,255,0))",
                    clipPath:
                      'path("M0 40 Q40 10 80 35 Q120 60 160 30 Q200 5 240 35 Q280 60 320 25 L360 80 L0 80 Z")',
                  }}
                ></span>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-emerald-400 text-white shadow-xl transition-transform duration-300 group-hover:scale-105">
                  <Icon className="w-7 h-7" />
                </div>
                <div className="flex flex-col items-center text-center gap-1 min-h-[58px] relative z-10">
                  <span className="font-black text-2xl leading-none text-white">{label}</span>
                  <span className="text-xs text-white/70">{desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 四大分類區 - 加入滑鼠互動放大效果 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {CATEGORIES.map((cat, idx) => {
          const IconComponent = ICON_MAP[cat.id] || Globe;
          return (
            <Link 
              key={cat.id}
              to={`/categories?tab=${cat.id}`}
              className="group relative overflow-hidden bg-white border border-slate-200 p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 border-b-4 hover:border-b-blue-500"
            >
              {/* 卡片背景微光效果 */}
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <div className="text-blue-600 font-bold text-xs mb-2 tracking-widest uppercase">
                  網路學系課程介紹{idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{cat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {cat.slogan}
                </p>
                
                <div className="flex items-center text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  進入領域 <ArrowRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 底部快速連結 */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">還在猶豫要看哪一類嗎？</h2>
          <p className="text-slate-500">直接透過組織圖找尋最適合您的學習路徑</p>
        </div>
        <Link 
          to="/guide/org" 
          className="w-full md:w-auto px-10 py-4 bg-white border-2 border-slate-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 rounded-2xl font-bold transition-all text-center"
        >
          依單位找課程
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
