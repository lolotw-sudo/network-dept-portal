import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Layout } from "../components/Layout";
import { LEARNING_MAP, TrainingType, CourseLevel } from "../data/learning-map";

const LEVEL_COLOR_PALETTE: Record<CourseLevel, { bg: string; text: string; border: string }> = {
  基礎: { bg: "from-blue-500/40 to-blue-400/30", text: "text-blue-900", border: "border-blue-300" },
  進階: { bg: "from-emerald-500/40 to-emerald-400/30", text: "text-emerald-900", border: "border-emerald-300" },
  專業: { bg: "from-amber-400/40 to-orange-400/30", text: "text-orange-900", border: "border-amber-300" },
};

const FOCUS_RING_CLASSES: Record<CourseLevel, string> = {
  基礎: "focus:ring-blue-300",
  進階: "focus:ring-emerald-300",
  專業: "focus:ring-amber-300",
};

const SIZE_CLASSES: Record<TrainingType["size"], string> = {
  regular: "lg:col-span-1 row-span-1",
  wide: "lg:col-span-2 row-span-1",
  tall: "lg:row-span-2 row-span-1",
};

const levelPriority: CourseLevel[] = ["專業", "進階", "基礎"];

const getDominantLevel = (type: TrainingType): CourseLevel => {
  const counts: Record<CourseLevel, number> = { 基礎: 0, 進階: 0, 專業: 0 };
  type.courses.forEach(course => (counts[course.level] += 1));
  return levelPriority.reduce(
    (best, level) => (counts[level] > counts[best] ? level : best),
    levelPriority[0]
  );
};

const LearningMap = () => {
  const strategy = LEARNING_MAP.curriculum_map[0];
  const allTypes = strategy.types;
  const [selectedType, setSelectedType] = useState<TrainingType | null>(null);

  const stats = LEARNING_MAP.total_stats;

  const handleCardClick = (type: TrainingType) => {
    setSelectedType(prev => (prev?.id === type.id ? null : type));
  };

  return (
    <Layout>
      <LayoutGroup>
        <section className="space-y-8">
          <header className="space-y-4 text-center">
            <p className="text-sm uppercase tracking-[0.4em] text-slate-500">
              網路學系學習地圖
            </p>
            <h1 className="text-4xl font-black text-slate-900">策略主軸：{strategy.strategy}</h1>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <span>課程總數：{stats.total_courses}</span>
              <span>基礎 {stats.basic} / 進階 {stats.advanced} / 專業 {stats.professional}</span>
            </div>
          </header>

          <motion.div
            layout
            className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px]"
          >
            {allTypes.map(type => {
              const dominantLevel = getDominantLevel(type);
              const palette = LEVEL_COLOR_PALETTE[dominantLevel];
              const isActive = selectedType?.id === type.id;
              return (
                <motion.button
                  key={type.id}
                  layout
                  onClick={() => handleCardClick(type)}
                  className={`relative flex flex-col justify-between rounded-[32px] border border-white/40 bg-gradient-to-br ${palette.bg} bg-white/40 p-6 text-left backdrop-blur-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 ${FOCUS_RING_CLASSES[dominantLevel]} ${SIZE_CLASSES[type.size]}`}
                  style={{
                    gridRowEnd: type.size === "tall" ? "span 2" : "span 1",
                    borderColor: palette.border,
                  }}
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.45em] text-white/70">需求類型</p>
                    <h3 className="mt-3 text-2xl font-bold text-white">{type.name}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-white/90">
                    <span className="text-sm font-semibold">{type.courses.length} 門課程</span>
                    <span className="rounded-full border border-white/60 px-3 py-1 text-xs font-semibold">
                      {dominantLevel}
                    </span>
                  </div>
                  <div className="text-xs text-white/60">點擊展開模組清單</div>
                  {isActive && (
                    <div className="absolute inset-0 animate-pulse rounded-[32px] border-2 border-white/60"></div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          <motion.section
            layout
            className="rounded-3xl border border-white/40 bg-white/90 p-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-slate-500">課程明細</p>
                <h2 className="text-2xl font-bold text-slate-900">
                  {selectedType ? selectedType.name : "選擇一個培訓需求類型，再查看內部課程與特色模組"}
                </h2>
              </div>
              {selectedType && (
                <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-600">
                  共 {selectedType.courses.length} 門課程
                </span>
              )}
            </div>

            {selectedType ? (
              <ul className="mt-6 space-y-3">
                {selectedType.courses.map(course => (
                  <motion.li
                    key={course.name}
                    layout
                    className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{course.name}</p>
                      <p className="text-xs text-slate-500">{course.level}，{course.is_featured ? "本院特色" : "常態課程"}</p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        course.level === "基礎"
                          ? "bg-blue-100 text-blue-700"
                          : course.level === "進階"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {course.level}
                    </span>
                    {course.is_featured && (
                      <span className="ml-auto text-xs font-bold text-indigo-500">特色</span>
                    )}
                  </motion.li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-sm text-slate-500">
                點擊任一需求類型卡片即可展開該類別下的所有課程，同時在卡片中透過 Layout transition 呈現平滑展開與縮回動畫。
              </p>
            )}
          </motion.section>
        </section>
      </LayoutGroup>
    </Layout>
  );
};

export default LearningMap;
