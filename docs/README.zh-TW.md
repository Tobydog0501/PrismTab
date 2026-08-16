# PrismTab

**PrismTab** 是一款高度可自訂的 Google Chrome **新分頁**擴充功能，主打純新桌面體驗。具備液態玻璃（Liquid Glass）美學、自由拖曳小工具、智慧搜尋、書籤導航列、Markdown 備忘錄、無限 HTML/CSS/JS 自訂卡片、快捷鍵，以及 Chrome 同步。

> **狀態：** Beta（功能與設計持續調整中）  
> **Manifest：** V3 · **預設主題：** 背景白 (`#FFFFFF`) · 文字黑 (`#000000`)


| Language | File |
|----------|------|
| English | [README.md](../README.md) |
| 繁體中文 | [README.zh-TW.md](./README.zh-TW.md) |
| 简体中文 | [README.zh-CN.md](./README.zh-CN.md) |
| 日本語 | [README.ja.md](./README.ja.md) |
| 한국어 | [README.ko.md](./README.ko.md) |
| Deutsch | [README.de.md](./README.de.md) |
| Français | [README.fr.md](./README.fr.md) |
| Español | [README.es.md](./README.es.md) |


---

## 目錄

1. [功能特色](#功能特色)
2. [安裝方式](#安裝方式)
3. [專案結構](#專案結構)
4. [設定總覽](#設定總覽)
5. [適配與二次開發](#適配與二次開發)
6. [注意事項](#注意事項)
7. [權限說明](#權限說明)
8. [授權](#授權)
9. [致謝](#致謝)

---

## 功能特色

### 外觀
- **語言（8 種）：** 繁體中文、簡體中文、English、日本語、한국어、Deutsch、Français、Español，以及依瀏覽器語系的**自動偵測**。
- **主題：** 可分別設定**背景色**與**文字色**（含 HEX 編輯）。
- **文字：** 系統字體與多種網路字體、粗細、大小。
- **背景：** 圖片上傳（大圖走 IndexedDB）、漸層生成（線性／徑向／圓錐）、模糊與填滿方式。

### 工具
- **時鐘與日期：** 可開關、拖曳、縮放。
- **搜尋列：** 多搜尋引擎、可於新分頁開啟結果、搜尋歷史清單。
- **導航器：** 自訂書籤連結、啟用開關、佈局重置。
- **備忘錄：** 位於導航器與連結清單之間，支援 Markdown 風格桌面便條。
- **更多配置（自訂卡片）：** 可無限新增，以 **HTML / CSS / JS** 撰寫。外框由系統套用液態玻璃；畫面在同一文件渲染以保持玻璃連續，JS 於 MV3 **sandbox** 執行以符合 CSP。

### 進階功能
- **快捷鍵：** 可自訂綁定（聚焦搜尋、切換元件、新增備忘／卡片等），列表可捲動。
- **設定同步：** 日常寫入以本地為主；可**推送／還原 Chrome Sync**；支援 JSON 匯出／匯入。
- **液態玻璃光學：** 景深模糊、基底透明度、邊框光澤、飽和度、噪點折射、圓角。
- **全域重置：** 恢復預設。

### 互動與佈局
- 以拖曳把手移動卡片；備忘錄／自訂卡片可縮放。
- 拖曳與縮放時提供磁性對齊與**等距間距**指示。
- **控制中心固定**不可拖動，避免誤移。
- 佈局與位置會持久化保存。

---

## 安裝方式

### 需求
- Google Chrome（或支援 Manifest V3 的 Chromium 瀏覽器）
- 可啟用「開發人員模式」以載入未封裝項目

### 步驟
1. 取得專案資料夾，確認**根目錄**有 `manifest.json`。
2. 開啟 `chrome://extensions`。
3. 右上角開啟**開發人員模式**。
4. 點選**載入未封裝項目**。
5. 選擇 **PrismTab 根目錄**（含 `manifest.json` 的那一層，不是 `src` 子資料夾）。
6. 開啟新分頁，應會進入 PrismTab。

### 更新程式碼後
1. 回到 `chrome://extensions`。
2. 在 PrismTab 卡片上按**重新載入**。
3. 重新整理已開啟的新分頁。

---

## 專案結構

採**模組化**目錄（多數檔案深度大於 2）。`manifest.json` **必須**置於根目錄。


```
PrismTab/
├── manifest.json                 # Chrome Extension Manifest V3 (must stay at root)
├── README.md                     # English (GitHub landing page)
├── docs/
│   ├── README.zh-TW.md           # Traditional Chinese
│   ├── README.zh-CN.md           # Simplified Chinese
│   ├── README.ja.md              # Japanese
│   ├── README.ko.md              # Korean
│   ├── README.de.md              # German
│   ├── README.fr.md              # French
│   └── README.es.md              # Spanish
├── assets/
│   └── icons/
│       ├── icon-16.png
│       ├── icon-48.png
│       ├── icon-128.png
│       └── favicon.ico
└── src/
    ├── newtab/
    │   ├── newtab.html           # New Tab UI
    │   └── newtab.js             # Core logic, i18n, layout, widgets
    ├── options/
    │   ├── options.html          # Options page
    │   └── options.js
    ├── studio/
    │   └── studio.html           # Color / advanced palette companion
    └── shared/
        ├── styles.css            # Liquid glass design system
        ├── initial-config.json   # Default configuration seed
        ├── storage/
        │   └── indexeddb.js      # Background image Blob storage
        └── sandbox/
            └── sandbox.html      # CSP-safe sandbox for custom card JS
```


### 模組職責
| 路徑 | 說明 |
|------|------|
| `src/newtab/` | 新分頁主畫面與控制中心 |
| `src/options/` | 獨立選項頁 |
| `src/shared/styles.css` | 設計系統、液態玻璃、亮色主題 |
| `src/shared/storage/indexeddb.js` | 背景圖 Blob 儲存 |
| `src/shared/sandbox/sandbox.html` | 自訂卡片 JS 沙箱 |
| `assets/icons/` | 圖示與 favicon（`rgb(214,214,214)` 極簡標誌） |

---

## 設定總覽

```
外觀
  ├─ 語言
  ├─ 主題（背景色 · 文字色）
  ├─ 文字（字體 · 粗細 · 大小）
  └─ 背景（上傳 · 生成 · 細節）
工具
  ├─ 時鐘與日期
  ├─ 搜尋列（預設引擎 · 搜尋設定）
  ├─ 導航器（啟用 · 備忘錄 · 連結清單 · 導航設定）
  └─ 更多配置（自訂卡片列表 · 新增）
進階功能
  ├─ 快捷鍵
  ├─ 設定同步（本地 · Chrome 雲端 · 匯出／匯入）
  ├─ 液態玻璃光學
  └─ 全域重置
```

**刻意不包含：** 對任意網站的內容腳本注入。本專案定位為**純新分頁桌面**。

---

## 適配與二次開發

### 一般使用者
- 於**外觀 → 語言**切換介面語言。
- 背景雜亂時可於**液態玻璃光學**降低模糊或調整透明度。
- 高亮度背景會自動套用 **light-theme** 對比適配。
- 頻繁拖動滑桿時資料寫入本地；需要跨裝置時再使用「立即同步」。

### 開發者
- 勿將檔案全部平鋪到根目錄；維持 `src/…` 模組結構。
- 新增文案請在 `newtab.js` 的 `TRANSLATIONS` **八種語言**都補上對應鍵。
- 擴充頁面禁止 `eval`／`new Function`；自訂 JS 走既有 sandbox。
- 佈局請走 `AppStorage` 與 `saveLayout()`；自訂卡片位置在 `custom_widgets`。
- 儲存寫入需 debounce，避免觸發 Chrome Sync 每分鐘寫入上限。

### 翻譯者
- UI 多處 `nowrap`，標籤宜短（例如「大小」而非「全域字體大小」）。
- 用語需與設定樹一致，避免切換語言後控件語意跑掉。

---

## 注意事項

1. Beta 版本設定格式可能變更，重大更新前請先匯出 JSON。
2. 佈局與多數設定在 `chrome.storage.local`；大圖在 IndexedDB；Sync 為明確推送／還原。
3. 核心功能不依賴外部分析服務；資料預設留在本機設定檔。
4. 使用者 JS 只在 sandbox 執行，不具備擴充功能特權。
5. 控制中心固定；桌面卡片可自由擺放。
6. 預設白底黑字；舊設定檔會保留使用者先前色彩直到重置。
7. 圖示為 `rgb(214,214,214)` 單色極簡新分頁符號。
8. 若新分頁未變更，請檢查是否有其他擴充同樣覆寫 New Tab，並確認本擴充已啟用。

---

## 權限說明

| 權限 | 用途 |
|------|------|
| `storage` | 設定、佈局、快捷鍵、自訂卡片 |
| `unlimitedStorage` | 大尺寸桌布與較大設定資料 |

核心新分頁體驗不需廣泛主機權限。

---

## 授權

Copyright © PrismTab 貢獻者。

本專案以 **Beta** 形式提供，供個人與學習使用。

**建議公開散布時採用：** [MIT License](https://opensource.org/licenses/MIT)。

軟體按「現況」提供，不附帶明示或默示保證。再散布時請保留本說明與出處資訊。

---

## 致謝

- 視覺方向：液態玻璃／鏡面材質語彙（獨立實作）
- 字體：系統 UI 與新分頁載入之網路字體
- 平台：Google Chrome Extension Manifest V3

---

**PrismTab** — *每一個新分頁，都是你的玻璃桌面。*
