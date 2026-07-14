import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Layout } from "../components/Layout";
import { LEARNING_MAP, TrainingType, Course } from "../data/learning-map";

const LEVEL_LABELS: Record<Course["level"], string> = {
  基礎: "level-base",
  進階: "level-adv",
  專業: "level-pro",
};

const getTopLevel = (type: TrainingType) => {
  const count: Record<Course["level"], number> = { 基礎: 0, 進階: 0, 專業: 0 };
  type.courses.forEach(course => {
    count[course.level] += 1;
  });
  return (["專業", "進階", "基礎"] as Course["level"][]).find(l => count[l] === Math.max(...Object.values(count))) ?? "進階";
};

const LearningMapModal = () => {
  const types = LEARNING_MAP.curriculum_map[0].types;
  const [activeType, setActiveType] = useState<TrainingType | null>(null);
  const stats = LEARNING_MAP.total_stats;

  const handleOpen = (type: TrainingType) => setActiveType(type);
  const handleClose = () => setActiveType(null);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = activeType ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeType]);

  const modalContent = activeType ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-lg px-4 py-6">
      <div className="relative w-full max-w-5xl overflow-hidden rounded-[40px] bg-slate-950/90 p-8 shadow-2xl border border-white/10">
        <button
          onClick={handleClose}
          className="absolute right-6 top-6 text-white/80 hover:text-white"
        >
          ✕
        </button>
        <header className="border-b border-white/10 pb-4 mb-6">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-500">課程清單</p>
          <h2 className="text-3xl font-bold text-white">{activeType.name}</h2>
          <p className="text-sm text-slate-400">
            Strategy: {LEARNING_MAP.curriculum_map[0].strategy} · Level: {getTopLevel(activeType)}
          </p>
        </header>

        <div className="grid gap-3 max-h-[65vh] overflow-y-auto pr-3">
          {activeType.courses.map(course => (
            <div
              key={course.name}
              className="glass-card rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-sm font-semibold text-white">{course.name}</p>
                <p className="text-xs text-slate-400">
                  {course.level} · {course.is_featured ? "本院特色" : "常態課程"}
                </p>
              </div>
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${LEVEL_LABELS[course.level]}`}>
                {course.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;

  const portalTarget = typeof document !== "undefined" ? document.body : null;
  const portalContent =
    portalTarget && modalContent ? createPortal(modalContent, portalTarget) : modalContent;

  return (
    <Layout>
      <header className="mx-auto mb-12 flex max-w-6xl flex-col gap-4 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-slate-400">課程學習地圖 · 炫技互動版</p>
        <h1 className="text-4xl font-extrabold text-white">中華電信網路學系 ｜ 策略核心地圖</h1>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-300">
          <span className="stats-number text-3xl">總課程 {stats.total_courses}</span>
          <span className="level-base font-bold">基礎 {stats.basic}</span>
          <span className="level-adv font-bold">進階 {stats.advanced}</span>
          <span className="level-pro font-bold">專業 {stats.professional}</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {types.map(type => (
          <div
            key={type.id}
            className="glass-card p-6 rounded-[32px] relative cursor-pointer overflow-hidden border border-white/30 shadow-lg"
            onClick={() => handleOpen(type)}
          >
            <div className="flex justify-between items-start mb-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider border border-white/20">
                {type.id}. {type.name}
              </span>
              <span className="text-[10px] font-semibold text-slate-300 tracking-[0.4em]">
                {getTopLevel(type)}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">{type.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {type.courses.length} 門課程，主攻領域為 {getTopLevel(type)} 技術展開，涵蓋基礎至專業梯度。
            </p>
            <div className="flex items-center gap-2">
              <div className="h-1 flex-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-500 to-emerald-400" style={{ width: `${(type.courses.length / 15) * 100}%` }}></div>
              </div>
              <span className="text-xs font-bold text-white">{type.courses.length}</span>
            </div>
            <span className="absolute right-6 top-6 text-xs uppercase text-white/60">點擊查看</span>
          </div>
        ))}
      </main>

      {portalContent}
    </Layout>
  );
};

export default LearningMapModal;
