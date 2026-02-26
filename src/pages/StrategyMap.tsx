import { useState } from "react";
import { Layout } from "../components/Layout";
import { LEARNING_MAP, TrainingType } from "../data/learning-map";

const levelPalette = {
  專業: { gradient: "from-amber-500/80 via-orange-500/70 to-orange-400/60", text: "text-orange-100" },
  進階: { gradient: "from-emerald-500/80 via-emerald-400/80 to-emerald-300/70", text: "text-emerald-100" },
  基礎: { gradient: "from-blue-500/80 via-sky-500/70 to-cyan-400/60", text: "text-sky-100" },
};

const StrategyMap = () => {
  const strategies = LEARNING_MAP.curriculum_map;
  const [active, setActive] = useState(0);

  const highlightStrategy = strategies[active];

  return (
    <Layout>
      <section className="space-y-10 max-w-6xl mx-auto">
        <header className="space-y-4 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-slate-400">
            網路學系策略地圖
          </p>
          <h1 className="text-4xl font-black text-slate-900">
            調整培訓動線 · 從策略到課程
          </h1>
          <p className="text-slate-500 leading-relaxed">
            依照策略主軸拆解 15 種需求類型，點擊任一策略後會橫向排列該策略下的需求類型，並以層級顏色從上到下堆疊其課程模組，若為「本院特色」課程則同步加上柔光呼吸動畫。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {strategies.map((strategy, idx) => (
              <button
                key={strategy.strategy}
                onClick={() => setActive(idx)}
                className={`px-6 py-3 rounded-xl border transition text-left ${
                  active === idx
                    ? "bg-slate-900 text-white border-white/60 shadow-lg text-lg"
                    : "bg-slate-800 text-slate-400 border-slate-700 hover:border-white/30 text-base"
                }`}
              >
                <span
                  className={`block font-bold leading-tight text-2xl tracking-tight ${
                    active === idx ? "text-white" : "text-slate-200"
                  }`}
                >
                  {strategy.strategy}
                </span>
              </button>
            ))}
          </div>
        </header>

        <div className="space-y-5 border-t border-white/10 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 justify-center mx-auto">
            {highlightStrategy.types.slice(0, 5).map(type => (
              <div key={type.id} className="flex flex-col gap-2">
                <div>
                  <p className="text-xs text-slate-400">TYPE {type.id}</p>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {type.id} {type.name}
                  </h3>
                </div>
                <div className="flex flex-col gap-1">
                  {type.courses.map(course => {
                    const palette = levelPalette[course.level];
                    return (
                      <div
                        key={course.name}
                        className={`border border-white/5 bg-gradient-to-r ${palette.gradient} px-4 py-1 text-sm font-semibold tracking-tight text-slate-900 ${course.is_featured ? "animate-pulse" : ""}`}
                      >
                        <p>{course.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StrategyMap;
