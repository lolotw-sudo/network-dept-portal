// src/pages/NewbieGuide.tsx
import React from "react";
import { TIS_SAMPLE_URL } from "../data/site-data";
import { Layout } from "../components/Layout"; // 確保套用全站導覽列

type StepCardProps = {
  title: string;
  desc: string;
  bullets: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function StepCard({ title, desc, bullets, primaryCta, secondaryCta }: StepCardProps) {
  return (
    <section className="bg-bgSurface border border-borderSubtle rounded-2xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-textMain">{title}</h2>
      <p className="mt-2 text-textBody leading-relaxed">{desc}</p>

      <ul className="mt-4 space-y-2 text-textBody list-disc pl-5">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-3">
        <a
          className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-white bg-btnPrimary hover:bg-btnPrimaryHover transition font-medium"
          href={primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {primaryCta.label}
        </a>

        {secondaryCta ? (
          <a
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-borderSubtle text-textMain hover:bg-bgTabs transition font-medium"
            href={secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {secondaryCta.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}

function InfoRow({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-bgSurface border border-borderSubtle rounded-2xl p-5 shadow-sm">
      <div className="font-semibold text-textMain">{q}</div>
      <div className="mt-2 text-textBody leading-relaxed text-sm">{a}</div>
    </div>
  );
}

export default function NewbieGuide() {
  return (
    <Layout>
      <div className="mx-auto max-w-5xl py-6">
        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center rounded-full bg-bgTabs px-3 py-1 text-sm text-textMuted font-medium border border-borderSubtle">
            新人快速導覽
          </div>
          <h1 className="mt-3 text-3xl font-bold text-textMain leading-tight">
            先學會「怎麼用培訓系統」<br />你就能自己找得到課
          </h1>
          <p className="mt-3 text-textBody leading-relaxed max-w-2xl">
            這頁不是在介紹分類，而是用最短時間讓你掌握：線上課怎麼找、實體課怎麼查、需要報名/派訓時要怎麼做。
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white bg-btnPrimary hover:bg-btnPrimaryHover transition shadow-md font-bold"
              href={TIS_SAMPLE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              直接進入課程查詢系統
            </a>

            <a
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-borderSubtle text-textMain bg-bgSurface hover:bg-bgTabs transition font-bold"
              href={TIS_SAMPLE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              我想先看看目前有哪些班
            </a>
          </div>

          <div className="mt-4 text-xs text-textMuted">
            ※ 外連為公司既有系統（第一版先用範例 URL；你後續可自行調整參數）
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <StepCard
            title="A. 我想上線上課（先補觀念 / 先備知識）"
            desc="當你想先建立基本認知，或還不確定該選哪一類課程，先用線上課把名詞與架構補起來最快。"
            bullets={[
              "先從「課程查詢系統」進入，確認是否有線上課/數位教材分類入口",
              "用關鍵字搜尋：例如「接取」、「核心」、「網安」、「AIoT」等",
              "先把基礎課上完，再回來找對應的實體課（效率最高）",
            ]}
            primaryCta={{ label: "前往系統找線上課", href: TIS_SAMPLE_URL }}
          />

          <StepCard
            title="B. 我想找實體課（要被派訓 / 想報名開班）"
            desc="當你要報名、被派訓、或要找近期開班資訊，實體課以公司系統顯示為準。"
            bullets={[
              "先用「班名/關鍵字」查：例如你聽到的課程名稱、或核心技術名詞",
              "如果不確定課名，用領域關鍵字查，再用時間/地點/狀態篩選",
              "需要派訓/報名流程時，依你們單位規定走內部流程（系統資訊作為查詢依據）",
            ]}
            primaryCta={{ label: "前往系統查實體課/開班", href: TIS_SAMPLE_URL }}
          />
        </div>

        {/* Quick mental model */}
        <section className="mt-10 bg-bgSurface border border-borderSubtle rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-textMain mb-6">一個新人的「查課心法」</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-bgPage p-5 border border-borderSubtle">
              <div className="font-bold text-btnPrimary mb-2 text-sm">STEP 1</div>
              <div className="font-semibold text-textMain">先想「要解決什麼」</div>
              <div className="mt-2 text-textBody text-xs leading-relaxed">
                先備知識？要上手系統？要跟上專案？要能處理現場問題？
              </div>
            </div>
            <div className="rounded-2xl bg-bgPage p-5 border border-borderSubtle">
              <div className="font-bold text-btnPrimary mb-2 text-sm">STEP 2</div>
              <div className="font-semibold text-textMain">用關鍵字縮小範圍</div>
              <div className="mt-2 text-textBody text-xs leading-relaxed">
                用技術名詞、領域名詞、或課名片段先查到「候選清單」。
              </div>
            </div>
            <div className="rounded-2xl bg-bgPage p-5 border border-borderSubtle">
              <div className="font-bold text-btnPrimary mb-2 text-sm">STEP 3</div>
              <div className="font-semibold text-textMain">看開班狀態與方式</div>
              <div className="mt-2 text-textBody text-xs leading-relaxed">
                線上課就先上；實體課看開班時間與派訓/報名規則。
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-textMain mb-6">新人常見問題</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InfoRow
              q="我不知道要輸入什麼關鍵字？"
              a="先從你手上的工作內容出發：接取/線路、核心/IP、網安、AIoT 等，再用課名片段或技術名詞逐步縮小。"
            />
            <InfoRow
              q="我看到了課，但不知道要報名？"
              a="第一步先以系統資訊確認開班與課程方式；派訓/報名流程依各單位內規走。你也可以把課名截圖給前輩或窗口確認。"
            />
          </div>
        </section>

        {/* Footer actions */}
        <section className="mt-12 pt-8 border-t border-borderSubtle flex flex-wrap gap-4 justify-center">
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 text-white bg-btnPrimary hover:bg-btnPrimaryHover transition font-bold shadow-md"
            href={TIS_SAMPLE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            再次前往課程查詢系統
          </a>
          <a
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 border border-borderSubtle text-textMain bg-bgSurface hover:bg-bgTabs transition font-bold"
            href="/categories"
          >
            我已懂系統操作，想看四大領域
          </a>
        </section>
      </div>
    </Layout>
  );
}