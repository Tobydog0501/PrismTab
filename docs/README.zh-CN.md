# PrismTab

**PrismTab** 是一款高度可定制的 Google Chrome **新标签页**扩展，主打纯新标签桌面体验。提供液态玻璃（Liquid Glass）美学、自由拖拽小组件、智能搜索、书签导航栏、Markdown 备忘录、无限 HTML/CSS/JS 自定义卡片、快捷键以及 Chrome 同步。

> **状态：** Beta（功能与设计持续迭代）  
> **Manifest：** V3 · **默认主题：** 背景白 (`#FFFFFF`) · 文字黑 (`#000000`)


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

## 目录

1. [功能特性](#功能特性)
2. [安装方法](#安装方法)
3. [项目结构](#项目结构)
4. [设置总览](#设置总览)
5. [适配与二次开发](#适配与二次开发)
6. [注意事项](#注意事项)
7. [权限说明](#权限说明)
8. [许可证](#许可证)
9. [致谢](#致谢)

---

## 功能特性

### 外观
- **语言（8 种）：** 繁体中文、简体中文、English、日本語、한국어、Deutsch、Français、Español，以及按浏览器语言的**自动检测**。
- **主题：** 可分别设置**背景色**与**文字色**（含 HEX 编辑）。
- **文字：** 系统字体与多种网络字体、字重、字号。
- **背景：** 图片上传（大图走 IndexedDB）、渐变生成（线性／径向／圆锥）、模糊与填充方式。

### 工具
- **时钟与日期：** 可开关、拖拽、缩放。
- **搜索栏：** 多搜索引擎、可在新标签打开结果、搜索历史列表。
- **导航器：** 自定义书签链接、启用开关、布局重置。
- **备忘录：** 位于导航器与链接列表之间，支持 Markdown 风格桌面便笺。
- **更多配置（自定义卡片）：** 可无限新增，以 **HTML / CSS / JS** 编写。外框由系统套用液态玻璃；画面在同一文档渲染以保持玻璃连续，JS 在 MV3 **sandbox** 中执行以符合 CSP。

### 高级功能
- **快捷键：** 可自定义绑定（聚焦搜索、切换组件、新增备忘／卡片等），列表可滚动。
- **设置同步：** 日常写入以本地为主；可**推送／还原 Chrome Sync**；支持 JSON 导出／导入。
- **液态玻璃光学：** 景深模糊、基底透明度、边框光泽、饱和度、噪点折射、圆角。
- **全局重置：** 恢复默认。

### 交互与布局
- 以拖拽手柄移动卡片；备忘录／自定义卡片可缩放。
- 拖拽与缩放时提供磁性对齐与**等距间距**指示。
- **控制中心固定**不可拖动，避免误移。
- 布局与位置会持久化保存。

---

## 安装方法

### 需求
- Google Chrome（或支持 Manifest V3 的 Chromium 浏览器）
- 可启用「开发者模式」以加载已解压的扩展

### 步骤
1. 获取项目文件夹，确认**根目录**有 `manifest.json`。
2. 打开 `chrome://extensions`。
3. 右上角开启**开发者模式**。
4. 点击**加载已解压的扩展程序**。
5. 选择 **PrismTab 根目录**（含 `manifest.json` 的那一层，不是 `src` 子文件夹）。
6. 打开新标签页，应会进入 PrismTab。

### 更新代码后
1. 回到 `chrome://extensions`。
2. 在 PrismTab 卡片上点击**重新加载**。
3. 刷新已打开的新标签页。

---

## 项目结构

采用**模块化**目录（多数文件深度大于 2）。`manifest.json` **必须**放在根目录。


```
PrismTab/
├── manifest.json                 # Chrome Extension Manifest V3（必须位于根目录）
├── README.md                     # English（GitHub 首页）
├── docs/
│   ├── README.zh-TW.md           # 繁体中文
│   ├── README.zh-CN.md           # 简体中文
│   ├── README.ja.md              # 日本語
│   ├── README.ko.md              # 한국어
│   ├── README.de.md              # Deutsch
│   ├── README.fr.md              # Français
│   └── README.es.md              # Español
├── assets/
│   └── icons/
│       ├── icon-16.png
│       ├── icon-48.png
│       ├── icon-128.png
│       └── favicon.ico
└── src/
    ├── newtab/
    │   ├── newtab.html           # 新标签页 UI
    │   └── newtab.js             # 核心逻辑、i18n、布局、组件
    ├── options/
    │   ├── options.html          # 选项页
    │   └── options.js
    ├── studio/
    │   └── studio.html           # 调色 / 进阶面板附属页
    └── shared/
        ├── styles.css            # 液态玻璃设计系统
        ├── initial-config.json   # 默认配置种子
        ├── storage/
        │   └── indexeddb.js      # 背景图 Blob 存储
        └── sandbox/
            └── sandbox.html      # 自定义卡片 JS 的 CSP 安全沙箱
```


### 模块职责
| 路径 | 说明 |
|------|------|
| `src/newtab/` | 新标签页主界面与控制中心 |
| `src/options/` | 独立选项页 |
| `src/shared/styles.css` | 设计系统、液态玻璃、亮色主题 |
| `src/shared/storage/indexeddb.js` | 背景图 Blob 存储 |
| `src/shared/sandbox/sandbox.html` | 自定义卡片 JS 沙箱 |
| `assets/icons/` | 图标与 favicon（`rgb(214,214,214)` 极简标志） |

---

## 设置总览

```
外观
  ├─ 语言
  ├─ 主题（背景色 · 文字色）
  ├─ 文字（字体 · 粗细 · 大小）
  └─ 背景（上传 · 生成 · 细节）
工具
  ├─ 时钟与日期
  ├─ 搜索栏（默认引擎 · 搜索设置）
  ├─ 导航器（启用 · 备忘录 · 链接列表 · 导航设置）
  └─ 更多配置（自定义卡片列表 · 新增）
高级功能
  ├─ 快捷键
  ├─ 设置同步（本地 · Chrome 云端 · 导出／导入）
  ├─ 液态玻璃光学
  └─ 全局重置
```

**刻意不包含：** 对任意网站的内容脚本注入。本项目定位为**纯新标签桌面**。

---

## 适配与二次开发

### 普通用户
- 在**外观 → 语言**切换界面语言。
- 背景杂乱时可在**液态玻璃光学**降低模糊或调整透明度。
- 高亮度背景会自动套用 **light-theme** 对比适配。
- 频繁拖动滑块时数据写入本地；需要跨设备时再使用「立即同步」。

### 开发者
- 勿将文件全部平铺到根目录；保持 `src/…` 模块结构。
- 新增文案请在 `newtab.js` 的 `TRANSLATIONS` **八种语言**都补上对应键。
- 扩展页面禁止 `eval`／`new Function`；自定义 JS 走既有 sandbox。
- 布局请走 `AppStorage` 与 `saveLayout()`；自定义卡片位置在 `custom_widgets`。
- 存储写入需 debounce，避免触发 Chrome Sync 每分钟写入上限。

### 翻译者
- UI 多处 `nowrap`，标签宜短（例如「大小」而非「全局字体大小」）。
- 用语需与设置树一致，避免切换语言后控件语义偏移。

---

## 注意事项

1. Beta 版本设置格式可能变更，重大更新前请先导出 JSON。
2. 布局与多数设置在 `chrome.storage.local`；大图在 IndexedDB；Sync 为明确推送／还原。
3. 核心功能不依赖外部分析服务；数据默认留在本机配置。
4. 用户 JS 只在 sandbox 执行，不具备扩展特权。
5. 控制中心固定；桌面卡片可自由摆放。
6. 默认白底黑字；旧配置文件会保留用户先前色彩直到重置。
7. 图标为 `rgb(214,214,214)` 单色极简新标签符号。
8. 若新标签页未变更，请检查是否有其他扩展同样覆盖 New Tab，并确认本扩展已启用。

---

## 权限说明

| 权限 | 用途 |
|------|------|
| `storage` | 设置、布局、快捷键、自定义卡片 |
| `unlimitedStorage` | 大尺寸壁纸与较大配置数据 |

核心新标签体验不需要广泛主机权限。

---

## 许可证

Copyright © PrismTab 贡献者。

本项目以 **Beta** 形式提供，供个人与学习使用。

**建议公开分发时采用：** [MIT License](https://opensource.org/licenses/MIT)。

软件按「现状」提供，不附带明示或暗示保证。再分发时请保留本说明与出处信息。

---

## 致谢

- 视觉方向：液态玻璃／镜面材质语汇（独立实现）
- 字体：系统 UI 与新标签页加载的网络字体
- 平台：Google Chrome Extension Manifest V3

---

**PrismTab** — *每一个新标签，都是你的玻璃桌面。*
