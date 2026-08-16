# PrismTab

**PrismTab** est une extension Google Chrome de **Nouvel onglet** hautement personnalisable, centrée sur une expérience « bureau » pure. Elle propose une esthétique liquid glass, des widgets déplaçables, une recherche intelligente, un dock de favoris, des notes Markdown, des cartes HTML/CSS/JS illimitées, des raccourcis clavier et la synchronisation Chrome.

> **Statut :** Beta  
> **Manifest :** V3 · **Thème par défaut :** fond `#FFFFFF` · texte `#000000`


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

## Sommaire

1. [Fonctionnalités](#fonctionnalités)
2. [Installation](#installation)
3. [Structure](#structure)
4. [Réglages](#réglages)
5. [Adaptation & développement](#adaptation--développement)
6. [Notes](#notes)
7. [Autorisations](#autorisations)
8. [Licence](#licence)

---

## Fonctionnalités

### Apparence
- **8 langues + détection automatique**
- Couleurs de fond et de texte, police / graisse / taille
- Image de fond (IndexedDB), dégradés, flou

### Outils
- Horloge, barre de recherche (plusieurs moteurs, historique, ouverture nouvel onglet)
- Navigateur (liens), mémos
- **Cartes personnalisées** (HTML/CSS/JS ; chrome glass système ; JS en sandbox)

### Avancé
- Raccourcis, Chrome Sync push/restauration, import/export JSON
- Optique liquid glass, réinitialisation globale
- Guides d’alignement et d’écart égal ; centre de contrôle fixe

---

## Installation

1. Vérifier `manifest.json` à la **racine**  
2. Ouvrir `chrome://extensions`  
3. Activer le **mode développeur**  
4. **Charger l’extension non empaquetée**  
5. Sélectionner le dossier **racine** PrismTab  
6. Ouvrir un nouvel onglet  

Recharger l’extension après modification du code.

---

## Structure


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

## Réglages

```
Apparence → Langue / Thème / Texte / Arrière-plan
Outils → Horloge / Recherche / Navigateur (mémos) / Configuration avancée
Avancé → Raccourcis / Sync / Optique glass / Réinitialisation
```

**Pas** d’injection de scripts sur des sites tiers (Nouvel onglet uniquement).

---

## Adaptation & développement

- Langue : « Apparence → Langue »
- Mettre à jour les 8 locales de `TRANSLATIONS`
- Pas d’`eval` sur les pages d’extension ; JS des cartes via sandbox
- Écrire le stockage avec debounce

---

## Notes

- Beta : exporter le JSON avant une mise à jour majeure
- Défaut : fond blanc, texte noir
- Couleur d’icône `rgb(214,214,214)`

---

## Autorisations

| Autorisation | Usage |
|--------------|--------|
| `storage` | Réglages et disposition |
| `unlimitedStorage` | Grandes images de fond |

---

## Licence

Copyright © contributeurs PrismTab. **MIT License** recommandée pour la distribution publique. Logiciel fourni « en l’état ».

**PrismTab** — *Chaque nouvel onglet devient votre bureau de verre.*
