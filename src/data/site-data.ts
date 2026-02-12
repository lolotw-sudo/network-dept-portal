export interface Category {
  id: string; // 用於 query tab: access, core, ai, gov
  title: string;
  slogan: string;
  description: string;
  orgTargets: string[];
  subDomains: string[];
  ctaUrl: string;
  contacts: Contact[];
}

export interface Contact {
  name: string;
  role: string;
  email: string;
  support: string;
  tags: string[];
}

export const CATEGORIES: Category[] = [
  {
    id: "access",
    title: "接取網路與線路工程",
    slogan: "把網路拉到現場，接上每一個使用者",
    description: "聚焦於線路、固定與行動網路等接取技術，從現場工程到接取架構，協助同仁理解網路如何實際落地，建立第一線實務與基礎概念。",
    orgTargets: ["客戶網路、線路相關單位", "接取網路規設與維運人員", "第一線工程與現場技術人員", "新進人員之基礎網路培訓"],
    subDomains: ["線路技術", "固定網路", "行動及新興網路"],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=C&dtype2=AC",
    contacts: [
      { name: "王大明", role: "技術督導", email: "ming@cht.com.tw", support: "線路規設諮詢", tags: ["線路", "實習"] }
    ]
  },
  {
    id: "core",
    title: "核心網路與基礎設施",
    slogan: "讓網路成為穩定、可長期運作的系統",
    description: "著重於核心網路架構、雲網整合與機房基礎設施，涵蓋 IP 網路、資料中心與運作環境，協助同仁建立對大型網路系統整體運作的理解。",
    orgTargets: ["核心網路、數據網路相關單位", "雲網、系統整合與平台管理人員", "機房、IDC、基礎設施管理人員", "規劃、管理與跨單位協調角色"],
    subDomains: ["IP 網路技術", "雲網融合", "IDC 技術", "電力空調"],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=C&dtype2=AC",
    contacts: [
      { name: "李小華", role: "架構師", email: "hua@cht.com.tw", support: "雲網整合技術指導", tags: ["Cloud", "IP"] }
    ]
  },
  {
    id: "ai",
    title: "AI智聯網與新興技術",
    slogan: "讓網路具備智慧化與新技術的可能性",
    description: "聚焦 AI 技術與新興智慧網路應用，涵蓋智慧聯網、AI 網路應用與跨域整合，探索網路系統在智慧化、自動化與新技術導入上的發展方向。",
    orgTargets: ["新技術、創新應用相關單位", "AI、智慧聯網、跨域專案團隊", "參與數位轉型、創新試點之人員", "對新興技術有發展需求的業務或技術單位"],
    subDomains: ["智慧聯網（AIoT）", "AI 網路應用"],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=C&dtype2=AC",
    contacts: [
      { name: "張專案", role: "研發領隊", email: "chang@cht.com.tw", support: "AI 應用場景媒合", tags: ["AIoT", "GenAI"] }
    ]
  },
  {
    id: "gov",
    title: "網安與永續治理",
    slogan: "確保網路安全可靠，並能長期經營",
    description: "關注網路安全、防護與永續治理議題，結合法規、風險管理與 ESG 思維，協助同仁建立可被信任、可持續發展的網路治理觀點。",
    orgTargets: ["網路安全、資安與風險管理相關單位", "管理、治理與法規遵循角色", "主管、決策與跨部門協調人員", "涉及 ESG、永續或治理議題之單位"],
    subDomains: ["網路安全", "企業永續（E）"],
    ctaUrl: "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=C&dtype2=AC",
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
export const TIS_SAMPLE_URL = "https://tis12.cht.com.tw/jap/tis/classDoneQueryByPro.jsp?department=P&dtype1=C&dtype2=AC";
