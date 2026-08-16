# PrismTab

**PrismTab**은 순수한 새 탭 데스크톱 경험을 위한 Google Chrome **새 탭** 확장 프로그램입니다. 액체 유리 미학, 드래그 가능한 위젯, 스마트 검색, 북마크 독, Markdown 메모, 무제한 HTML/CSS/JS 사용자 카드, 단축키, Chrome 동기화를 제공합니다.

> **상태:** Beta  
> **Manifest:** V3 · **기본 테마:** 배경 `#FFFFFF` · 텍스트 `#000000`


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

## 목차

1. [기능](#기능)
2. [설치](#설치)
3. [구조](#구조)
4. [설정 개요](#설정-개요)
5. [적응 및 개발](#적응-및-개발)
6. [참고 사항](#참고-사항)
7. [권한](#권한)
8. [라이선스](#라이선스)

---

## 기능

### 모양
- **8개 언어 + 자동 감지**
- 배경색·텍스트 색, 글꼴/두께/크기
- 배경 이미지(IndexedDB), 그라데이션, 블러

### 도구
- 시계, 검색바(다중 엔진·기록·새 탭에서 열기)
- 내비게이터, 메모
- **사용자 카드**(HTML/CSS/JS, 유리 프레임은 시스템 적용, JS는 sandbox)

### 고급
- 단축키, Chrome Sync 푸시/복원, JSON 가져오기·내보내기
- 액체 유리 광학, 전체 재설정
- 정렬·등간격 가이드, 제어 센터 고정

---

## 설치

1. 루트에 `manifest.json` 확인  
2. `chrome://extensions`  
3. **개발자 모드** 사용  
4. **압축해제된 확장 프로그램을 로드합니다**  
5. PrismTab **루트 폴더** 선택  
6. 새 탭 열기  

코드 변경 후 확장 프로그램에서 새로고침하세요.

---

## 구조


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

## 설정 개요

```
모양 → 언어 / 테마 / 텍스트 / 배경
도구 → 시계 / 검색 / 내비(메모 포함) / 추가 구성
고급 → 단축키 / 동기화 / 유리 광학 / 재설정
```

임의 사이트 주입 기능은 **포함하지 않습니다**.

---

## 적응 및 개발

- 언어는 «모양 → 언어»에서 변경
- `TRANSLATIONS` 8개 로케일 모두 갱신
- 확장 페이지에서 `eval` 금지, 카드 JS는 sandbox
- 저장소 쓰기는 디바운스

---

## 참고 사항

- Beta: 업그레이드 전 JSON 내보내기 권장
- 기본 흰 배경·검은 글자
- 아이콘 색 `rgb(214,214,214)`

---

## 권한

| 권한 | 용도 |
|------|------|
| `storage` | 설정·레이아웃 |
| `unlimitedStorage` | 큰 배경 이미지 등 |

---

## 라이선스

Copyright © PrismTab contributors. 공개 배포 시 **MIT License** 권장. 소프트웨어는 있는 그대로 제공됩니다.

**PrismTab** — *모든 새 탭을 유리 데스크톱으로.*
