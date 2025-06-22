# Flash Animation Component

這是一個用於顯示閃爍動畫效果的 Angular 元件，採用絲滑的伸縮動畫效果。

## 功能特色

- 垂直線條的絲滑伸縮動畫效果
- 響應式設計，適應不同螢幕尺寸
- 無限循環動畫效果
- 平滑的 scaleY 變換和透明度變化
- 完全可自訂的參數，不寫死任何數值

## 使用方式

### 基本使用
```html
<app-flash-animation></app-flash-animation>
```

### 自訂參數
```html
<app-flash-animation
  containerHeight="120px"
  lineWidth="3px"
  lineColor="#00ff00"
  duration="2s"
  timingFunction="ease"
  lineHeight="10vw"
  maxHeight="100px"
  minHeight="50px">
</app-flash-animation>
```

## 可自訂屬性

| 屬性 | 類型 | 預設值 | 說明 |
|------|------|--------|------|
| `containerHeight` | string | '100px' | 容器高度 |
| `lineWidth` | string | '2px' | 線條寬度 |
| `lineColor` | string | 'white' | 線條顏色 |
| `duration` | string | '3.4s' | 動畫持續時間 |
| `timingFunction` | string | 'ease-in-out' | 動畫時間函數 |
| `lineHeight` | string | '7.2727272727vw' | 線條高度（響應式） |
| `maxHeight` | string | '80px' | 線條最大高度 |
| `minHeight` | string | '40px' | 線條最小高度 |

## 動畫效果

動畫使用 `scaleY` 變換來創造絲滑的伸縮效果：
- 從頂部開始伸展 (transform-origin: top center)
- 達到完整尺寸時居中 (transform-origin: center center)
- 從底部收縮消失 (transform-origin: bottom center)

## 技術特點

- 使用 CSS 自訂屬性 (CSS Variables) 實現靈活配置
- 不寫死任何參數，完全可重複使用
- 響應式設計，適應不同使用場景
- 現代 SCSS 語法，符合開發規範
