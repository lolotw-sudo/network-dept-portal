# 策略地圖維運說明

## 1. 資料來源與結構
- 策略 / 需求類型 / 課程資料目前集中在 `src/data/learning-map.ts`，採 JSON 風格的 `LEARNING_MAP` 資料結構：
  ```ts
  interface LearningMapData {
    total_stats: { total_courses: number; basic: number; advanced: number; professional: number };
    curriculum_map: { strategy: string; types: { id: number; name: string; size: string; courses: Course[] }[] }[];
  }
  ```
- 變動策略主軸或課程時，只需修改上述 `curriculum_map` 裡對應的 `strategy` / `types` / `courses`，UI 會自動依資料渲染。

## 2. 如何更新資料
1. 在 `learning-map.ts` 中新增/編輯某個策略，維持 `courses` 物件格式：
   ```ts
   { name: "課程名稱", level: "基礎" | "進階" | "專業", is_featured: boolean }
   ```
2. 如有大量資料調整，將資料維持在 Google Sheet/Excel，傳出 CSV -> 用小工具（可用 Node.js + `papaparse`）轉成上述 JSON，節省手打錯誤。
3. 編輯完後執行 `npm run lint`（如有設定）及`npm run build` 確保無語法錯誤。

## 3. 視覺/行為維持
- `StrategyPreview` 依資料呈現：按鈕順序照 `curriculum_map` 的「strategy」順序，最多顯示 4 策略；每個策略裡只取前五個需求類型 (`types.slice(0, 5)`) 來顯示，確保維運不需調整 component。
- 課程列使用 `levelPalette` 控制色彩（基礎=藍、進階=綠、專業=橘），若新增課程需指定 `level`。
- `is_featured: true` 會自動加上呼吸動畫 highlight，可用來標註主播 / 新課程。

## 4. 部署流程（目前手動）
1. 變更完成後 `git add ...` + `git commit`。
2. 執行 `npm run build` 確保能成功編譯。
3. 執行 `npm run deploy`（會先 build 再用 `gh-pages` 部署），即時更新 GitHub Pages。建議建立 `feature/strategy-map` → PR → merge，保持 `main` 部署穩定。

## 5. 建議的自動化（可在未來升級）
- 用 GitHub Actions 監控 `main`：每次 merge 觸發 `npm run deploy`，避免手動觸發錯誤。
- 若資料由非工程師更新，可提供一個 `data/learning-map-template.csv` 以及轉換腳本 `scripts/convert-learning-map.ts`，採用 `npm run update-map` 把 CSV 轉換成 TypeScript。

## 6. 知識傳承
- 每次格式變更時，在此檔案附註更新時間與負責人，未來維運者可直接查閱。
- 若需要新增欄位（例如每個課程的 `duration`、`delivery`），先在此檔案補上用法，再同步修改 `src/components/StrategyPreview.tsx` 的渲染邏輯。
