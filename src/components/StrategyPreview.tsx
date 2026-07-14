import { useState } from "react";
import { LEARNING_MAP } from "../data/learning-map";

const levelPalette = {
  專業: "from-amber-500/80 via-orange-500/70 to-orange-400/60",
  進階: "from-emerald-500/80 via-emerald-400/80 to-emerald-300/70",
  基礎: "from-blue-500/80 via-sky-500/70 to-cyan-400/60",
};

const StrategyPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const strategies = LEARNING_MAP.curriculum_map;
  const activeStrategy = strategies[activeIndex];
  const strategyDescriptions: Record<string, string> = {
    精準建設: "支撐個家/企客/國際業務發展",
    數位韌性: "網路/資安韌性強化、網路品質提升",
    智慧驅動: "AI驅動網路賦能、網路技術/融合演進",
    永續發展: "科技減碳、使用再生能源、落實生物多樣性",
  };
  const highlightedStrategy = hoveredIndex !== null ? strategies[hoveredIndex] : strategies[activeIndex];

  return (
    <section className="bg-transparent rounded-3xl p-6 mt-10 shadow-none">
      <header className="flex flex-col gap-4 mb-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">網路學系學習地圖</p>
          <h2 className="text-3xl font-black text-slate-900">培訓課程對準網分四大策略主軸</h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          {strategies.map((strategy, idx) => (
            <div key={strategy.strategy} className="relative flex flex-col items-center">
              <button
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`px-5 py-2 rounded-xl border transition text-lg font-semibold ${
                  idx === activeIndex
                    ? "bg-white text-slate-900 border-slate-200"
                    : "bg-slate-100 text-slate-500 border-slate-200 hover:border-slate-400"
                }`}
              >
                策略{idx + 1}: {strategy.strategy}
              </button>
              <span
                className={`absolute top-full mt-0 w-max max-w-[220px] text-sm text-slate-500 text-center transition-opacity duration-300 whitespace-nowrap ${
                  hoveredIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                {strategyDescriptions[strategy.strategy]}
              </span>
            </div>
          ))}
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-[repeat(5,minmax(180px,1fr))] justify-center">
        {activeStrategy.types.slice(0, 5).map(type => (
          <div key={type.id} className="flex flex-col gap-2 border border-slate-200/70 p-4 rounded-2xl bg-white/70">
            <div>
              <span className="text-xs text-slate-500 tracking-[0.4em]">TYPE {type.id}</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">
                {type.id} {type.name}
              </h3>
            </div>
            <div className="flex flex-col gap-1">
              {type.courses.map(course => (
                <div
                  key={course.name}
                  className={`text-sm font-semibold text-white bg-gradient-to-r ${levelPalette[course.level]} px-3 py-1 ${course.is_featured ? "animate-pulse" : ""}`}
                >
                  {course.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StrategyPreview;
