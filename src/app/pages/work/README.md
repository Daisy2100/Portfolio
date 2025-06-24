# 工作成果頁面

這個模組包含了展示工作經歷和專案成果的頁面。

## 頁面結構

```
src/app/pages/work/
├── work.component.ts           # 工作主頁面 - 顯示所有公司列表
├── work.component.html
├── work.component.scss
├── systex/                     # 精誠資訊專案頁面
│   ├── systex.component.ts
│   ├── systex.component.html
│   └── systex.component.scss
└── access/                     # ACCESS Taiwan 專案頁面
    ├── access.component.ts
    ├── access.component.html
    └── access.component.scss
```

## 功能特色

### 工作主頁面 (`/work`)
- 展示所有工作經歷的公司列表
- 每個公司卡片包含：
  - 公司名稱和工作期間
  - 職位和專案數量
  - 主要使用技術
  - 導航到詳細頁面的按鈕

### 精誠資訊頁面 (`/work/systex`)
- 詳細的專案時間軸
- 8個專案的完整資訊
- 包含專案角色、技術棧、工作內容等

### ACCESS Taiwan 頁面 (`/work/access`)
- 實習歷程時間軸
- 專案經驗詳述
- 學習成果與成長記錄

## 使用的技術

- **PrimeNG 元件**：
  - Card - 卡片展示
  - Timeline - 時間軸
  - Tag - 標籤
  - Button - 按鈕
  - AnimateOnScroll - 滾動動畫

- **Tailwind CSS**：
  - 響應式網格系統
  - 顏色和間距工具
  - Hover 效果

## 響應式設計

所有頁面都支援響應式設計：
- 桌面版：多欄位網格佈局
- 平板版：適當調整欄位數量
- 手機版：單欄佈局，優化觸控體驗

## 路由配置

```typescript
{ 
  path: 'work', 
  children: [
    { path: '', component: WorkComponent },
    { path: 'systex', component: SystexComponent },
    { path: 'access', component: AccessComponent }
  ]
}
```

## 導航整合

已整合到主導航選單中，位於「工作成果」項目下的子選單。
