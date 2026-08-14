// ==========================================
// Liquid Glass New Tab — Core Extension Logic v6.0.0
// 100% User-Customized Architecture & Multi-Language
// Storage: chrome.storage.local (with localStorage fallback)
// IndexedDB (LiquidGlassDB): High-Res Wallpapers & Dynamic Blobs
// ==========================================

const TRANSLATIONS = {
  'zh-TW': {
    controlCenter: '控制中心',
    appearanceTheme: '外觀主題',
    wallpaperBg: '桌布背景',
    glassOptics: '玻璃光學',
    layoutWidgets: '版面小工具',
    searchEngine: '搜尋引擎',
    langSelect: '介面語言',
    autoDetect: '自動偵測 (Auto)',
    secLanguage: '多國語言支援',
    secColors: '色彩與主題工坊',
    secTypography: '文字排版與字體',
    secCustomUpload: '自訂圖片上傳',
    secGrad: '自訂漸層桌布生成器',
    secWpOptics: '背景光影與景深',
    secOptics: '液態玻璃核心光學屬性',
    secWidgetManage: '小工具管理',
    secDragLayout: '自由拖曳與佈局控制',
    secDock: '自訂快捷連結 (Dock)',
    secBackup: '自訂配置備份與匯出',
    secResetAll: '全域重置',
    secSearchEngine: '預設搜尋引擎選擇',
    chooseEngine: '選擇預設搜尋引擎',
    secSearchExp: '搜尋體驗設定',
    secCustomEngine: '自訂搜尋引擎設定',
    customEngineNameLbl: '自訂引擎名稱',
    customEngineNamePh: '例如：Kagi Search',
    customEngineUrlLbl: '搜尋 URL 範本 (以 %s 代表關鍵字)',
    saveCustomEngine: '儲存自訂搜尋引擎',
    searchNewtab: '在新分頁開啟搜尋結果',
    searchHistory: '啟用搜尋歷史記錄清單',
    autoContrast: '智慧雙向色彩自動調節',
    autoContrastSub: '載入桌布時自動計算明度，智慧同步背景色、主題色與文字對比色',
    classicPalettes: '經典色彩主題',
    openStudio: '開啟進階調色盤與 HEX 自訂',
    sysFont: '全域系統字體',
    fontWeight: '字體粗細',
    fontSize: '全域字體大小',
    dropzoneText: '點擊或拖放圖片至此處',
    dropzoneSub: '支援高解析度圖檔，自動儲存至本機 IndexedDB',
    clearWp: '清除圖片桌布',
    gradType: '漸層類型',
    gradStart: '起始色',
    gradEnd: '終止色',
    gradAngle: '漸層角度',
    applyGrad: '套用自訂漸層',
    wpOverlay: '背景遮罩濃度',
    wpBlur: '背景景深模糊',
    glassBlur: '毛玻璃景深模糊',
    glassOpacity: '玻璃基底透明度',
    borderOpacity: '邊框光澤不透明度',
    saturate: '色彩飽和度提升',
    displacement: 'SVG 噪點折射',
    borderRadius: '圓角半徑',
    widgetHub: '開啟小工具庫',
    freeDrag: '開啟自由拖曳與座標微調',
    mouseHighlight: '滑鼠游標光澤反射效果',
    resetLayout: '重置為預設置中佈局',
    resetLayoutBtn: '重置佈局',
    dockLinks: '自訂快捷連結 (Dock)',
    addLink: '+ 新增連結',
    resetDock: '恢復預設連結',
    exportConfig: '匯出設定 JSON',
    importConfig: '匯入設定 JSON',
    resetAll: '重置所有設定為預設值',
    searchPlaceholder: '搜尋或輸入網址...',
    clockTitle: '時鐘與精緻日期',
    clockDesc: '精緻時間顯示，支援全域多國語言',
    searchTitle: 'Spotlight 搜尋與歷史記錄',
    searchDesc: '支援多搜尋引擎、智慧預測與歷史關鍵字自動回顯',
    notesTitle: '液態備忘錄',
    notesDesc: '隨時在桌面上自由記錄想法與 Markdown 清單',
    widgetHubTitle: '小工具庫',
    toggleDisplay: '切換顯示',
    addNote: '+ 新增備忘',
    done: '完成',
    edit: '編輯',
    preview: '預覽',
    alignCenter: '置中',
    studioTitle: '色彩工坊',
    studioPalettes: '精選調色系列',
    studioCustom: '自訂色彩微調',
    accentColor: '主題色',
    textColor: '文字色',
    bgColor: '背景色',
    hue: '色相',
    hexCode: 'HEX 色碼',
    doneStudio: '完成設定',
    dockModalAdd: '新增快捷連結',
    dockModalEdit: '編輯快捷連結',
    dockInputTitle: '標題名稱',
    dockInputTitlePh: '例如：GitHub',
    dockInputUrl: '網址連結',
    dockInputIcon: '圖示縮寫 (1-3字)',
    dockInputIconPh: '例如：GH',
    saveDockItem: '儲存連結',
    cancel: '取消',
    historyTitle: '歷史搜尋紀錄',
    clearAllHistory: '清除全部',
    clearSearchTooltip: '清空輸入',
    dropzoneLoadedBg: '已載入自訂背景桌布',
    dropzoneLoadedGrad: '已套用自訂漸層桌布',
    dropzoneChangeHint: '點擊或拖放可更換為自訂圖片',
    dropzoneSavedHint: '高解析度圖檔已儲存',
    noteDefaultContent: '# 待辦事項\n- [ ] 新增事項',
    notePlaceholder: '輸入 Markdown 備忘 (支援 # 標題、- [ ] 清單、**粗體**、代碼...)...',
    noteDragHandle: '按住拖曳備忘錄',
    resetConfirm: '確定要重置所有設定為原廠預設值嗎？',
    importFailed: '匯入設定失敗：檔案格式不正確',
  },
  'zh-CN': {
    controlCenter: '控制中心',
    appearanceTheme: '外观主题',
    wallpaperBg: '壁纸背景',
    glassOptics: '玻璃光学',
    layoutWidgets: '版面小组件',
    searchEngine: '搜索引擎',
    langSelect: '界面语言',
    autoDetect: '自动检测 (Auto)',
    secLanguage: '多语言支持',
    secColors: '色彩与主题工坊',
    secTypography: '文字排版与字体',
    secCustomUpload: '自定义图片上传',
    secGrad: '自定义渐变壁纸生成器',
    secWpOptics: '背景光影与景深',
    secOptics: '液态玻璃核心光学属性',
    secWidgetManage: '小组件管理',
    secDragLayout: '自由拖拽与布局控制',
    secDock: '自定义快捷链接 (Dock)',
    secBackup: '自定义配置备份与导出',
    secResetAll: '全局重置',
    secSearchEngine: '默认搜索引擎选择',
    chooseEngine: '选择默认搜索引擎',
    secSearchExp: '搜索体验设置',
    secCustomEngine: '自定义搜索引擎设置',
    customEngineNameLbl: '自定义引擎名称',
    customEngineNamePh: '例如：Kagi Search',
    customEngineUrlLbl: '搜索 URL 模板 (以 %s 代表关键字)',
    saveCustomEngine: '保存自定义搜索引擎',
    searchNewtab: '在新标签页打开搜索结果',
    searchHistory: '启用搜索历史记录清单',
    autoContrast: '智能双向色彩自动调节',
    autoContrastSub: '加载壁纸时自动计算明度，智能同步背景色、主题色与文字对比色',
    classicPalettes: '经典色彩主题',
    openStudio: '开启高级调色盘与 HEX 自定义',
    sysFont: '全局系统字体',
    fontWeight: '字体粗细',
    fontSize: '全局字体大小',
    dropzoneText: '点击或拖放图片至此处',
    dropzoneSub: '支持高分辨率图片，自动保存至本地 IndexedDB',
    clearWp: '清除图片壁纸',
    gradType: '渐变类型',
    gradStart: '起始色',
    gradEnd: '终止色',
    gradAngle: '渐变角度',
    applyGrad: '应用自定义渐变',
    wpOverlay: '背景遮罩浓度',
    wpBlur: '背景景深模糊',
    glassBlur: '毛玻璃景深模糊',
    glassOpacity: '玻璃基底透明度',
    borderOpacity: '边框光泽不透明度',
    saturate: '色彩饱和度提升',
    displacement: 'SVG 噪点折射',
    borderRadius: '圆角半径',
    widgetHub: '打开小组件库',
    freeDrag: '开启自由拖拽与坐标微调',
    mouseHighlight: '鼠标光泽反射效果',
    resetLayout: '重置为默认居中布局',
    resetLayoutBtn: '重置布局',
    dockLinks: '自定义快捷链接 (Dock)',
    addLink: '+ 添加链接',
    resetDock: '恢复默认链接',
    exportConfig: '导出配置 JSON',
    importConfig: '导入配置 JSON',
    resetAll: '重置所有设置为默认值',
    searchPlaceholder: '搜索或输入网址...',
    clockTitle: '时钟与精致日期',
    clockDesc: '精致时间显示，支持全局多国语言',
    searchTitle: 'Spotlight 搜索与历史记录',
    searchDesc: '支持多搜索引擎、智能预测与历史关键字自动回显',
    notesTitle: '液态便签',
    notesDesc: '随时在桌面上自由记录想法与 Markdown 清单',
    widgetHubTitle: '小组件库',
    toggleDisplay: '切换显示',
    addNote: '+ 添加便签',
    done: '完成',
    edit: '编辑',
    preview: '预览',
    alignCenter: '居中',
    studioTitle: '色彩工坊',
    studioPalettes: '精选调色系列',
    studioCustom: '自定义色彩微调',
    accentColor: '主题色',
    textColor: '文字色',
    bgColor: '背景色',
    hue: '色相',
    hexCode: 'HEX 色码',
    doneStudio: '完成设置',
    dockModalAdd: '添加快捷链接',
    dockModalEdit: '编辑快捷链接',
    dockInputTitle: '标题名称',
    dockInputTitlePh: '例如：GitHub',
    dockInputUrl: '网址链接',
    dockInputIcon: '图标缩写 (1-3字)',
    dockInputIconPh: '例如：GH',
    saveDockItem: '保存链接',
    cancel: '取消',
    historyTitle: '历史搜索记录',
    clearAllHistory: '清除全部',
    clearSearchTooltip: '清空输入',
    dropzoneLoadedBg: '已加载自定义背景壁纸',
    dropzoneLoadedGrad: '已应用自定义渐变壁纸',
    dropzoneChangeHint: '点击或拖放可更换为自定义图片',
    dropzoneSavedHint: '高分辨率图片已保存',
    noteDefaultContent: '# 待办事项\n- [ ] 新增事项',
    notePlaceholder: '输入 Markdown 便签 (支持 # 标题、- [ ] 清单、**粗体**、代码...)...',
    noteDragHandle: '按住拖拽便签',
    resetConfirm: '确定要重置所有设置为出厂默认值吗？',
    importFailed: '导入配置失败：文件格式不正确',
  },
  en: {
    controlCenter: 'Control Center',
    appearanceTheme: 'Appearance',
    wallpaperBg: 'Wallpaper',
    glassOptics: 'Glass Optics',
    layoutWidgets: 'Widgets',
    searchEngine: 'Search Engine',
    langSelect: 'Language',
    autoDetect: 'Auto Detect (System)',
    secLanguage: 'Language & Region',
    secColors: 'Color & Theme Studio',
    secTypography: 'Typography & Fonts',
    secCustomUpload: 'Custom Wallpaper',
    secGrad: 'Gradient Wallpaper Generator',
    secWpOptics: 'Wallpaper Effects & Depth',
    secOptics: 'Liquid Glass Optics',
    secWidgetManage: 'Widget Management',
    secDragLayout: 'Free Drag & Coordinates',
    secDock: 'Custom Dock Shortcuts',
    secBackup: 'Configuration Backup & Export',
    secResetAll: 'Factory Reset',
    secSearchEngine: 'Default Search Engine',
    chooseEngine: 'Select Default Search Engine',
    secSearchExp: 'Search Experience',
    secCustomEngine: 'Custom Search Engine',
    customEngineNameLbl: 'Engine Name',
    customEngineNamePh: 'e.g. Kagi Search',
    customEngineUrlLbl: 'Search URL Template (%s for keyword)',
    saveCustomEngine: 'Save Custom Engine',
    searchNewtab: 'Open Results in New Tab',
    searchHistory: 'Enable Search History',
    autoContrast: 'Smart Dynamic Contrast',
    autoContrastSub: 'Automatically adjusts text and theme colors based on wallpaper brightness',
    classicPalettes: 'Curated Color Themes',
    openStudio: 'Open Advanced Color Studio & HEX',
    sysFont: 'Global Font Family',
    fontWeight: 'Font Weight',
    fontSize: 'Global Font Size',
    dropzoneText: 'Click or drop image here',
    dropzoneSub: 'Supports high-res files, stored in IndexedDB',
    clearWp: 'Clear Wallpaper',
    gradType: 'Gradient Type',
    gradStart: 'Start Color',
    gradEnd: 'End Color',
    gradAngle: 'Angle',
    applyGrad: 'Apply Custom Gradient',
    wpOverlay: 'Wallpaper Overlay',
    wpBlur: 'Wallpaper Blur',
    glassBlur: 'Glass Blur',
    glassOpacity: 'Base Opacity',
    borderOpacity: 'Border Opacity',
    saturate: 'Saturation Boost',
    displacement: 'SVG Refraction',
    borderRadius: 'Corner Radius',
    widgetHub: 'Open Widget Hub',
    freeDrag: 'Enable Free Dragging & Fine Tuning',
    mouseHighlight: 'Mouse Specular Glare',
    resetLayout: 'Reset to Centered Layout',
    resetLayoutBtn: 'Reset Layout',
    dockLinks: 'Custom Dock Links',
    addLink: '+ Add Link',
    resetDock: 'Reset Default Links',
    exportConfig: 'Export Config JSON',
    importConfig: 'Import Config JSON',
    resetAll: 'Reset All Settings to Defaults',
    searchPlaceholder: 'Search or type URL...',
    clockTitle: 'Clock & Formatted Date',
    clockDesc: 'Precise time display with multi-language calendar support',
    searchTitle: 'Spotlight Search & History',
    searchDesc: 'Multi-engine search with suggestions and quick history recall',
    notesTitle: 'Liquid Notes',
    notesDesc: 'Draggable desktop notes with Markdown checklist support',
    widgetHubTitle: 'Widget Hub',
    toggleDisplay: 'Toggle',
    addNote: '+ Add Note',
    done: 'Done',
    edit: 'Edit',
    preview: 'Preview',
    alignCenter: 'Center',
    studioTitle: 'Color Studio',
    studioPalettes: 'Curated Palettes',
    studioCustom: 'Custom Color Tuning',
    accentColor: 'Accent Color',
    textColor: 'Text Color',
    bgColor: 'Background',
    hue: 'Hue',
    hexCode: 'HEX Code',
    doneStudio: 'Apply & Close',
    dockModalAdd: 'Add Shortcut',
    dockModalEdit: 'Edit Shortcut',
    dockInputTitle: 'Title',
    dockInputTitlePh: 'e.g. GitHub',
    dockInputUrl: 'URL',
    dockInputIcon: 'Icon (1-3 chars)',
    dockInputIconPh: 'e.g. GH',
    saveDockItem: 'Save Link',
    cancel: 'Cancel',
    historyTitle: 'Recent Searches',
    clearAllHistory: 'Clear All',
    clearSearchTooltip: 'Clear input',
    dropzoneLoadedBg: 'Custom Wallpaper Loaded',
    dropzoneLoadedGrad: 'Custom Gradient Applied',
    dropzoneChangeHint: 'Click or drop to replace image',
    dropzoneSavedHint: 'High-res image saved locally',
    noteDefaultContent: '# Tasks\n- [ ] New item',
    notePlaceholder: 'Write Markdown notes (supports # headings, - [ ] checklist, **bold**, code...)...',
    noteDragHandle: 'Hold to drag note',
    resetConfirm: 'Are you sure you want to reset all settings to defaults?',
    importFailed: 'Import failed: Invalid file format',
  },
  ja: {
    controlCenter: 'コントロールセンター',
    appearanceTheme: '外観とテーマ',
    wallpaperBg: '壁紙',
    glassOptics: 'ガラス光学',
    layoutWidgets: 'ウィジェット',
    searchEngine: '検索エンジン',
    langSelect: '表示言語',
    autoDetect: '自動検出 (Auto)',
    secLanguage: '多言語・地域設定',
    secColors: 'カラー＆テーマ工房',
    secTypography: 'タイポグラフィとフォント',
    secCustomUpload: '壁紙画像のアップロード',
    secGrad: 'グラデーション壁紙生成',
    secWpOptics: '背景効果と景深',
    secOptics: '液状ガラス光学プロパティ',
    secWidgetManage: 'ウィジェット管理',
    secDragLayout: '自由配置・レイアウト',
    secDock: 'Dock ショートカット',
    secBackup: '設定のバックアップとエクスポート',
    secResetAll: '初期化リセット',
    secSearchEngine: 'デフォルト検索エンジン',
    chooseEngine: '検索エンジンの選択',
    secSearchExp: '検索オプション',
    secCustomEngine: 'カスタム検索エンジン設定',
    customEngineNameLbl: '検索エンジン名',
    customEngineNamePh: '例：Kagi Search',
    customEngineUrlLbl: '検索 URL テンプレート (%s がキーワード)',
    saveCustomEngine: 'カスタムエンジンを保存',
    searchNewtab: '新しいタブで結果を開く',
    searchHistory: '検索履歴を有効化',
    autoContrast: 'スマートコントラスト自動調整',
    autoContrastSub: '壁紙の明暗に合わせて文字色とテーマを自動調整',
    classicPalettes: 'クラシックパレット',
    openStudio: 'カラーカスタマイズを開く',
    sysFont: 'システムフォント',
    fontWeight: 'フォントの太さ',
    fontSize: 'フォントサイズ',
    dropzoneText: '画像をドラッグ＆ドロップ',
    dropzoneSub: '高解像度画像をローカル IndexedDB に保存',
    clearWp: '壁紙をクリア',
    gradType: 'グラデーションの種類',
    gradStart: '開始色',
    gradEnd: '終了色',
    gradAngle: '角度',
    applyGrad: 'グラデーションを適用',
    wpOverlay: 'オーバーレイ濃度',
    wpBlur: '壁紙のぼかし',
    glassBlur: 'ガラスのぼかし',
    glassOpacity: '透明度',
    borderOpacity: '境界線不透明度',
    saturate: '彩度ブースト',
    displacement: '屈折強度',
    borderRadius: '角丸半径',
    widgetHub: 'ウィジェットハブを開く',
    freeDrag: '自由配置と微調整を有効化',
    mouseHighlight: 'マウス光沢エフェクト',
    resetLayout: 'レイアウトを中央揃えにリセット',
    resetLayoutBtn: '配置リセット',
    dockLinks: 'Dock ショートカット',
    addLink: '+ リンクを追加',
    resetDock: 'デフォルトに戻す',
    exportConfig: '設定をエクスポート',
    importConfig: '設定をインポート',
    resetAll: 'すべての設定を初期化',
    searchPlaceholder: '検索またはURLを入力...',
    clockTitle: '時計と日付',
    clockDesc: '美しい時刻表示と多言語対応カレンダー',
    searchTitle: 'Spotlight 検索と履歴',
    searchDesc: '複数検索エンジンのクイック切り替え',
    notesTitle: '付箋メモ',
    notesDesc: 'ドラッグ可能な Markdown メモ帳',
    widgetHubTitle: 'ウィジェットハブ',
    toggleDisplay: '切り替え',
    addNote: '+ メモを追加',
    done: '完了',
    edit: '編集',
    preview: 'プレビュー',
    alignCenter: '中央揃え',
    studioTitle: 'カラー工房',
    studioPalettes: '厳選パレット',
    studioCustom: 'カスタムカラー微調整',
    accentColor: 'アクセント色',
    textColor: '文字色',
    bgColor: '背景色',
    hue: '色相',
    hexCode: 'HEXコード',
    doneStudio: '適用して閉じる',
    dockModalAdd: 'ショートカットを追加',
    dockModalEdit: 'ショートカットを編集',
    dockInputTitle: 'タイトル',
    dockInputTitlePh: '例：GitHub',
    dockInputUrl: 'URL',
    dockInputIcon: 'アイコン略称 (1-3文字)',
    dockInputIconPh: '例：GH',
    saveDockItem: 'リンクを保存',
    cancel: 'キャンセル',
    historyTitle: '最近の検索履歴',
    clearAllHistory: 'すべて削除',
    clearSearchTooltip: '入力をクリア',
    dropzoneLoadedBg: '壁紙が適用されました',
    dropzoneLoadedGrad: 'グラデーションが適用されました',
    dropzoneChangeHint: 'クリックまたはドロップで画像を変更',
    dropzoneSavedHint: '高解像度画像が保存されました',
    noteDefaultContent: '# タスク\n- [ ] 新規タスク',
    notePlaceholder: 'Markdown メモを入力 (# 見出し, - [ ] チェックリスト, **太字**, コード...)...',
    noteDragHandle: 'ドラッグしてメモを移動',
    resetConfirm: 'すべての設定を初期状態にリセットしますか？',
    importFailed: 'インポートに失敗しました：無効なファイル形式です',
  },
  ko: {
    controlCenter: '제어 센터',
    appearanceTheme: '모양 및 테마',
    wallpaperBg: '배경화면',
    glassOptics: '유리 광학',
    layoutWidgets: '위젯',
    searchEngine: '검색 엔진',
    langSelect: '표시 언어',
    autoDetect: '자동 감지 (Auto)',
    secLanguage: '다국어 및 언어 설정',
    secColors: '색상 및 테마 스튜디오',
    secTypography: '서체 및 글꼴',
    secCustomUpload: '사용자 지정 배경화면',
    secGrad: '그라디언트 생성기',
    secWpOptics: '배경 효과 및 심도',
    secOptics: '액체 유리 광학 속성',
    secWidgetManage: '위젯 관리',
    secDragLayout: '자유 드래그 및 레이아웃',
    secDock: '독 (Dock) 바로가기',
    secBackup: '구성 백업 및 내보내기',
    secResetAll: '전체 초기화',
    secSearchEngine: '기본 검색 엔진',
    chooseEngine: '기본 검색 엔진 선택',
    secSearchExp: '검색 환경 설정',
    secCustomEngine: '사용자 지정 검색 엔진 설정',
    customEngineNameLbl: '엔진 이름',
    customEngineNamePh: '예: Kagi Search',
    customEngineUrlLbl: '검색 URL 템플릿 (%s에 검색어 대입)',
    saveCustomEngine: '사용자 지정 엔진 저장',
    searchNewtab: '새 탭에서 검색 결과 열기',
    searchHistory: '검색 기록 목록 활성화',
    autoContrast: '스마트 대비 자동 조정',
    autoContrastSub: '배경화면 밝기를 감지하여 텍스트 및 테마 대비를 자동 최적화합니다',
    classicPalettes: '클래식 색상 테마',
    openStudio: '고급 색상 스튜디오 및 HEX 열기',
    sysFont: '글로벌 시스템 글꼴',
    fontWeight: '글꼴 굵기',
    fontSize: '글꼴 크기',
    dropzoneText: '이미지를 클릭하거나 드래그하세요',
    dropzoneSub: '고해상도 이미지를 로컬 IndexedDB에 안전하게 저장합니다',
    clearWp: '배경화면 제거',
    gradType: '그라디언트 유형',
    gradStart: '시작 색상',
    gradEnd: '끝 색상',
    gradAngle: '각도',
    applyGrad: '그라디언트 적용',
    wpOverlay: '배경 오버레이 농도',
    wpBlur: '배경 흐림 효과',
    glassBlur: '유리 흐림 효과',
    glassOpacity: '유리 투명도',
    borderOpacity: '테두리 광택 불투명도',
    saturate: '채도 향상',
    displacement: 'SVG 굴절 강도',
    borderRadius: '모서리 둥글기',
    widgetHub: '위젯 허브 열기',
    freeDrag: '자유 드래그 및 위치 조정 활성화',
    mouseHighlight: '마우스 광택 반사 효과',
    resetLayout: '기본 중앙 정렬로 초기화',
    resetLayoutBtn: '배치 초기화',
    dockLinks: '독 (Dock) 바로가기',
    addLink: '+ 바로가기 추가',
    resetDock: '기본 링크로 복원',
    exportConfig: '설정 JSON 내보내기',
    importConfig: '설정 JSON 가져오기',
    resetAll: '모든 설정을 기본값으로 초기화',
    searchPlaceholder: '검색어를 입력하거나 URL을 입력하세요...',
    clockTitle: '시계 및 정밀 날짜',
    clockDesc: '다국어 지원 정밀 시계 및 날짜 표시',
    searchTitle: '스포트라이트 검색 및 기록',
    searchDesc: '다중 검색 엔진 및 최근 검색 기록 자동 회상',
    notesTitle: '액체 메모장',
    notesDesc: '바탕화면에서 Markdown 체크리스트와 아이디어를 자유롭게 메모하세요',
    widgetHubTitle: '위젯 허브',
    toggleDisplay: '표시 전환',
    addNote: '+ 메모 추가',
    done: '완료',
    edit: '편집',
    preview: '미리보기',
    alignCenter: '가운데 정렬',
    studioTitle: '색상 스튜디오',
    studioPalettes: '엄선된 팔레트',
    studioCustom: '사용자 지정 색상 튜닝',
    accentColor: '테마 색상',
    textColor: '텍스트 색상',
    bgColor: '배경 색상',
    hue: '색조 (Hue)',
    hexCode: 'HEX 코드',
    doneStudio: '설정 완료',
    dockModalAdd: '바로가기 추가',
    dockModalEdit: '바로가기 편집',
    dockInputTitle: '제목',
    dockInputTitlePh: '예: GitHub',
    dockInputUrl: '웹 주소 (URL)',
    dockInputIcon: '아이콘 약어 (1-3자)',
    dockInputIconPh: '예: GH',
    saveDockItem: '링크 저장',
    cancel: '취소',
    historyTitle: '최근 검색 기록',
    clearAllHistory: '모두 지우기',
    clearSearchTooltip: '입력 지우기',
    dropzoneLoadedBg: '사용자 지정 배경화면 적용됨',
    dropzoneLoadedGrad: '사용자 지정 그라디언트 적용됨',
    dropzoneChangeHint: '클릭 또는 드래그하여 이미지를 변경할 수 있습니다',
    dropzoneSavedHint: '고해상도 이미지가 저장되었습니다',
    noteDefaultContent: '# 할 일 목록\n- [ ] 새 항목 추가',
    notePlaceholder: 'Markdown 메모 입력 (# 제목, - [ ] 체크리스트, **굵게**, 코드 지원)...',
    noteDragHandle: '메모를 드래그하여 이동',
    resetConfirm: '모든 설정을 기본값으로 초기화하시겠습니까?',
    importFailed: '설정 가져오기 실패: 올바르지 않은 파일 형식입니다',
  },
  de: {
    controlCenter: 'Kontrollzentrum',
    appearanceTheme: 'Erscheinungsbild',
    wallpaperBg: 'Hintergrund',
    glassOptics: 'Glasoptik',
    layoutWidgets: 'Widgets',
    searchEngine: 'Suchmaschine',
    langSelect: 'Sprache',
    autoDetect: 'Automatisch (System)',
    secLanguage: 'Sprache & Region',
    secColors: 'Farb- & Themenstudio',
    secTypography: 'Typografie & Schriftarten',
    secCustomUpload: 'Hintergrundbild hochladen',
    secGrad: 'Farbverlauf-Generator',
    secWpOptics: 'Hintergrund-Optik & Tiefe',
    secOptics: 'Liquid Glass Eigenschaften',
    secWidgetManage: 'Widget-Verwaltung',
    secDragLayout: 'Freies Verschieben & Layout',
    secDock: 'Dock-Verknüpfungen',
    secBackup: 'Konfiguration & Export',
    secResetAll: 'Vollständiger Reset',
    secSearchEngine: 'Standardsuchmaschine',
    chooseEngine: 'Suchmaschine auswählen',
    secSearchExp: 'Sucherlebnis',
    secCustomEngine: 'Eigene Suchmaschine',
    customEngineNameLbl: 'Name der Suchmaschine',
    customEngineNamePh: 'z.B. Kagi Search',
    customEngineUrlLbl: 'Such-URL-Vorlage (%s als Platzhalter)',
    saveCustomEngine: 'Suchmaschine speichern',
    searchNewtab: 'Ergebnisse in neuem Tab öffnen',
    searchHistory: 'Suchverlauf aktivieren',
    autoContrast: 'Intelligente Kontrastanpassung',
    autoContrastSub: 'Passt Farben und Kontraste automatisch an die Helligkeit des Hintergrunds an',
    classicPalettes: 'Kuratierte Farbthemen',
    openStudio: 'Farbstudio & HEX-Anpassung öffnen',
    sysFont: 'Globale Schriftart',
    fontWeight: 'Schriftstärke',
    fontSize: 'Schriftgröße',
    dropzoneText: 'Bild hierher ziehen oder klicken',
    dropzoneSub: 'Hochauflösende Bilder werden lokal in IndexedDB gespeichert',
    clearWp: 'Hintergrundbild entfernen',
    gradType: 'Verlaufstyp',
    gradStart: 'Startfarbe',
    gradEnd: 'Endfarbe',
    gradAngle: 'Verlaufswinkel',
    applyGrad: 'Verlauf anwenden',
    wpOverlay: 'Hintergrundüberlagerung',
    wpBlur: 'Hintergrundunschärfe',
    glassBlur: 'Glasunschärfe',
    glassOpacity: 'Deckkraft',
    borderOpacity: 'Rahmen-Deckkraft',
    saturate: 'Farbsättigung',
    displacement: 'SVG-Lichtbrechung',
    borderRadius: 'Eckenradius',
    widgetHub: 'Widget-Hub öffnen',
    freeDrag: 'Freies Verschieben & Feinjustierung',
    mouseHighlight: 'Maus-Glanzreflexion',
    resetLayout: 'Auf Standardlayout zurücksetzen',
    resetLayoutBtn: 'Layout zurücksetzen',
    dockLinks: 'Dock-Verknüpfungen',
    addLink: '+ Link hinzufügen',
    resetDock: 'Standardlinks wiederherstellen',
    exportConfig: 'Einstellungen exportieren',
    importConfig: 'Einstellungen importieren',
    resetAll: 'Alle Einstellungen zurücksetzen',
    searchPlaceholder: 'Suchen oder URL eingeben...',
    clockTitle: 'Uhr & Formatiertes Datum',
    clockDesc: 'Präzise Zeitanzeige mit mehrsprachigem Kalender',
    searchTitle: 'Spotlight-Suche & Verlauf',
    searchDesc: 'Mehrere Suchmaschinen und schneller Verlaufsaufruf',
    notesTitle: 'Liquid Notizen',
    notesDesc: 'Notizen auf dem Desktop mit Markdown-Unterstützung',
    widgetHubTitle: 'Widget-Hub',
    toggleDisplay: 'Umschalten',
    addNote: '+ Notiz hinzufügen',
    done: 'Fertig',
    edit: 'Bearbeiten',
    preview: 'Vorschau',
    alignCenter: 'Zentrieren',
    studioTitle: 'Farbstudio',
    studioPalettes: 'Kuratierte Paletten',
    studioCustom: 'Eigene Farbfeinabstimmung',
    accentColor: 'Akzentfarbe',
    textColor: 'Textfarbe',
    bgColor: 'Hintergrund',
    hue: 'Farbton',
    hexCode: 'HEX-Code',
    doneStudio: 'Übernehmen & Schließen',
    dockModalAdd: 'Verknüpfung hinzufügen',
    dockModalEdit: 'Verknüpfung bearbeiten',
    dockInputTitle: 'Titel',
    dockInputTitlePh: 'z.B. GitHub',
    dockInputUrl: 'URL',
    dockInputIcon: 'Icon-Kürzel (1-3 Zeichen)',
    dockInputIconPh: 'z.B. GH',
    saveDockItem: 'Speichern',
    cancel: 'Abbrechen',
    historyTitle: 'Suchverlauf',
    clearAllHistory: 'Alle löschen',
    clearSearchTooltip: 'Eingabe löschen',
    dropzoneLoadedBg: 'Eigenes Hintergrundbild geladen',
    dropzoneLoadedGrad: 'Eigener Farbverlauf angewendet',
    dropzoneChangeHint: 'Klicken oder ziehen, um das Bild zu ändern',
    dropzoneSavedHint: 'Hochauflösendes Bild lokal gespeichert',
    noteDefaultContent: '# Aufgaben\n- [ ] Neue Aufgabe',
    notePlaceholder: 'Markdown-Notiz schreiben (unterstützt # Überschriften, - [ ] Checklisten, **fett**, Code...)...',
    noteDragHandle: 'Halten zum Ziehen der Notiz',
    resetConfirm: 'Möchten Sie wirklich alle Einstellungen auf die Standardwerte zurücksetzen?',
    importFailed: 'Import fehlgeschlagen: Ungültiges Dateiformat',
  },
  fr: {
    controlCenter: 'Centre de contrôle',
    appearanceTheme: 'Apparence',
    wallpaperBg: 'Fond d\'écran',
    glassOptics: 'Optique du verre',
    layoutWidgets: 'Widgets',
    searchEngine: 'Moteur de recherche',
    langSelect: 'Langue de l\'interface',
    autoDetect: 'Détection automatique (Auto)',
    secLanguage: 'Langue et région',
    secColors: 'Studio Couleurs & Thème',
    secTypography: 'Typographie et polices',
    secCustomUpload: 'Téléverser un fond d\'écran',
    secGrad: 'Générateur de dégradé',
    secWpOptics: 'Effets d\'arrière-plan et profondeur',
    secOptics: 'Propriétés optiques Liquid Glass',
    secWidgetManage: 'Gestion des widgets',
    secDragLayout: 'Déplacement libre et disposition',
    secDock: 'Raccourcis du Dock',
    secBackup: 'Sauvegarde et exportation',
    secResetAll: 'Réinitialisation globale',
    secSearchEngine: 'Moteur de recherche par défaut',
    chooseEngine: 'Choisir le moteur par défaut',
    secSearchExp: 'Expérience de recherche',
    secCustomEngine: 'Moteur personnalisé',
    customEngineNameLbl: 'Nom du moteur',
    customEngineNamePh: 'ex. Kagi Search',
    customEngineUrlLbl: 'Modèle d\'URL (%s pour la requête)',
    saveCustomEngine: 'Enregistrer le moteur',
    searchNewtab: 'Ouvrir les résultats dans un nouvel onglet',
    searchHistory: 'Activer l\'historique de recherche',
    autoContrast: 'Adaptation intelligente du contraste',
    autoContrastSub: 'Ajuste automatiquement les couleurs du texte et du thème selon la luminosité',
    classicPalettes: 'Thèmes de couleurs sélectionnés',
    openStudio: 'Ouvrir le Studio Couleurs & HEX',
    sysFont: 'Police du système',
    fontWeight: 'Graisse de police',
    fontSize: 'Taille de police',
    dropzoneText: 'Cliquez ou glissez une image ici',
    dropzoneSub: 'Images haute résolution enregistrées dans IndexedDB',
    clearWp: 'Effacer l\'image',
    gradType: 'Type de dégradé',
    gradStart: 'Couleur de début',
    gradEnd: 'Couleur de fin',
    gradAngle: 'Angle',
    applyGrad: 'Appliquer le dégradé',
    wpOverlay: 'Densité du voile',
    wpBlur: 'Flou d\'arrière-plan',
    glassBlur: 'Flou du verre',
    glassOpacity: 'Opacité de base',
    borderOpacity: 'Opacité de bordure',
    saturate: 'Saturation des couleurs',
    displacement: 'Réfraction SVG',
    borderRadius: 'Rayon des coins',
    widgetHub: 'Ouvrir le Hub de widgets',
    freeDrag: 'Activer le glisser-déplacer libre',
    mouseHighlight: 'Reflet spéculaire de la souris',
    resetLayout: 'Rétablir la disposition centrée',
    resetLayoutBtn: 'Réinitialiser',
    dockLinks: 'Raccourcis du Dock',
    addLink: '+ Ajouter un lien',
    resetDock: 'Rétablir les liens par défaut',
    exportConfig: 'Exporter la configuration',
    importConfig: 'Importer la configuration',
    resetAll: 'Réinitialiser tous les paramètres',
    searchPlaceholder: 'Rechercher ou saisir une URL...',
    clockTitle: 'Horloge et date détaillée',
    clockDesc: 'Affichage précis de l\'heure et calendrier multilingue',
    searchTitle: 'Recherche Spotlight et historique',
    searchDesc: 'Moteurs multiples et rappel rapide de l\'historique',
    notesTitle: 'Pense-bête liquide',
    notesDesc: 'Notes repositionnables sur le bureau avec support Markdown',
    widgetHubTitle: 'Hub de widgets',
    toggleDisplay: 'Basculer',
    addNote: '+ Ajouter une note',
    done: 'Terminé',
    edit: 'Modifier',
    preview: 'Aperçu',
    alignCenter: 'Centrer',
    studioTitle: 'Studio des Couleurs',
    studioPalettes: 'Palettes sélectionnées',
    studioCustom: 'Réglage personnalisé des couleurs',
    accentColor: 'Couleur d\'accent',
    textColor: 'Couleur du texte',
    bgColor: 'Couleur de fond',
    hue: 'Teinte',
    hexCode: 'Code HEX',
    doneStudio: 'Valider et fermer',
    dockModalAdd: 'Ajouter un raccourci',
    dockModalEdit: 'Modifier le raccourci',
    dockInputTitle: 'Titre',
    dockInputTitlePh: 'ex. GitHub',
    dockInputUrl: 'URL',
    dockInputIcon: 'Abréviation de l\'icône (1-3 car.)',
    dockInputIconPh: 'ex. GH',
    saveDockItem: 'Enregistrer',
    cancel: 'Annuler',
    historyTitle: 'Historique de recherche',
    clearAllHistory: 'Tout effacer',
    clearSearchTooltip: 'Effacer la saisie',
    dropzoneLoadedBg: 'Fond d\'écran personnalisé chargé',
    dropzoneLoadedGrad: 'Dégradé personnalisé appliqué',
    dropzoneChangeHint: 'Cliquez ou glissez pour remplacer l\'image',
    dropzoneSavedHint: 'Image haute résolution enregistrée',
    noteDefaultContent: '# Tâches\n- [ ] Nouvel élément',
    notePlaceholder: 'Écrire une note Markdown (titres #, listes - [ ], **gras**, code...)...',
    noteDragHandle: 'Maintenir pour déplacer la note',
    resetConfirm: 'Voulez-vous vraiment réinitialiser tous les paramètres aux valeurs par défaut ?',
    importFailed: 'Échec de l\'importation : format de fichier invalide',
  },
  es: {
    controlCenter: 'Centro de control',
    appearanceTheme: 'Apariencia',
    wallpaperBg: 'Fondo de pantalla',
    glassOptics: 'Óptica de cristal',
    layoutWidgets: 'Widgets',
    searchEngine: 'Motor de búsqueda',
    langSelect: 'Idioma de interfaz',
    autoDetect: 'Detección automática (Auto)',
    secLanguage: 'Idioma y región',
    secColors: 'Estudio de colores y tema',
    secTypography: 'Tipografía y fuentes',
    secCustomUpload: 'Subir fondo personalizado',
    secGrad: 'Generador de degradados',
    secWpOptics: 'Efectos de fondo y profundidad',
    secOptics: 'Óptica de cristal líquido',
    secWidgetManage: 'Gestión de widgets',
    secDragLayout: 'Arrastre libre y diseño',
    secDock: 'Accesos del Dock',
    secBackup: 'Copia de seguridad y exportación',
    secResetAll: 'Restablecimiento total',
    secSearchEngine: 'Motor de búsqueda predeterminado',
    chooseEngine: 'Elegir motor de búsqueda',
    secSearchExp: 'Experiencia de búsqueda',
    secCustomEngine: 'Motor personalizado',
    customEngineNameLbl: 'Nombre del motor',
    customEngineNamePh: 'ej. Kagi Search',
    customEngineUrlLbl: 'Plantilla de URL (%s para término)',
    saveCustomEngine: 'Guardar motor personalizado',
    searchNewtab: 'Abrir resultados en nueva pestaña',
    searchHistory: 'Activar historial de búsqueda',
    autoContrast: 'Adaptación inteligente de contraste',
    autoContrastSub: 'Ajusta automáticamente los colores de texto y tema según el brillo del fondo',
    classicPalettes: 'Temas de color seleccionados',
    openStudio: 'Abrir Estudio de Color y HEX',
    sysFont: 'Fuente del sistema',
    fontWeight: 'Grosor de fuente',
    fontSize: 'Tamaño de fuente',
    dropzoneText: 'Haz clic o arrastra una imagen aquí',
    dropzoneSub: 'Imágenes de alta resolución guardadas en IndexedDB',
    clearWp: 'Eliminar imagen',
    gradType: 'Tipo de degradado',
    gradStart: 'Color inicial',
    gradEnd: 'Color final',
    gradAngle: 'Ángulo',
    applyGrad: 'Aplicar degradado',
    wpOverlay: 'Opacidad de superposición',
    wpBlur: 'Desenfoque de fondo',
    glassBlur: 'Desenfoque de cristal',
    glassOpacity: 'Opacidad de base',
    borderOpacity: 'Opacidad de borde',
    saturate: 'Saturación de color',
    displacement: 'Refracción SVG',
    borderRadius: 'Radio de esquinas',
    widgetHub: 'Abrir Hub de widgets',
    freeDrag: 'Activar arrastre libre y ajuste fino',
    mouseHighlight: 'Brillo especular del ratón',
    resetLayout: 'Restablecer diseño centrado',
    resetLayoutBtn: 'Restablecer',
    dockLinks: 'Accesos del Dock',
    addLink: '+ Añadir enlace',
    resetDock: 'Restaurar predeterminados',
    exportConfig: 'Exportar configuración JSON',
    importConfig: 'Importar configuración JSON',
    resetAll: 'Restablecer todos los ajustes',
    searchPlaceholder: 'Buscar o escribir URL...',
    clockTitle: 'Reloj y fecha formateada',
    clockDesc: 'Visualización precisa de la hora y calendario multilingüe',
    searchTitle: 'Búsqueda Spotlight e historial',
    searchDesc: 'Motores múltiples y recuperación rápida del historial',
    notesTitle: 'Notas líquidas',
    notesDesc: 'Notas de escritorio reposicionables con soporte Markdown',
    widgetHubTitle: 'Hub de widgets',
    toggleDisplay: 'Alternar',
    addNote: '+ Añadir nota',
    done: 'Listo',
    edit: 'Editar',
    preview: 'Vista previa',
    alignCenter: 'Centrar',
    studioTitle: 'Estudio de Color',
    studioPalettes: 'Paletas seleccionadas',
    studioCustom: 'Ajuste personalizado de color',
    accentColor: 'Color de acento',
    textColor: 'Color de texto',
    bgColor: 'Color de fondo',
    hue: 'Tono',
    hexCode: 'Código HEX',
    doneStudio: 'Aplicar y cerrar',
    dockModalAdd: 'Añadir acceso directo',
    dockModalEdit: 'Editar acceso directo',
    dockInputTitle: 'Título',
    dockInputTitlePh: 'ej. GitHub',
    dockInputUrl: 'Enlace URL',
    dockInputIcon: 'Abreviatura (1-3 letras)',
    dockInputIconPh: 'ej. GH',
    saveDockItem: 'Guardar enlace',
    cancel: 'Cancelar',
    historyTitle: 'Búsquedas recientes',
    clearAllHistory: 'Borrar todo',
    clearSearchTooltip: 'Borrar texto',
    dropzoneLoadedBg: 'Fondo personalizado aplicado',
    dropzoneLoadedGrad: 'Degradado personalizado aplicado',
    dropzoneChangeHint: 'Haz clic o arrastra para cambiar la imagen',
    dropzoneSavedHint: 'Imagen de alta resolución guardada',
    noteDefaultContent: '# Tareas\n- [ ] Nueva tarea',
    notePlaceholder: 'Escribir nota en Markdown (títulos #, listas - [ ], **negrita**, código...)...',
    noteDragHandle: 'Mantén presionado para arrastrar la nota',
    resetConfirm: '¿Estás seguro de que deseas restablecer todos los ajustes a los valores predeterminados?',
    importFailed: 'Error de importación: formato de archivo no válido',
  },
};

const SEARCH_ENGINES = {
  google: (q) => `https://www.google.com/search?q=${encodeURIComponent(q)}`,
  bing: (q) => `https://www.bing.com/search?q=${encodeURIComponent(q)}`,
  duckduckgo: (q) => `https://duckduckgo.com/?q=${encodeURIComponent(q)}`,
  brave: (q) => `https://search.brave.com/search?q=${encodeURIComponent(q)}`,
  ecosia: (q) => `https://www.ecosia.org/search?q=${encodeURIComponent(q)}`,
  yahoo: (q) => `https://search.yahoo.com/search?p=${encodeURIComponent(q)}`,
  baidu: (q) => `https://www.baidu.com/s?wd=${encodeURIComponent(q)}`,
  github: (q) => `https://github.com/search?q=${encodeURIComponent(q)}`,
  youtube: (q) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`,
  custom: (q) => {
    const template = customEngineUrl || 'https://www.google.com/search?q=%s';
    if (template.includes('%s')) {
      return template.replace(/%s/g, encodeURIComponent(q));
    }
    return `${template}${encodeURIComponent(q)}`;
  },
};

let currentLanguage = 'auto';
let resolvedLanguage = 'zh-TW';
let customEngineName = '自訂搜尋';
let customEngineUrl = 'https://www.google.com/search?q=%s';
let searchInNewTab = true;
let searchHistoryEnabled = true;
let searchSuggestEnabled = true;

const COLOR_PALETTES = [
  { name: { 'zh-TW': '極致深邃藍', 'zh-CN': '极致深邃蓝', en: 'Deep Sapphire Blue', ja: 'ディープサファイア', ko: '딥 사파이어 블루', de: 'Tiefes Saphirblau', fr: 'Bleu Saphir Profond', es: 'Azul Zafiro Profundo' }, accent: '#0A84FF', text: '#F5F5F7', bg: '#06080E' },
  { name: { 'zh-TW': '經典純淨白', 'zh-CN': '经典纯净白', en: 'Pure Obsidian White', ja: 'ピュアホワイト', ko: '퓨어 화이트', de: 'Reines Kristallweiß', fr: 'Blanc Pur Élégant', es: 'Blanco Puro' }, accent: '#007AFF', text: '#1C1C1E', bg: '#FFFFFF' },
  { name: { 'zh-TW': '溫潤暖砂米', 'zh-CN': '温润暖砂米', en: 'Warm Amber Sand', ja: 'ウォームアンバー', ko: '웜 앰버 샌드', de: 'Warmer Bernsteinsand', fr: 'Sable Ambré Chaud', es: 'Arena Ámbar Cálida' }, accent: '#D97706', text: '#292524', bg: '#FDFBF7' },
  { name: { 'zh-TW': '冷杉冰川銀', 'zh-CN': '冷杉冰川银', en: 'Glacial Frost Silver', ja: 'グレイシャルフロスト', ko: '글래시어 실버', de: 'Gletscherfrost Silber', fr: 'Argent Givré Polaire', es: 'Plata Glacial' }, accent: '#0284C7', text: '#1E293B', bg: '#F1F5F9' },
  { name: { 'zh-TW': '夢幻紫晶芒', 'zh-CN': '梦幻紫晶芒', en: 'Dream Amethyst Violet', ja: 'アメジストバイオレット', ko: '드림 아메지스트', de: 'Traumhaftes Amethyst', fr: 'Violet Améthyste', es: 'Violeta Amatista' }, accent: '#BF5AF2', text: '#F5F5F7', bg: '#0A0614' },
  { name: { 'zh-TW': '翠玉極光綠', 'zh-CN': '翠玉极光绿', en: 'Aurora Emerald Green', ja: 'オーロラエメラルド', ko: '오로라 에메랄드', de: 'Aurora Smaragdgrün', fr: 'Vert Émeraude Aurore', es: 'Verde Esmeralda Aurora' }, accent: '#30D158', text: '#F5F5F7', bg: '#040F08' },
  { name: { 'zh-TW': '暮色琉璃金', 'zh-CN': '暮色琉璃金', en: 'Twilight Glass Amber', ja: 'トワイライトゴールド', ko: '트와일라잇 앰버', de: 'Dämmerungs-Goldglas', fr: 'Ambre Crépusculaire', es: 'Ámbar Crepuscular' }, accent: '#FF9F0A', text: '#F5F5F7', bg: '#120B04' },
  { name: { 'zh-TW': '鈦金冰晶藍', 'zh-CN': '钛金冰晶蓝', en: 'Titanium Crystal Cyan', ja: 'チタンアイスシアン', ko: '티타늄 크리스탈 블루', de: 'Titan-Eiscyan', fr: 'Cyan Titane Cristallin', es: 'Cian Cristalino Titanio' }, accent: '#64D2FF', text: '#E5E5EA', bg: '#080C14' },
  { name: { 'zh-TW': '曜石霓光紅', 'zh-CN': '曜石霓光红', en: 'Midnight Neon Crimson', ja: 'ネオンクリムゾン', ko: '미드나잇 네온 레드', de: 'Mitternachts-Karmin', fr: 'Crimson Néon Minuit', es: 'Carmesí Neón Medianoche' }, accent: '#FF375F', text: '#FFFFFF', bg: '#000000' },
];

const DEFAULT_DOCK_LINKS = [
  { id: 'dock-1', title: 'Google', url: 'https://www.google.com', icon: 'G' },
  { id: 'dock-2', title: 'YouTube', url: 'https://www.youtube.com', icon: 'YT' },
  { id: 'dock-3', title: 'GitHub', url: 'https://www.github.com', icon: 'GH' },
  { id: 'dock-4', title: 'Gmail', url: 'https://mail.google.com', icon: 'M' },
  { id: 'dock-5', title: 'X', url: 'https://x.com', icon: 'X' },
  { id: 'dock-6', title: 'Notion', url: 'https://www.notion.so', icon: 'N' },
  { id: 'dock-7', title: 'ChatGPT', url: 'https://chatgpt.com', icon: 'AI' },
  { id: 'dock-8', title: 'Maps', url: 'https://maps.google.com', icon: 'MAP' },
];

let userDockLinks = [...DEFAULT_DOCK_LINKS];
let editingDockIndex = -1;

let settingsLoaded = false;
let mouseHighlightEnabled = true;
let activeColorTarget = 'accent';
let activeDynamicWallpaper = null;
let dynamicAnimFrame = null;
let cropImageSource = null;
let searchHistory = [];

// ==========================================
// Storage Helper (Chrome Extension + Web Fallback)
// ==========================================
const AppStorage = {
  get: (keys, cb) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(keys, cb);
    } else {
      const res = {};
      keys.forEach((k) => {
        try {
          const v = localStorage.getItem('lg_' + k);
          if (v) res[k] = JSON.parse(v);
        } catch (e) {}
      });
      cb(res);
    }
  },
  set: (items, cb) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set(items, cb);
    } else {
      Object.entries(items).forEach(([k, v]) => {
        try {
          localStorage.setItem('lg_' + k, JSON.stringify(v));
        } catch (e) {}
      });
      if (cb) cb();
    }
  },
  clear: (cb) => {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.clear(cb);
    } else {
      try {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('lg_')) keysToRemove.push(k);
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
      } catch (e) {}
      if (cb) cb();
    }
  },
};

function detectUserLanguage() {
  const navLang = (navigator.language || navigator.userLanguage || 'zh-TW').toLowerCase();
  if (navLang.startsWith('zh-cn') || navLang.startsWith('zh-sg')) return 'zh-CN';
  if (navLang.startsWith('zh')) return 'zh-TW';
  if (navLang.startsWith('ja')) return 'ja';
  if (navLang.startsWith('ko')) return 'ko';
  if (navLang.startsWith('de')) return 'de';
  if (navLang.startsWith('fr')) return 'fr';
  if (navLang.startsWith('es')) return 'es';
  return 'en';
}

function applyLanguage(selectedLang) {
  currentLanguage = selectedLang || 'auto';
  resolvedLanguage = currentLanguage === 'auto' ? detectUserLanguage() : currentLanguage;
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];

  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el && txt) el.textContent = txt;
  };

  const setAttr = (id, attr, val) => {
    const el = document.getElementById(id);
    if (el && val) el.setAttribute(attr, val);
  };

  // Header & Navigation
  setText('lbl-control-panel-title', dict.controlCenter);
  setText('tab-btn-appearance', dict.appearanceTheme);
  setText('tab-btn-wallpaper', dict.wallpaperBg);
  setText('tab-btn-optics', dict.glassOptics);
  setText('tab-btn-layout', dict.layoutWidgets);
  setText('tab-btn-search', dict.searchEngine);

  // Section Headers
  setText('lbl-sec-language', dict.secLanguage);
  setText('lbl-sec-colors', dict.secColors);
  setText('lbl-sec-typography', dict.secTypography);
  setText('lbl-sec-custom-upload', dict.secCustomUpload);
  setText('lbl-sec-grad', dict.secGrad);
  setText('lbl-sec-wp-optics', dict.secWpOptics);
  setText('lbl-sec-optics', dict.secOptics);
  setText('lbl-sec-widget-manage', dict.secWidgetManage);
  setText('lbl-sec-drag-layout', dict.secDragLayout);
  setText('lbl-sec-dock', dict.secDock);
  setText('lbl-sec-backup', dict.secBackup);
  setText('lbl-sec-reset-all', dict.secResetAll);
  setText('lbl-sec-search-engine', dict.secSearchEngine);
  setText('lbl-choose-engine', dict.chooseEngine);
  setText('lbl-sec-search-exp', dict.secSearchExp);
  setText('lbl-custom-engine-title', dict.secCustomEngine);
  setText('lbl-custom-engine-name', dict.customEngineNameLbl);
  setText('lbl-custom-engine-url', dict.customEngineUrlLbl);
  setText('save-custom-engine-btn', dict.saveCustomEngine);
  setText('lbl-search-newtab', dict.searchNewtab);
  setText('lbl-search-history', dict.searchHistory);

  setAttr('custom-engine-name', 'placeholder', dict.customEngineNamePh);

  // Controls & Labels
  setText('lbl-lang-select', dict.langSelect);
  setText('lbl-auto-contrast', dict.autoContrast);
  setText('lbl-auto-contrast-sub', dict.autoContrastSub);
  setText('lbl-classic-palettes', dict.classicPalettes);
  setText('open-color-studio', dict.openStudio);
  setText('lbl-sys-font', dict.sysFont);
  setText('lbl-font-weight', dict.fontWeight);
  setText('lbl-font-size', dict.fontSize);
  setText('lbl-dropzone-text', dict.dropzoneText);
  setText('lbl-dropzone-sub', dict.dropzoneSub);
  setText('clear-bg-btn', dict.clearWp);
  setText('lbl-grad-type', dict.gradType);
  setText('lbl-grad-start', dict.gradStart);
  setText('lbl-grad-end', dict.gradEnd);
  setText('lbl-grad-angle', dict.gradAngle);
  setText('apply-custom-gradient-btn', dict.applyGrad);
  setText('lbl-wp-overlay', dict.wpOverlay);
  setText('lbl-wp-blur', dict.wpBlur);
  setText('lbl-glass-blur', dict.glassBlur);
  setText('lbl-glass-opacity', dict.glassOpacity);
  setText('lbl-border-opacity', dict.borderOpacity);
  setText('lbl-saturate', dict.saturate);
  setText('lbl-displacement', dict.displacement);
  setText('lbl-radius', dict.borderRadius);
  setText('open-widget-hub', dict.widgetHub);
  setText('lbl-toggle-edit', dict.freeDrag);
  setText('lbl-toggle-mouse', dict.mouseHighlight);
  setText('lbl-reset-layout', dict.resetLayout);
  setText('reset-layout-btn', dict.resetLayoutBtn);
  setText('add-dock-item-btn', dict.addLink);
  setText('reset-dock-btn', dict.resetDock);
  setText('export-config-btn', dict.exportConfig);
  setText('import-config-btn', dict.importConfig);
  setText('reset-all-settings-btn', dict.resetAll);

  // Modals: Widget Hub
  setText('lbl-hub-title', dict.widgetHubTitle);
  setText('lbl-hub-clock-title', dict.clockTitle);
  setText('lbl-hub-clock-desc', dict.clockDesc);
  setText('lbl-hub-search-title', dict.searchTitle);
  setText('lbl-hub-search-desc', dict.searchDesc);
  setText('lbl-hub-notes-title', dict.notesTitle);
  setText('lbl-hub-notes-desc', dict.notesDesc);
  setText('toggle-clock-btn', dict.toggleDisplay);
  setText('toggle-search-btn', dict.toggleDisplay);
  setText('add-note-btn', dict.addNote);
  setText('done-widget-hub', dict.done);

  // Modals: Color Studio
  setText('lbl-studio-title', dict.studioTitle);
  setText('lbl-studio-palettes', dict.studioPalettes);
  setText('lbl-studio-custom', dict.studioCustom);
  setText('lbl-studio-hue', dict.hue);
  setText('lbl-studio-hex', dict.hexCode);
  setText('done-color-studio', dict.doneStudio);
  const targetTabs = document.querySelectorAll('.color-target-tab');
  if (targetTabs.length >= 3) {
    targetTabs[0].textContent = dict.accentColor;
    targetTabs[1].textContent = dict.textColor;
    targetTabs[2].textContent = dict.bgColor;
  }
  const swatchItems = document.querySelectorAll('.color-swatch-item span:first-child');
  if (swatchItems.length >= 3) {
    swatchItems[0].textContent = dict.accentColor;
    swatchItems[1].textContent = dict.textColor;
    swatchItems[2].textContent = dict.bgColor;
  }

  // Modals: Dock Item Editor
  setText('dock-modal-title', editingDockIndex >= 0 ? dict.dockModalEdit : dict.dockModalAdd);
  setText('lbl-dock-input-title', dict.dockInputTitle);
  setAttr('dock-input-title', 'placeholder', dict.dockInputTitlePh);
  setText('lbl-dock-input-url', dict.dockInputUrl);
  setText('lbl-dock-input-icon', dict.dockInputIcon);
  setAttr('dock-input-icon', 'placeholder', dict.dockInputIconPh);
  setText('save-dock-item-btn', dict.saveDockItem);
  setText('cancel-dock-item-btn', dict.cancel);

  // Search Bar, Tooltips & History
  const searchBox = document.getElementById('search-input-box');
  if (searchBox) searchBox.setAttribute('data-placeholder', dict.searchPlaceholder);
  setAttr('clear-search-btn', 'title', dict.clearSearchTooltip);
  setText('search-history-title-lbl', dict.historyTitle);
  setText('clear-all-history-btn', dict.clearAllHistory);
  setAttr('settings-trigger', 'title', dict.controlCenter);

  // Card Tools Center Buttons
  document.querySelectorAll('.align-center-btn').forEach((btn) => {
    btn.textContent = dict.alignCenter;
  });

  // Note Cards Localized Mode Text
  document.querySelectorAll('.note-card').forEach((card) => {
    const textarea = card.querySelector('.note-textarea');
    const modeBtn = card.querySelector('.note-mode-btn');
    if (textarea) textarea.setAttribute('placeholder', dict.notePlaceholder);
    if (modeBtn) {
      const isEditing = textarea && textarea.style.display !== 'none';
      modeBtn.textContent = isEditing ? dict.preview : dict.edit;
    }
  });

  // Re-render palettes to show localized palette titles
  renderAllPalettes();

  // Re-render dock settings list for edit buttons
  renderDockSettingsList();

  // Update date format
  updateDate();
}

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', async () => {
  initClock();
  initSearch();
  initSlidersFromDOM();
  initCustomControls();
  initDropdowns();
  initTabs();
  initPanelAndHub();
  initCustomWallpapers();
  initCustomGradient();
  initColorStudio();
  initMouseHighlight();
  initDock();
  initResetAll();
  initJsonBackup();

  await loadSettings();
  settingsLoaded = true;

  if (!hasSavedLayout()) {
    initDefaultCenterLayout();
  }
});

function hasSavedLayout() {
  const c = document.getElementById('clock-card');
  const s = document.getElementById('search-card');
  return (c && c.dataset.layoutLoaded === '1') || (s && s.dataset.layoutLoaded === '1');
}

function initDefaultCenterLayout() {
  const clock = document.getElementById('clock-card');
  const search = document.getElementById('search-card');

  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;

  if (clock) {
    const w = clock.offsetWidth > 0 ? clock.offsetWidth : 360;
    const l = Math.max(10, Math.round((winW - w) / 2));
    const t = Math.max(20, Math.round(winH * 0.18));
    clock.style.left = `${l}px`;
    clock.style.top = `${t}px`;
    clock.style.display = '';
    clock.dataset.layoutLoaded = '1';
    updatePosInputs(clock);
  }

  if (search) {
    const w = search.offsetWidth > 0 ? search.offsetWidth : 620;
    const l = Math.max(10, Math.round((winW - w) / 2));
    const clockH = clock && clock.offsetHeight > 0 ? clock.offsetHeight : 160;
    const clockTop = clock && clock.style.top ? parseInt(clock.style.top, 10) : Math.round(winH * 0.18);
    const t = Math.max(20, clockTop + clockH + 24);
    search.style.left = `${l}px`;
    search.style.top = `${t}px`;
    search.style.display = '';
    search.dataset.layoutLoaded = '1';
    updatePosInputs(search);
  }

  saveLayout();
}

function centerCard(card) {
  if (!card) return;
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const w = card.offsetWidth > 0 ? card.offsetWidth : (card.id === 'search-card' ? 620 : 360);
  const l = Math.max(10, Math.round((winW - w) / 2));
  card.style.left = `${l}px`;
  updatePosInputs(card);
}

// ==========================================
// Contrast & Theme Engine
// ==========================================
function getHexLuminance(hex) {
  if (!hex) return 0;
  let c = hex.replace('#', '').trim();
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num)) return 0;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function checkAndUpdateThemeContrast(bgColorHex, explicitTextColor) {
  const autoColorToggle = document.getElementById('auto-color-toggle');
  const isAuto = autoColorToggle ? autoColorToggle.classList.contains('active') : true;

  const lum = getHexLuminance(bgColorHex);
  const isLight = lum > 135;

  if (isLight) {
    document.body.classList.add('light-theme');
    const curText = explicitTextColor || document.getElementById('hex-text-val')?.textContent.trim();
    if (isAuto && (!curText || getHexLuminance(curText) > 130)) {
      document.documentElement.style.setProperty('--text-color', '#1C1C1E');
      const hexText = document.getElementById('hex-text-val');
      if (hexText) hexText.textContent = '#1C1C1E';
      const swatchText = document.getElementById('swatch-text');
      if (swatchText) swatchText.style.backgroundColor = '#1C1C1E';
    }
  } else {
    document.body.classList.remove('light-theme');
    const curText = explicitTextColor || document.getElementById('hex-text-val')?.textContent.trim();
    if (isAuto && (!curText || getHexLuminance(curText) < 120)) {
      document.documentElement.style.setProperty('--text-color', '#F5F5F7');
      const hexText = document.getElementById('hex-text-val');
      if (hexText) hexText.textContent = '#F5F5F7';
      const swatchText = document.getElementById('swatch-text');
      if (swatchText) swatchText.style.backgroundColor = '#F5F5F7';
    }
  }
}

// ==========================================
// Tab Switching (Reliable Segmented & Tab navigation)
// ==========================================
function initTabs() {
  document.querySelectorAll('.segmented-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.segmented-btn').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.settings-tab-content').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.dataset.tab;
      const targetContent = document.getElementById(tabId);
      if (targetContent) targetContent.classList.add('active');
    });
  });
}

function initClock() {
  const timeEl = document.getElementById('time-display');
  const update = () => {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    if (timeEl) timeEl.textContent = `${h}:${m}`;
    updateDate();
  };
  update();
  setInterval(update, 1000);
}

function updateDate() {
  const dateEl = document.getElementById('date-display');
  if (!dateEl) return;
  const now = new Date();
  const localeMap = {
    'zh-TW': 'zh-TW',
    'zh-CN': 'zh-CN',
    en: 'en-US',
    ja: 'ja-JP',
    ko: 'ko-KR',
    de: 'de-DE',
    fr: 'fr-FR',
    es: 'es-ES',
  };
  try {
    dateEl.textContent = now.toLocaleDateString(localeMap[resolvedLanguage] || 'zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
  } catch (e) {
    dateEl.textContent = now.toDateString();
  }
}

// ==========================================
// Spotlight Search & History
// ==========================================
function initSearch() {
  const inputBox = document.getElementById('search-input-box');
  const clearBtn = document.getElementById('clear-search-btn');
  const historyDropdown = document.getElementById('search-history-dropdown');
  const clearAllHistoryBtn = document.getElementById('clear-all-history-btn');

  // Load initial search history from storage
  AppStorage.get(['search_history'], (res) => {
    if (res && Array.isArray(res.search_history)) {
      searchHistory = res.search_history;
      renderSearchHistory();
    }
  });

  if (inputBox) {
    inputBox.addEventListener('focus', () => {
      if (searchHistoryEnabled && searchHistory.length > 0) {
        renderSearchHistory();
        if (historyDropdown) historyDropdown.classList.add('open');
      }
    });

    inputBox.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = inputBox.textContent.trim();
        if (!query) return;

        if (searchHistoryEnabled) {
          addSearchHistory(query);
        }

        if (historyDropdown) historyDropdown.classList.remove('open');

        const engineKey = document.getElementById('engine-dropdown')?.dataset.value || 'google';
        const engineFn = SEARCH_ENGINES[engineKey] || SEARCH_ENGINES.google;
        const targetUrl = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(query)
          ? (query.startsWith('http') ? query : `https://${query}`)
          : engineFn(query);

        if (searchInNewTab) {
          window.open(targetUrl, '_blank');
        } else {
          window.location.href = targetUrl;
        }
      } else if (e.key === 'Escape') {
        if (historyDropdown) historyDropdown.classList.remove('open');
      }
    });

    inputBox.addEventListener('input', () => {
      if (clearBtn) {
        clearBtn.style.display = inputBox.textContent.trim().length > 0 ? 'flex' : 'none';
      }
    });
  }

  if (clearBtn && inputBox) {
    clearBtn.addEventListener('click', () => {
      inputBox.textContent = '';
      clearBtn.style.display = 'none';
      inputBox.focus();
    });
  }

  if (clearAllHistoryBtn) {
    clearAllHistoryBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      searchHistory = [];
      AppStorage.set({ search_history: [] });
      renderSearchHistory();
      if (historyDropdown) historyDropdown.classList.remove('open');
    });
  }

  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-card')) {
      if (historyDropdown) historyDropdown.classList.remove('open');
    }
  });
}

function renderSearchHistory() {
  const dropdown = document.getElementById('search-history-dropdown');
  const list = document.getElementById('search-history-list');
  if (!dropdown || !list) return;

  if (!searchHistoryEnabled || searchHistory.length === 0) {
    dropdown.classList.remove('open');
    return;
  }

  list.innerHTML = '';
  searchHistory.forEach((query) => {
    const item = document.createElement('div');
    item.className = 'search-history-item';
    item.innerHTML = `
      <span class="search-history-item-icon">🕒</span>
      <span class="search-history-item-text">${escapeHtml(query)}</span>
    `;
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const inputBox = document.getElementById('search-input-box');
      if (inputBox) {
        inputBox.textContent = query;
        const engineKey = document.getElementById('engine-dropdown')?.dataset.value || 'google';
        const engineFn = SEARCH_ENGINES[engineKey] || SEARCH_ENGINES.google;
        const targetUrl = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}/i.test(query)
          ? (query.startsWith('http') ? query : `https://${query}`)
          : engineFn(query);

        dropdown.classList.remove('open');
        if (searchInNewTab) {
          window.open(targetUrl, '_blank');
        } else {
          window.location.href = targetUrl;
        }
      }
    });
    list.appendChild(item);
  });
}

function addSearchHistory(query) {
  searchHistory = searchHistory.filter((q) => q !== query);
  searchHistory.unshift(query);
  if (searchHistory.length > 8) searchHistory.pop();
  AppStorage.set({ search_history: searchHistory });
  renderSearchHistory();
}

// ==========================================
// Custom Dropdowns
// ==========================================
function initDropdowns() {
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-dropdown')) {
      document.querySelectorAll('.custom-dropdown').forEach((d) => d.classList.remove('open'));
    }
  });

  document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
    const trigger = dropdown.querySelector('.custom-dropdown-trigger');
    const menu = dropdown.querySelector('.custom-dropdown-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      document.querySelectorAll('.custom-dropdown').forEach((d) => d.classList.remove('open'));
      if (!isOpen) dropdown.classList.add('open');
    });

    menu.querySelectorAll('.custom-dropdown-item').forEach((item) => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.querySelectorAll('.custom-dropdown-item').forEach((i) => i.classList.remove('active'));
        item.classList.add('active');
        dropdown.dataset.value = item.dataset.value;
        const lbl = dropdown.querySelector('.custom-dropdown-label');
        if (lbl) lbl.textContent = item.textContent.trim();
        dropdown.classList.remove('open');

        // Handle language dropdown
        if (dropdown.id === 'language-dropdown') {
          applyLanguage(item.dataset.value);
        }

        // Handle font family dropdown
        if (dropdown.id === 'font-family-dropdown') {
          document.documentElement.style.setProperty('--custom-font-family', item.dataset.value);
        }

        // Handle engine selection
        if (dropdown.id === 'settings-engine-dropdown') {
          setDropdownValue('engine-dropdown', item.dataset.value);
          const customGroup = document.getElementById('custom-engine-settings-group');
          if (customGroup) customGroup.style.display = item.dataset.value === 'custom' ? 'block' : 'none';
        }

        saveSettings();
      });
    });
  });
}

function setDropdownValue(dropdownId, val) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  dropdown.dataset.value = val;
  const items = Array.from(dropdown.querySelectorAll('.custom-dropdown-item'));
  const item = items.find((i) => i.dataset.value === val);
  if (item) {
    items.forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
    const lbl = dropdown.querySelector('.custom-dropdown-label');
    if (lbl) lbl.textContent = item.textContent.trim();
  }
}

// ==========================================
// Sliders & Controls
// ==========================================
function initSlidersFromDOM() {
  document.querySelectorAll('.custom-slider').forEach((slider) => {
    bindSlider(slider);
  });
}

function bindSlider(slider) {
  const fill = slider.querySelector('.custom-slider-fill');
  const thumb = slider.querySelector('.custom-slider-thumb');
  if (!fill || !thumb) return;

  const min = parseFloat(slider.dataset.min || 0);
  const max = parseFloat(slider.dataset.max || 100);
  const step = parseFloat(slider.dataset.step || 1);
  let val = parseFloat(slider.dataset.val || min);

  const update = (newVal, triggerSave = true) => {
    val = Math.max(min, Math.min(max, newVal));
    slider.dataset.val = val;
    const pct = ((val - min) / (max - min)) * 100;
    fill.style.width = `${pct}%`;
    thumb.style.left = `${pct}%`;
    handleSliderChange(slider.dataset.id, val, triggerSave);
  };

  const onPointer = (e) => {
    const r = slider.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const pct = Math.max(0, Math.min(1, (clientX - r.left) / r.width));
    let raw = min + pct * (max - min);
    if (step) raw = Math.round(raw / step) * step;
    update(raw);
  };

  slider.addEventListener('mousedown', (e) => {
    onPointer(e);
    const move = (ev) => onPointer(ev);
    const up = () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    };
    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });

  update(val, false);
}

function setSliderVal(id, val) {
  const slider = document.querySelector(`.custom-slider[data-id="${id}"]`);
  if (!slider) return;
  const min = parseFloat(slider.dataset.min || 0);
  const max = parseFloat(slider.dataset.max || 100);
  const v = Math.max(min, Math.min(max, val));
  slider.dataset.val = v;
  const fill = slider.querySelector('.custom-slider-fill');
  const thumb = slider.querySelector('.custom-slider-thumb');
  const pct = ((v - min) / (max - min)) * 100;
  if (fill) fill.style.width = `${pct}%`;
  if (thumb) thumb.style.left = `${pct}%`;
  handleSliderChange(id, v, false);
}

function handleSliderChange(id, val, shouldSave = true) {
  switch (id) {
    case 'font-weight': {
      const el = document.getElementById('font-weight-val');
      if (el) el.textContent = val;
      document.documentElement.style.setProperty('--custom-font-weight', val);
      break;
    }
    case 'font-size': {
      const el = document.getElementById('font-size-val');
      if (el) el.textContent = `${val}px`;
      document.documentElement.style.setProperty('--custom-font-size', `${val}px`);
      break;
    }
    case 'overlay': {
      const el = document.getElementById('overlay-val');
      if (el) el.textContent = `${val}%`;
      document.documentElement.style.setProperty('--bg-overlay', val / 100);
      break;
    }
    case 'bg-blur': {
      const el = document.getElementById('bg-blur-val');
      if (el) el.textContent = `${val}px`;
      const bgContainer = document.getElementById('desktop-bg');
      if (bgContainer) bgContainer.style.filter = `blur(${val}px)`;
      break;
    }
    case 'blur': {
      const el = document.getElementById('blur-val');
      if (el) el.textContent = `${val}px`;
      applyGlassVars({ '--blur': `${val}px` });
      break;
    }
    case 'opacity': {
      const el = document.getElementById('opacity-val');
      if (el) el.textContent = `${val}%`;
      applyGlassVars({ '--opacity': val / 100 });
      break;
    }
    case 'border-opacity': {
      const el = document.getElementById('border-opacity-val');
      if (el) el.textContent = `${val}%`;
      applyGlassVars({ '--border-opacity': val / 100 });
      break;
    }
    case 'saturate': {
      const el = document.getElementById('saturate-val');
      if (el) el.textContent = `${val}%`;
      applyGlassVars({ '--saturate': `${val}%` });
      break;
    }
    case 'displacement': {
      const el = document.getElementById('displacement-val');
      if (el) el.textContent = val;
      const map = document.getElementById('displacement-map');
      if (map) map.setAttribute('scale', val);
      break;
    }
    case 'radius': {
      const el = document.getElementById('radius-val');
      if (el) el.textContent = `${val}px`;
      applyGlassVars({ '--radius': `${val}px` });
      // Update control panel and modals
      const ctrlPanel = document.getElementById('control-panel');
      if (ctrlPanel) ctrlPanel.style.borderRadius = `${val}px`;
      document.querySelectorAll('.widget-hub-content, .color-studio-content, .dock-manager-content').forEach((m) => {
        m.style.borderRadius = `${val}px`;
      });
      break;
    }
    case 'grad-angle': {
      const el = document.getElementById('grad-angle-val');
      if (el) el.textContent = `${val}°`;
      updateCustomGradientPreview();
      break;
    }
    case 'hue': {
      currentPickerHsv.h = val;
      const svBox = document.getElementById('color-picker-sv');
      if (svBox) svBox.style.backgroundColor = `hsl(${val}, 100%, 50%)`;
      applyColorFromPicker();
      break;
    }
  }
  if (shouldSave && settingsLoaded) saveSettings();
}

function applyGlassVars(vars) {
  document.querySelectorAll('.liquid-glass').forEach((el) => {
    Object.entries(vars).forEach(([k, v]) => el.style.setProperty(k, v));
  });
}

function initCustomControls() {
  document.querySelectorAll('.custom-toggle').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      const id = toggle.id;
      if (id === 'toggle-edit-mode') {
        document.body.classList.toggle('edit-mode', toggle.classList.contains('active'));
      }
      if (id === 'mouse-highlight-toggle') {
        mouseHighlightEnabled = toggle.classList.contains('active');
        document.body.classList.toggle('mouse-highlight-on', mouseHighlightEnabled);
      }
      if (id === 'search-newtab-toggle') {
        searchInNewTab = toggle.classList.contains('active');
      }
      if (id === 'search-history-toggle') {
        searchHistoryEnabled = toggle.classList.contains('active');
      }
      saveSettings();
    });
  });

  const trigger = document.getElementById('settings-trigger');
  const panel = document.getElementById('control-panel');
  const closePanel = document.getElementById('close-control-panel');

  if (trigger && panel) {
    trigger.addEventListener('click', () => panel.classList.toggle('active'));
  }
  if (closePanel && panel) {
    closePanel.addEventListener('click', () => panel.classList.remove('active'));
  }
}

function initPanelAndHub() {
  const hubModal = document.getElementById('widget-hub-modal');
  const openHubBtn = document.getElementById('open-widget-hub');
  const closeHubBtn = document.getElementById('close-widget-hub');
  const doneHubBtn = document.getElementById('done-widget-hub');

  if (openHubBtn && hubModal) openHubBtn.addEventListener('click', () => hubModal.classList.add('active'));
  if (closeHubBtn && hubModal) closeHubBtn.addEventListener('click', () => hubModal.classList.remove('active'));
  if (doneHubBtn && hubModal) doneHubBtn.addEventListener('click', () => hubModal.classList.remove('active'));

  const toggleClock = document.getElementById('toggle-clock-btn');
  const clockCard = document.getElementById('clock-card');
  if (toggleClock && clockCard) {
    toggleClock.addEventListener('click', () => {
      clockCard.style.display = clockCard.style.display === 'none' ? '' : 'none';
      saveLayout();
    });
  }

  const toggleSearch = document.getElementById('toggle-search-btn');
  const searchCard = document.getElementById('search-card');
  if (toggleSearch && searchCard) {
    toggleSearch.addEventListener('click', () => {
      searchCard.style.display = searchCard.style.display === 'none' ? '' : 'none';
      saveLayout();
    });
  }

  const addNoteBtn = document.getElementById('add-note-btn');
  if (addNoteBtn) {
    addNoteBtn.addEventListener('click', () => {
      createNoteCard('# 待辦事項\n- [ ] 新增事項', null, null, 'edit');
      saveLayout();
    });
  }

  // Bind draggable controls to default cards
  if (clockCard) bindCardControls(clockCard);
  if (searchCard) bindCardControls(searchCard);
}

// ==========================================
// Draggable Cards & Precision Coordinates
// Notes & widgets are draggable at ALL times
// ==========================================
function bindCardControls(card) {
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  card.addEventListener('mousedown', (e) => {
    if (e.target.isContentEditable || e.target.closest('[contenteditable="true"]')) return;
    if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
    if (e.target.classList.contains('custom-btn') || e.target.closest('.custom-btn')) return;
    if (e.target.classList.contains('num-btn') || e.target.closest('.custom-number-box')) return;
    if (e.target.classList.contains('task-checkbox')) return;
    if (e.target.closest('.custom-dropdown')) return;

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    isDragging = true;
    const r = card.getBoundingClientRect();
    offsetX = e.clientX - r.left;
    offsetY = e.clientY - r.top;
    card.classList.add('dragging');
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const newX = Math.max(10, Math.min(window.innerWidth - 60, e.clientX - offsetX));
    const newY = Math.max(10, Math.min(window.innerHeight - 60, e.clientY - offsetY));
    card.style.left = `${newX}px`;
    card.style.top = `${newY}px`;
    updatePosInputs(card);
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      card.classList.remove('dragging');
      saveLayout();
    }
  });

  const alignBtn = card.querySelector('.align-center-btn');
  if (alignBtn) {
    alignBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      centerCard(card);
      saveLayout();
    });
  }

  card.querySelectorAll('.num-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const box = btn.closest('.custom-number-box');
      const isX = box && box.querySelector('.pos-x');
      const isInc = btn.classList.contains('inc');
      const delta = isInc ? 5 : -5;
      if (isX) {
        card.style.left = `${(parseInt(card.style.left, 10) || 0) + delta}px`;
      } else {
        card.style.top = `${(parseInt(card.style.top, 10) || 0) + delta}px`;
      }
      updatePosInputs(card);
      saveLayout();
    });
  });

  ['pos-x', 'pos-y'].forEach((cls) => {
    const el = card.querySelector(`.${cls}`);
    if (!el) return;
    el.addEventListener('blur', () => {
      const num = parseInt(el.textContent, 10);
      if (isNaN(num)) {
        updatePosInputs(card);
        return;
      }
      if (cls === 'pos-x') card.style.left = `${num}px`;
      else card.style.top = `${num}px`;
      updatePosInputs(card);
      saveLayout();
    });
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        el.blur();
      }
    });
  });
}

function updatePosInputs(card) {
  const xEl = card.querySelector('.pos-x');
  const yEl = card.querySelector('.pos-y');
  if (xEl) xEl.textContent = parseInt(card.style.left, 10) || 0;
  if (yEl) yEl.textContent = parseInt(card.style.top, 10) || 0;
}

// ==========================================
// Memo / Note Card Component
// Draggable at all times, Markdown enabled
// Position bar only visible in edit-mode
// ==========================================
function createNoteCard(content = '', left = null, top = null, initialMode = 'preview') {
  const card = document.createElement('div');
  card.className = 'liquid-glass draggable-card note-card';
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];

  card.innerHTML = `
    <div class="card-tools">
      <div class="custom-btn theme-btn xs align-center-btn">${dict.alignCenter}</div>
      <span class="tools-label">X:</span>
      <div class="custom-number-box"><span class="num-btn dec">−</span><span class="custom-editable pos-x" contenteditable="true" spellcheck="false">0</span><span class="num-btn inc">+</span></div>
      <span class="tools-label">Y:</span>
      <div class="custom-number-box"><span class="num-btn dec">−</span><span class="custom-editable pos-y" contenteditable="true" spellcheck="false">0</span><span class="num-btn inc">+</span></div>
    </div>
    <div class="note-header">
      <span class="card-drag-handle" title="${dict.noteDragHandle}">⠿</span>
      <div class="custom-btn secondary-btn xs note-mode-btn">${initialMode === 'edit' ? dict.preview : dict.edit}</div>
      <div class="note-header-spacer"></div>
      <div class="custom-btn del-btn xs note-del-btn">✕</div>
    </div>
    <div class="card-body">
      <textarea class="note-textarea" style="display: ${initialMode === 'edit' ? 'block' : 'none'};" placeholder="${dict.notePlaceholder}">${content}</textarea>
      <div class="note-preview" style="display: ${initialMode === 'edit' ? 'none' : 'block'};">${parseMarkdown(content)}</div>
    </div>
  `;

  document.body.appendChild(card);
  applyGlassVarsFromRoot(card);
  bindCardControls(card);

  const textarea = card.querySelector('.note-textarea');
  const preview = card.querySelector('.note-preview');
  const modeBtn = card.querySelector('.note-mode-btn');

  if (modeBtn && textarea && preview) {
    modeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentDict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];
      const isEditing = textarea.style.display !== 'none';
      if (isEditing) {
        textarea.style.display = 'none';
        preview.style.display = 'block';
        preview.innerHTML = parseMarkdown(textarea.value);
        modeBtn.textContent = currentDict.edit;
        saveLayout();
      } else {
        textarea.style.display = 'block';
        preview.style.display = 'none';
        modeBtn.textContent = currentDict.preview;
        textarea.focus();
      }
    });
  }

  if (preview && textarea && modeBtn) {
    preview.addEventListener('dblclick', () => {
      const currentDict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];
      textarea.style.display = 'block';
      preview.style.display = 'none';
      modeBtn.textContent = currentDict.preview;
      textarea.focus();
    });
  }

  if (preview && textarea) {
    preview.addEventListener('change', (e) => {
      if (e.target && e.target.classList.contains('task-checkbox')) {
        const lineText = e.target.dataset.taskLine;
        const isChecked = e.target.checked;
        if (lineText) {
          const fromPattern = isChecked ? `- [ ] ${lineText}` : `- [x] ${lineText}`;
          const toPattern = isChecked ? `- [x] ${lineText}` : `- [ ] ${lineText}`;
          textarea.value = textarea.value.replace(fromPattern, toPattern);
          preview.innerHTML = parseMarkdown(textarea.value);
          saveLayout();
        }
      }
    });
  }

  const delBtn = card.querySelector('.del-btn');
  if (delBtn) {
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      card.remove();
      saveLayout();
    });
  }

  if (textarea) {
    textarea.addEventListener('blur', () => {
      if (preview) preview.innerHTML = parseMarkdown(textarea.value);
      saveLayout();
    });
  }

  if (left != null && top != null) {
    card.style.left = left;
    card.style.top = top;
  } else {
    const existingNotes = document.querySelectorAll('.note-card');
    const index = Math.max(0, existingNotes.length - 1);
    const noteWidth = 290;
    const noteHeight = 210;
    const padding = 24;

    const cols = Math.max(1, Math.floor((window.innerWidth - 80) / (noteWidth + padding)));
    const col = index % cols;
    const row = Math.floor(index / cols);

    let calcLeft = 40 + col * (noteWidth + padding);
    let calcTop = 100 + row * (noteHeight + padding);

    if (calcTop + noteHeight > window.innerHeight - 100) {
      calcTop = Math.max(40, window.innerHeight - noteHeight - 90);
    }
    if (calcLeft + noteWidth > window.innerWidth - 40) {
      calcLeft = Math.max(20, window.innerWidth - noteWidth - 40);
    }

    card.style.left = `${Math.round(calcLeft)}px`;
    card.style.top = `${Math.round(calcTop)}px`;
  }
  updatePosInputs(card);
}

function parseMarkdown(md) {
  if (!md) return '';
  return md
    .split('\n')
    .map((line) => {
      if (line.startsWith('# ')) return `<h3>${escapeHtml(line.slice(2))}</h3>`;
      if (line.startsWith('## ')) return `<h4>${escapeHtml(line.slice(3))}</h4>`;
      if (line.startsWith('- [x] ')) {
        const txt = line.slice(6);
        return `<div class="task-item"><input type="checkbox" class="task-checkbox" checked data-task-line="${escapeHtml(txt)}"><span style="text-decoration:line-through;opacity:0.6;">${escapeHtml(txt)}</span></div>`;
      }
      if (line.startsWith('- [ ] ')) {
        const txt = line.slice(6);
        return `<div class="task-item"><input type="checkbox" class="task-checkbox" data-task-line="${escapeHtml(txt)}"><span>${escapeHtml(txt)}</span></div>`;
      }
      return `<p>${escapeHtml(line)}</p>`;
    })
    .join('');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function applyGlassVarsFromRoot(card) {
  const ref = document.querySelector('.liquid-glass');
  if (!ref) return;
  ['--blur', '--opacity', '--border-opacity', '--saturate', '--contrast', '--radius'].forEach((prop) => {
    const val = ref.style.getPropertyValue(prop) || getComputedStyle(ref).getPropertyValue(prop);
    if (val) card.style.setProperty(prop, val);
  });
}

// ==========================================
// Wallpaper Upload & Dynamic Contrast Sync
// ==========================================
function initCustomWallpapers() {
  const dropzone = document.getElementById('bg-dropzone');
  const clearBtn = document.getElementById('clear-bg-btn');

  if (dropzone) {
    dropzone.addEventListener('click', triggerFileSelect);
    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });
    dropzone.addEventListener('dragleave', () => dropzone.classList.remove('dragover'));
    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', clearBackground);
  }
}

function triggerFileSelect() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };
  input.click();
}

async function handleFile(file) {
  if (!file || !file.type || !file.type.startsWith('image/')) return;
  try {
    stopDynamicWallpaper();
    const blobUrl = await LiquidGlassDB.saveBgImage(file);
    const bgContainer = document.getElementById('desktop-bg');
    if (bgContainer && blobUrl) {
      bgContainer.style.backgroundImage = `url("${blobUrl}")`;
      bgContainer.classList.remove('hidden-bg');
    }

    const dropzone = document.getElementById('bg-dropzone');
    if (dropzone) dropzone.innerHTML = `<div>已載入：${file.name}</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">高解析度圖檔已儲存</div>`;

    const img = new Image();
    img.onload = () => analyzeImageLuminanceAndColors(img);
    img.src = blobUrl;

    saveSettings();
  } catch (err) {
    console.error('Failed to handle wallpaper file:', err);
  }
}

async function clearBackground() {
  stopDynamicWallpaper();
  const bgContainer = document.getElementById('desktop-bg');
  if (bgContainer) bgContainer.style.backgroundImage = 'none';
  await LiquidGlassDB.clearBgImage();
  const dropzone = document.getElementById('bg-dropzone');
  if (dropzone) dropzone.innerHTML = `<div>點擊或拖放圖片至此處</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">支援高解析度圖檔，自動儲存至本機 IndexedDB</div>`;
  saveSettings();
}

function stopDynamicWallpaper() {
  if (dynamicAnimFrame) {
    cancelAnimationFrame(dynamicAnimFrame);
    dynamicAnimFrame = null;
  }
  const canvas = document.getElementById('dynamic-wallpaper-canvas');
  if (canvas) {
    canvas.classList.remove('active');
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  activeDynamicWallpaper = null;
}

function analyzeImageLuminanceAndColors(img) {
  const autoColorToggle = document.getElementById('auto-color-toggle');
  if (autoColorToggle && !autoColorToggle.classList.contains('active')) return;

  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.drawImage(img, 0, 0, 64, 64);
  const data = ctx.getImageData(0, 0, 64, 64).data;

  let totalR = 0, totalG = 0, totalB = 0;
  let maxSat = 0;
  let bestAccent = '#0A84FF';

  for (let i = 0; i < data.length; i += 16) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    totalR += r;
    totalG += g;
    totalB += b;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    if (sat > maxSat && max > 60 && max < 240) {
      maxSat = sat;
      bestAccent = `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
    }
  }

  const sampleCount = data.length / 16;
  const avgR = totalR / sampleCount;
  const avgG = totalG / sampleCount;
  const avgB = totalB / sampleCount;
  const luminance = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;

  let newTextColor = '#F5F5F7';
  let newBgColor = '#06080E';
  const isLightBackground = luminance > 130;

  if (isLightBackground) {
    newTextColor = '#1C1C1E';
    newBgColor = '#F2F2F7';
    document.body.classList.add('light-theme');
  } else {
    newTextColor = '#F5F5F7';
    newBgColor = '#06080E';
    document.body.classList.remove('light-theme');
  }

  document.documentElement.style.setProperty('--accent-color', bestAccent);
  document.documentElement.style.setProperty('--text-color', newTextColor);
  document.documentElement.style.setProperty('--bg-color', newBgColor);
  document.body.style.backgroundColor = newBgColor;

  const hexAccent = document.getElementById('hex-accent-val');
  const hexText = document.getElementById('hex-text-val');
  const hexBg = document.getElementById('hex-bg-val');
  if (hexAccent) hexAccent.textContent = bestAccent;
  if (hexText) hexText.textContent = newTextColor;
  if (hexBg) hexBg.textContent = newBgColor;

  const swatchAccent = document.getElementById('swatch-accent');
  const swatchText = document.getElementById('swatch-text');
  const swatchBg = document.getElementById('swatch-bg');
  if (swatchAccent) swatchAccent.style.backgroundColor = bestAccent;
  if (swatchText) swatchText.style.backgroundColor = newTextColor;
  if (swatchBg) swatchBg.style.backgroundColor = newBgColor;

  saveSettings();
}

// ==========================================
// Custom Gradient Generator
// ==========================================
function initCustomGradient() {
  const applyBtn = document.getElementById('apply-custom-gradient-btn');
  const color1 = document.getElementById('grad-color-1');
  const color2 = document.getElementById('grad-color-2');
  const hex1 = document.getElementById('grad-hex-1');
  const hex2 = document.getElementById('grad-hex-2');
  const typeDropdown = document.getElementById('gradient-type-dropdown');

  if (color1 && hex1) {
    color1.addEventListener('input', (e) => {
      hex1.textContent = e.target.value.toUpperCase();
      updateCustomGradientPreview();
    });
    hex1.addEventListener('blur', () => {
      let val = hex1.textContent.trim();
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        color1.value = val;
        hex1.textContent = val.toUpperCase();
        updateCustomGradientPreview();
      } else {
        hex1.textContent = color1.value.toUpperCase();
      }
    });
    hex1.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        hex1.blur();
      }
    });
  }

  if (color2 && hex2) {
    color2.addEventListener('input', (e) => {
      hex2.textContent = e.target.value.toUpperCase();
      updateCustomGradientPreview();
    });
    hex2.addEventListener('blur', () => {
      let val = hex2.textContent.trim();
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
        color2.value = val;
        hex2.textContent = val.toUpperCase();
        updateCustomGradientPreview();
      } else {
        hex2.textContent = color2.value.toUpperCase();
      }
    });
    hex2.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        hex2.blur();
      }
    });
  }

  if (typeDropdown) {
    typeDropdown.querySelectorAll('.custom-dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        setTimeout(updateCustomGradientPreview, 10);
      });
    });
  }

  if (applyBtn) {
    applyBtn.addEventListener('click', applyCustomGradient);
  }

  updateCustomGradientPreview();
}

function updateCustomGradientPreview() {
  const preview = document.getElementById('custom-gradient-preview');
  const color1 = document.getElementById('grad-color-1')?.value || '#0A84FF';
  const color2 = document.getElementById('grad-color-2')?.value || '#BF5AF2';
  const type = document.getElementById('gradient-type-dropdown')?.dataset.value || 'linear';
  const angleSlider = document.querySelector('.custom-slider[data-id="grad-angle"]');
  const angle = angleSlider ? (angleSlider.dataset.val || '135') : '135';

  const angleGroup = document.getElementById('grad-angle-group');
  if (angleGroup) {
    angleGroup.style.display = type === 'linear' ? 'block' : 'none';
  }

  let gradCss = '';
  if (type === 'linear') {
    gradCss = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  } else if (type === 'radial') {
    gradCss = `radial-gradient(circle at center, ${color1}, ${color2})`;
  } else if (type === 'conic') {
    gradCss = `conic-gradient(from ${angle}deg, ${color1}, ${color2}, ${color1})`;
  }

  if (preview) {
    preview.style.background = gradCss;
  }
  return gradCss;
}

async function applyCustomGradient() {
  stopDynamicWallpaper();
  await LiquidGlassDB.clearBgImage();
  const gradCss = updateCustomGradientPreview();
  const bgContainer = document.getElementById('desktop-bg');
  if (bgContainer && gradCss) {
    bgContainer.style.backgroundImage = gradCss;
    bgContainer.classList.remove('hidden-bg');
  }

  const dropzone = document.getElementById('bg-dropzone');
  if (dropzone) {
    dropzone.innerHTML = `<div>已套用自訂漸層桌布</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">點擊或拖放可更換為自訂圖片</div>`;
  }

  // Calculate luminance from gradient colors to adapt theme
  const color1 = document.getElementById('grad-color-1')?.value || '#0A84FF';
  const color2 = document.getElementById('grad-color-2')?.value || '#BF5AF2';
  const lum1 = getHexLuminance(color1);
  const lum2 = getHexLuminance(color2);
  const avgLum = (lum1 + lum2) / 2;

  checkAndUpdateThemeContrast(avgLum > 130 ? '#F2F2F7' : '#06080E', avgLum > 130 ? '#1C1C1E' : '#F5F5F7');
  saveSettings();
}

// ==========================================
// HSV / HEX Math & Color Studio
// ==========================================
let currentPickerHsv = { h: 210, s: 0.8, v: 0.9 };

function hsvToHex(h, s, v) {
  let r = 0, g = 0, b = 0;
  const i = Math.floor((h / 60) % 6);
  const f = (h / 60) - Math.floor(h / 60);
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  switch (i) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  const toHex = (n) => Math.round(Math.max(0, Math.min(1, n)) * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function hexToHsv(hex) {
  let c = (hex || '').replace('#', '').trim();
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num) || c.length !== 6) return { h: 210, s: 0.8, v: 0.9 };
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;
  if (max !== min) {
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) * 60; break;
      case g: h = ((b - r) / d + 2) * 60; break;
      case b: h = ((r - g) / d + 4) * 60; break;
    }
  }
  return { h: Math.round(h), s, v };
}

function applyColorFromPicker() {
  const hex = hsvToHex(currentPickerHsv.h, currentPickerHsv.s, currentPickerHsv.v);
  const preview = document.getElementById('color-picker-preview');
  if (preview) preview.style.backgroundColor = hex;
  const hexEl = document.getElementById('color-picker-hex');
  if (hexEl) hexEl.textContent = hex;

  applyColorToTarget(activeColorTarget, hex);
}

function applyColorToTarget(target, hex) {
  if (target === 'accent') {
    document.documentElement.style.setProperty('--accent-color', hex);
    const hexAccent = document.getElementById('hex-accent-val');
    if (hexAccent) hexAccent.textContent = hex;
    const swatchAccent = document.getElementById('swatch-accent');
    if (swatchAccent) swatchAccent.style.backgroundColor = hex;
  } else if (target === 'text') {
    document.documentElement.style.setProperty('--text-color', hex);
    const hexText = document.getElementById('hex-text-val');
    if (hexText) hexText.textContent = hex;
    const swatchText = document.getElementById('swatch-text');
    if (swatchText) swatchText.style.backgroundColor = hex;
  } else if (target === 'bg') {
    document.documentElement.style.setProperty('--bg-color', hex);
    document.body.style.backgroundColor = hex;
    const hexBg = document.getElementById('hex-bg-val');
    if (hexBg) hexBg.textContent = hex;
    const swatchBg = document.getElementById('swatch-bg');
    if (swatchBg) swatchBg.style.backgroundColor = hex;
    checkAndUpdateThemeContrast(hex);
  }
  saveSettings();
}

function syncPickerFromActiveTarget() {
  let hex = '#0A84FF';
  if (activeColorTarget === 'accent') hex = document.getElementById('hex-accent-val')?.textContent.trim() || '#0A84FF';
  else if (activeColorTarget === 'text') hex = document.getElementById('hex-text-val')?.textContent.trim() || '#F5F5F7';
  else if (activeColorTarget === 'bg') hex = document.getElementById('hex-bg-val')?.textContent.trim() || '#06080E';

  currentPickerHsv = hexToHsv(hex);
  const preview = document.getElementById('color-picker-preview');
  if (preview) preview.style.backgroundColor = hex;
  const hexEl = document.getElementById('color-picker-hex');
  if (hexEl) hexEl.textContent = hex;

  const svBox = document.getElementById('color-picker-sv');
  const svCursor = document.getElementById('color-picker-sv-cursor');
  if (svBox && svCursor) {
    svBox.style.backgroundColor = `hsl(${currentPickerHsv.h}, 100%, 50%)`;
    svCursor.style.left = `${currentPickerHsv.s * 100}%`;
    svCursor.style.top = `${(1 - currentPickerHsv.v) * 100}%`;
  }

  // Update hue slider
  setSliderVal('hue', currentPickerHsv.h);
}

function renderAllPalettes() {
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];
  const renderPalettesTo = (containerId) => {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    grid.innerHTML = '';
    COLOR_PALETTES.forEach((palette) => {
      const card = document.createElement('div');
      card.className = 'palette-card';
      const name = typeof palette.name === 'object' ? (palette.name[resolvedLanguage] || palette.name['zh-TW'] || palette.name.en) : palette.name;
      card.innerHTML = `
        <div class="palette-card-name">${name}</div>
        <div class="palette-card-swatches">
          <span style="background:${palette.accent}"></span>
          <span style="background:${palette.text}"></span>
          <span style="background:${palette.bg}"></span>
        </div>
      `;
      card.addEventListener('click', () => {
        document.querySelectorAll('.palette-card').forEach((c) => c.classList.remove('active'));
        card.classList.add('active');
        applyPalette(palette);
      });
      grid.appendChild(card);
    });
  };

  renderPalettesTo('palette-grid-root');
  renderPalettesTo('palette-grid');
}

function initColorStudio() {
  renderAllPalettes();

  const studioModal = document.getElementById('color-studio-modal');
  const openStudioBtn = document.getElementById('open-color-studio');
  const closeStudioBtn = document.getElementById('close-color-studio');
  const doneStudioBtn = document.getElementById('done-color-studio');

  if (openStudioBtn && studioModal) {
    openStudioBtn.addEventListener('click', () => {
      studioModal.classList.add('active');
      syncPickerFromActiveTarget();
    });
  }
  if (closeStudioBtn && studioModal) closeStudioBtn.addEventListener('click', () => studioModal.classList.remove('active'));
  if (doneStudioBtn && studioModal) doneStudioBtn.addEventListener('click', () => studioModal.classList.remove('active'));

  // Target tabs
  document.querySelectorAll('.color-target-tab').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.color-target-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeColorTarget = tab.dataset.target || 'accent';
      syncPickerFromActiveTarget();
    });
  });

  // SV Box in Color Studio
  const svBox = document.getElementById('color-picker-sv');
  const svCursor = document.getElementById('color-picker-sv-cursor');
  if (svBox && svCursor) {
    const handleSv = (e) => {
      const rect = svBox.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
      const y = Math.max(0, Math.min(rect.height, clientY - rect.top));
      const s = rect.width > 0 ? x / rect.width : 0;
      const v = rect.height > 0 ? 1 - (y / rect.height) : 1;
      currentPickerHsv.s = s;
      currentPickerHsv.v = v;
      svCursor.style.left = `${x}px`;
      svCursor.style.top = `${y}px`;
      applyColorFromPicker();
    };

    svBox.addEventListener('mousedown', (e) => {
      handleSv(e);
      const move = (ev) => handleSv(ev);
      const up = () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', up);
      };
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', up);
    });
  }

  // Editable HEX inputs
  ['accent', 'text', 'bg'].forEach((target) => {
    const hexEl = document.getElementById(`hex-${target}-val`);
    if (hexEl) {
      hexEl.addEventListener('blur', () => {
        let hex = hexEl.textContent.trim();
        if (!hex.startsWith('#')) hex = '#' + hex;
        if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
          applyColorToTarget(target, hex.toUpperCase());
          if (target === activeColorTarget) syncPickerFromActiveTarget();
        }
      });
      hexEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          hexEl.blur();
        }
      });
    }
  });

  const pickerHex = document.getElementById('color-picker-hex');
  if (pickerHex) {
    pickerHex.addEventListener('blur', () => {
      let hex = pickerHex.textContent.trim();
      if (!hex.startsWith('#')) hex = '#' + hex;
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        applyColorToTarget(activeColorTarget, hex.toUpperCase());
        syncPickerFromActiveTarget();
      }
    });
    pickerHex.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        pickerHex.blur();
      }
    });
  }
}

function applyPalette(palette) {
  document.documentElement.style.setProperty('--accent-color', palette.accent);
  document.documentElement.style.setProperty('--text-color', palette.text);
  document.documentElement.style.setProperty('--bg-color', palette.bg);
  document.body.style.backgroundColor = palette.bg;

  const hexAccent = document.getElementById('hex-accent-val');
  const hexText = document.getElementById('hex-text-val');
  const hexBg = document.getElementById('hex-bg-val');
  if (hexAccent) hexAccent.textContent = palette.accent;
  if (hexText) hexText.textContent = palette.text;
  if (hexBg) hexBg.textContent = palette.bg;

  const swatchAccent = document.getElementById('swatch-accent');
  const swatchText = document.getElementById('swatch-text');
  const swatchBg = document.getElementById('swatch-bg');
  if (swatchAccent) swatchAccent.style.backgroundColor = palette.accent;
  if (swatchText) swatchText.style.backgroundColor = palette.text;
  if (swatchBg) swatchBg.style.backgroundColor = palette.bg;

  checkAndUpdateThemeContrast(palette.bg, palette.text);
  saveSettings();
}

// ==========================================
// Mouse Highlight
// ==========================================
function initMouseHighlight() {
  document.addEventListener('mousemove', (e) => {
    if (!mouseHighlightEnabled) return;
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
  });
}

// ==========================================
// Dock Links & Editor Modal
// ==========================================
function initDock() {
  renderDock();
  renderDockSettingsList();

  const addBtn = document.getElementById('add-dock-item-btn');
  const resetBtn = document.getElementById('reset-dock-btn');
  const modal = document.getElementById('dock-edit-modal');
  const closeBtn = document.getElementById('close-dock-modal');
  const cancelBtn = document.getElementById('cancel-dock-item-btn');
  const saveBtn = document.getElementById('save-dock-item-btn');

  if (addBtn) {
    addBtn.addEventListener('click', () => {
      editingDockIndex = -1;
      const titleInput = document.getElementById('dock-input-title');
      const urlInput = document.getElementById('dock-input-url');
      const iconInput = document.getElementById('dock-input-icon');
      if (titleInput) titleInput.value = '';
      if (urlInput) urlInput.value = 'https://';
      if (iconInput) iconInput.value = '';
      if (modal) modal.classList.add('active');
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      userDockLinks = [...DEFAULT_DOCK_LINKS];
      renderDock();
      renderDockSettingsList();
      saveSettings();
    });
  }

  if (closeBtn && modal) closeBtn.addEventListener('click', () => modal.classList.remove('active'));
  if (cancelBtn && modal) cancelBtn.addEventListener('click', () => modal.classList.remove('active'));

  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const title = document.getElementById('dock-input-title')?.value.trim();
      const url = document.getElementById('dock-input-url')?.value.trim();
      const icon = document.getElementById('dock-input-icon')?.value.trim() || (title ? title.slice(0, 2).toUpperCase() : '🔗');

      if (!title || !url) return;

      if (editingDockIndex >= 0 && userDockLinks[editingDockIndex]) {
        userDockLinks[editingDockIndex] = { ...userDockLinks[editingDockIndex], title, url, icon };
      } else {
        userDockLinks.push({ id: `dock-${Date.now()}`, title, url, icon });
      }

      renderDock();
      renderDockSettingsList();
      if (modal) modal.classList.remove('active');
      saveSettings();
    });
  }
}

function renderDock() {
  const dock = document.getElementById('liquid-dock');
  if (!dock) return;
  dock.innerHTML = '';

  userDockLinks.forEach((item) => {
    const a = document.createElement('a');
    a.className = 'dock-item';
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `
      <span>${item.icon}</span>
      <div class="dock-tooltip">${item.title}</div>
    `;
    dock.appendChild(a);
  });
}

function renderDockSettingsList() {
  const list = document.getElementById('dock-links-list');
  if (!list) return;
  list.innerHTML = '';

  userDockLinks.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'dock-link-row';
    row.innerHTML = `
      <div class="dock-link-badge">${item.icon}</div>
      <div class="dock-link-info">
        <div class="dock-link-title">${item.title}</div>
        <div class="dock-link-url">${item.url}</div>
      </div>
      <div class="dock-link-actions">
        <div class="custom-btn secondary-btn xs edit-dock-btn" data-index="${idx}">編輯</div>
        <div class="custom-btn del-btn xs del-dock-btn" data-index="${idx}">✕</div>
      </div>
    `;

    row.querySelector('.edit-dock-btn')?.addEventListener('click', () => {
      editingDockIndex = idx;
      const titleInput = document.getElementById('dock-input-title');
      const urlInput = document.getElementById('dock-input-url');
      const iconInput = document.getElementById('dock-input-icon');
      if (titleInput) titleInput.value = item.title;
      if (urlInput) urlInput.value = item.url;
      if (iconInput) iconInput.value = item.icon;
      const modal = document.getElementById('dock-edit-modal');
      if (modal) modal.classList.add('active');
    });

    row.querySelector('.del-dock-btn')?.addEventListener('click', () => {
      userDockLinks.splice(idx, 1);
      renderDock();
      renderDockSettingsList();
      saveSettings();
    });

    list.appendChild(row);
  });
}

// ==========================================
// Settings Export / Import / Reset
// ==========================================
function initResetAll() {
  const resetBtn = document.getElementById('reset-all-settings-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];
      if (confirm(dict.resetConfirm || '確定要重置所有設定為原廠預設值嗎？')) {
        AppStorage.clear(() => {
          location.reload();
        });
      }
    });
  }

  const resetLayoutBtn = document.getElementById('reset-layout-btn');
  if (resetLayoutBtn) {
    resetLayoutBtn.addEventListener('click', () => {
      initDefaultCenterLayout();
    });
  }
}

function initJsonBackup() {
  const exportBtn = document.getElementById('export-config-btn');
  const importBtn = document.getElementById('import-config-btn');
  const fileInput = document.getElementById('import-config-file');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      AppStorage.get(['desktop_config', 'desktop_layout'], (res) => {
        const blob = new Blob([JSON.stringify(res, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `liquid-glass-config-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    });
  }

  if (importBtn && fileInput) {
    importBtn.addEventListener('click', () => fileInput.click());
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const data = JSON.parse(evt.target.result);
          if (data.desktop_config || data.desktop_layout) {
            AppStorage.set(data, () => {
              location.reload();
            });
          }
        } catch (err) {
          const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS['zh-TW'];
          alert(dict.importFailed || '匯入設定失敗：檔案格式不正確');
        }
      };
      reader.readAsText(file);
    });
  }
}

function saveSettings() {
  const cfg = {
    language: currentLanguage,
    accentColor: document.getElementById('hex-accent-val')?.textContent.trim() || '#0A84FF',
    textColor: document.getElementById('hex-text-val')?.textContent.trim() || '#F5F5F7',
    bgColor: document.getElementById('hex-bg-val')?.textContent.trim() || '#06080E',
    fontFamily: document.getElementById('font-family-dropdown')?.dataset.value,
    fontWeight: document.querySelector('.custom-slider[data-id="font-weight"]')?.dataset.val,
    fontSize: document.querySelector('.custom-slider[data-id="font-size"]')?.dataset.val,
    overlay: document.querySelector('.custom-slider[data-id="overlay"]')?.dataset.val,
    bgBlur: document.querySelector('.custom-slider[data-id="bg-blur"]')?.dataset.val,
    blur: document.querySelector('.custom-slider[data-id="blur"]')?.dataset.val,
    opacity: document.querySelector('.custom-slider[data-id="opacity"]')?.dataset.val,
    borderOpacity: document.querySelector('.custom-slider[data-id="border-opacity"]')?.dataset.val,
    saturate: document.querySelector('.custom-slider[data-id="saturate"]')?.dataset.val,
    displacement: document.querySelector('.custom-slider[data-id="displacement"]')?.dataset.val,
    radius: document.querySelector('.custom-slider[data-id="radius"]')?.dataset.val,
    autoColor: document.getElementById('auto-color-toggle')?.classList.contains('active'),
    editMode: document.getElementById('toggle-edit-mode')?.classList.contains('active'),
    mouseHighlight: mouseHighlightEnabled,
    searchEngine: document.getElementById('settings-engine-dropdown')?.dataset.value,
    searchInNewTab,
    searchHistoryEnabled,
    dockLinks: userDockLinks,
  };

  AppStorage.set({ desktop_config: cfg });
}

function saveLayout() {
  const clock = document.getElementById('clock-card');
  const search = document.getElementById('search-card');
  const notes = [];

  document.querySelectorAll('.note-card').forEach((note) => {
    const textarea = note.querySelector('.note-textarea');
    notes.push({
      left: parseInt(note.style.left, 10) || 0,
      top: parseInt(note.style.top, 10) || 0,
      content: textarea ? textarea.value : '',
      mode: textarea && textarea.style.display !== 'none' ? 'edit' : 'preview',
      display: note.style.display || '',
    });
  });

  const layout = {
    clock: clock ? { left: parseInt(clock.style.left, 10) || 0, top: parseInt(clock.style.top, 10) || 0, display: clock.style.display || '' } : null,
    search: search ? { left: parseInt(search.style.left, 10) || 0, top: parseInt(search.style.top, 10) || 0, display: search.style.display || '' } : null,
    notes,
  };

  AppStorage.set({ desktop_layout: layout });
}

async function loadSettings() {
  try {
    const bgImgUrl = await LiquidGlassDB.loadBgImage();
    const bgContainer = document.getElementById('desktop-bg');
    if (bgImgUrl && bgContainer) {
      bgContainer.style.backgroundImage = `url("${bgImgUrl}")`;
      const dropzone = document.getElementById('bg-dropzone');
      if (dropzone) dropzone.innerHTML = `<div>已載入自訂背景桌布</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">高解析度圖檔已儲存</div>`;
    }
  } catch (err) {
    console.error('Error loading background image from LiquidGlassDB:', err);
  }

  return new Promise((resolve) => {
    AppStorage.get(['desktop_config', 'desktop_layout'], (res) => {
      if (res && res.desktop_config) applyConfig(res.desktop_config);
      if (res && res.desktop_layout) applyLayout(res.desktop_layout);
      resolve();
    });
  });
}

function applyConfig(cfg) {
  if (cfg.language) {
    setDropdownValue('language-dropdown', cfg.language);
    applyLanguage(cfg.language);
  } else {
    applyLanguage('auto');
  }

  if (cfg.accentColor) {
    const el = document.getElementById('hex-accent-val');
    if (el) el.textContent = cfg.accentColor;
    document.documentElement.style.setProperty('--accent-color', cfg.accentColor);
    const swatch = document.getElementById('swatch-accent');
    if (swatch) swatch.style.backgroundColor = cfg.accentColor;
  }
  if (cfg.textColor) {
    const el = document.getElementById('hex-text-val');
    if (el) el.textContent = cfg.textColor;
    document.documentElement.style.setProperty('--text-color', cfg.textColor);
    const swatch = document.getElementById('swatch-text');
    if (swatch) swatch.style.backgroundColor = cfg.textColor;
  }
  if (cfg.bgColor) {
    const el = document.getElementById('hex-bg-val');
    if (el) el.textContent = cfg.bgColor;
    document.documentElement.style.setProperty('--bg-color', cfg.bgColor);
    document.body.style.backgroundColor = cfg.bgColor;
    const swatch = document.getElementById('swatch-bg');
    if (swatch) swatch.style.backgroundColor = cfg.bgColor;
    checkAndUpdateThemeContrast(cfg.bgColor, cfg.textColor);
  }
  if (cfg.fontFamily) {
    setDropdownValue('font-family-dropdown', cfg.fontFamily);
    document.documentElement.style.setProperty('--custom-font-family', cfg.fontFamily);
  }

  setSliderVal('font-weight', cfg.fontWeight || 500);
  setSliderVal('font-size', cfg.fontSize || 16);
  setSliderVal('overlay', cfg.overlay || 15);
  setSliderVal('bg-blur', cfg.bgBlur || 0);
  setSliderVal('blur', cfg.blur || 40);
  setSliderVal('opacity', cfg.opacity || 14);
  setSliderVal('border-opacity', cfg.borderOpacity || 12);
  setSliderVal('saturate', cfg.saturate || 140);
  setSliderVal('displacement', cfg.displacement || 8);
  setSliderVal('radius', cfg.radius || 22);

  setToggle('auto-color-toggle', cfg.autoColor !== false);
  setToggle('toggle-edit-mode', cfg.editMode);
  setToggle('mouse-highlight-toggle', cfg.mouseHighlight !== false);

  if (cfg.dockLinks && Array.isArray(cfg.dockLinks)) {
    userDockLinks = cfg.dockLinks;
    renderDock();
    renderDockSettingsList();
  }

  if (cfg.searchEngine) {
    setDropdownValue('engine-dropdown', cfg.searchEngine);
    setDropdownValue('settings-engine-dropdown', cfg.searchEngine);
  }
}

function setToggle(id, active) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('active', !!active);
  if (id === 'toggle-edit-mode') document.body.classList.toggle('edit-mode', !!active);
}

function applyLayout(layout) {
  if (!layout) return;
  if (layout.clock) applyCardLayout('clock-card', layout.clock);
  if (layout.search) applyCardLayout('search-card', layout.search);
  if (layout.notes && Array.isArray(layout.notes)) {
    layout.notes.forEach((n) => {
      createNoteCard(n.content, `${n.left}px`, `${n.top}px`, n.mode || 'preview');
      const cards = document.querySelectorAll('.note-card');
      const last = cards[cards.length - 1];
      if (last && n.display === 'none') last.style.display = 'none';
    });
  }
}

function applyCardLayout(id, data) {
  if (!data) return;
  const el = document.getElementById(id);
  if (!el) return;
  if (data.left != null) el.style.left = `${data.left}px`;
  if (data.top != null) el.style.top = `${data.top}px`;
  if (data.display === 'none') el.style.display = 'none';
  el.dataset.layoutLoaded = '1';
  updatePosInputs(el);
}

window.addEventListener('resize', () => {
  if (!document.body.classList.contains('edit-mode') && !hasSavedLayout()) {
    initDefaultCenterLayout();
  }
});
