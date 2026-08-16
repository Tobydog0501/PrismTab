# PrismTab

**PrismTab** ist eine stark anpassbare Google-Chrome-**Neuer-Tab**-Erweiterung mit Fokus auf ein reines Desktop-Erlebnis. Sie bietet Liquid-Glass-Ästhetik, frei verschiebbare Widgets, intelligente Suche, Lesezeichen-Dock, Markdown-Notizen, unbegrenzt viele HTML/CSS/JS-Karten, Tastenkürzel und Chrome-Sync.

> **Status:** Beta  
> **Manifest:** V3 · **Standarddesign:** Hintergrund `#FFFFFF` · Text `#000000`


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

## Inhaltsverzeichnis

1. [Funktionen](#funktionen)
2. [Installation](#installation)
3. [Struktur](#struktur)
4. [Einstellungen](#einstellungen)
5. [Anpassung & Entwicklung](#anpassung--entwicklung)
6. [Hinweise](#hinweise)
7. [Berechtigungen](#berechtigungen)
8. [Lizenz](#lizenz)

---

## Funktionen

### Erscheinungsbild
- **8 Sprachen + Automatische Erkennung**
- Hintergrund- und Textfarbe, Schriftart/-stärke/-größe
- Hintergrundbild (IndexedDB), Verläufe, Unschärfe

### Werkzeuge
- Uhr, Suchleiste (mehrere Engines, Verlauf, in neuem Tab öffnen)
- Navigator, Notizen
- **Benutzerdefinierte Karten** (HTML/CSS/JS; Glass-Rahmen vom System; JS in der Sandbox)

### Erweitert
- Tastenkürzel, Chrome-Sync Push/Restore, JSON Import/Export
- Liquid-Glass-Optik, globaler Reset
- Magnetische Hilfslinien & gleiche Abstände; Control Center ist fixiert

---

## Installation

1. Sicherstellen, dass `manifest.json` im **Stammverzeichnis** liegt  
2. `chrome://extensions` öffnen  
3. **Entwicklermodus** aktivieren  
4. **Entpackte Erweiterung laden**  
5. PrismTab-**Stammordner** wählen  
6. Neuen Tab öffnen  

Nach Codeänderungen die Erweiterung neu laden.

---

## Struktur


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


---

## Einstellungen

```
Erscheinungsbild → Sprache / Thema / Text / Hintergrund
Werkzeuge → Uhr / Suche / Navigator (inkl. Notizen) / Weitere Konfiguration
Erweitert → Tastenkürzel / Sync / Glas-Optik / Reset
```

**Keine** Content-Script-Injection in beliebige Websites (reines New-Tab-Desktop).

---

## Anpassung & Entwicklung

- Sprache unter «Erscheinungsbild → Sprache»
- Neue Strings in allen 8 `TRANSLATIONS`-Locales
- Kein `eval` auf Erweiterungsseiten; Karten-JS über Sandbox
- Storage-Schreibvorgänge entprellen (Debounce)

---

## Hinweise

- Beta: vor größeren Updates JSON exportieren
- Standard: weißer Hintergrund, schwarzer Text
- Icon-Farbe `rgb(214,214,214)`

---

## Berechtigungen

| Berechtigung | Zweck |
|--------------|--------|
| `storage` | Einstellungen & Layout |
| `unlimitedStorage` | Große Hintergründe |

---

## Lizenz

Copyright © PrismTab-Mitwirkende. Für öffentliche Verteilung wird die **MIT License** empfohlen. Software wird „wie besehen“ bereitgestellt.

**PrismTab** — *Jeder neue Tab wird zu Ihrem Glas-Desktop.*
