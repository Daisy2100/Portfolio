# Daisy 個人作品集

這是我的個人作品集網站，用來整理前端工程經歷、工作案例與 Side Projects。

- 正式網站：[portfolio.daisy2100.com](https://portfolio.daisy2100.com/)
- 前端框架：Angular 19
- 部署平台：Cloudflare Workers / Static Assets

## 專案特色

- 支援桌面與行動裝置的響應式版面
- 展示工作經歷與專案案例
- 共用的 Side Project 詳情頁元件
- Side Project 路由採用延遲載入
- 使用 PrimeNG 元件與滾動動畫
- Angular Router 換頁時自動回到頁面頂端
- 整合 Cloudflare 部署流程

## 技術棧

| 分類 | 使用技術 |
| --- | --- |
| 前端框架 | Angular 19 |
| 程式語言 | TypeScript 5.7 |
| UI 元件 | PrimeNG 19、PrimeIcons |
| 樣式 | SCSS、Tailwind CSS 3 |
| 建置 | Angular browser build，保留 SSR 基礎架構 |
| 部署 | Cloudflare Workers、Wrangler |
| 測試 | Jasmine、Karma |

## 頁面路由

| 路由 | 說明 |
| --- | --- |
| `/` | 首頁與個人專業概覽 |
| `/about` | 關於我 |
| `/work` | 工作經歷 |
| `/work/wits` | WITS 專案案例 |
| `/work/systex` | SYSTEX 專案案例 |
| `/work/access` | ACCESS Taiwan 專案案例 |
| `/side-project` | Side Project 列表 |
| `/side-project/2026-primeleft` | PrimeLeft / Sepal Auth Hub |
| `/side-project/2025-cryptanalysis` | 密碼分析學習專案 |
| `/side-project/2024-license-plate` | 車牌查詢工具 |
| `/side-project/2022-date-picker` | Date Picker 專案 |

## PrimeLeft Repository 說明

PrimeLeft / Sepal Auth Hub 由多個 repositories 組成：

- Sepal Auth Hub Core
- Sepal Auth Hub
- PrimeLeft Frontend
- PrimeLeft Backend

以上 repositories 目前皆未公開。作品頁僅展示系統邊界、技術選型與各服務責任，不提供原始碼連結。

## 開始使用

### 環境需求

- Node.js 20 或更新版本
- npm

### 安裝套件

```bash
npm install
```

### 啟動開發環境

```bash
npm start
```

啟動後開啟 <http://localhost:4200/>。修改原始碼時，開發伺服器會自動重新載入。

### 正式環境建置

```bash
npm run build
```

建置結果會輸出至 `dist/browser/`。

### 執行測試

```bash
npm test
```

### 本機預覽 Cloudflare 版本

請先完成 Angular 建置，再啟動 Wrangler：

```bash
npm run build
npm run preview
```

## 部署

Wrangler 會依照 `wrangler.jsonc` 的設定，發布 `dist/browser/` 內的檔案。

```bash
npm run build
npm run deploy
```

部署前需在本機設定 Cloudflare 驗證資訊，或提供 `CLOUDFLARE_API_TOKEN` 環境變數。請勿將任何憑證提交至 repository。

## 專案結構

```text
src/
├── app/
│   ├── components/
│   │   ├── footer/                 # 頁尾
│   │   ├── navigation/             # 導覽列
│   │   ├── side-project-detail/    # Side Project 共用詳情頁
│   │   └── home/                   # 首頁區塊元件
│   ├── data/                       # 靜態資料
│   ├── pages/
│   │   ├── about/                  # 關於我
│   │   ├── home/                   # 首頁
│   │   ├── news/                   # 新聞頁面
│   │   ├── side-project/           # Side Projects
│   │   └── work/                   # 工作經歷與案例
│   ├── app.component.*             # 根元件
│   ├── app.config.ts               # 應用程式設定
│   └── app.routes.ts               # 路由設定
├── assets/
│   ├── home/                       # 首頁圖片
│   ├── scss/                       # 共用 SCSS
│   └── styles.scss                 # 全域樣式
├── environments/                  # 環境設定
└── main.ts                         # 瀏覽器進入點
```

## 可用指令

| 指令 | 用途 |
| --- | --- |
| `npm start` | 啟動 Angular 開發伺服器 |
| `npm run build` | 建立正式環境版本 |
| `npm run watch` | 以開發模式持續監看並建置 |
| `npm test` | 執行單元測試 |
| `npm run preview` | 在本機預覽 Cloudflare 部署版本 |
| `npm run deploy` | 使用 Wrangler 部署目前的 browser build |

## 相關文件

- [Angular 官方文件](https://angular.dev/)
- [PrimeNG 官方文件](https://primeng.org/)
- [Tailwind CSS 官方文件](https://tailwindcss.com/)
- [Cloudflare Wrangler 文件](https://developers.cloudflare.com/workers/wrangler/)
