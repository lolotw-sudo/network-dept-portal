export type CourseLevel = "基礎" | "進階" | "專業";

export interface Course {
  name: string;
  level: CourseLevel;
  is_featured: boolean;
}

export interface TrainingType {
  id: number;
  name: string;
  size: "regular" | "wide" | "tall";
  courses: Course[];
}

export interface StrategyBlock {
  strategy: string;
  types: TrainingType[];
}

export interface LearningMapData {
  total_stats: {
    total_courses: number;
    basic: number;
    advanced: number;
    professional: number;
  };
  curriculum_map: StrategyBlock[];
}

const featuredPattern = (i: number) => i % 4 === 0;

const createCourses = (
  prefix: string,
  blueprint: { level: CourseLevel; count: number }[]
): Course[] => {
  return blueprint.flatMap(({ level, count }) =>
    Array.from({ length: count }, (_, idx) => ({
      name: `${prefix} ${level}-${idx + 1}`,
      level,
      is_featured: featuredPattern(idx),
    }))
  );
};

const strategy: StrategyBlock = {
  strategy: "精準建設",
  types: [
    {
      id: 1,
      name: "固網寬頻",
      size: "tall",
      courses: [
        { name: "固網學程認證", level: "專業", is_featured: false },
        { name: "技術研討會", level: "專業", is_featured: false },
        { name: "電信雲網路融合", level: "進階", is_featured: false },
        { name: "雲端/IDC", level: "進階", is_featured: false },
        { name: "Wi-Fi", level: "進階", is_featured: false },
        { name: "微波", level: "進階", is_featured: false },
        { name: "海纜", level: "進階", is_featured: true },
        { name: "交換/彙集", level: "進階", is_featured: false },
        { name: "IP網路", level: "進階", is_featured: false },
        { name: "固網接取 (含全光接取)", level: "進階", is_featured: true },
        { name: "客網裝維管理", level: "進階", is_featured: true },
        { name: "固網寬頻技術基本概念", level: "基礎", is_featured: false },
      ],
    },
    {
      id: 2,
      name: "行動寬頻",
      size: "wide",
      courses: [
        { name: "行網學程認證", level: "專業", is_featured: false },
        { name: "技術研討會", level: "專業", is_featured: false },
        { name: "B5G/6G (含3GPP標準技術/頻譜)", level: "進階", is_featured: false },
        { name: "衛星 (含低軌)", level: "進階", is_featured: false },
        { name: "O-RAN", level: "進階", is_featured: false },
        { name: "行網規劃設計 (含SA)", level: "進階", is_featured: false },
        { name: "行網維運管理", level: "進階", is_featured: true },
        { name: "行動接取", level: "進階", is_featured: false },
        { name: "行動核心網", level: "進階", is_featured: false },
        { name: "行動網路技術基本概念", level: "基礎", is_featured: false },
      ],
    },
    {
      id: 3,
      name: "資料中心佈建",
      size: "regular",
      courses: createCourses("資料中心蓄能", [
        { level: "進階", count: 4 },
        { level: "專業", count: 2 },
        { level: "基礎", count: 2 },
      ]),
    },
    {
      id: 4,
      name: "IP/MPLS 核心網",
      size: "wide",
      courses: createCourses("IP/MPLS 核心網", [
        { level: "專業", count: 3 },
        { level: "進階", count: 3 },
        { level: "基礎", count: 2 },
      ]),
    },
    {
      id: 5,
      name: "SDN/NFV 與自動化",
      size: "regular",
      courses: createCourses("SDN/NFV 研習", [
        { level: "進階", count: 3 },
        { level: "專業", count: 3 },
        { level: "基礎", count: 1 },
      ]),
    },
    {
      id: 6,
      name: "AIoT 智慧應用",
      size: "tall",
      courses: createCourses("AIoT 智慧實作", [
        { level: "進階", count: 4 },
        { level: "專業", count: 2 },
        { level: "基礎", count: 2 },
      ]),
    },
    {
      id: 7,
      name: "電力空調與能源",
      size: "regular",
      courses: createCourses("電力空調研習", [
        { level: "進階", count: 3 },
        { level: "專業", count: 2 },
        { level: "基礎", count: 2 },
      ]),
    },
    {
      id: 8,
      name: "網路安全與治理",
      size: "wide",
      courses: createCourses("網路安全治理", [
        { level: "專業", count: 4 },
        { level: "進階", count: 2 },
        { level: "基礎", count: 1 },
      ]),
    },
    {
      id: 9,
      name: "雲網整合策略",
      size: "regular",
      courses: createCourses("雲網整合", [
        { level: "進階", count: 4 },
        { level: "專業", count: 2 },
        { level: "基礎", count: 1 },
      ]),
    },
    {
      id: 10,
      name: "終端服務與體驗",
      size: "regular",
      courses: createCourses("終端服務設計", [
        { level: "進階", count: 4 },
        { level: "基礎", count: 2 },
        { level: "專業", count: 2 },
      ]),
    },
    {
      id: 11,
      name: "光纖/傳輸網",
      size: "wide",
      courses: createCourses("光纖傳輸", [
        { level: "進階", count: 4 },
        { level: "專業", count: 3 },
        { level: "基礎", count: 1 },
      ]),
    },
    {
      id: 12,
      name: "基地台與電信站",
      size: "regular",
      courses: createCourses("基地台維運", [
        { level: "進階", count: 4 },
        { level: "基礎", count: 2 },
        { level: "專業", count: 2 },
      ]),
    },
    {
      id: 13,
      name: "語音媒體與統播",
      size: "regular",
      courses: createCourses("語音媒體", [
        { level: "進階", count: 4 },
        { level: "專業", count: 4 },
      ]),
    },
    {
      id: 14,
      name: "數據分析與AI決策",
      size: "tall",
      courses: createCourses("數據分析", [
        { level: "基礎", count: 2 },
        { level: "進階", count: 3 },
        { level: "專業", count: 2 },
      ]),
    },
    {
      id: 15,
      name: "行動商用與企業網",
      size: "regular",
      courses: createCourses("行動商用", [
        { level: "進階", count: 4 },
        { level: "專業", count: 3 },
        { level: "基礎", count: 1 },
      ]),
    },
  ],
};

const totalCourses = strategy.types.reduce((sum, type) => sum + type.courses.length, 0);

export const LEARNING_MAP: LearningMapData = {
  total_stats: {
    total_courses: totalCourses,
    basic: strategy.types.reduce(
      (sum, type) => sum + type.courses.filter(course => course.level === "基礎").length,
      0
    ),
    advanced: strategy.types.reduce(
      (sum, type) => sum + type.courses.filter(course => course.level === "進階").length,
      0
    ),
    professional: strategy.types.reduce(
      (sum, type) => sum + type.courses.filter(course => course.level === "專業").length,
      0
    ),
  },
  curriculum_map: [strategy],
};
