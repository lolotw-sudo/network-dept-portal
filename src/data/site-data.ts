export interface SubDomain {
  label: string;
  /** 當對應至 TIS `dtype2` 時使用；留空會只導向 `ctaUrl` */
  dtype2?: string;
}

export interface SubDomainGroup {
  label: string;
  color: string;
  children: string[];
}

export interface Contact {
  name: string;
  role: string;
  email: string;
  support: string;
  tags: string[];
}

export interface Category {
  id: string; // 用於 query tab: access, core, ai, gov
  title: string;
  slogan: string;
  description: string;
  orgTargets: string[];
  subDomains: SubDomain[];
  subDomainGroups?: SubDomainGroup[];
  ctaUrl: string;
  contacts: Contact[];
}

export const CATEGORIES: Category[] = [
  {
    id: "access",
    title: "接取網路與線路工程",
    slogan: "把網路拉到現場，接上每一個使用者",
    description: "聚焦於線路、固定與行動網路等接取技術，從現場工程到接取架構，協助同仁理解網路如何實際落地，建立第一線實務與基礎概念。",
    orgTargets: [
      "客戶網路、線路相關單位",
      "接取網路規設與維運人員",
      "第一線工程與現場技術人員",
      "新進人員之基礎網路培訓"
    ],
    subDomains: [
      { label: "固定寬頻網路", dtype2: "AB" },
      { label: "客網裝維管理", dtype2: "AD" },
      { label: "線路技術", dtype2: "AG" },
      { label: "行動及新興網路", dtype2: "AE" }
    ],
    subDomainGroups: [
      { label: "固定網路", color: "#fbbf24", children: ["傳輸網路", "局內網路", "微波衛星通訊"] },
      { label: "行動網路", color: "#059669", children: ["行動核心", "行動無線接取", "行動整合服務"] },
      { label: "數據網路", color: "#0ea5e9", children: ["數據中心互連", "雲端網段治理"] }
    ],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=N",
    contacts: [
      { name: "李怡菁", role: "技術督導", email: "ming@cht.com.tw", support: "線路規設諮詢", tags: ["線路", "實習"] },
      { name: "張伸吉", role: "主講工程師", email: "huangxp@cht.com.tw", support: "數據接取與施工整合指導", tags: ["接取", "實務"] }
    ]
  },
  {
    id: "core",
    title: "核心網路與基礎設施",
    slogan: "讓網路成為穩定、可長期運作的系統",
    description: "著重於核心網路架構、雲網整合與機房基礎設施，涵蓋 IP 網路、資料中心與運作環境，協助同仁建立對大型網路系統整體運作的理解。",
    orgTargets: [
      "核心網路、數據網路相關單位",
      "雲網、系統整合與平台管理人員",
      "機房、IDC、基礎設施管理人員",
      "規劃、管理與跨單位協調角色"
    ],
    subDomains: [
      { label: "固定網路", dtype2: "AC" },
      { label: "行動網路", dtype2: "AD" },
      { label: "數據網路", dtype2: "AE" },
      { label: "電力空調", dtype2: "AA" }
    ],
    subDomainGroups: [
      {
        label: "固定網路",
        color: "#eab308",
        children: [
          "局外網路",
          "用戶端設備",
          "寬頻接取",
          "傳輸網路",
          "局內網路",
          "微波、衛星通信",
          "寬頻網路技術研發應用"
        ]
      },
      {
        label: "行動網路",
        color: "#16a34a",
        children: [
          "行動核心網路",
          "行動接取網路",
          "5G企業專網",
          "5G智慧應用"
        ]
      },
      {
        label: "數據網路",
        color: "#2563eb",
        children: [
          "IP VPN/CDN/數據加值及應用",
          "AIoT",
          "IDC/雲端機房規設、營維管及應用服務",
          "IP網路技術"
        ]
      },
      {
        label: "電力空調",
        color: "#a855f7",
        children: ["UPS 與供電", "空調維運"]
      }
    ],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=N",
    contacts: [
      { name: "李小華", role: "架構師", email: "hua@cht.com.tw", support: "雲網整合技術指導", tags: ["Cloud", "IP"] }
    ]
  },
  {
    id: "ai",
    title: "AI智聯網與新興技術",
    slogan: "讓網路具備智慧化與新技術的可能性",
    description: "聚焦 AI 技術與新興智慧網路應用，涵蓋智慧聯網、AI 網路應用與跨域整合，探索網路系統在智慧化、自動化與新技術導入上的發展方向。",
    orgTargets: [
      "新技術、創新應用相關單位",
      "AI、智慧聯網、跨域專案團隊",
      "參與數位轉型、創新試點之人員",
      "對新興技術有發展需求的業務或技術單位"
    ],
    subDomains: [
      { label: "新媒體", dtype2: "BA" },
      { label: "網路新技術", dtype2: "BB" },
      { label: "AI/智慧應用", dtype2: "BC" }
    ],
    subDomainGroups: [
      
      {
        label: "網路新技術",
        color: "#1d4ed8",
        children: [
          "SDN/NFV",
          "電信雲",
          "行固網融合維運營管"
        ]
      }
    ],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=N",
    contacts: [
      { name: "張專案", role: "研發領隊", email: "chang@cht.com.tw", support: "AI 應用場景媒合", tags: ["AIoT", "GenAI"] }
    ]
  },
  {
    id: "gov",
    title: "網安與永續治理",
    slogan: "確保網路安全可靠，並能長期經營",
    description: "關注網路安全、防護與永續治理議題，結合法規、風險管理與 ESG 思維，協助同仁建立可被信任、可持續發展的網路治理觀點。",
    orgTargets: [
      "網路安全、資安與風險管理相關單位",
      "管理、治理與法規遵循角色",
      "主管、決策與跨部門協調人員",
      "涉及 ESG、永續或治理議題之單位"
    ],
    subDomains: [
      { label: "網路安全", dtype2: "EA" },
      { label: "企業永續（E）", dtype2: "EB" },
      { label: "風險治理", dtype2: "EC" }
    ],
    subDomainGroups: [
      { label: "網路新技術", color: "#dc2626", children: ["新世代網路安全"]       },
      { label: "永續治理", color: "#0ea5e9", children: ["ESG 策略", "能源暨綠色供應鏈"] }
    ],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=N",
    contacts: [
      { name: "陳顧問", role: "資安專家", email: "chen@cht.com.tw", support: "合規與風險評估協助", tags: ["ISMS", "ESG"] }
    ]
  }
];

export const ORG_GUIDE = [
  { type: "網路單位", recommendId: "access" },
  { type: "管理單位", recommendId: "gov" },
  { type: "資訊單位", recommendId: "core" },
  { type: "企劃單位", recommendId: "ai" }
];

// 確保檔案中有這一行
export const TIS_SAMPLE_URL =
  "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=N";
