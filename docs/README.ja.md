# PrismTab

**PrismTab** は、純度の高いニュータブ・デスクトップ体験を目指す Google Chrome **新しいタブ**拡張機能です。リキッドガラス美学、ドラッグ可能なウィジェット、スマート検索、ブックマーク・ドック、Markdown メモ、無制限の HTML/CSS/JS カスタムカード、ショートカット、Chrome 同期に対応します。

> **ステータス：** Beta  
> **Manifest：** V3 · **既定テーマ：** 背景 `#FFFFFF` · 文字 `#000000`


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

## 目次

1. [機能](#機能)
2. [インストール](#インストール)
3. [構成](#構成)
4. [設定概要](#設定概要)
5. [適応・開発](#適応開発)
6. [注意事項](#注意事項)
7. [権限](#権限)
8. [ライセンス](#ライセンス)

---

## 機能

### 外観
- **8 言語 + 自動検出**（繁体字中国語、簡体字中国語、英語、日本語、韓国語、ドイツ語、フランス語、スペイン語）
- 背景色・文字色、フォント／太さ／サイズ
- 壁紙アップロード（IndexedDB）、グラデーション生成、ぼかし

### ツール
- 時計、検索バー（複数エンジン・履歴・新しいタブで開く）
- ナビゲーター（カスタムリンク）、メモ
- **カスタムカード**（HTML/CSS/JS、ガラス枠はシステム適用、JS は sandbox）

### 高度な機能
- ショートカット割り当て、Chrome Sync のプッシュ／復元、JSON 入出力
- リキッドガラス光学パラメータ、全体リセット
- 整列ガイドと等間隔インジケーター、コントロールセンターは固定

---

## インストール

1. ルートに `manifest.json` があることを確認
2. `chrome://extensions` を開く
3. **デベロッパーモード**をオン
4. **パッケージ化されていない拡張機能を読み込む**
5. PrismTab の**ルートフォルダ**を選択
6. 新しいタブを開く

コード変更後は拡張機能の「更新」から再読み込みしてください。

---

## 構成


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

## 設定概要

```
外観 → 言語 / テーマ / テキスト / 背景
ツール → 時計 / 検索 / ナビ（メモ含む）/ その他設定
高度 → ショートカット / 同期 / ガラス光学 / リセット
```

任意サイトへの注入機能は**含みません**（ニュータブ専用）。

---

## 適応・開発

- UI 言語は「外観 → 言語」で変更
- 文字列追加時は `TRANSLATIONS` の全 8 言語を更新
- 拡張ページでは `eval` 不可。カード JS は sandbox 経由
- ストレージ書き込みはデバウンスし、Sync の書き込み上限に注意

---

## 注意事項

- Beta のため設定互換が変わることがあります（事前に JSON エクスポートを推奨）
- 既定は白背景・黒文字
- アイコン色は `rgb(214,214,214)` のミニマルなニュータブ記号

---

## 権限

| 権限 | 用途 |
|------|------|
| `storage` | 設定・レイアウト |
| `unlimitedStorage` | 大きな壁紙など |

---

## ライセンス

Copyright © PrismTab contributors. 公開配布時は **MIT License** を推奨。ソフトウェアは現状有姿で提供されます。

**PrismTab** — *すべての新しいタブを、ガラスのデスクトップに。*
