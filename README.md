# PrismTab

**PrismTab** is a highly customizable Google Chrome **New Tab** extension focused on a pure desktop experience. It features liquid-glass (glassmorphism) aesthetics, free-form draggable widgets, smart search, a bookmark dock, Markdown notes, unlimited custom HTML/CSS/JS cards, keyboard shortcuts, and Chrome Sync.

> **Status:** Beta — features and design are actively refined.  
> **Manifest:** V3 · **Default theme:** white background (`#FFFFFF`) · black text (`#000000`)


| Language | File |
|----------|------|
| English | [README.md](./README.md) |
| 繁體中文 | [docs/README.zh-TW.md](./docs/README.zh-TW.md) |
| 简体中文 | [docs/README.zh-CN.md](./docs/README.zh-CN.md) |
| 日本語 | [docs/README.ja.md](./docs/README.ja.md) |
| 한국어 | [docs/README.ko.md](./docs/README.ko.md) |
| Deutsch | [docs/README.de.md](./docs/README.de.md) |
| Français | [docs/README.fr.md](./docs/README.fr.md) |
| Español | [docs/README.es.md](./docs/README.es.md) |


---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Structure](#structure)
4. [Settings Overview](#settings-overview)
5. [Adaptation](#adaptation)
6. [Notes](#notes)
7. [Permissions](#permissions)
8. [License](#license)
9. [Credits](#credits)

---

## Features

### Appearance
- **Languages (8):** Traditional Chinese, Simplified Chinese, English, Japanese, Korean, German, French, Spanish, plus **Auto-detect** from the browser locale.
- **Theme colors:** Independent **background** and **text** color pickers (with editable HEX fields).
- **Typography:** System and web fonts (Inter, Outfit, Poppins, Noto Sans/Serif TC, JetBrains Mono, and more), font weight and size.
- **Background:** Image upload (stored in IndexedDB for large files), gradient generator (linear / radial / conic), blur and fit controls.

### Tools
- **Clock & date:** Toggleable, draggable, resizable clock card.
- **Search bar:** Multiple engines (Google, Bing, DuckDuckGo, Brave, Ecosia, Yahoo, Baidu, …), open results in a new tab, search history list.
- **Navigator (dock):** Custom bookmark links, enable/disable, layout reset.
- **Notes (memos):** Markdown-friendly desktop notes between the dock toggle and link list; create via UI or shortcut.
- **More configuration — custom cards:** Unlimited cards authored with **HTML / CSS / JS**. Card chrome uses the system liquid-glass style. Visual content is rendered in-document for continuous glass; JS runs in a Manifest V3 **sandbox** page to satisfy CSP.

### Advanced
- **Keyboard shortcuts:** Bindable actions (focus search, toggle widgets, add note/card, export, clear search, open control center, …) in a scrollable list.
- **Settings sync:** Local storage for everyday writes; **Chrome Sync** push/pull for cross-device settings. Export / import JSON.
- **Liquid glass optics:** Depth blur, base opacity, border gloss opacity, saturation boost, noise refraction, corner radius — all live-adjustable.
- **Global reset:** Restore defaults.

### Interaction & layout
- Drag cards by the handle; resize notes/custom cards from the corner.
- Magnetic alignment guides and **equidistant gap** indicators while dragging or resizing.
- Control Center is **fixed** (not draggable) for stable settings access.
- Default layout centers core widgets; positions persist across reloads.

---

## Installation

### Requirements
- Google Chrome (or a Chromium-based browser that supports Manifest V3 extensions)
- Permission to load unpacked extensions (Developer mode)

### Steps
1. Download or clone this project and ensure the folder contains **`manifest.json` at the root**.
2. Open Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked**.
5. Select the **PrismTab root directory** (the folder that contains `manifest.json`, not a nested `src` folder).
6. Open a new tab — PrismTab should replace the default New Tab page.

### Update after code changes
1. Return to `chrome://extensions`.
2. Click **Reload** on the PrismTab card.
3. Refresh any open New Tab pages.

### Optional: pack for distribution
Use “Pack extension” on `chrome://extensions` only when you intentionally distribute a `.crx`. For personal use, unpacked loading is enough.

---

## Structure

Project layout is **modular** (folder depth greater than 2 for most assets). `manifest.json` **must** remain at the repository root.


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


### Module roles
| Path | Role |
|------|------|
| `src/newtab/` | Primary New Tab experience and Control Center |
| `src/options/` | Standalone options page entry |
| `src/shared/styles.css` | Design tokens, liquid glass, light-theme adaptations |
| `src/shared/storage/indexeddb.js` | Background image persistence (Blob-safe) |
| `src/shared/sandbox/sandbox.html` | Sandboxed execution environment for user JS |
| `assets/icons/` | Extension icons & favicon (`rgb(214,214,214)` minimal mark) |

---

## Settings Overview

Control Center tabs mirror the product information architecture:

```
Appearance
  ├─ Language
  ├─ Theme (background color · text color)
  ├─ Text (font · weight · size)
  └─ Background (upload · generate · details)
Tools
  ├─ Clock & date
  ├─ Search bar (default engine · search settings)
  ├─ Navigator (enable · notes · link list · nav settings)
  └─ More configuration (custom card list · add card)
Advanced
  ├─ Keyboard shortcuts
  ├─ Settings sync (local · Chrome Sync cloud · export/import)
  ├─ Liquid glass optics
  └─ Global reset
```

**Not included (by design):** site injection into arbitrary web pages. PrismTab targets a **pure New Tab desktop**, not content-script injection across the web.

---

## Adaptation

### For end users
- Switch UI language under **Appearance → Language** (`auto` or a fixed locale).
- Tune glass strength under **Advanced → Liquid glass optics** if readability is low on busy wallpapers.
- On light backgrounds, the UI applies **light-theme** contrast adaptations automatically when background luminance is high.
- Prefer **local** storage for frequent slider tweaks; use **Sync now** when you want cloud copy (avoids Chrome Sync write-quota errors).

### For developers
- **Do not** flatten the tree: keep `manifest.json` at root and pages under `src/…`.
- New UI strings: add keys to **every** locale object inside `TRANSLATIONS` in `newtab.js` (`zh-TW`, `zh-CN`, `en`, `ja`, `ko`, `de`, `fr`, `es`).
- Custom card JS cannot use `eval` / `new Function` on the extension page (CSP). Use the sandbox channel already wired for cards.
- Persist layout via existing `AppStorage` + `saveLayout()`; custom card geometry is stored in `custom_widgets`.
- Debounce storage writes; never write to `chrome.storage.sync` on every pointer move.

### For translators
- Keep labels **short** where the UI uses single-line `nowrap` rows (e.g. “Size”, not “Global font size”).
- Match the settings tree terminology so language switches do not change meaning of controls.

### Browser & OS
- Optimized for desktop Chrome New Tab.
- `backdrop-filter` quality depends on GPU/compositor; very old hardware may show reduced blur.

---

## Notes

1. **Beta software** — expect breaking config changes between versions; export JSON before major upgrades.
2. **Storage:** Widget layout and most settings use `chrome.storage.local`. Large wallpapers use **IndexedDB**. Chrome Sync is opt-in via explicit push/pull.
3. **Privacy:** Data stays in the browser profile unless you enable Sync or export files. No analytics endpoints are required for core use.
4. **CSP & custom JS:** User scripts run only inside the extension sandbox page, not as privileged extension code.
5. **Control Center** is fixed on screen; widget cards remain freely movable.
6. **Default colors** are white background and black text; previously saved profiles keep their own colors until reset.
7. **Icons:** Minimal monochrome new-tab mark in `rgb(214, 214, 214)`.
8. If the New Tab page does not change, confirm another extension is not also overriding `chrome_url_overrides.newtab`, and that this extension is enabled.

---

## Permissions

| Permission | Reason |
|------------|--------|
| `storage` | Save settings, layout, hotkeys, custom cards |
| `unlimitedStorage` | Large wallpaper images and config payloads |

No broad host permissions are required for the core New Tab experience.

---

## License

Copyright © PrismTab contributors.

This project is provided for personal and educational use in **Beta** form.

**Suggested licensing for public distribution:** [MIT License](https://opensource.org/licenses/MIT).

```
MIT License (summary)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files, to deal in the software
without restriction, including without limitation the rights to use, copy,
modify, merge, publish, distribute, sublicense, and/or sell copies of the
software, subject to the inclusion of the copyright and permission notice.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

If you redistribute PrismTab, keep this README attribution and do not misrepresent the origin of the liquid-glass design system or sandbox architecture.

---

## Credits

- **UI direction:** Apple-inspired liquid glass / specular material language (independent implementation).
- **Fonts:** System UI stacks and Google Fonts families loaded by the New Tab page where applicable.
- **Platform:** Google Chrome Extension Manifest V3.

---

**PrismTab** — *Your glass desktop, every new tab.*
