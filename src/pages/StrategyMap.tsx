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
          <div className="flex flex-wrap justify-center gap-3">
            {strategies.map((strategy, idx) => (
              <button
                key={strategy.strategy}
                onClick={() => setActive(idx)}
                className={`px-5 py-2 rounded-full border transition ${
                  active === idx
                    ? "bg-slate-900 text-white border-white/60 shadow-lg"
                    : "border-white/20 text-slate-100 hover:border-slate-50"
                }`}
              >
                <span className="text-xs uppercase tracking-[0.4em] text-slate-300">
                  {idx + 1}
                </span>
                <span className="block font-bold leading-tight">{strategy.strategy}</span>
              </button>
            ))}
          </div>
        </header>

        <div className="space-y-6 border-t border-white/10 pt-6">
          <div className="flex flex-wrap justify-between gap-4">
            {highlightStrategy.types.map(type => (
              <div key={type.id} className="flex-1 min-w-[220px]">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold uppercase tracking-[0.5em] text-slate-400">
                    {type.name}
                  </h3>
                  <span className="text-xs text-slate-400">{type.courses.length} 門課 </span>
                </div>
                <div className="space-y-2">
                  {type.courses.map(course => {
                    const palette = levelPalette[course.level];
                    return (
                      <div
                        key={course.name}
                        className={`rounded-3xl border border-white/5 bg-gradient-to-r ${palette.gradient} px-4 py-3 text-white shadow-lg ${course.is_featured ? "animate-pulse" : ""}`}
                      >
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-semibold text-sm">{course.name}</p>
                          {course.is_featured && (
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/80">
                              FEATURED
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-white/80 mt-1">{course.level}</p>
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
