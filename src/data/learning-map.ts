export interface Course {
  name: string;
  level: "基礎" | "進階" | "專業";
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

export const LEARNING_MAP: LearningMapData = {
  total_stats: {
    total_courses: 121,
    basic: 26,
    advanced: 69,
    professional: 26,
  },
  curriculum_map: [
  {
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
        ]
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
        ]
      },
      {
        id: 3,
        name: "AIoT",
        size: "regular",
        courses: [
          { name: "技術研討會", level: "專業", is_featured: false },
          { name: "AIoT技術實務", level: "進階", is_featured: true },
          { name: "AIoT智慧應用", level: "進階", is_featured: true },
          { name: "AIoT基本概念", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 4,
        name: "新型態企業網路",
        size: "wide",
        courses: [
          { name: "技術研討會", level: "專業", is_featured: false },
          { name: "SD-WAN", level: "進階", is_featured: false },
          { name: "SASE網路安全", level: "進階", is_featured: false },
          { name: "VPN", level: "進階", is_featured: false },
          { name: "MPLS技術", level: "進階", is_featured: false },
          { name: "網路技術基本概念", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 5,
        name: "5G企業專網",
        size: "regular",
        courses: [
          { name: "技術研討會", level: "專業", is_featured: false },
          { name: "5G企業專網維運技術", level: "進階", is_featured: false },
          { name: "5G企業專網規劃設計", level: "進階", is_featured: false },
          { name: "5G企業專網基本概念", level: "基礎", is_featured: false },
        ]
      }
    ]
  },
  {
    strategy: "數位韌性",
    types: [
      {
        id: 6,
        name: "網路基礎鞏固",
        size: "tall",
        courses: [
          { name: "網路設備維運學程認證", level: "專業", is_featured: false },
          { name: "機房規劃設計/建置/維運國際認證", level: "專業", is_featured: true },
          { name: "IP網路技術", level: "進階", is_featured: false },
          { name: "客網裝維技術", level: "進階", is_featured: true },
          { name: "AIDC機房散熱技術", level: "進階", is_featured: true },
          { name: "行動網路維運技術", level: "進階", is_featured: false },
          { name: "傳送網路維運技術", level: "進階", is_featured: false },
          { name: "固定網路維運技術", level: "進階", is_featured: false },
          { name: "PAMS功能與應用作為", level: "進階", is_featured: false },
          { name: "網路架構演進概述", level: "基礎", is_featured: false },
          { name: "通信網路技術概述", level: "基礎", is_featured: false },
          { name: "客網基礎建設維護", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 7,
        name: "網路安全提升",
        size: "regular",
        courses: [
          { name: "網路安全專家國際認證培訓", level: "專業", is_featured: false },
          { name: "網路攻防演練研習", level: "專業", is_featured: false },
          { name: "電信雲與機房安全管理", level: "專業", is_featured: false },
          { name: "寬頻彙集網路安全防護", level: "進階", is_featured: false },
          { name: "固網交換網路安全防護", level: "進階", is_featured: false },
          { name: "SASE網路安全研習", level: "進階", is_featured: false },
          { name: "行動網路安全", level: "進階", is_featured: false },
          { name: "物聯網與OT安全", level: "進階", is_featured: false },
          { name: "虛擬化雲化基礎概要", level: "基礎", is_featured: false },
          { name: "網路訊務分析", level: "基礎", is_featured: false },
          { name: "網路安全概念、趨勢與案例", level: "基礎", is_featured: true },
        ]
      },
      {
        id: 8,
        name: "通信韌性強化",
        size: "wide",
        courses: [
          { name: "NTN非地面網路技術", level: "專業", is_featured: false },
          { name: "衛星通信技術", level: "進階", is_featured: false },
          { name: "海纜網路技術", level: "進階", is_featured: false },
          { name: "OTN網路技術概要及設備簡介", level: "基礎", is_featured: false },
          { name: "PTN網路概念", level: "基礎", is_featured: false },
          { name: "GPS原理與應用", level: "基礎", is_featured: false },
          { name: "無人機操作與應用", level: "基礎", is_featured: false },
        ]
      }
    ]
  },
  {
    strategy: "智慧驅動",
    types: [
      {
        id: 9,
        name: "AI驅動網路賦能",
        size: "regular",
        courses: [
          { name: "網路維運學程認證", level: "專業", is_featured: false },
          { name: "AI導向自治網路", level: "專業", is_featured: false },
          { name: "數位分身智慧營維", level: "進階", is_featured: false },
          { name: "數據驅動營維協作", level: "進階", is_featured: false },
          { name: "訊務分析障礙查測", level: "進階", is_featured: false },
          { name: "網路技術融合演進", level: "進階", is_featured: false },
          { name: "Edge AI基本概念", level: "基礎", is_featured: false },
          { name: "網路維運基本概念", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 10,
        name: "行動網路技術",
        size: "wide",
        courses: [
          { name: "行網學程認證", level: "專業", is_featured: false },
          { name: "全光網路", level: "進階", is_featured: false },
          { name: "企業專網", level: "進階", is_featured: false },
          { name: "O-RAN", level: "進階", is_featured: false },
          { name: "網路技術融合演進", level: "進階", is_featured: false },
          { name: "行網技術基本概念", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 11,
        name: "固定網路技術",
        size: "regular",
        courses: [
          { name: "固網學程認證", level: "專業", is_featured: false },
          { name: "MSER", level: "進階", is_featured: false },
          { name: "SVG", level: "進階", is_featured: false },
          { name: "IMS", level: "進階", is_featured: false },
          { name: "網路技術融合演進", level: "進階", is_featured: false },
          { name: "寬頻彙集基本概念", level: "基礎", is_featured: false },
          { name: "固網技術基本概念", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 12,
        name: "雲網融合",
        size: "tall",
        courses: [
          { name: "SASE", level: "專業", is_featured: false },
          { name: "SD-WAN", level: "專業", is_featured: false },
          { name: "容器與CNF重要技術", level: "進階", is_featured: true },
          { name: "電信雲NFV MANO", level: "進階", is_featured: false },
          { name: "電信雲機房技術", level: "進階", is_featured: false },
          { name: "邊緣雲", level: "進階", is_featured: false },
          { name: "網路技術融合演進", level: "進階", is_featured: false },
          { name: "雲網融合基本概念", level: "基礎", is_featured: false },
        ]
      }
    ]
  },
  {
    strategy: "永續發展",
    types: [
      {
        id: 13,
        name: "提升能源效率",
        size: "regular",
        courses: [
          { name: "能源永續發展趨勢研討", level: "專業", is_featured: false },
          { name: "ISO 50001內部稽核員認證", level: "專業", is_featured: false },
          { name: "電信機房節能策略", level: "進階", is_featured: false },
          { name: "電力空調維運技術", level: "進階", is_featured: true },
          { name: "電信機房法規", level: "進階", is_featured: false },
          { name: "AI智慧機房管理", level: "進階", is_featured: false },
          { name: "iEN智慧水資源管理", level: "進階", is_featured: false },
          { name: "鋰電池發展與應用概念", level: "基礎", is_featured: false },
        ]
      },
      {
        id: 14,
        name: "使用再生能源",
        size: "wide",
        courses: [
          { name: "太陽能節能建築工程師認證", level: "專業", is_featured: false },
          { name: "太陽光電設置乙級技術士學程認證", level: "專業", is_featured: false },
          { name: "太陽光電系統", level: "進階", is_featured: false },
          { name: "風力發電系統", level: "進階", is_featured: false },
          { name: "電動車與充電樁", level: "進階", is_featured: false },
          { name: "離岸風電CPPA", level: "進階", is_featured: false },
          { name: "能源永續系列課程", level: "進階", is_featured: false },
        ]
      },
      {
        id: 15,
        name: "響應國際倡議",
        size: "regular",
        courses: [
          { name: "企業永續管理師證照", level: "專業", is_featured: false },
          { name: "ISO 14064-1 組織層級溫室氣體主任查證員", level: "專業", is_featured: false },
          { name: "ISO 14067 產品碳足跡主任查證員", level: "專業", is_featured: false },
          { name: "落實生物多樣性", level: "進階", is_featured: true },
          { name: "中華電信淨零轉型", level: "進階", is_featured: false },
          { name: "EV100電動車發展與機會", level: "進階", is_featured: false },
          { name: "綠色採購/供應鏈永續", level: "進階", is_featured: false },
          { name: "ESG永續發展通識", level: "基礎", is_featured: false },
          { name: "中華電信淨零政策/宣示目標與作為", level: "基礎", is_featured: false },
          { name: "全球淨零趨勢與目標", level: "基礎", is_featured: false },
          { name: "淨零作為與實務成果/自然碳匯", level: "基礎", is_featured: false },
        ]
      }
    ]
  }
  ]
}
