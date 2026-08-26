// ==========================================
// PrismTab — Chrome New Tab Extension v0.0.0
// Liquid Glass Aesthetics & 100% User-Customized Architecture
// Storage: browser.storage.local & IndexedDB (PrismTabDB)
// ==========================================

const TRANSLATIONS = {
  'zh-TW': {
    enableSearchHistory: "啟用搜尋歷史記錄清單",
    syncHint: "使用 browser.storage.sync 跨裝置同步設定。需登入 Chrome 帳號，並在 chrome://settings/syncSetup 啟用「擴充功能」同步。",
    notesAction: "新增備忘錄",
    enableDock: "啟用導航器",
    enableSearch: "啟用搜尋列",
    enableClock: "啟用時鐘與日期",
    cloudSync: "雲端（Chrome Sync 跨裝置同步）",
    localSync: "本地",
    moreDesc: "讓使用者自行寫程式製作。卡片風格由系統自動套用液態玻璃美學。",
    hotkeysDesc: "點擊快捷鍵欄位後按下新的組合鍵即可自訂。按 Esc 取消。",
    cardEditorHint: "內容會顯示在拖曳把手下方，不會重疊。系統自動套用液態玻璃外框。",
    hkFocusSearch: "聚焦搜尋列",
    hkToggleClock: "切換時鐘顯示",
    hkToggleSearch: "切換搜尋列顯示",
    hkToggleDock: "切換導航器顯示",
    hkAddCustomCard: "新增自訂卡片",
    hkClearSearch: "清空搜尋列",
    resetHotkeys: "恢復預設快捷鍵",
    addCustomCard: "+ 新增自訂卡片",
    cardBuilderTitle: "自訂卡片編輯器",
    toolboxTitle: "元件",
    tbImage: "圖片",
    tbDivider: "分隔線",
    canvasHint: "點擊左側新增元件，可拖曳調整位置。",
    propsTitle: "屬性",
    cardTitleInput: "卡片標題（設定列表顯示）",
    saveCard: "儲存卡片",
    syncNow: "立即同步至雲端",
    pullSync: "從雲端還原",
    pressKeys: "按下組合鍵…",
    noCustomCards: "尚無自訂卡片",
    untitledCard: "未命名卡片",
    elementsCount: "個元件",
    editCard: "編輯自訂卡片",
    newCard: "新增自訂卡片",
    propsEmpty: "選取元件以編輯屬性",
    contentLabel: "內容",
    deleteEl: "刪除元件",
    defaultHeading: "標題",
    defaultText: "在此輸入文字",
    defaultLink: "開啟連結",
    syncFailed: "同步失敗：",
    syncPushed: "已成功推送設定至 Chrome Sync 雲端",
    syncPullFailed: "從雲端還原失敗：",
    syncPulled: "已從雲端還原設定，即將重新載入…",
    syncUnavailable: "Chrome Sync 不可用",
    controlCenter: '控制中心',
    tabAppearance: '外觀',
    tabTools: '工具',
    tabAdvanced: '進階功能',
    appearanceTheme: '外觀',
    wallpaperBg: '背景',
    glassOptics: '液態玻璃光學',
    layoutWidgets: '工具',
    searchEngine: '搜尋引擎',
    langSelect: '介面語言',
    autoDetect: '自動偵測',
    secLanguage: '語言',
    secTheme: '主題',
    secColors: '主題',
    secTypography: '文字',
    secBg: '背景',
    bgUpload: '上傳',
    bgGenerate: '生成',
    bgDetails: '細節',
    secCustomUpload: '上傳',
    secGrad: '生成',
    secWpOptics: '細節',
    secOptics: '液態玻璃光學',
    secClock: '時鐘與日期',
    secSearch: '搜尋列',
    secSearchSettings: '搜尋設定',
    secDock: '導航器',
    secNotes: '備忘錄',
    dockLinks: '連結清單',
    dockSettings: '導航設定',
    secMore: '更多配置',
    moreDesc: '讓使用者自行寫程式製作。卡片風格由系統自動套用液態玻璃美學。請勿在此放置其他預設配置。',
    secHotkeys: '快捷鍵',
    hotkeysDesc: '點擊快捷鍵欄位後按下新的組合鍵即可自訂。按 Esc 取消。',
    secSync: '設定同步',
    chromeSync: '啟用 Chrome 雲端同步',
    secInjection: '網站注入',
    injectJs: 'JavaScript',
    injectCss: 'CSS',
    secWidgetManage: '小工具管理',
    secDragLayout: '版面佈局調整',
    dragHint: '按住元件頂部的圖示即可拖曳，靠近螢幕中央會自動出現對齊線並精準對齊。',
    secBackup: '設定同步',
    secResetAll: '全域重置',
    secSearchEngine: '預設搜尋引擎選擇',
    chooseEngine: '預設搜尋引擎',
    secSearchExp: '搜尋設定',
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
    sysFont: '字體',
    fontWeight: '粗細',
    fontSize: '大小',
    dropzoneText: '點擊或拖放圖片至此處',
    dropzoneSub: '支援高解析度圖檔，自動儲存至本機資料庫',
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
    displacement: '噪點折射',
    borderRadius: '圓角半徑',
    widgetHub: '開啟小工具庫',
    resetLayout: '重置為預設置中佈局',
    resetLayoutBtn: '重置佈局',
    dockLinks: '自訂快捷連結',
    addLink: '+ 新增連結',
    resetDock: '恢復預設連結',
    exportConfig: '匯出設定 JSON',
    importConfig: '匯入設定 JSON',
    resetAll: '重置所有設定為預設值',
    searchPlaceholder: '搜尋或輸入網址...',
    clockTitle: '時鐘與日期',
    clockDesc: '精緻時間顯示，支援全域多國語言',
    searchTitle: '搜尋與歷史記錄',
    searchDesc: '支援多搜尋引擎、智慧預測與歷史關鍵字自動回顯',
    dockTitle: '快捷導航列',
    dockDesc: '自訂常用網站圖示與快捷連結，支援自由拖曳與磁吸對齊',
    notesTitle: '備忘錄',
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
    dockInputIcon: '圖示縮寫',
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
    noteResizeHandle: '縮放備忘錄',
    clockDragHandle: '按住拖曳時鐘',
    clockResizeHandle: '縮放時鐘',
    searchDragHandle: '按住拖曳搜尋列',
    resetConfirm: '確定要重置所有設定為原廠預設值嗎？',
    importFailed: '匯入設定失敗：檔案格式不正確',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans TC',
      'noto-serif': 'Noto Serif TC',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: '線性漸層',
      radial: '徑向光暈',
      conic: '圓錐旋轉',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: '自訂搜尋引擎',
    },
  },
  'zh-CN': {
    enableSearchHistory: "启用搜索历史记录列表",
    syncHint: "使用 browser.storage.sync 跨设备同步设置。请登录 Chrome 账号，并在 chrome://settings/syncSetup 启用「扩展程序」同步。",
    notesAction: "新增备忘录",
    enableDock: "启用导航器",
    enableSearch: "启用搜索栏",
    enableClock: "启用时钟与日期",
    cloudSync: "云端（Chrome Sync 跨设备同步）",
    localSync: "本地",
    chromeSync: "启用 Chrome 云端同步",
    secSync: "设置同步",
    secHotkeys: "快捷键",
    secMore: "更多配置",
    dockSettings: "导航设置",
    secNotes: "备忘录",
    secSearchSettings: "搜索设置",
    secSearch: "搜索栏",
    secClock: "时钟与日期",
    bgDetails: "细节",
    bgGenerate: "生成",
    bgUpload: "上传",
    secBg: "背景",
    secTheme: "主题",
    moreDesc: "由用户自行编写程序制作。卡片风格由系统自动套用液态玻璃美学。",
    hotkeysDesc: "点击快捷键字段后按下新的组合键即可自定义。按 Esc 取消。",
    cardEditorHint: "内容显示在拖动手柄下方，不会重叠。系统自动套用液态玻璃外框。",
    hkFocusSearch: "聚焦搜索栏",
    hkToggleClock: "切换时钟显示",
    hkToggleSearch: "切换搜索栏显示",
    hkToggleDock: "切换导航器显示",
    hkAddCustomCard: "新增自定义卡片",
    hkClearSearch: "清空搜索栏",
    resetHotkeys: "恢复默认快捷键",
    addCustomCard: "+ 新增自定义卡片",
    cardBuilderTitle: "自定义卡片编辑器",
    toolboxTitle: "组件",
    tbImage: "图片",
    tbDivider: "分隔线",
    canvasHint: "点击左侧新增组件，可拖拽调整位置。",
    propsTitle: "属性",
    cardTitleInput: "卡片标题（设置列表显示）",
    saveCard: "保存卡片",
    syncNow: "立即同步至云端",
    pullSync: "从云端还原",
    tabAppearance: "外观",
    tabTools: "工具",
    tabAdvanced: "进阶功能",
    pressKeys: "按下组合键…",
    noCustomCards: "暂无自定义卡片",
    untitledCard: "未命名卡片",
    elementsCount: "个组件",
    editCard: "编辑自定义卡片",
    newCard: "新增自定义卡片",
    propsEmpty: "选取组件以编辑属性",
    contentLabel: "内容",
    deleteEl: "删除组件",
    defaultHeading: "标题",
    defaultText: "在此输入文字",
    defaultLink: "打开链接",
    syncFailed: "同步失败：",
    syncPushed: "已成功推送设置至 Chrome Sync 云端",
    syncPullFailed: "从云端还原失败：",
    syncPulled: "已从云端还原设置，即将重新加载…",
    syncUnavailable: "Chrome Sync 不可用",
    controlCenter: '控制中心',
    appearanceTheme: '外观主题',
    wallpaperBg: '壁纸背景',
    glassOptics: '玻璃光学',
    layoutWidgets: '版面小组件',
    searchEngine: '搜索引擎',
    langSelect: '界面语言',
    autoDetect: '自动检测',
    secLanguage: '语言',
    secColors: '色彩与主题工坊',
    secTypography: '文字',
    secCustomUpload: '自定义图片上传',
    secGrad: '自定义渐变壁纸生成器',
    secWpOptics: '背景光影与景深',
    secOptics: '液态玻璃核心光学属性',
    secWidgetManage: '小组件管理',
    secDragLayout: '版面布局调整',
    dragHint: '按住组件顶部的图标即可拖拽，靠近屏幕中央会自动出现对齐线并精准对齐。',
    secDock: '自定义快捷链接',
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
    sysFont: '字体',
    fontWeight: '粗细',
    fontSize: '大小',
    dropzoneText: '点击或拖放图片至此处',
    dropzoneSub: '支持高分辨率图片，自动保存至本地数据库',
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
    displacement: '噪点折射',
    borderRadius: '圆角半径',
    widgetHub: '打开小组件库',
    resetLayout: '重置为默认居中布局',
    resetLayoutBtn: '重置布局',
    dockLinks: '自定义快捷链接',
    addLink: '+ 添加链接',
    resetDock: '恢复默认链接',
    exportConfig: '导出配置 JSON',
    importConfig: '导入配置 JSON',
    resetAll: '重置所有设置为默认值',
    searchPlaceholder: '搜索或输入网址...',
    clockTitle: '时钟与日期',
    clockDesc: '精致时间显示，支持全局多国语言',
    searchTitle: '搜索与历史记录',
    searchDesc: '支持多搜索引擎、智能预测与历史关键字自动回显',
    dockTitle: '快捷导航栏',
    dockDesc: '自定义常用网站图标与快捷链接，支持自由拖拽与磁吸对齐',
    notesTitle: '便签',
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
    dockInputIcon: '图标缩写',
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
    noteResizeHandle: '缩放便签',
    clockDragHandle: '按住拖拽时钟',
    clockResizeHandle: '缩放时钟',
    searchDragHandle: '按住拖拽搜索栏',
    resetConfirm: '确定要重置所有设置为出厂默认值吗？',
    importFailed: '导入配置失败：文件格式不正确',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans SC',
      'noto-serif': 'Noto Serif SC',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft YaHei / JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: '线性渐变',
      radial: '径向光晕',
      conic: '圆锥旋转',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: '自定义搜索引擎',
    },
  },
  en: {
    enableSearchHistory: "Enable search history",
    syncHint: "Uses browser.storage.sync for cross-device settings. Sign in to Chrome and enable extension sync in chrome://settings/syncSetup.",
    notesAction: "Add note",
    enableDock: "Enable navigator",
    enableSearch: "Enable search bar",
    enableClock: "Enable clock & date",
    cloudSync: "Cloud (Chrome Sync across devices)",
    localSync: "Local",
    secNotes: "Notes",
    moreDesc: "Write your own code. The system applies liquid-glass styling to the card browser.",
    hotkeysDesc: "Click a shortcut field, then press a new key combo. Press Esc to cancel.",
    cardEditorHint: "Content appears below the drag handle without overlapping. Liquid-glass chrome is applied automatically.",
    hkFocusSearch: "Focus search",
    hkToggleClock: "Toggle clock",
    hkToggleSearch: "Toggle search",
    hkToggleDock: "Toggle dock",
    hkAddCustomCard: "Add custom card",
    hkClearSearch: "Clear search",
    resetHotkeys: "Reset default shortcuts",
    addCustomCard: "+ Add custom card",
    cardBuilderTitle: "Custom Card Editor",
    toolboxTitle: "Elements",
    tbImage: "Image",
    tbDivider: "Divider",
    canvasHint: "Click left to add elements. Drag to reposition.",
    propsTitle: "Properties",
    cardTitleInput: "Card title (list display)",
    saveCard: "Save card",
    syncNow: "Sync to cloud now",
    pullSync: "Restore from cloud",
    pressKeys: "Press keys…",
    noCustomCards: "No custom cards yet",
    untitledCard: "Untitled card",
    elementsCount: "elements",
    editCard: "Edit custom card",
    newCard: "New custom card",
    propsEmpty: "Select an element to edit",
    contentLabel: "Content",
    deleteEl: "Delete element",
    defaultHeading: "Heading",
    defaultText: "Enter text here",
    defaultLink: "Open link",
    syncFailed: "Sync failed: ",
    syncPushed: "Settings pushed to Chrome Sync",
    syncPullFailed: "Restore from cloud failed: ",
    syncPulled: "Restored from cloud. Reloading…",
    syncUnavailable: "Chrome Sync unavailable",
    controlCenter: 'Control Center',
    tabAppearance: 'Appearance',
    tabTools: 'Tools',
    tabAdvanced: 'Advanced',
    appearanceTheme: 'Appearance',
    wallpaperBg: 'Background',
    glassOptics: 'Liquid Glass Optics',
    layoutWidgets: 'Tools',
    searchEngine: 'Search Engine',
    langSelect: 'Language',
    autoDetect: 'Auto Detect (System)',
    secLanguage: 'Language',
    secTheme: 'Theme',
    secColors: 'Theme',
    secTypography: 'Text',
    secBg: 'Background',
    bgUpload: 'Upload',
    bgGenerate: 'Generate',
    bgDetails: 'Details',
    secCustomUpload: 'Upload',
    secGrad: 'Generate',
    secWpOptics: 'Details',
    secOptics: 'Liquid Glass Optics',
    secClock: 'Clock & Date',
    secSearch: 'Search Bar',
    secSearchSettings: 'Search Settings',
    secDock: 'Navigator',
    dockLinks: 'Link List',
    dockSettings: 'Navigator Settings',
    secMore: 'More Config',
    moreDesc: 'Write your own code for custom cards. Glass style is applied automatically. Do not add extra presets here.',
    secHotkeys: 'Keyboard Shortcuts',
    hotkeysDesc: 'Click a shortcut field then press a new key combination. Press Esc to cancel.',
    secSync: 'Settings Sync',
    chromeSync: 'Enable Chrome Cloud Sync',
    secInjection: 'Site Injection',
    injectJs: 'JavaScript',
    injectCss: 'CSS',
    secWidgetManage: 'Widget Management',
    secDragLayout: 'Layout & Alignment',
    dragHint: 'Drag using the top-left icon. A vertical guide will snap the widget to the center.',
    secBackup: 'Settings Sync',
    secResetAll: 'Factory Reset',
    secSearchEngine: 'Default Search Engine',
    chooseEngine: 'Default Search Engine',
    secSearchExp: 'Search Settings',
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
    sysFont: 'Font',
    fontWeight: 'Weight',
    fontSize: 'Size',
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
    resetLayout: 'Reset to Centered Layout',
    resetLayoutBtn: 'Reset Layout',
    dockLinks: 'Custom Dock Links',
    addLink: '+ Add Link',
    resetDock: 'Reset Default Links',
    exportConfig: 'Export Config JSON',
    importConfig: 'Import Config JSON',
    resetAll: 'Reset All Settings to Defaults',
    searchPlaceholder: 'Search or type URL...',
    clockTitle: 'Clock & Date',
    clockDesc: 'Precise time display with multi-language calendar support',
    searchTitle: 'Search & History',
    searchDesc: 'Multi-engine search with suggestions and quick history recall',
    dockTitle: 'Liquid Dock Links',
    dockDesc: 'Customizable quick bookmark dock with free dragging and magnetic snapping',
    notesTitle: 'Notes',
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
    noteResizeHandle: 'Hold to resize note',
    clockDragHandle: 'Hold to drag clock',
    clockResizeHandle: 'Hold to resize clock',
    searchDragHandle: 'Hold to drag search bar',
    resetConfirm: 'Are you sure you want to reset all settings to defaults?',
    importFailed: 'Import failed: Invalid file format',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans',
      'noto-serif': 'Noto Serif',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: 'Linear Gradient',
      radial: 'Radial Glow',
      conic: 'Conic Rotation',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: 'Custom Search Engine',
    },
  },
  ja: {
    enableSearchHistory: "検索履歴を有効化",
    syncHint: "browser.storage.sync で端末間同期します。Chrome にログインし、chrome://settings/syncSetup で拡張機能の同期を有効にしてください。",
    notesAction: "メモを追加",
    enableDock: "ナビゲーターを有効化",
    enableSearch: "検索バーを有効化",
    enableClock: "時計と日付を有効化",
    cloudSync: "クラウド（Chrome 同期）",
    localSync: "ローカル",
    chromeSync: "Chrome 同期を有効化",
    secSync: "設定の同期",
    secHotkeys: "ショートカット",
    secMore: "その他の設定",
    dockSettings: "ナビ設定",
    secNotes: "メモ",
    secSearchSettings: "検索設定",
    secSearch: "検索バー",
    secClock: "時計と日付",
    bgDetails: "詳細",
    bgGenerate: "生成",
    bgUpload: "アップロード",
    secBg: "背景",
    secTheme: "テーマ",
    moreDesc: "ユーザーがコードで作成します。カード枠は液状ガラスが自動適用されます。",
    hotkeysDesc: "ショートカット欄をクリックし、新しいキーを押します。Esc でキャンセル。",
    cardEditorHint: "内容はドラッグハンドルの下に表示され、重なりません。液状ガラス枠は自動適用されます。",
    hkFocusSearch: "検索にフォーカス",
    hkToggleClock: "時計の表示切替",
    hkToggleSearch: "検索の表示切替",
    hkToggleDock: "Dockの表示切替",
    hkAddCustomCard: "カードを追加",
    hkClearSearch: "検索をクリア",
    resetHotkeys: "ショートカットをリセット",
    addCustomCard: "+ カードを追加",
    cardBuilderTitle: "カードエディタ",
    toolboxTitle: "要素",
    tbImage: "画像",
    tbDivider: "区切り線",
    canvasHint: "左から要素を追加し、ドラッグで配置。",
    propsTitle: "プロパティ",
    cardTitleInput: "カードタイトル",
    saveCard: "保存",
    syncNow: "クラウドに同期",
    pullSync: "クラウドから復元",
    tabAppearance: "外観",
    tabTools: "ツール",
    tabAdvanced: "高度な機能",
    pressKeys: "キーを入力…",
    noCustomCards: "カスタムカードなし",
    untitledCard: "無題のカード",
    elementsCount: "要素",
    editCard: "カードを編集",
    newCard: "カードを追加",
    propsEmpty: "要素を選択して編集",
    contentLabel: "内容",
    deleteEl: "要素を削除",
    defaultHeading: "見出し",
    defaultText: "テキストを入力",
    defaultLink: "リンクを開く",
    syncFailed: "同期失敗：",
    syncPushed: "Chrome Sync に送信しました",
    syncPullFailed: "クラウド復元失敗：",
    syncPulled: "クラウドから復元しました。再読み込みします…",
    syncUnavailable: "Chrome Sync を利用できません",
    controlCenter: 'コントロールセンター',
    appearanceTheme: '外観とテーマ',
    wallpaperBg: '壁紙',
    glassOptics: 'ガラス光学',
    layoutWidgets: 'ウィジェット',
    searchEngine: '検索エンジン',
    langSelect: '表示言語',
    autoDetect: '自動検出',
    secLanguage: '言語',
    secColors: 'カラー＆テーマ工房',
    secTypography: '文字',
    secCustomUpload: '壁紙画像のアップロード',
    secGrad: 'グラデーション壁紙生成',
    secWpOptics: '背景効果と景深',
    secOptics: '液状ガラス光学プロパティ',
    secWidgetManage: 'ウィジェット管理',
    secDragLayout: 'レイアウト調整',
    dragHint: '上部のアイコンをドラッグして移動。画面中央に近づくと吸着ガイド線が表示されます。',
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
    sysFont: 'フォント',
    fontWeight: '太さ',
    fontSize: 'サイズ',
    dropzoneText: '画像をドラッグ＆ドロップ',
    dropzoneSub: '高解像度画像をローカルデータベースに保存',
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
    searchTitle: '検索と履歴',
    searchDesc: '複数検索エンジンのクイック切り替え',
    dockTitle: 'リキッド Dock リンク (Liquid Dock)',
    dockDesc: 'カスタムショートカットとアイコン、自由ドラッグとスナップ配置',
    notesTitle: 'メモ',
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
    dockInputIcon: 'アイコン略称',
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
    noteResizeHandle: '伸縮',
    clockDragHandle: 'ドラッグして時計を移動',
    clockResizeHandle: '伸縮',
    searchDragHandle: 'ドラッグして検索バーを移動',
    resetConfirm: 'すべての設定を初期状態にリセットしますか？',
    importFailed: 'インポートに失敗しました：無効なファイル形式です',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans JP',
      'noto-serif': 'Noto Serif JP',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: '線形グラデーション',
      radial: '放射状グラデーション',
      conic: '円錐グラデーション',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: 'カスタム検索エンジン',
    },
  },
  ko: {
    enableSearchHistory: "검색 기록 사용",
    syncHint: "browser.storage.sync로 기기 간 설정을 동기화합니다. Chrome에 로그인하고 chrome://settings/syncSetup에서 확장 프로그램 동기화를 켜세요.",
    notesAction: "메모 추가",
    enableDock: "내비게이터 사용",
    enableSearch: "검색바 사용",
    enableClock: "시계 및 날짜 사용",
    cloudSync: "클라우드 (Chrome 동기화)",
    localSync: "로컬",
    chromeSync: "Chrome 동기화 사용",
    secSync: "설정 동기화",
    secHotkeys: "단축키",
    secMore: "추가 구성",
    dockSettings: "내비 설정",
    secNotes: "메모",
    secSearchSettings: "검색 설정",
    secSearch: "검색바",
    secClock: "시계 및 날짜",
    bgDetails: "세부",
    bgGenerate: "생성",
    bgUpload: "업로드",
    secBg: "배경",
    secTheme: "테마",
    moreDesc: "사용자가 코드로 작성합니다. 카드 프레임에는 액체 유리가 자동 적용됩니다.",
    hotkeysDesc: "단축키 필드를 클릭한 뒤 새 키 조합을 누르세요. Esc로 취소.",
    cardEditorHint: "콘텐츠는 드래그 핸들 아래에 표시되며 겹치지 않습니다. 액체 유리 프레임이 자동 적용됩니다.",
    hkFocusSearch: "검색 포커스",
    hkToggleClock: "시계 전환",
    hkToggleSearch: "검색 전환",
    hkToggleDock: "독 전환",
    hkAddCustomCard: "카드 추가",
    hkClearSearch: "검색 지우기",
    resetHotkeys: "단축키 초기화",
    addCustomCard: "+ 카드 추가",
    cardBuilderTitle: "카드 편집기",
    toolboxTitle: "요소",
    tbImage: "이미지",
    tbDivider: "구분선",
    canvasHint: "왼쪽에서 요소를 추가하고 드래그하세요.",
    propsTitle: "속성",
    cardTitleInput: "카드 제목",
    saveCard: "저장",
    syncNow: "클라우드 동기화",
    pullSync: "클라우드에서 복원",
    tabAppearance: "모양",
    tabTools: "도구",
    tabAdvanced: "고급 기능",
    pressKeys: "키 입력…",
    noCustomCards: "맞춤 카드 없음",
    untitledCard: "제목 없는 카드",
    elementsCount: "요소",
    editCard: "카드 편집",
    newCard: "카드 추가",
    propsEmpty: "편집할 요소 선택",
    contentLabel: "내용",
    deleteEl: "요소 삭제",
    defaultHeading: "제목",
    defaultText: "텍스트 입력",
    defaultLink: "링크 열기",
    syncFailed: "동기화 실패: ",
    syncPushed: "Chrome Sync로 전송됨",
    syncPullFailed: "클라우드 복원 실패: ",
    syncPulled: "클라우드에서 복원됨. 새로고침…",
    syncUnavailable: "Chrome Sync 사용 불가",
    controlCenter: '제어 센터',
    appearanceTheme: '모양 및 테마',
    wallpaperBg: '배경화면',
    glassOptics: '유리 광학',
    layoutWidgets: '위젯',
    searchEngine: '검색 엔진',
    langSelect: '표시 언어',
    autoDetect: '자동 감지',
    secLanguage: '언어',
    secColors: '색상 및 테마 스튜디오',
    secTypography: '텍스트',
    secCustomUpload: '사용자 지정 배경화면',
    secGrad: '그라디언트 생성기',
    secWpOptics: '배경 효과 및 심도',
    secOptics: '액체 유리 광학 속성',
    secWidgetManage: '위젯 관리',
    secDragLayout: '레이아웃 정렬',
    dragHint: '상단 아이콘을 드래그하여 이동하세요. 화면 중앙에 가까워지면 정렬 가이드가 나타납니다.',
    secDock: '독 바로가기',
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
    sysFont: '글꼴',
    fontWeight: '굵기',
    fontSize: '크기',
    dropzoneText: '이미지를 클릭하거나 드래그하세요',
    dropzoneSub: '고해상도 이미지를 로컬 데이터베이스에 안전하게 저장합니다',
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
    displacement: '굴절 강도',
    borderRadius: '모서리 둥글기',
    widgetHub: '위젯 허브 열기',
    resetLayout: '기본 중앙 정렬로 초기화',
    resetLayoutBtn: '배치 초기화',
    dockLinks: '독 바로가기',
    addLink: '+ 바로가기 추가',
    resetDock: '기본 링크로 복원',
    exportConfig: '설정 JSON 내보내기',
    importConfig: '설정 JSON 가져오기',
    resetAll: '모든 설정을 기본값으로 초기화',
    searchPlaceholder: '검색어를 입력하거나 URL을 입력하세요...',
    clockTitle: '시계 및 날짜',
    clockDesc: '다국어 지원 정밀 시계 및 날짜 표시',
    searchTitle: '검색 및 기록',
    searchDesc: '다중 검색 엔진 및 최근 검색 기록 자동 회상',
    dockTitle: '리퀴드 독 바로가기 (Liquid Dock)',
    dockDesc: '사용자 지정 웹사이트 바로가기 독, 자유로운 드래그 및 정렬 지원',
    notesTitle: '메모',
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
    hue: '색조',
    hexCode: 'HEX 코드',
    doneStudio: '설정 완료',
    dockModalAdd: '바로가기 추가',
    dockModalEdit: '바로가기 편집',
    dockInputTitle: '제목',
    dockInputTitlePh: '예: GitHub',
    dockInputUrl: '웹 주소',
    dockInputIcon: '아이콘 약어',
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
    noteResizeHandle: '크기 조절',
    clockDragHandle: '시계를 드래그하여 이동',
    clockResizeHandle: '크기 조절',
    searchDragHandle: '검색창을 드래그하여 이동',
    resetConfirm: '모든 설정을 기본값으로 초기화하시겠습니까?',
    importFailed: '설정 가져오기 실패: 올바르지 않은 파일 형식입니다',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans KR',
      'noto-serif': 'Noto Serif KR',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: '선형 그라디언트',
      radial: '방사형 그라디언트',
      conic: '원뿔형 그라디언트',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: '사용자 지정 검색엔진',
    },
  },
  de: {
    enableSearchHistory: "Suchverlauf aktivieren",
    syncHint: "Nutzt browser.storage.sync für geräteübergreifende Einstellungen. In Chrome anmelden und unter chrome://settings/syncSetup die Erweiterungssynchronisierung aktivieren.",
    notesAction: "Notiz hinzufügen",
    enableDock: "Navigator aktivieren",
    enableSearch: "Suchleiste aktivieren",
    enableClock: "Uhr & Datum aktivieren",
    cloudSync: "Cloud (Chrome Sync)",
    localSync: "Lokal",
    chromeSync: "Chrome-Sync aktivieren",
    secSync: "Einstellungen synchronisieren",
    secHotkeys: "Tastenkürzel",
    secMore: "Weitere Konfiguration",
    dockSettings: "Navigator-Einstellungen",
    secNotes: "Notizen",
    secSearchSettings: "Sucheinstellungen",
    secSearch: "Suchleiste",
    secClock: "Uhr & Datum",
    bgDetails: "Details",
    bgGenerate: "Erzeugen",
    bgUpload: "Hochladen",
    secBg: "Hintergrund",
    secTheme: "Design",
    moreDesc: "Eigener Code. Liquid-Glass-Rahmen wird vom System angewendet.",
    hotkeysDesc: "Klicken Sie auf ein Kürzelfeld und drücken Sie eine neue Tastenkombination. Esc zum Abbrechen.",
    cardEditorHint: "Inhalt erscheint unter dem Ziehgriff ohne Überlappung. Liquid-Glass-Rahmen wird automatisch angewendet.",
    hkFocusSearch: "Suche fokussieren",
    hkToggleClock: "Uhr umschalten",
    hkToggleSearch: "Suche umschalten",
    hkToggleDock: "Dock umschalten",
    hkAddCustomCard: "Karte hinzufügen",
    hkClearSearch: "Suche leeren",
    resetHotkeys: "Shortcuts zurücksetzen",
    addCustomCard: "+ Karte hinzufügen",
    cardBuilderTitle: "Karten-Editor",
    toolboxTitle: "Elemente",
    tbImage: "Bild",
    tbDivider: "Trenner",
    canvasHint: "Links Elemente hinzufügen und ziehen.",
    propsTitle: "Eigenschaften",
    cardTitleInput: "Kartentitel",
    saveCard: "Speichern",
    syncNow: "Jetzt synchronisieren",
    pullSync: "Aus Cloud wiederherstellen",
    tabAppearance: "Erscheinung",
    tabTools: "Werkzeuge",
    tabAdvanced: "Erweitert",
    pressKeys: "Tasten drücken…",
    noCustomCards: "Keine Karten",
    untitledCard: "Unbenannt",
    elementsCount: "Elemente",
    editCard: "Karte bearbeiten",
    newCard: "Neue Karte",
    propsEmpty: "Element zum Bearbeiten wählen",
    contentLabel: "Inhalt",
    deleteEl: "Element löschen",
    defaultHeading: "Überschrift",
    defaultText: "Text eingeben",
    defaultLink: "Link öffnen",
    syncFailed: "Sync fehlgeschlagen: ",
    syncPushed: "Zu Chrome Sync gesendet",
    syncPullFailed: "Wiederherstellung fehlgeschlagen: ",
    syncPulled: "Wiederhergestellt. Neu laden…",
    syncUnavailable: "Chrome Sync nicht verfügbar",
    controlCenter: 'Kontrollzentrum',
    appearanceTheme: 'Erscheinungsbild',
    wallpaperBg: 'Hintergrund',
    glassOptics: 'Glasoptik',
    layoutWidgets: 'Widgets',
    searchEngine: 'Suchmaschine',
    langSelect: 'Sprache',
    autoDetect: 'Automatisch (System)',
    secLanguage: 'Sprache',
    secColors: 'Farb- & Themenstudio',
    secTypography: 'Text',
    secCustomUpload: 'Hintergrundbild hochladen',
    secGrad: 'Farbverlauf-Generator',
    secWpOptics: 'Hintergrund-Optik & Tiefe',
    secOptics: 'Liquid Glass Eigenschaften',
    secWidgetManage: 'Widget-Verwaltung',
    secDragLayout: 'Layout-Ausrichtung',
    dragHint: 'Am Symbol oben links ziehen. Eine vertikale Linie rastet das Widget in der Mitte ein.',
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
    sysFont: 'Schrift',
    fontWeight: 'Stärke',
    fontSize: 'Größe',
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
    resetLayout: 'Auf Standardlayout zurücksetzen',
    resetLayoutBtn: 'Layout zurücksetzen',
    dockLinks: 'Dock-Verknüpfungen',
    addLink: '+ Link hinzufügen',
    resetDock: 'Standardlinks wiederherstellen',
    exportConfig: 'Einstellungen exportieren',
    importConfig: 'Einstellungen importieren',
    resetAll: 'Alle Einstellungen zurücksetzen',
    searchPlaceholder: 'Suchen oder URL eingeben...',
    clockTitle: 'Uhr & Datum',
    clockDesc: 'Präzise Zeitanzeige mit mehrsprachigem Kalender',
    searchTitle: 'Suche & Verlauf',
    searchDesc: 'Mehrere Suchmaschinen und schneller Verlaufsaufruf',
    dockTitle: 'Liquid Dock Schnellzugriff',
    dockDesc: 'Anpassbare Shortcut-Leiste mit freiem Drag & Drop und Ausrichtung',
    notesTitle: 'Notizen',
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
    noteResizeHandle: 'Halten zum Vergrößern/Verkleinern',
    clockDragHandle: 'Halten zum Ziehen der Uhr',
    clockResizeHandle: 'Halten zum Skalieren der Uhr',
    searchDragHandle: 'Halten zum Ziehen der Suchleiste',
    resetConfirm: 'Möchten Sie wirklich alle Einstellungen auf die Standardwerte zurücksetzen?',
    importFailed: 'Import fehlgeschlagen: Ungültiges Dateiformat',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans',
      'noto-serif': 'Noto Serif',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: 'Linearer Farbverlauf',
      radial: 'Radialer Farbverlauf',
      conic: 'Konischer Farbverlauf',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: 'Benutzerdefinierte Suchmaschine',
    },
  },
  fr: {
    enableSearchHistory: "Activer l’historique de recherche",
    syncHint: "Utilise browser.storage.sync pour synchroniser entre appareils. Connectez-vous à Chrome et activez la sync des extensions dans chrome://settings/syncSetup.",
    notesAction: "Ajouter une note",
    enableDock: "Activer le navigateur",
    enableSearch: "Activer la barre de recherche",
    enableClock: "Activer horloge et date",
    cloudSync: "Cloud (Chrome Sync)",
    localSync: "Local",
    chromeSync: "Activer Chrome Sync",
    secSync: "Synchronisation",
    secHotkeys: "Raccourcis",
    secMore: "Plus de configuration",
    dockSettings: "Paramètres du navigateur",
    secNotes: "Notes",
    secSearchSettings: "Paramètres de recherche",
    secSearch: "Barre de recherche",
    secClock: "Horloge et date",
    bgDetails: "Détails",
    bgGenerate: "Générer",
    bgUpload: "Téléverser",
    secBg: "Arrière-plan",
    secTheme: "Thème",
    moreDesc: "Écrivez votre code. Le style liquid glass est appliqué automatiquement.",
    hotkeysDesc: "Cliquez sur un champ, puis appuyez sur une nouvelle combinaison. Esc pour annuler.",
    cardEditorHint: "Le contenu s'affiche sous la poignée sans chevauchement. Le cadre liquid glass est appliqué automatiquement.",
    hkFocusSearch: "Focus recherche",
    hkToggleClock: "Basculer horloge",
    hkToggleSearch: "Basculer recherche",
    hkToggleDock: "Basculer dock",
    hkAddCustomCard: "Ajouter carte",
    hkClearSearch: "Effacer recherche",
    resetHotkeys: "Réinitialiser raccourcis",
    addCustomCard: "+ Ajouter carte",
    cardBuilderTitle: "Éditeur de carte",
    toolboxTitle: "Éléments",
    tbImage: "Image",
    tbDivider: "Séparateur",
    canvasHint: "Ajoutez des éléments à gauche et glissez.",
    propsTitle: "Propriétés",
    cardTitleInput: "Titre de la carte",
    saveCard: "Enregistrer",
    syncNow: "Synchroniser",
    pullSync: "Restaurer depuis le cloud",
    tabAppearance: "Apparence",
    tabTools: "Outils",
    tabAdvanced: "Avancé",
    pressKeys: "Appuyez sur les touches…",
    noCustomCards: "Aucune carte",
    untitledCard: "Sans titre",
    elementsCount: "éléments",
    editCard: "Modifier la carte",
    newCard: "Nouvelle carte",
    propsEmpty: "Sélectionnez un élément",
    contentLabel: "Contenu",
    deleteEl: "Supprimer",
    defaultHeading: "Titre",
    defaultText: "Saisir le texte",
    defaultLink: "Ouvrir le lien",
    syncFailed: "Échec sync : ",
    syncPushed: "Envoyé vers Chrome Sync",
    syncPullFailed: "Échec restauration : ",
    syncPulled: "Restauré. Rechargement…",
    syncUnavailable: "Chrome Sync indisponible",
    controlCenter: 'Centre de contrôle',
    appearanceTheme: 'Apparence',
    wallpaperBg: 'Fond d\'écran',
    glassOptics: 'Optique du verre',
    layoutWidgets: 'Widgets',
    searchEngine: 'Moteur de recherche',
    langSelect: 'Langue de l\'interface',
    autoDetect: 'Détection automatique (Auto)',
    secLanguage: 'Langue',
    secColors: 'Studio Couleurs & Thème',
    secTypography: 'Texte',
    secCustomUpload: 'Téléverser un fond d\'écran',
    secGrad: 'Générateur de dégradé',
    secWpOptics: 'Effets d\'arrière-plan et profondeur',
    secOptics: 'Propriétés optiques Liquid Glass',
    secWidgetManage: 'Gestion des widgets',
    secDragLayout: 'Disposition et alignement',
    dragHint: 'Faites glisser depuis l’icône en haut à gauche. Un guide vertical s’aligne au centre.',
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
    sysFont: 'Police',
    fontWeight: 'Graisse',
    fontSize: 'Taille',
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
    resetLayout: 'Rétablir la disposition centrée',
    resetLayoutBtn: 'Réinitialiser',
    dockLinks: 'Raccourcis du Dock',
    addLink: '+ Ajouter un lien',
    resetDock: 'Rétablir les liens par défaut',
    exportConfig: 'Exporter la configuration',
    importConfig: 'Importer la configuration',
    resetAll: 'Réinitialiser tous les paramètres',
    searchPlaceholder: 'Rechercher ou saisir une URL...',
    clockTitle: 'Horloge et date',
    clockDesc: 'Affichage précis de l\'heure et calendrier multilingue',
    searchTitle: 'Recherche et historique',
    searchDesc: 'Moteurs multiples et rappel rapide de l\'historique',
    dockTitle: 'Dock liquide (Liquid Dock)',
    dockDesc: 'Barre de raccourcis personnalisable avec glisser-déposer fluide',
    notesTitle: 'Notes',
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
    noteResizeHandle: 'Maintenir pour redimensionner la note',
    clockDragHandle: 'Maintenir pour déplacer l\'horloge',
    clockResizeHandle: 'Maintenir pour redimensionner l\'horloge',
    searchDragHandle: 'Maintenir pour déplacer la barre de recherche',
    resetConfirm: 'Voulez-vous vraiment réinitialiser tous les paramètres aux valeurs par défaut ?',
    importFailed: 'Échec de l\'importation : format de fichier invalide',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans',
      'noto-serif': 'Noto Serif',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: 'Dégradé linéaire',
      radial: 'Dégradé radial',
      conic: 'Dégradé conique',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: 'Moteur de recherche personnalisé',
    },
  },
  es: {
    enableSearchHistory: "Activar historial de búsqueda",
    syncHint: "Usa browser.storage.sync para sincronizar entre dispositivos. Inicia sesión en Chrome y activa la sincronización de extensiones en chrome://settings/syncSetup.",
    notesAction: "Añadir nota",
    enableDock: "Activar navegador",
    enableSearch: "Activar barra de búsqueda",
    enableClock: "Activar reloj y fecha",
    cloudSync: "Nube (Chrome Sync)",
    localSync: "Local",
    chromeSync: "Activar Chrome Sync",
    secSync: "Sincronización",
    secHotkeys: "Atajos",
    secMore: "Más configuración",
    dockSettings: "Ajustes del navegador",
    secNotes: "Notas",
    secSearchSettings: "Ajustes de búsqueda",
    secSearch: "Barra de búsqueda",
    secClock: "Reloj y fecha",
    bgDetails: "Detalles",
    bgGenerate: "Generar",
    bgUpload: "Subir",
    secBg: "Fondo",
    secTheme: "Tema",
    moreDesc: "Escribe tu propio código. El estilo liquid glass se aplica automáticamente.",
    hotkeysDesc: "Haz clic en un campo y pulsa una nueva combinación. Esc para cancelar.",
    cardEditorHint: "El contenido aparece bajo el asa de arrastre sin solaparse. El marco liquid glass se aplica automáticamente.",
    hkFocusSearch: "Enfocar búsqueda",
    hkToggleClock: "Alternar reloj",
    hkToggleSearch: "Alternar búsqueda",
    hkToggleDock: "Alternar dock",
    hkAddCustomCard: "Añadir tarjeta",
    hkClearSearch: "Limpiar búsqueda",
    resetHotkeys: "Restablecer atajos",
    addCustomCard: "+ Añadir tarjeta",
    cardBuilderTitle: "Editor de tarjeta",
    toolboxTitle: "Elementos",
    tbImage: "Imagen",
    tbDivider: "Divisor",
    canvasHint: "Añade elementos a la izquierda y arrastra.",
    propsTitle: "Propiedades",
    cardTitleInput: "Título de tarjeta",
    saveCard: "Guardar",
    syncNow: "Sincronizar ahora",
    pullSync: "Restaurar desde la nube",
    tabAppearance: "Apariencia",
    tabTools: "Herramientas",
    tabAdvanced: "Avanzado",
    pressKeys: "Pulsa teclas…",
    noCustomCards: "Sin tarjetas",
    untitledCard: "Sin título",
    elementsCount: "elementos",
    editCard: "Editar tarjeta",
    newCard: "Nueva tarjeta",
    propsEmpty: "Selecciona un elemento",
    contentLabel: "Contenido",
    deleteEl: "Eliminar",
    defaultHeading: "Título",
    defaultText: "Escribe texto",
    defaultLink: "Abrir enlace",
    syncFailed: "Error de sync: ",
    syncPushed: "Enviado a Chrome Sync",
    syncPullFailed: "Error al restaurar: ",
    syncPulled: "Restaurado. Recargando…",
    syncUnavailable: "Chrome Sync no disponible",
    controlCenter: 'Centro de control',
    appearanceTheme: 'Apariencia',
    wallpaperBg: 'Fondo de pantalla',
    glassOptics: 'Óptica de cristal',
    layoutWidgets: 'Widgets',
    searchEngine: 'Motor de búsqueda',
    langSelect: 'Idioma de interfaz',
    autoDetect: 'Detección automática (Auto)',
    secLanguage: 'Idioma',
    secColors: 'Estudio de colores y tema',
    secTypography: 'Texto',
    secCustomUpload: 'Subir fondo personalizado',
    secGrad: 'Generador de degradados',
    secWpOptics: 'Efectos de fondo y profundidad',
    secOptics: 'Óptica de cristal líquido',
    secWidgetManage: 'Gestión de widgets',
    secDragLayout: 'Disposición y alineación',
    dragHint: 'Arrastra desde el icono superior izquierdo. Una guía vertical se ajustará al centro.',
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
    sysFont: 'Fuente',
    fontWeight: 'Grosor',
    fontSize: 'Tamaño',
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
    resetLayout: 'Restablecer diseño centrado',
    resetLayoutBtn: 'Restablecer',
    dockLinks: 'Accesos del Dock',
    addLink: '+ Añadir enlace',
    resetDock: 'Restaurar predeterminados',
    exportConfig: 'Exportar configuración JSON',
    importConfig: 'Importar configuración JSON',
    resetAll: 'Restablecer todos los ajustes',
    searchPlaceholder: 'Buscar o escribir URL...',
    clockTitle: 'Reloj y fecha',
    clockDesc: 'Visualización precisa de la hora y calendario multilingüe',
    searchTitle: 'Búsqueda e historial',
    searchDesc: 'Motores múltiples y recuperación rápida del historial',
    dockTitle: 'Barra Liquid Dock',
    dockDesc: 'Barra de accesos directos personalizable con arrastre fluido y ajuste magnético',
    notesTitle: 'Notas',
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
    noteResizeHandle: 'Mantén presionado para redimensionar la nota',
    clockDragHandle: 'Mantén presionado para arrastrar el reloj',
    clockResizeHandle: 'Mantén presionado para redimensionar el reloj',
    searchDragHandle: 'Mantén presionado para arrastrar la barra de búsqueda',
    resetConfirm: '¿Estás seguro de que deseas restablecer todos los ajustes a los valores predeterminados?',
    importFailed: 'Error de importación: formato de archivo no válido',
    fonts: {
      system: 'System Sans-Serif',
      inter: 'Inter',
      outfit: 'Outfit',
      poppins: 'Poppins',
      'plus-jakarta': 'Plus Jakarta Sans',
      lexend: 'Lexend',
      'jetbrains-mono': 'JetBrains Mono',
      'fira-code': 'Fira Code',
      'noto-sans': 'Noto Sans',
      'noto-serif': 'Noto Serif',
      'lxgw-wenkai': 'LXGW WenKai',
      jhenghei: 'Microsoft JhengHei',
      georgia: 'Georgia',
      playfair: 'Playfair Display',
      cinzel: 'Cinzel',
      orbitron: 'Orbitron',
      montserrat: 'Montserrat',
    },
    gradTypes: {
      linear: 'Gradiente lineal',
      radial: 'Gradiente radial',
      conic: 'Gradiente cónico',
    },
    engineNames: {
      google: 'Google',
      bing: 'Microsoft Bing',
      duckduckgo: 'DuckDuckGo',
      brave: 'Brave Search',
      ecosia: 'Ecosia',
      yahoo: 'Yahoo!',
      baidu: 'Baidu',
      github: 'GitHub',
      youtube: 'YouTube',
      custom: 'Motor de búsqueda personalizado',
    },
  },
};

const FONT_MAP = {
  system: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  inter: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  outfit: "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif",
  poppins: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
  'plus-jakarta': "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
  lexend: "'Lexend', -apple-system, BlinkMacSystemFont, sans-serif",
  'jetbrains-mono': "'JetBrains Mono', 'Fira Code', monospace",
  'fira-code': "'Fira Code', 'JetBrains Mono', monospace",
  'noto-sans': "'Noto Sans TC', 'Noto Sans SC', 'Noto Sans', sans-serif",
  'noto-serif': "'Noto Serif TC', 'Noto Serif SC', 'Noto Serif', serif",
  'lxgw-wenkai': "'LXGW WenKai Mono TC', 'LXGW WenKai', cursive, sans-serif",
  jhenghei: "'Microsoft JhengHei', '微軟正黑體', 'PingFang TC', sans-serif",
  georgia: "Georgia, 'Times New Roman', serif",
  playfair: "'Playfair Display', Georgia, serif",
  cinzel: "'Cinzel', Georgia, serif",
  orbitron: "'Orbitron', -apple-system, sans-serif",
  montserrat: "'Montserrat', -apple-system, sans-serif",
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
let activeColorTarget = 'bg';
let activeDynamicWallpaper = null;
let dynamicAnimFrame = null;
let cropImageSource = null;
let searchHistory = [];
let currentGradientState = null;

// ==========================================
// Storage Helper (Chrome Extension + Web Fallback)
// ==========================================
let useChromeSync = true; // preference only; frequent writes always go to local

// Debounce helper to avoid browser.storage quota (MAX_WRITE_OPERATIONS_PER_MINUTE)
function createDebounced(fn, wait) {
  let t = null;
  let lastArgs = null;
  const debounced = function (...args) {
    lastArgs = args;
    if (t) clearTimeout(t);
    t = setTimeout(() => {
      t = null;
      fn.apply(null, lastArgs);
    }, wait);
  };
  debounced.flush = function () {
    if (t) {
      clearTimeout(t);
      t = null;
      if (lastArgs) fn.apply(null, lastArgs);
    }
  };
  return debounced;
}

const AppStorage = {
  // Always prefer local for get/set to avoid sync write quota during slider drags.
  // Chrome Sync is only used via pushToSync / pullFromSync.
  get: (keys, cb) => {
    if (typeof chrome !== 'undefined' && browser.storage && browser.storage.local) {
      browser.storage.local.get(keys, (res) => {
        if (browser.runtime && browser.runtime.lastError) {
          // swallow quota/runtime errors
          cb(res || {});
          return;
        }
        cb(res || {});
      });
    } else {
      const res = {};
      keys.forEach((k) => {
        try {
          const v = localStorage.getItem('lg_' + k);
          if (v) res[k] = JSON.parse(v);
        } catch (e) { }
      });
      cb(res);
    }
  },
  set: (items, cb) => {
    if (typeof chrome !== 'undefined' && browser.storage && browser.storage.local) {
      browser.storage.local.set(items, () => {
        if (browser.runtime && browser.runtime.lastError) {
          // Ignore quota errors on local (rare); still call cb
          if (cb) cb();
          return;
        }
        if (cb) cb();
      });
    } else {
      Object.entries(items).forEach(([k, v]) => {
        try {
          localStorage.setItem('lg_' + k, JSON.stringify(v));
        } catch (e) { }
      });
      if (cb) cb();
    }
  },
  clear: (cb) => {
    if (typeof chrome !== 'undefined' && browser.storage) {
      const done = () => { if (cb) cb(); };
      if (browser.storage.local) browser.storage.local.clear(() => {
        if (browser.storage.sync) browser.storage.sync.clear(done);
        else done();
      });
      else if (browser.storage.sync) browser.storage.sync.clear(done);
      else done();
    } else {
      try {
        const keysToRemove = [];
        for (let i = 0; i < localStorage.length; i++) {
          const k = localStorage.key(i);
          if (k && k.startsWith('lg_')) keysToRemove.push(k);
        }
        keysToRemove.forEach((k) => localStorage.removeItem(k));
      } catch (e) { }
      if (cb) cb();
    }
  },
  // Explicit sync helpers
  pushToSync: (cb) => {
    if (typeof chrome === 'undefined' || !browser.storage || !browser.storage.sync || !browser.storage.local) {
      if (cb) cb(new Error('Chrome Sync unavailable'));
      return;
    }
    browser.storage.local.get(null, (all) => {
      browser.storage.sync.set(all, () => {
        if (cb) cb(browser.runtime && browser.runtime.lastError ? browser.runtime.lastError : null);
      });
    });
  },
  pullFromSync: (cb) => {
    if (typeof chrome === 'undefined' || !browser.storage || !browser.storage.sync) {
      if (cb) cb(new Error('Chrome Sync unavailable'));
      return;
    }
    browser.storage.sync.get(null, (data) => {
      if (browser.runtime && browser.runtime.lastError) {
        if (cb) cb(browser.runtime.lastError);
        return;
      }
      browser.storage.local.set(data || {}, () => {
        if (cb) cb(null, data);
      });
    });
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

  // Strict locale pick: never silently force English when the locale exists
  const dict =
    TRANSLATIONS[resolvedLanguage] ||
    (resolvedLanguage && resolvedLanguage.startsWith('zh') ? TRANSLATIONS['zh-TW'] : null) ||
    TRANSLATIONS.en ||
    TRANSLATIONS['zh-TW'] ||
    {};
  const enDict = TRANSLATIONS.en || {};
  const zhDict = TRANSLATIONS['zh-TW'] || {};

  // Prefer current locale → en → zh-TW → provided fallback
  // For zh-CN / zh-TW, prefer Chinese family before English
  const t = (key, fallback) => {
    if (dict && dict[key] != null && dict[key] !== '') return dict[key];
    if (resolvedLanguage && resolvedLanguage.startsWith('zh')) {
      if (zhDict[key] != null && zhDict[key] !== '') return zhDict[key];
    }
    if (enDict[key] != null && enDict[key] !== '') return enDict[key];
    return fallback != null ? fallback : '';
  };

  const setText = (id, txt) => {
    const el = document.getElementById(id);
    if (el && txt != null && txt !== '') el.textContent = txt;
  };

  const setAttr = (id, attr, val) => {
    const el = document.getElementById(id);
    if (el && val != null && val !== '') el.setAttribute(attr, val);
  };

  // Header & Navigation (3 top-level tabs)
  setText('lbl-control-panel-title', t('controlCenter'));
  setText('tab-btn-appearance', t('tabAppearance', 'Appearance'));
  setText('tab-btn-tools', t('tabTools', 'Tools'));
  setText('tab-btn-advanced', t('tabAdvanced', 'Advanced'));
  // Hotkey action labels
  setText('hk-lbl-open-control', t('hkOpenControl', t('controlCenter', 'Open control center')));
  setText('hk-lbl-focus-search', t('hkFocusSearch', 'Focus search'));
  setText('hk-lbl-reset-layout', t('hkResetLayout', t('resetLayoutBtn', 'Reset layout')));
  setText('hk-lbl-toggle-clock', t('hkToggleClock', 'Toggle clock'));
  setText('hk-lbl-toggle-search', t('hkToggleSearch', 'Toggle search'));
  setText('hk-lbl-toggle-dock', t('hkToggleDock', 'Toggle dock'));
  setText('hk-lbl-add-note', t('hkAddNote', t('addNote', 'Add note')));
  setText('hk-lbl-add-custom-card', t('hkAddCustomCard', 'Add custom card'));
  setText('hk-lbl-export-config', t('hkExportConfig', t('exportConfig', 'Export settings')));
  setText('hk-lbl-clear-search', t('hkClearSearch', 'Clear search'));
  setText('reset-hotkeys-btn', t('resetHotkeys', 'Reset shortcuts'));
  setText('open-card-builder-btn', t('addCustomCard', '+ Add custom card'));
  setText('lbl-card-builder-title', t('cardBuilderTitle', 'Custom card editor'));
  setText('lbl-card-editor-hint', t('cardEditorHint', 'Content appears below the drag handle without overlapping. Liquid-glass chrome is applied automatically.'));
  setText('lbl-toolbox-title', t('toolboxTitle', 'Elements'));
  setText('tb-heading', t('defaultHeading', 'Heading'));
  setText('tb-text', t('defaultText', 'Text'));
  setText('tb-link', t('defaultLink', 'Link button'));
  setText('tb-image', t('tbImage', 'Image'));
  setText('tb-divider', t('tbDivider', 'Divider'));
  setText('lbl-canvas-hint', t('canvasHint', 'Click items on the left to add elements. Drag to reposition.'));
  setText('lbl-props-title', t('propsTitle', 'Properties'));
  setText('lbl-card-title-input', t('cardTitleInput', 'Card title (shown in the settings list)'));
  setText('save-card-builder-btn', t('saveCard', 'Save card'));
  setText('cancel-card-builder-btn', t('cancel', 'Cancel'));
  setText('sync-now-btn', t('syncNow', 'Sync to cloud now'));
  setText('pull-sync-btn', t('pullSync', 'Restore from cloud'));
  if (typeof applyHotkeyLabels === 'function') applyHotkeyLabels();
  if (typeof renderCustomCardsList === 'function') renderCustomCardsList();


  // Section Headers — matching exact hierarchy
  setText('lbl-sec-language', t('secLanguage', 'Language'));
  setText('lbl-sec-theme', t('secTheme', 'Theme'));
  setText('lbl-sec-typography', t('secTypography', 'Text'));
  setText('lbl-sec-bg', t('secBg', 'Background'));
  setText('lbl-bg-upload', t('bgUpload', 'Upload'));
  setText('lbl-bg-generate', t('bgGenerate', 'Generate'));
  setText('lbl-bg-details', t('bgDetails', 'Details'));
  setText('lbl-sec-clock', t('secClock', 'Clock & date'));
  setText('lbl-sec-search', t('secSearch', 'Search bar'));
  setText('lbl-sec-search-settings', t('secSearchSettings', 'Search settings'));
  setText('lbl-sec-dock', t('secDock', 'Navigator'));
  setText('lbl-sec-notes', t('secNotes', 'Notes'));
  setText('lbl-dock-links', t('dockLinks', 'Link list'));
  setText('lbl-dock-settings', t('dockSettings', 'Navigator settings'));
  setText('lbl-sec-more', t('secMore', 'More configuration'));
  setText('lbl-more-desc', t('moreDesc', 'Write your own code. The system applies liquid-glass styling to the card browser.'));
  setText('lbl-sec-hotkeys', t('secHotkeys', 'Shortcuts'));
  setText('lbl-hotkeys-desc', t('hotkeysDesc', 'Click a shortcut field, then press a new key combo. Press Esc to cancel.'));
  setText('lbl-sec-sync', t('secSync', 'Settings sync'));

  setText('lbl-native-clock', t('enableClock', 'Enable clock & date'));
  setText('lbl-native-search', t('enableSearch', 'Enable search bar'));
  setText('lbl-native-dock', t('enableDock', 'Enable navigator'));
  setText('lbl-native-notes', t('notesAction', 'Add note'));
  setText('lbl-search-history', t('enableSearchHistory', t('searchHistory', 'Enable search history')));
  setText('lbl-sync-local', t('localSync', 'Local'));
  setText('lbl-sync-cloud', t('cloudSync', 'Cloud (Chrome Sync across devices)'));
  setText('lbl-sync-hint', t('syncHint', 'Uses browser.storage.sync for cross-device settings. Sign in to Chrome and enable extension sync in chrome://settings/syncSetup.'));

  setText('lbl-chrome-sync', t('chromeSync', 'Enable Chrome Sync'));
  setText('lbl-sec-optics', t('secOptics', 'Liquid glass optics'));
  setText('lbl-sec-reset-all', t('secResetAll', 'Global reset'));
  setText('lbl-choose-engine', t('chooseEngine', 'Default search engine'));
  setText('lbl-custom-engine-title', t('secCustomEngine', 'Custom search engine'));
  setText('lbl-custom-engine-name', t('customEngineNameLbl', 'Engine name'));
  setText('lbl-custom-engine-url', t('customEngineUrlLbl', 'Search URL template (use %s for the query)'));
  setText('save-custom-engine-btn', t('saveCustomEngine', 'Save custom engine'));
  setText('lbl-search-newtab', t('searchNewtab', 'Open results in a new tab'));
  setText('lbl-search-history', t('searchHistory', 'Enable search history'));

  setAttr('custom-engine-name', 'placeholder', t('customEngineNamePh'));

  // Controls & Labels
  setText('lbl-lang-select', t('langSelect'));
  setText('lbl-sys-font', t('sysFont', 'Font'));
  // keep short labels
  setText('lbl-font-weight', t('fontWeight', 'Weight'));
  setText('lbl-font-size', t('fontSize', 'Size'));
  setText('lbl-dropzone-text', t('dropzoneText'));
  setText('lbl-dropzone-sub', t('dropzoneSub'));
  setText('clear-bg-btn', t('clearWp'));
  setText('lbl-grad-type', t('gradType'));
  setText('lbl-grad-start', t('gradStart'));
  setText('lbl-grad-end', t('gradEnd'));
  setText('lbl-grad-angle', t('gradAngle'));
  setText('apply-custom-gradient-btn', t('applyGrad'));
  setText('lbl-wp-overlay', t('wpOverlay'));
  setText('lbl-wp-blur', t('wpBlur'));
  setText('lbl-glass-blur', t('glassBlur'));
  setText('lbl-glass-opacity', t('glassOpacity'));
  setText('lbl-border-opacity', t('borderOpacity'));
  setText('lbl-saturate', t('saturate'));
  setText('lbl-displacement', t('displacement'));
  setText('lbl-radius', t('borderRadius'));
  setText('open-widget-hub', t('widgetHub'));
  setText('lbl-reset-layout', t('resetLayout'));
  setText('lbl-drag-hint', t('dragHint'));
  setText('reset-layout-btn', t('resetLayoutBtn'));
  setText('add-dock-item-btn', t('addLink'));
  setText('export-config-btn', t('exportConfig'));
  setText('import-config-btn', t('importConfig'));
  setText('reset-all-settings-btn', t('resetAll'));

  // Modals: Widget Hub
  setText('lbl-hub-title', t('widgetHubTitle'));
  setText('lbl-hub-clock-title', t('clockTitle'));
  setText('lbl-hub-clock-desc', t('clockDesc'));
  setText('lbl-hub-search-title', t('searchTitle'));
  setText('lbl-hub-search-desc', t('searchDesc'));
  setText('lbl-hub-dock-title', t('dockTitle', 'Quick dock'));
  setText('lbl-hub-dock-desc', t('dockDesc', 'Custom site icons and quick links with free drag and magnetic snapping'));
  setText('lbl-hub-notes-title', t('notesTitle'));
  setText('lbl-hub-notes-desc', t('notesDesc'));
  setText('toggle-clock-btn', t('toggleDisplay'));
  setText('toggle-search-btn', t('toggleDisplay'));
  setText('toggle-dock-btn', t('toggleDisplay'));
  setText('add-note-btn', t('addNote'));
  setText('done-widget-hub', t('done'));

  // Appearance Colors
  setText('lbl-sec-colors', t('secColors', 'Colors'));
  setText('lbl-bg-color', t('bgColor', 'Background'));
  setText('lbl-text-color', t('textColor', 'Text color'));

  // Modals: Dock Item Editor
  setText('dock-modal-title', editingDockIndex >= 0 ? t('dockModalEdit', 'Edit link') : t('dockModalAdd', 'Add link'));
  setText('lbl-dock-input-title', t('dockInputTitle'));
  setAttr('dock-input-title', 'placeholder', t('dockInputTitlePh'));
  setText('lbl-dock-input-url', t('dockInputUrl'));
  setText('lbl-dock-input-icon', t('dockInputIcon'));
  setAttr('dock-input-icon', 'placeholder', t('dockInputIconPh'));
  setText('save-dock-item-btn', t('saveDockItem'));
  setText('cancel-dock-item-btn', t('cancel'));

  // Search Bar, Tooltips & History
  const searchBox = document.getElementById('search-input-box');
  if (searchBox) searchBox.setAttribute('data-placeholder', t('searchPlaceholder', 'Search or enter a URL...'));
  setAttr('clear-search-btn', 'title', t('clearSearchTooltip'));
  setText('search-history-title-lbl', t('historyTitle'));
  setText('clear-all-history-btn', t('clearAllHistory'));
  setAttr('settings-trigger', 'title', t('controlCenter'));

  // Dropdown Items Localization: Font family
  const fontDropdown = document.getElementById('font-family-dropdown');
  if (fontDropdown && dict.fonts) {
    fontDropdown.querySelectorAll('.custom-dropdown-item').forEach((item) => {
      const val = item.dataset.value;
      if (dict.fonts[val]) item.textContent = dict.fonts[val];
    });
    const curFontVal = fontDropdown.dataset.value || 'system';
    const curFontLbl = fontDropdown.querySelector('.custom-dropdown-label');
    if (curFontLbl && dict.fonts[curFontVal]) curFontLbl.textContent = dict.fonts[curFontVal];
  }

  // Dropdown Items Localization: Gradient types
  const gradDropdown = document.getElementById('gradient-type-dropdown');
  if (gradDropdown && dict.gradTypes) {
    gradDropdown.querySelectorAll('.custom-dropdown-item').forEach((item) => {
      const val = item.dataset.value;
      if (dict.gradTypes[val]) item.textContent = dict.gradTypes[val];
    });
    const curGradVal = gradDropdown.dataset.value || 'linear';
    const curGradLbl = gradDropdown.querySelector('.custom-dropdown-label');
    if (curGradLbl && dict.gradTypes[curGradVal]) curGradLbl.textContent = dict.gradTypes[curGradVal];
  }

  // Dropdown Items Localization: Search Engines
  ['settings-engine-dropdown', 'engine-dropdown'].forEach((dropdownId) => {
    const engineDrop = document.getElementById(dropdownId);
    if (engineDrop && dict.engineNames) {
      engineDrop.querySelectorAll('.custom-dropdown-item').forEach((item) => {
        const val = item.dataset.value;
        if (dict.engineNames[val]) item.textContent = dict.engineNames[val];
      });
      const curVal = engineDrop.dataset.value || 'google';
      const curLbl = engineDrop.querySelector('.custom-dropdown-label');
      if (curLbl && dict.engineNames[curVal]) curLbl.textContent = dict.engineNames[curVal];
    }
  });

  // Note Cards Localized Mode Text & Handles
  document.querySelectorAll('.note-card').forEach((card) => {
    const textarea = card.querySelector('.note-textarea');
    const modeBtn = card.querySelector('.note-mode-btn');
    const dragHandle = card.querySelector('.card-drag-handle');
    const resizeHandle = card.querySelector('.note-resize-handle');
    if (textarea) textarea.setAttribute('placeholder', t('notePlaceholder', 'Write a note...'));
    if (dragHandle) dragHandle.setAttribute('title', t('noteDragHandle', 'Drag note'));
    if (resizeHandle) resizeHandle.setAttribute('title', t('noteResizeHandle', 'Resize note'));
    if (modeBtn) {
      const isEditing = textarea && textarea.style.display !== 'none';
      modeBtn.textContent = isEditing ? t('preview', 'Preview') : t('edit', 'Edit');
    }
  });


  // Card builder labels & placeholders
  setText('lbl-card-html', t('cardHtmlLabel', 'HTML'));
  setText('lbl-card-css', t('cardCssLabel', 'CSS'));
  setText('lbl-card-js', t('cardJsLabel', 'JavaScript'));
  setText('lbl-card-editor-hint', t('cardEditorHint', 'Content appears below the drag handle without overlapping. Liquid-glass chrome is applied automatically.'));
  setAttr('card-builder-title-input', 'placeholder', t('untitledCard', 'My card'));
  setAttr('search-input-box', 'data-placeholder', t('searchPlaceholder', 'Search or enter a URL...'));
  const searchBoxEl = document.getElementById('search-input-box');
  if (searchBoxEl && t('searchPlaceholder', 'Search or enter a URL...')) {
    if (!searchBoxEl.textContent.trim()) searchBoxEl.setAttribute('data-empty-ph', t('searchPlaceholder', 'Search or enter a URL...'));
    searchBoxEl.setAttribute('aria-label', t('searchPlaceholder', 'Search or enter a URL...'));
  }
  const dockTitle = document.getElementById('dock-drag-handle');
  if (dockTitle) dockTitle.setAttribute('title', t('dockTitle', 'Dock'));
  setAttr('clock-drag-handle', 'title', t('clockTitle', 'Clock'));
  setAttr('search-drag-handle', 'title', t('searchTitle', 'Search'));


  // Language dropdown: keep native language names; only translate Auto-detect
  const langDrop = document.getElementById('language-dropdown');
  if (langDrop) {
    const autoItem = langDrop.querySelector('.custom-dropdown-item[data-value="auto"]');
    if (autoItem) autoItem.textContent = t('autoDetect', 'Auto-detect');
    const cur = langDrop.querySelector('.custom-dropdown-label');
    const val = langDrop.dataset.value || currentLanguage || 'auto';
    if (cur) {
      if (val === 'auto') cur.textContent = t('autoDetect', 'Auto-detect');
      else {
        const item = langDrop.querySelector('.custom-dropdown-item[data-value="' + val + '"]');
        if (item) cur.textContent = item.textContent.trim();
      }
    }
  }

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
  initColorSettings();
  initDock();
  initResetAll();
  initJsonBackup();

  await loadSettings();
  settingsLoaded = true;
  // Ensure UI language is fully applied (no leftover default strings)
  if (typeof applyLanguage === 'function') applyLanguage(typeof currentLanguage !== 'undefined' ? currentLanguage : 'auto');

  if (!hasSavedLayout()) {
    initDefaultCenterLayout();
  }
});

function hasSavedLayout() {
  const c = document.getElementById('clock-card');
  const s = document.getElementById('search-card');
  return (c && c.dataset.layoutLoaded === '1') || (s && s.dataset.layoutLoaded === '1');
}

function centerCard(card) {
  if (!card) return;
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const w = card.offsetWidth > 0 ? card.offsetWidth : (card.id === 'search-card' ? 620 : 360);
  const l = Math.max(10, Math.round((winW - w) / 2));
  card.style.left = `${l}px`;
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
          const fontVal = FONT_MAP[item.dataset.value] || FONT_MAP.system;
          document.documentElement.style.setProperty('--custom-font-family', fontVal);
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
  if (shouldSave && settingsLoaded) saveLayout();
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
      if (id === 'toggle-native-clock') {
        const clockCard = document.getElementById('clock-card');
        if (clockCard) clockCard.style.display = toggle.classList.contains('active') ? '' : 'none';
        saveLayout();
      }
      if (id === 'toggle-native-search') {
        const searchCard = document.getElementById('search-card');
        if (searchCard) searchCard.style.display = toggle.classList.contains('active') ? '' : 'none';
        saveLayout();
      }
      if (id === 'toggle-native-dock') {
        const dockEl = document.getElementById('liquid-dock');
        if (dockEl) dockEl.style.display = toggle.classList.contains('active') ? '' : 'none';
        saveLayout();
      }
      if (id === 'adv-mode-toggle') {
        document.body.classList.toggle('adv-mode-enabled', toggle.classList.contains('active'));
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

  // Custom CSS Input
  const cssInput = document.getElementById('custom-css-input');
  if (cssInput) {
    let customStyleTag = document.getElementById('prism-custom-css-tag');
    if (!customStyleTag) {
      customStyleTag = document.createElement('style');
      customStyleTag.id = 'prism-custom-css-tag';
      document.head.appendChild(customStyleTag);
    }
    cssInput.addEventListener('input', () => {
      customStyleTag.textContent = cssInput.value;
      saveSettings();
    });
  }

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
  const openHubBtn = null;
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

  const toggleDock = document.getElementById('toggle-dock-btn');
  const dockEl = document.getElementById('liquid-dock');
  if (toggleDock && dockEl) {
    toggleDock.addEventListener('click', () => {
      dockEl.style.display = dockEl.style.display === 'none' ? '' : 'none';
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

  // Bind draggable controls & resizing to default cards
  if (clockCard) {
    bindCardControls(clockCard);
    bindClockResize(clockCard);
  }
  if (searchCard) {
    bindCardControls(searchCard);
    bindSearchResize(searchCard);
  }
  // Control center is fixed (not draggable / not resizable)
  const controlPanel = document.getElementById('control-panel');
  if (controlPanel) {
    controlPanel.classList.remove('draggable-card', 'positioned');
    controlPanel.style.left = '';
    controlPanel.style.top = '';
    controlPanel.style.width = '';
    controlPanel.style.height = '';
  }
  const dock = document.getElementById('liquid-dock');
  if (dock) {
    bindCardControls(dock);
  }
}

// ==========================================
// Equidistant Dimension Guides Helper (|------|)
// ==========================================
function updateEquidistantGuides(g1, g2) {
  const el1 = document.getElementById('equidistant-guide-1');
  const el2 = document.getElementById('equidistant-guide-2');

  const setupEl = (el, g) => {
    if (!el) return;
    if (!g || !isFinite(g.dist) || g.dist < 1) {
      el.classList.remove('active');
      el.style.opacity = '0';
      el.innerHTML = '';
      el.style.left = '';
      el.style.top = '';
      el.style.width = '';
      el.style.height = '';
      return;
    }
    el.classList.add('active');
    el.style.opacity = '1';
    if (g.type === 'h') {
      el.className = 'equidistant-guide equidistant-guide-h active';
      const left = Math.round(Math.min(g.x1, g.x2));
      const width = Math.max(4, Math.round(Math.abs(g.x2 - g.x1)));
      el.style.left = left + 'px';
      el.style.top = Math.round(g.y) + 'px';
      el.style.width = width + 'px';
      el.style.height = '20px';
      el.innerHTML = '<div class="equidistant-line-h"></div><div class="equidistant-badge">' + Math.round(g.dist) + 'px</div>';
    } else if (g.type === 'v') {
      el.className = 'equidistant-guide equidistant-guide-v active';
      const top = Math.round(Math.min(g.y1, g.y2));
      const height = Math.max(4, Math.round(Math.abs(g.y2 - g.y1)));
      el.style.left = Math.round(g.x) + 'px';
      el.style.top = top + 'px';
      el.style.width = '20px';
      el.style.height = height + 'px';
      el.innerHTML = '<div class="equidistant-line-v"></div><div class="equidistant-badge">' + Math.round(g.dist) + 'px</div>';
    }
  };

  setupEl(el1, g1);
  setupEl(el2, g2);
}

// ==========================================
// Draggable Cards & Precision Coordinates
// Strictly dragged via .card-drag-handle
// Smart dynamic magnetic alignment snap axes (Left, Center, Right, Top, Middle, Bottom vs Cards & Screen)
// ==========================================

// Viewport-accurate card box (guides are position:fixed → must use viewport coords)
function getCardViewportRect(el) {
  if (!el) return { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0, centerX: 0, centerY: 0 };
  const r = el.getBoundingClientRect();
  return {
    left: r.left,
    top: r.top,
    right: r.right,
    bottom: r.bottom,
    width: r.width,
    height: r.height,
    centerX: r.left + r.width / 2,
    centerY: r.top + r.height / 2,
  };
}

function collectOtherCards(exclude) {
  return Array.from(document.querySelectorAll('.draggable-card, .liquid-dock')).filter((c) => {
    if (c === exclude) return false;
    if (c.id === 'control-panel' || c.classList.contains('control-panel')) return false;
    if (c.offsetParent === null) return false;
    const cs = window.getComputedStyle(c);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
    return true;
  });
}

function bindCardControls(card) {
  if (!card || card.id === 'control-panel' || card.classList.contains('control-panel')) return;
  const dragHandle = card.querySelector('.card-drag-handle');
  if (!dragHandle) return;

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  dragHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    isDragging = true;
    const r = card.getBoundingClientRect();
    offsetX = e.clientX - r.left;
    offsetY = e.clientY - r.top;
    card.classList.add('dragging');

    if (card.id === 'liquid-dock' || card.classList.contains('liquid-dock')) {
      card.classList.add('positioned');
      card.style.bottom = 'auto';
      card.style.transform = 'none';
      card.style.left = `${Math.round(r.left)}px`;
      card.style.top = `${Math.round(r.top)}px`;
    }
  });

  const onMouseMove = (e) => {
    if (!isDragging) return;
    const cardW = card.offsetWidth || 300;
    const cardH = card.offsetHeight || 120;
    const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
    const winH = window.innerHeight || document.documentElement.clientHeight || 800;

    let targetX = Math.max(10, Math.min(winW - cardW - 10, e.clientX - offsetX));
    let targetY = Math.max(10, Math.min(winH - cardH - 10, e.clientY - offsetY));

    const snapThreshold = 10;
    let bestSnapX = null;
    let bestSnapY = null;
    let minDeltaX = snapThreshold + 1;
    let minDeltaY = snapThreshold + 1;
    let activeAxisX = null;
    let activeAxisY = null;
    let activeEquidistantG1 = null;
    let activeEquidistantG2 = null;

    // Collect other visible cards (exclude control panel — fixed, not a layout peer)
    const otherCards = collectOtherCards(card);

    // 1. Horizontal / X-axis Alignment (Center Axis, Edges & Equidistant Spacing)
    const cardCenterX = targetX + cardW / 2;
    const cardRightX = targetX + cardW;
    const screenCenterX = winW / 2;

    // Screen Center X snapping (Center Axis)
    const screenCenterDelta = Math.abs(cardCenterX - screenCenterX);
    if (screenCenterDelta <= snapThreshold && screenCenterDelta < minDeltaX) {
      minDeltaX = screenCenterDelta;
      bestSnapX = Math.round(screenCenterX - cardW / 2);
      activeAxisX = Math.round(screenCenterX);
    }
    let d = Math.abs(targetX - screenCenterX);
    if (d <= snapThreshold && d < minDeltaX) {
      minDeltaX = d;
      bestSnapX = Math.round(screenCenterX);
      activeAxisX = Math.round(screenCenterX);
    }
    d = Math.abs(cardRightX - screenCenterX);
    if (d <= snapThreshold && d < minDeltaX) {
      minDeltaX = d;
      bestSnapX = Math.round(screenCenterX - cardW);
      activeAxisX = Math.round(screenCenterX);
    }

    // Other cards center axis and edge alignment
    otherCards.forEach((other) => {
      const __br = getCardViewportRect(other);
      const bLeft = __br.left;
      const bW = __br.width || 300;
      const bCenter = __br.centerX;
      const bRight = __br.right;

      // Card Center == Other Center (Center Axis alignment)
      d = Math.abs(cardCenterX - bCenter);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bCenter - cardW / 2);
        activeAxisX = Math.round(bCenter);
      }

      // Edges to center
      d = Math.abs(targetX - bCenter);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bCenter);
        activeAxisX = Math.round(bCenter);
      }
      d = Math.abs(cardRightX - bCenter);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bCenter - cardW);
        activeAxisX = Math.round(bCenter);
      }

      // Edge to edge alignments
      d = Math.abs(targetX - bLeft);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = bLeft;
        activeAxisX = bLeft;
      }
      d = Math.abs(targetX - bRight);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = bRight;
        activeAxisX = bRight;
      }
      d = Math.abs(cardRightX - bLeft);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bLeft - cardW);
        activeAxisX = bLeft;
      }
      d = Math.abs(cardRightX - bRight);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bRight - cardW);
        activeAxisX = bRight;
      }
      d = Math.abs(cardCenterX - bLeft);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bLeft - cardW / 2);
        activeAxisX = bLeft;
      }
      d = Math.abs(cardCenterX - bRight);
      if (d <= snapThreshold && d < minDeltaX) {
        minDeltaX = d;
        bestSnapX = Math.round(bRight - cardW / 2);
        activeAxisX = bRight;
      }
    });

    // Equidistant Spacing in X (Distance d between element pairs)
    // Renders |------| dimension indicators instead of standard cross-screen axis lines
    for (let i = 0; i < otherCards.length; i++) {
      const a = otherCards[i];
      const __ar = getCardViewportRect(a);
      const aLeft = __ar.left;
      const aTop = __ar.top;
      const aW = __ar.width || 300;
      const aH = __ar.height || 120;
      const aRight = __ar.right;
      const aCenter = __ar.centerX;
      const aCenterY = __ar.centerY;

      for (let j = i + 1; j < otherCards.length; j++) {
        const b = otherCards[j];
        const __br = getCardViewportRect(b);
        const bLeft = __br.left;
        const bTop = __br.top;
        const bW = __br.width || 300;
        const bH = __br.height || 120;
        const bRight = __br.right;
        const bCenter = __br.centerX;
        const bCenterY = __br.centerY;

        const first = aLeft <= bLeft ? { left: aLeft, right: aRight, center: aCenter, top: aTop, height: aH, centerY: aCenterY } : { left: bLeft, right: bRight, center: bCenter, top: bTop, height: bH, centerY: bCenterY };
        const second = aLeft <= bLeft ? { left: bLeft, right: bRight, center: bCenter, top: bTop, height: bH, centerY: bCenterY } : { left: aLeft, right: aRight, center: aCenter, top: aTop, height: aH, centerY: aCenterY };

        const gapX = second.left - first.right;
        if (gapX >= 4 && gapX <= 600) {
          // Snap to right of second with distance d
          let expectedLeft = second.right + gapX;
          d = Math.abs(targetX - expectedLeft);
          if (d <= snapThreshold && d < minDeltaX) {
            minDeltaX = d;
            bestSnapX = expectedLeft;
            activeAxisX = null;
            activeEquidistantG1 = { type: 'h', x1: first.right, x2: second.left, y: Math.round((first.centerY + second.centerY) / 2), dist: gapX };
            activeEquidistantG2 = { type: 'h', x1: second.right, x2: expectedLeft, y: Math.round((second.centerY + targetY + cardH / 2) / 2), dist: gapX };
          }

          // Snap to left of first with distance d
          expectedLeft = first.left - gapX - cardW;
          d = Math.abs(targetX - expectedLeft);
          if (d <= snapThreshold && d < minDeltaX) {
            minDeltaX = d;
            bestSnapX = expectedLeft;
            activeAxisX = null;
            activeEquidistantG1 = { type: 'h', x1: first.right, x2: second.left, y: Math.round((first.centerY + second.centerY) / 2), dist: gapX };
            activeEquidistantG2 = { type: 'h', x1: expectedLeft + cardW, x2: first.left, y: Math.round((targetY + cardH / 2 + first.centerY) / 2), dist: gapX };
          }

          // Snap equidistant middle between first and second
          const equalGapX = Math.round((second.left - first.right - cardW) / 2);
          if (equalGapX >= 4) {
            expectedLeft = first.right + equalGapX;
            d = Math.abs(targetX - expectedLeft);
            if (d <= snapThreshold && d < minDeltaX) {
              minDeltaX = d;
              bestSnapX = expectedLeft;
              activeAxisX = null;
              activeEquidistantG1 = { type: 'h', x1: first.right, x2: expectedLeft, y: Math.round((first.centerY + targetY + cardH / 2) / 2), dist: equalGapX };
              activeEquidistantG2 = { type: 'h', x1: expectedLeft + cardW, x2: second.left, y: Math.round((targetY + cardH / 2 + second.centerY) / 2), dist: equalGapX };
            }
          }
        }
      }
    }

    // 2. Vertical / Y-axis Alignment (Center Axis, Edges & Equidistant Spacing)
    const cardCenterY = targetY + cardH / 2;
    const cardBottomY = targetY + cardH;
    const screenCenterY = winH / 2;

    // Screen Center Y snapping (Center Axis)
    const screenCenterYDelta = Math.abs(cardCenterY - screenCenterY);
    if (screenCenterYDelta <= snapThreshold && screenCenterYDelta < minDeltaY) {
      minDeltaY = screenCenterYDelta;
      bestSnapY = Math.round(screenCenterY - cardH / 2);
      activeAxisY = Math.round(screenCenterY);
    }
    d = Math.abs(targetY - screenCenterY);
    if (d <= snapThreshold && d < minDeltaY) {
      minDeltaY = d;
      bestSnapY = Math.round(screenCenterY);
      activeAxisY = Math.round(screenCenterY);
    }
    d = Math.abs(cardBottomY - screenCenterY);
    if (d <= snapThreshold && d < minDeltaY) {
      minDeltaY = d;
      bestSnapY = Math.round(screenCenterY - cardH);
      activeAxisY = Math.round(screenCenterY);
    }

    // Other cards center axis and edge alignment in Y
    otherCards.forEach((other) => {
      const __br = getCardViewportRect(other);
      const bTop = __br.top;
      const bH = __br.height || 120;
      const bCenterY = __br.centerY;
      const bBottom = __br.bottom;

      // Card Center == Other Center (Center Axis alignment)
      d = Math.abs(cardCenterY - bCenterY);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bCenterY - cardH / 2);
        activeAxisY = Math.round(bCenterY);
      }

      // Edges to center
      d = Math.abs(targetY - bCenterY);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bCenterY);
        activeAxisY = Math.round(bCenterY);
      }
      d = Math.abs(cardBottomY - bCenterY);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bCenterY - cardH);
        activeAxisY = Math.round(bCenterY);
      }

      // Edge to edge alignments
      d = Math.abs(targetY - bTop);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = bTop;
        activeAxisY = bTop;
      }
      d = Math.abs(targetY - bBottom);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = bBottom;
        activeAxisY = bBottom;
      }
      d = Math.abs(cardBottomY - bTop);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bTop - cardH);
        activeAxisY = bTop;
      }
      d = Math.abs(cardBottomY - bBottom);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bBottom - cardH);
        activeAxisY = bBottom;
      }
      d = Math.abs(cardCenterY - bTop);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bTop - cardH / 2);
        activeAxisY = bTop;
      }
      d = Math.abs(cardCenterY - bBottom);
      if (d <= snapThreshold && d < minDeltaY) {
        minDeltaY = d;
        bestSnapY = Math.round(bBottom - cardH / 2);
        activeAxisY = bBottom;
      }
    });

    // Equidistant Spacing in Y (Distance d between element pairs)
    // Renders |------| dimension indicators instead of standard cross-screen axis lines
    for (let i = 0; i < otherCards.length; i++) {
      const a = otherCards[i];
      const __ar = getCardViewportRect(a);
      const aLeft = __ar.left;
      const aTop = __ar.top;
      const aW = __ar.width || 300;
      const aH = __ar.height || 120;
      const aBottom = __ar.bottom;
      const aCenterY = __ar.centerY;
      const aCenterX = __ar.centerX;

      for (let j = i + 1; j < otherCards.length; j++) {
        const b = otherCards[j];
        const __br = getCardViewportRect(b);
        const bLeft = __br.left;
        const bTop = __br.top;
        const bW = __br.width || 300;
        const bH = __br.height || 120;
        const bBottom = __br.bottom;
        const bCenterY = __br.centerY;
        const bCenterX = __br.centerX;

        const first = aTop <= bTop ? { top: aTop, bottom: aBottom, center: aCenterY, left: aLeft, width: aW, centerX: aCenterX } : { top: bTop, bottom: bBottom, center: bCenterY, left: bLeft, width: bW, centerX: bCenterX };
        const second = aTop <= bTop ? { top: bTop, bottom: bBottom, center: bCenterY, left: bLeft, width: bW, centerX: bCenterX } : { top: aTop, bottom: aBottom, center: aCenterY, left: aLeft, width: aW, centerX: aCenterX };

        const gapY = second.top - first.bottom;
        if (gapY >= 4 && gapY <= 600) {
          // Snap below second with distance d
          let expectedTop = second.bottom + gapY;
          d = Math.abs(targetY - expectedTop);
          if (d <= snapThreshold && d < minDeltaY) {
            minDeltaY = d;
            bestSnapY = expectedTop;
            activeAxisY = null;
            activeEquidistantG1 = { type: 'v', y1: first.bottom, y2: second.top, x: Math.round((first.centerX + second.centerX) / 2), dist: gapY };
            activeEquidistantG2 = { type: 'v', y1: second.bottom, y2: expectedTop, x: Math.round((second.centerX + targetX + cardW / 2) / 2), dist: gapY };
          }

          // Snap above first with distance d
          expectedTop = first.top - gapY - cardH;
          d = Math.abs(targetY - expectedTop);
          if (d <= snapThreshold && d < minDeltaY) {
            minDeltaY = d;
            bestSnapY = expectedTop;
            activeAxisY = null;
            activeEquidistantG1 = { type: 'v', y1: first.bottom, y2: second.top, x: Math.round((first.centerX + second.centerX) / 2), dist: gapY };
            activeEquidistantG2 = { type: 'v', y1: expectedTop + cardH, y2: first.top, x: Math.round((targetX + cardW / 2 + first.centerX) / 2), dist: gapY };
          }

          // Snap equidistant middle between first and second
          const equalGapY = Math.round((second.top - first.bottom - cardH) / 2);
          if (equalGapY >= 4) {
            expectedTop = first.bottom + equalGapY;
            d = Math.abs(targetY - expectedTop);
            if (d <= snapThreshold && d < minDeltaY) {
              minDeltaY = d;
              bestSnapY = expectedTop;
              activeAxisY = null;
              activeEquidistantG1 = { type: 'v', y1: first.bottom, y2: expectedTop, x: Math.round((first.centerX + targetX + cardW / 2) / 2), dist: equalGapY };
              activeEquidistantG2 = { type: 'v', y1: expectedTop + cardH, y2: second.top, x: Math.round((targetX + cardW / 2 + second.centerX) / 2), dist: equalGapY };
            }
          }
        }
      }
    }

    const finalX = bestSnapX !== null ? bestSnapX : targetX;
    const finalY = bestSnapY !== null ? bestSnapY : targetY;

    // Visual Alignment Axes
    const snapGuideX = document.getElementById('snap-guide-x');
    const snapGuideY = document.getElementById('snap-guide-y');

    if (snapGuideX) {
      if (activeAxisX !== null) {
        snapGuideX.style.left = `${activeAxisX}px`;
        snapGuideX.classList.add('active');
      } else {
        snapGuideX.classList.remove('active');
      }
    }

    if (snapGuideY) {
      if (activeAxisY !== null) {
        snapGuideY.style.top = `${activeAxisY}px`;
        snapGuideY.classList.add('active');
      } else {
        snapGuideY.classList.remove('active');
      }
    }

    // Update Equidistant Dimension Indicators (|------|)
    updateEquidistantGuides(activeEquidistantG1, activeEquidistantG2);

    card.style.left = `${finalX}px`;
    card.style.top = `${finalY}px`;
  };

  const onMouseUp = () => {
    if (isDragging) {
      isDragging = false;
      card.classList.remove('dragging');
      const snapGuideX = document.getElementById('snap-guide-x');
      const snapGuideY = document.getElementById('snap-guide-y');
      if (snapGuideX) snapGuideX.classList.remove('active');
      if (snapGuideY) snapGuideY.classList.remove('active');
      updateEquidistantGuides(null, null);
      saveLayout();
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// ==========================================
// Card Resize Magnetic Alignment & Snapping Engine
// Distance d Equidistant Snapping & Center Axis
// ==========================================
function calculateResizeSnapping(card, targetW, targetH, minW = 180, minH = 80) {
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;
  const snapThreshold = 10;

  const __cr = getCardViewportRect(card);
  const curLeft = __cr.left;
  const curTop = __cr.top;

  const rawRight = curLeft + targetW;
  const rawBottom = curTop + targetH;
  const rawCenterX = curLeft + targetW / 2;
  const rawCenterY = curTop + targetH / 2;

  let bestSnapW = null;
  let bestSnapH = null;
  let minDeltaX = snapThreshold + 1;
  let minDeltaY = snapThreshold + 1;
  let activeAxisX = null;
  let activeAxisY = null;
  let activeEquidistantG1 = null;
  let activeEquidistantG2 = null;

  // Screen Center Axes
  const screenCenterX = Math.round(winW / 2);
  const screenCenterY = Math.round(winH / 2);

  // Check screen center X (Center of resizing card aligning with screen center X)
  let d = Math.abs(rawCenterX - screenCenterX);
  if (d <= snapThreshold && d < minDeltaX) {
    const candidateW = Math.round(2 * (screenCenterX - curLeft));
    if (candidateW >= minW) {
      minDeltaX = d;
      bestSnapW = candidateW;
      activeAxisX = screenCenterX;
    }
  }

  // Check screen center X (Right edge of resizing card aligning with screen center X)
  d = Math.abs(rawRight - screenCenterX);
  if (d <= snapThreshold && d < minDeltaX) {
    minDeltaX = d;
    bestSnapW = Math.max(minW, screenCenterX - curLeft);
    activeAxisX = screenCenterX;
  }

  // Check screen center Y (Center of resizing card aligning with screen center Y)
  d = Math.abs(rawCenterY - screenCenterY);
  if (d <= snapThreshold && d < minDeltaY) {
    const candidateH = Math.round(2 * (screenCenterY - curTop));
    if (candidateH >= minH) {
      minDeltaY = d;
      bestSnapH = candidateH;
      activeAxisY = screenCenterY;
    }
  }

  // Check screen center Y (Bottom edge of resizing card aligning with screen center Y)
  d = Math.abs(rawBottom - screenCenterY);
  if (d <= snapThreshold && d < minDeltaY) {
    minDeltaY = d;
    bestSnapH = Math.max(minH, screenCenterY - curTop);
    activeAxisY = screenCenterY;
  }

  // Check other draggable elements (clock, search, notes, dock, panel)
  const otherCards = Array.from(
    document.querySelectorAll('.draggable-card, .liquid-dock, .control-panel')
  ).filter(
    (c) => c !== card && c.offsetParent !== null && window.getComputedStyle(c).display !== 'none'
  );

  otherCards.forEach((other) => {
    const __br = getCardViewportRect(other);
    const bLeft = __br.left;
    const bTop = __br.top;
    const bW = __br.width || 0;
    const bH = __br.height || 0;
    const bRight = __br.right;
    const bBottom = __br.bottom;
    const bCenterX = Math.round(__br.centerX);
    const bCenterY = Math.round(__br.centerY);

    // Resizing Card Center X == Other Center X
    d = Math.abs(rawCenterX - bCenterX);
    if (d <= snapThreshold && d < minDeltaX) {
      const candidateW = Math.round(2 * (bCenterX - curLeft));
      if (candidateW >= minW) {
        minDeltaX = d;
        bestSnapW = candidateW;
        activeAxisX = bCenterX;
      }
    }

    // Right edge vs other left
    d = Math.abs(rawRight - bLeft);
    if (d <= snapThreshold && d < minDeltaX) {
      minDeltaX = d;
      bestSnapW = Math.max(minW, bLeft - curLeft);
      activeAxisX = bLeft;
    }
    // Right edge vs other center (Center Axis)
    d = Math.abs(rawRight - bCenterX);
    if (d <= snapThreshold && d < minDeltaX) {
      minDeltaX = d;
      bestSnapW = Math.max(minW, bCenterX - curLeft);
      activeAxisX = bCenterX;
    }
    // Right edge vs other right
    d = Math.abs(rawRight - bRight);
    if (d <= snapThreshold && d < minDeltaX) {
      minDeltaX = d;
      bestSnapW = Math.max(minW, bRight - curLeft);
      activeAxisX = bRight;
    }

    // Resizing Card Center Y == Other Center Y
    d = Math.abs(rawCenterY - bCenterY);
    if (d <= snapThreshold && d < minDeltaY) {
      const candidateH = Math.round(2 * (bCenterY - curTop));
      if (candidateH >= minH) {
        minDeltaY = d;
        bestSnapH = candidateH;
        activeAxisY = bCenterY;
      }
    }

    // Bottom edge vs other top
    d = Math.abs(rawBottom - bTop);
    if (d <= snapThreshold && d < minDeltaY) {
      minDeltaY = d;
      bestSnapH = Math.max(minH, bTop - curTop);
      activeAxisY = bTop;
    }
    // Bottom edge vs other center (Center Axis)
    d = Math.abs(rawBottom - bCenterY);
    if (d <= snapThreshold && d < minDeltaY) {
      minDeltaY = d;
      bestSnapH = Math.max(minH, bCenterY - curTop);
      activeAxisY = bCenterY;
    }
    // Bottom edge vs other bottom
    d = Math.abs(rawBottom - bBottom);
    if (d <= snapThreshold && d < minDeltaY) {
      minDeltaY = d;
      bestSnapH = Math.max(minH, bBottom - curTop);
      activeAxisY = bBottom;
    }
  });

  // Equidistant Gap Snapping for Resizing
  for (let i = 0; i < otherCards.length; i++) {
    const a = otherCards[i];
    const __ar = getCardViewportRect(a);
    const aLeft = __ar.left;
    const aW = __ar.width || 0;
    const aRight = __ar.right;
    const aTop = __ar.top;
    const aH = __ar.height || 0;
    const aBottom = __ar.bottom;
    const aCenterY = __ar.centerY;
    const aCenterX = __ar.centerX;

    for (let j = i + 1; j < otherCards.length; j++) {
      const b = otherCards[j];
      const __br = getCardViewportRect(b);
      const bLeft = __br.left;
      const bW = __br.width || 0;
      const bRight = __br.right;
      const bTop = __br.top;
      const bH = __br.height || 0;
      const bBottom = __br.bottom;
      const bCenterY = __br.centerY;
      const bCenterX = __br.centerX;

      // Horizontal gap d
      const firstX = aLeft <= bLeft ? { left: aLeft, right: aRight, center: aCenterX, centerY: aCenterY } : { left: bLeft, right: bRight, center: bCenterX, centerY: bCenterY };
      const secondX = aLeft <= bLeft ? { left: bLeft, right: bRight, center: bCenterX, centerY: bCenterY } : { left: aLeft, right: aRight, center: aCenterX, centerY: aCenterY };
      const gapX = secondX.left - firstX.right;

      if (gapX >= 4 && gapX <= 600) {
        // Resizing right edge to secondX.right + gapX
        let expectedRight = secondX.right + gapX;
        let expectedW = expectedRight - curLeft;
        d = Math.abs(rawRight - expectedRight);
        if (d <= snapThreshold && d < minDeltaX && expectedW >= minW) {
          minDeltaX = d;
          bestSnapW = expectedW;
          activeAxisX = null;
          activeEquidistantG1 = { type: 'h', x1: firstX.right, x2: secondX.left, y: Math.round((firstX.centerY + secondX.centerY) / 2), dist: gapX };
          activeEquidistantG2 = { type: 'h', x1: secondX.right, x2: expectedRight, y: Math.round((secondX.centerY + curTop + targetH / 2) / 2), dist: gapX };
        }
      }

      // Vertical gap d
      const firstY = aTop <= bTop ? { top: aTop, bottom: aBottom, center: aCenterY, centerX: aCenterX } : { top: bTop, bottom: bBottom, center: bCenterY, centerX: bCenterX };
      const secondY = aTop <= bTop ? { top: bTop, bottom: bBottom, center: bCenterY, centerX: bCenterX } : { top: aTop, bottom: aBottom, center: aCenterY, centerX: bCenterX };
      const gapY = secondY.top - firstY.bottom;

      if (gapY >= 4 && gapY <= 600) {
        // Resizing bottom edge to secondY.bottom + gapY
        let expectedBottom = secondY.bottom + gapY;
        let expectedH = expectedBottom - curTop;
        d = Math.abs(rawBottom - expectedBottom);
        if (d <= snapThreshold && d < minDeltaY && expectedH >= minH) {
          minDeltaY = d;
          bestSnapH = expectedH;
          activeAxisY = null;
          activeEquidistantG1 = { type: 'v', y1: firstY.bottom, y2: secondY.top, x: Math.round((firstY.centerX + secondY.centerX) / 2), dist: gapY };
          activeEquidistantG2 = { type: 'v', y1: secondY.bottom, y2: expectedBottom, x: Math.round((secondY.centerX + curLeft + targetW / 2) / 2), dist: gapY };
        }
      }
    }
  }

  // Visual Alignment Axes
  const snapGuideX = document.getElementById('snap-guide-x');
  const snapGuideY = document.getElementById('snap-guide-y');

  if (snapGuideX) {
    if (activeAxisX !== null) {
      snapGuideX.style.left = `${activeAxisX}px`;
      snapGuideX.classList.add('active');
    } else {
      snapGuideX.classList.remove('active');
    }
  }

  if (snapGuideY) {
    if (activeAxisY !== null) {
      snapGuideY.style.top = `${activeAxisY}px`;
      snapGuideY.classList.add('active');
    } else {
      snapGuideY.classList.remove('active');
    }
  }

  // Update Equidistant Dimension Indicators (|------|)
  updateEquidistantGuides(activeEquidistantG1, activeEquidistantG2);

  return {
    w: bestSnapW !== null ? bestSnapW : targetW,
    h: bestSnapH !== null ? bestSnapH : targetH,
  };
}




// ==========================================
// Clock Card Resizing & Dynamic Scaling
// ==========================================
function updateClockCardScale(card, width, height) {
  if (!card) return;
  if (width) {
    card.style.width = `${Math.round(width)}px`;
  }
  if (height) {
    card.style.height = `${Math.round(height)}px`;
  }
  const curW = width || card.offsetWidth || 360;
  const curH = height || card.offsetHeight || 130;
  const timeEl = card.querySelector('#time-display');
  const dateEl = card.querySelector('#date-display');
  // Proportional 2D scale based on both width and height to guarantee no content overflow
  const scale = Math.max(0.45, Math.min(2.5, Math.min(curW / 360, curH / 130)));
  if (timeEl) {
    timeEl.style.fontSize = `${(3.5 * scale).toFixed(2)}rem`;
    timeEl.style.lineHeight = '1.1';
  }
  if (dateEl) {
    dateEl.style.fontSize = `${Math.max(0.75, 0.9 * scale).toFixed(2)}rem`;
    dateEl.style.marginTop = `${Math.max(4, 8 * scale).toFixed(0)}px`;
  }
}

function bindControlPanelResize(panel) {
  const resizeHandle = panel.querySelector('.panel-resize-handle') || document.getElementById('panel-resize-handle');
  if (!resizeHandle) return;

  let isResizing = false;
  let startX = 0;
  let startY = 0;
  let startW = 0;
  let startH = 0;

  resizeHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startW = panel.offsetWidth;
    startH = panel.offsetHeight;
    panel.classList.add('resizing');
    document.body.style.cursor = 'nwse-resize';
    document.body.style.userSelect = 'none';
  });

  const onMouseMove = (e) => {
    if (!isResizing) return;
    const curLeft = parseInt(panel.style.left, 10) || panel.offsetLeft || 0;
    const curTop = parseInt(panel.style.top, 10) || panel.offsetTop || 0;
    const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
    const winH = window.innerHeight || document.documentElement.clientHeight || 800;

    const maxW = Math.max(340, winW - curLeft - 16);
    const maxH = Math.max(380, winH - curTop - 16);

    const rawW = Math.max(340, Math.min(maxW, startW + (e.clientX - startX)));
    const rawH = Math.max(380, Math.min(maxH, startH + (e.clientY - startY)));

    panel.style.width = `${Math.round(rawW)}px`;
    panel.style.height = `${Math.round(rawH)}px`;
  };

  const onMouseUp = () => {
    if (isResizing) {
      isResizing = false;
      panel.classList.remove('resizing');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      saveLayout();
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

function bindClockResize(card) {
  const resizeHandle = card.querySelector('.clock-resize-handle');
  if (!resizeHandle) return;

  let isResizing = false;
  let startX = 0;
  let startY = 0;
  let startW = 0;
  let startH = 0;

  resizeHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startW = card.offsetWidth;
    startH = card.offsetHeight;
    card.classList.add('resizing');
  });

  const onMouseMove = (e) => {
    if (!isResizing) return;
    const curLeft = parseInt(card.style.left, 10) || 0;
    const curTop = parseInt(card.style.top, 10) || 0;
    const maxW = Math.max(180, window.innerWidth - curLeft - 20);
    const maxH = Math.max(80, window.innerHeight - curTop - 20);

    const rawW = Math.max(180, Math.min(maxW, startW + (e.clientX - startX)));
    const rawH = Math.max(80, Math.min(maxH, startH + (e.clientY - startY)));

    // Apply magnetic snapping with automatic alignment guide display
    const snapped = calculateResizeSnapping(card, rawW, rawH, 180, 80);

    updateClockCardScale(card, snapped.w, snapped.h);
  };

  const onMouseUp = () => {
    if (isResizing) {
      isResizing = false;
      card.classList.remove('resizing');
      const snapGuideX = document.getElementById('snap-guide-x');
      const snapGuideY = document.getElementById('snap-guide-y');
      if (snapGuideX) snapGuideX.classList.remove('active');
      if (snapGuideY) snapGuideY.classList.remove('active');
      updateEquidistantGuides(null, null);
      saveLayout();
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// ==========================================
// Search Card Resizing & Dynamic Scaling (Horizontal Only)
// ==========================================
function updateSearchCardScale(card, width) {
  if (!card) return;
  if (width) {
    card.style.width = `${Math.round(width)}px`;
  }
  card.style.height = '';
  const curW = width || card.offsetWidth || 620;
  const wrapper = card.querySelector('.search-wrapper');
  const input = card.querySelector('.search-input-box');
  const engineDropdown = card.querySelector('.engine-dropdown');
  const scale = Math.max(0.75, Math.min(1.5, curW / 560));

  if (wrapper) {
    wrapper.style.padding = `${Math.max(4, Math.round(8 * scale))}px ${Math.max(8, Math.round(12 * scale))}px`;
    wrapper.style.borderRadius = `${Math.max(10, Math.round(16 * scale))}px`;
  }
  if (input) {
    input.style.fontSize = `${Math.max(12, Math.round(15 * scale))}px`;
  }
  if (engineDropdown) {
    engineDropdown.style.fontSize = `${Math.max(11, Math.round(14 * scale))}px`;
  }
}

function bindSearchResize(card) {
  const resizeHandle = card.querySelector('.search-resize-handle');
  if (!resizeHandle) return;

  let isResizing = false;
  let startX = 0;
  let startW = 0;

  resizeHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    isResizing = true;
    startX = e.clientX;
    startW = card.offsetWidth;
    card.classList.add('resizing');
    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
  });

  const onMouseMove = (e) => {
    if (!isResizing) return;
    const curLeft = parseInt(card.style.left, 10) || 0;
    const maxW = Math.max(260, window.innerWidth - curLeft - 20);

    const rawW = Math.max(260, Math.min(maxW, startW + (e.clientX - startX)));

    // Apply magnetic snapping horizontally
    const snapped = calculateResizeSnapping(card, rawW, card.offsetHeight, 260, 48);

    updateSearchCardScale(card, snapped.w);
  };

  const onMouseUp = () => {
    if (isResizing) {
      isResizing = false;
      card.classList.remove('resizing');
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      const snapGuideX = document.getElementById('snap-guide-x');
      const snapGuideY = document.getElementById('snap-guide-y');
      if (snapGuideX) snapGuideX.classList.remove('active');
      if (snapGuideY) snapGuideY.classList.remove('active');
      updateEquidistantGuides(null, null);
      saveLayout();
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// ==========================================
// Note Resizing Handler
// Allows resizing note card by dragging bottom-right handle
// Automatically shows alignment guides and prevents content overflow
// ==========================================
function bindNoteResize(card) {
  const resizeHandle = card.querySelector('.note-resize-handle');
  if (!resizeHandle) return;

  let isResizing = false;
  let startX = 0;
  let startY = 0;
  let startW = 0;
  let startH = 0;

  resizeHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (document.activeElement && document.activeElement.blur) {
      document.activeElement.blur();
    }

    isResizing = true;
    startX = e.clientX;
    startY = e.clientY;
    startW = card.offsetWidth;
    startH = card.offsetHeight;
    card.classList.add('resizing');
  });

  const onMouseMove = (e) => {
    if (!isResizing) return;
    const curLeft = parseInt(card.style.left, 10) || 0;
    const curTop = parseInt(card.style.top, 10) || 0;
    const maxW = Math.max(180, window.innerWidth - curLeft - 20);
    const maxH = Math.max(120, window.innerHeight - curTop - 20);

    const rawW = Math.max(180, Math.min(maxW, startW + (e.clientX - startX)));
    const rawH = Math.max(120, Math.min(maxH, startH + (e.clientY - startY)));

    // Apply magnetic snapping with automatic alignment guide display
    const snapped = calculateResizeSnapping(card, rawW, rawH, 180, 120);

    card.style.width = `${Math.round(snapped.w)}px`;
    card.style.height = `${Math.round(snapped.h)}px`;
  };

  const onMouseUp = () => {
    if (isResizing) {
      isResizing = false;
      card.classList.remove('resizing');
      const snapGuideX = document.getElementById('snap-guide-x');
      const snapGuideY = document.getElementById('snap-guide-y');
      if (snapGuideX) snapGuideX.classList.remove('active');
      if (snapGuideY) snapGuideY.classList.remove('active');
      updateEquidistantGuides(null, null);
      saveLayout();
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}

// ==========================================
// Note Card Component
// Drag via top-left handle, Resize via bottom-right handle
// Markdown preview / edit toggle
// ==========================================
function createNoteCard(content = '', left = null, top = null, width = null, height = null, initialMode = 'preview', unit = '%') {
  const card = document.createElement('div');
  card.className = 'liquid-glass draggable-card note-card';
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];

  card.innerHTML = `
    <div class="card-drag-handle" title="${dict.noteDragHandle || 'Drag note'}">⠿</div>
    <div class="note-header">
      <div class="custom-btn secondary-btn xs note-mode-btn">${initialMode === 'edit' ? dict.preview : dict.edit}</div>
      <div class="note-header-spacer"></div>
      <div class="custom-btn del-btn xs note-del-btn">✕</div>
    </div>
    <div class="card-body">
      <textarea class="note-textarea" style="display: ${initialMode === 'edit' ? 'block' : 'none'};" placeholder="${dict.notePlaceholder}">${content}</textarea>
      <div class="note-preview" style="display: ${initialMode === 'edit' ? 'none' : 'block'};">${parseMarkdown(content)}</div>
    </div>
    <div class="note-resize-handle" title="${dict.noteResizeHandle || 'Resize note'}"></div>
  `;

  document.body.appendChild(card);
  applyGlassVarsFromRoot(card);
  bindCardControls(card);
  bindNoteResize(card);

  const textarea = card.querySelector('.note-textarea');
  const preview = card.querySelector('.note-preview');
  const modeBtn = card.querySelector('.note-mode-btn');

  if (modeBtn && textarea && preview) {
    modeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const currentDict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
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
      const currentDict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
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

  const delBtn = card.querySelector('.note-del-btn');
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

  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;

  if (width) {
    card.style.width = `${width}px`;
  }
  if (height) {
    card.style.height = `${height}px`;
  }

  if (left != null && top != null) {
    let leftPx = 0;
    let topPx = 0;
    if (unit === '%' || (typeof left === 'number' && left <= 100)) {
      leftPx = Math.round((parseFloat(left) / 100) * winW);
      topPx = Math.round((parseFloat(top) / 100) * winH);
    } else {
      leftPx = parseFloat(left);
      topPx = parseFloat(top);
    }
    const cardW = width || 290;
    const cardH = height || 210;
    leftPx = Math.max(10, Math.min(winW - cardW - 10, leftPx));
    topPx = Math.max(10, Math.min(winH - cardH - 10, topPx));
    card.style.left = `${leftPx}px`;
    card.style.top = `${topPx}px`;
  } else {
    const existingNotes = document.querySelectorAll('.note-card');
    const index = Math.max(0, existingNotes.length - 1);
    const noteWidth = width ? parseInt(width, 10) : 290;
    const noteHeight = height ? parseInt(height, 10) : 210;
    const padding = 24;

    const cols = Math.max(1, Math.floor((winW - 80) / (noteWidth + padding)));
    const col = index % cols;
    const row = Math.floor(index / cols);

    let calcLeft = 40 + col * (noteWidth + padding);
    let calcTop = 100 + row * (noteHeight + padding);

    if (calcTop + noteHeight > winH - 100) {
      calcTop = Math.max(40, winH - noteHeight - 90);
    }
    if (calcLeft + noteWidth > winW - 40) {
      calcLeft = Math.max(20, winW - noteWidth - 40);
    }

    card.style.left = `${Math.round(calcLeft)}px`;
    card.style.top = `${Math.round(calcTop)}px`;
  }
}

function parseMarkdown(md) {
  if (!md) return '';
  const lines = md.split('\n');
  const result = [];
  let inCodeBlock = false;
  let codeBlockLang = '';
  let codeBlockLines = [];
  let inList = false;
  let listType = 'ul'; // 'ul' or 'ol'
  let listItems = [];
  let inTable = false;
  let tableRows = [];

  const flushList = () => {
    if (inList && listItems.length > 0) {
      const tag = listType;
      result.push(`<${tag}>${listItems.join('')}</${tag}>`);
      listItems = [];
      inList = false;
    }
  };

  const flushTable = () => {
    if (inTable && tableRows.length > 0) {
      let tableHtml = '<div class="table-container"><table class="markdown-table">';
      tableRows.forEach((row, rIdx) => {
        if (rIdx === 0) {
          tableHtml += '<thead><tr>' + row.map((cell) => `<th>${parseInlineMarkdown(cell)}</th>`).join('') + '</tr></thead><tbody>';
        } else if (rIdx === 1 && row.every((c) => /^:?-+:?$/.test(c.trim()))) {
          // delimiter row, skip
        } else {
          tableHtml += '<tr>' + row.map((cell) => `<td>${parseInlineMarkdown(cell)}</td>`).join('') + '</tr>';
        }
      });
      tableHtml += '</tbody></table></div>';
      result.push(tableHtml);
      tableRows = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];

    // Code blocks ```lang
    if (rawLine.trim().startsWith('```')) {
      if (inCodeBlock) {
        // Close code block
        const codeContent = escapeHtml(codeBlockLines.join('\n'));
        result.push(`<pre><code class="language-${escapeHtml(codeBlockLang)}">${codeContent}</code></pre>`);
        codeBlockLines = [];
        inCodeBlock = false;
        codeBlockLang = '';
      } else {
        flushList();
        flushTable();
        inCodeBlock = true;
        codeBlockLang = rawLine.trim().slice(3).trim();
        codeBlockLines = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(rawLine);
      continue;
    }

    // Markdown Table detection: | a | b |
    if (rawLine.trim().startsWith('|') && rawLine.trim().endsWith('|')) {
      flushList();
      inTable = true;
      const cells = rawLine
        .trim()
        .slice(1, -1)
        .split('|')
        .map((c) => c.trim());
      tableRows.push(cells);
      continue;
    } else {
      flushTable();
    }

    // Horizontal Rule: ---, ***, ___
    if (/^(---|[*]{3,}|_{3,})$/.test(rawLine.trim())) {
      flushList();
      result.push('<hr>');
      continue;
    }

    // Headings # through ######
    const headingMatch = rawLine.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      const content = parseInlineMarkdown(headingMatch[2]);
      result.push(`<h${level}>${content}</h${level}>`);
      continue;
    }

    // Blockquote > or >>
    if (rawLine.startsWith('>')) {
      flushList();
      const quoteContent = parseInlineMarkdown(rawLine.replace(/^>+\s?/, ''));
      result.push(`<blockquote><p>${quoteContent}</p></blockquote>`);
      continue;
    }

    // Task list items: - [ ] or - [x]
    if (/^[-*+]\s+\[([ xX])\]\s+(.+)$/.test(rawLine)) {
      flushList();
      const match = rawLine.match(/^[-*+]\s+\[([ xX])\]\s+(.+)$/);
      const isChecked = match[1].toLowerCase() === 'x';
      const taskText = match[2];
      const inlineParsed = parseInlineMarkdown(taskText);
      result.push(
        `<div class="task-item"><input type="checkbox" class="task-checkbox" ${isChecked ? 'checked' : ''} data-task-line="${escapeHtml(taskText)}"><span class="${isChecked ? 'task-done' : ''}">${inlineParsed}</span></div>`
      );
      continue;
    }

    // Unordered list items: - item, * item, + item
    const ulMatch = rawLine.match(/^[-*+]\s+(.+)$/);
    if (ulMatch) {
      if (inList && listType !== 'ul') flushList();
      inList = true;
      listType = 'ul';
      listItems.push(`<li>${parseInlineMarkdown(ulMatch[1])}</li>`);
      continue;
    }

    // Ordered list items: 1. item
    const olMatch = rawLine.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (inList && listType !== 'ol') flushList();
      inList = true;
      listType = 'ol';
      listItems.push(`<li>${parseInlineMarkdown(olMatch[1])}</li>`);
      continue;
    }

    flushList();

    // Empty line / paragraph
    if (!rawLine.trim()) {
      continue;
    }

    result.push(`<p>${parseInlineMarkdown(rawLine)}</p>`);
  }

  flushList();
  flushTable();

  return result.join('');
}

function parseInlineMarkdown(text) {
  if (!text) return '';
  let str = escapeHtml(text);

  // Inline code: `code`
  str = str.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Bold & Italic: ***text*** or ___text___
  str = str.replace(/(\*\*\*|___)(.*?)\1/g, '<strong><em>$2</em></strong>');

  // Bold: **text** or __text__
  str = str.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');

  // Italic: *text* or _text_
  str = str.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');

  // Strikethrough: ~~text~~
  str = str.replace(/~~(.*?)~~/g, '<del>$1</del>');

  // Links: [text](url)
  str = str.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  return str;
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
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
    currentGradientState = null;
    try {
      localStorage.removeItem('liquid_glass_custom_gradient');
    } catch (e) { }
    const blobUrl = await LiquidGlassDB.saveBgImage(file);
    const bgContainer = document.getElementById('desktop-bg');
    if (bgContainer && blobUrl) {
      bgContainer.style.backgroundImage = `url("${blobUrl}")`;
      bgContainer.classList.remove('hidden-bg');
    }

    const dropzone = document.getElementById('bg-dropzone');
    const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
    if (dropzone) dropzone.innerHTML = `<div>已載入：${file.name}</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">${dict.dropzoneSavedHint || 'High-resolution image saved'}</div>`;

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
  currentGradientState = null;
  try {
    localStorage.removeItem('liquid_glass_custom_gradient');
  } catch (e) { }
  const bgContainer = document.getElementById('desktop-bg');
  if (bgContainer) bgContainer.style.backgroundImage = 'none';
  await LiquidGlassDB.clearBgImage();
  const dropzone = document.getElementById('bg-dropzone');
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
  if (dropzone) dropzone.innerHTML = `<div>${dict.dropzoneText || 'Click or drop an image here'}</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">${dict.dropzoneSub || 'High-resolution images are saved to local IndexedDB'}</div>`;
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

// ==========================================
// User Aesthetic & Color Preference Model
// Analyzes imported wallpaper images and custom gradients to estimate
// user's aesthetic preferences (dominant hues, vibrant accents, contrast bias, warmth)
// rather than picking random hues.
// ==========================================
let userColorPreferenceModel = {
  source: 'default', // 'image' | 'gradient' | 'default'
  dominantHues: [210, 260],
  accentHues: [210, 340, 45],
  averageLuminance: 25,
  averageSaturation: 0.65,
  isDarkBackground: true,
  warmthFactor: 0.5,
  primaryAccent: '#0A84FF',
  suggestedBg: '#06080E',
  suggestedText: '#F5F5F7',
};

function updateUserColorPreferenceFromImage(img) {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  ctx.drawImage(img, 0, 0, 64, 64);
  const data = ctx.getImageData(0, 0, 64, 64).data;

  const hueHistogram = new Array(36).fill(0); // 36 buckets of 10 degrees
  const chromaWeights = new Array(36).fill(0);

  let totalR = 0, totalG = 0, totalB = 0;
  let totalSat = 0;
  let maxSat = 0;
  let bestAccent = '#0A84FF';
  let warmPixelCount = 0;
  let validPixelCount = 0;

  for (let i = 0; i < data.length; i += 16) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    totalR += r;
    totalG += g;
    totalB += b;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const d = max - min;
    const sat = max === 0 ? 0 : d / max;
    totalSat += sat;
    validPixelCount++;

    let h = 0;
    if (d !== 0) {
      if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) * 60;
      else if (max === g) h = ((b - r) / d + 2) * 60;
      else h = ((r - g) / d + 4) * 60;
    }
    const bucket = Math.floor(((h % 360) + 360) % 360 / 10);
    hueHistogram[bucket]++;

    if (max > 50 && max < 240 && sat > 0.2) {
      chromaWeights[bucket] += sat * (max / 255);
      if (sat > maxSat) {
        maxSat = sat;
        bestAccent = `#${[r, g, b].map((c) => c.toString(16).padStart(2, '0')).join('')}`;
      }
    }

    if ((h >= 0 && h <= 70) || (h >= 300 && h <= 360)) {
      warmPixelCount++;
    }
  }

  const sampleCount = validPixelCount || 1;
  const avgR = totalR / sampleCount;
  const avgG = totalG / sampleCount;
  const avgB = totalB / sampleCount;
  const luminance = 0.299 * avgR + 0.587 * avgG + 0.114 * avgB;
  const avgSat = totalSat / sampleCount;

  const sortedDominant = hueHistogram
    .map((count, b) => ({ hue: b * 10 + 5, weight: count }))
    .sort((a, b) => b.weight - a.weight);

  const sortedAccents = chromaWeights
    .map((weight, b) => ({ hue: b * 10 + 5, weight }))
    .sort((a, b) => b.weight - a.weight);

  const topHue1 = sortedDominant[0]?.hue ?? 210;
  const topHue2 = sortedDominant[1]?.hue ?? ((topHue1 + 35) % 360);
  const topAccent1 = sortedAccents[0]?.hue ?? ((topHue1 + 180) % 360);
  const topAccent2 = sortedAccents[1]?.hue ?? ((topHue1 + 120) % 360);

  const isLight = luminance > 130;
  const suggestedBg = isLight ? '#F2F2F7' : '#06080E';
  const suggestedText = isLight ? '#1C1C1E' : '#F5F5F7';

  userColorPreferenceModel = {
    source: 'image',
    dominantHues: [topHue1, topHue2],
    accentHues: [topAccent1, topAccent2, (topHue1 + 180) % 360],
    averageLuminance: luminance,
    averageSaturation: avgSat,
    isDarkBackground: !isLight,
    warmthFactor: warmPixelCount / sampleCount,
    primaryAccent: bestAccent,
    suggestedBg,
    suggestedText,
  };
}

function updateUserColorPreferenceFromGradient(color1, color2, angle = 135) {
  const hsv1 = hexToHsv(color1);
  const hsv2 = hexToHsv(color2);
  const lum1 = getHexLuminance(color1);
  const lum2 = getHexLuminance(color2);
  const avgLum = (lum1 + lum2) / 2;
  const isLight = avgLum > 130;

  const h1 = hsv1.h;
  const h2 = hsv2.h;

  userColorPreferenceModel = {
    source: 'gradient',
    dominantHues: [h1, h2],
    accentHues: [h1, h2, (h1 + 180) % 360, (h2 + 60) % 360],
    averageLuminance: avgLum,
    averageSaturation: (hsv1.s + hsv2.s) / 2,
    isDarkBackground: !isLight,
    warmthFactor: (((h1 >= 0 && h1 <= 70) || (h1 >= 300 && h1 <= 360) ? 1 : 0) + ((h2 >= 0 && h2 <= 70) || (h2 >= 300 && h2 <= 360) ? 1 : 0)) / 2,
    primaryAccent: color1,
    suggestedBg: isLight ? '#F2F2F7' : '#06080E',
    suggestedText: isLight ? '#1C1C1E' : '#F5F5F7',
  };
}

function analyzeImageLuminanceAndColors(img) {
  updateUserColorPreferenceFromImage(img);

  const autoColorToggle = document.getElementById('auto-color-toggle');
  if (autoColorToggle && !autoColorToggle.classList.contains('active')) {
    return;
  }

  const pref = userColorPreferenceModel;
  const bestAccent = pref.primaryAccent;
  const newTextColor = pref.suggestedText;
  const newBgColor = pref.suggestedBg;

  if (!pref.isDarkBackground) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }

  document.documentElement.style.setProperty('--accent-color', bestAccent);
  document.documentElement.style.setProperty('--text-color', newTextColor);
  document.documentElement.style.setProperty('--bg-color', newBgColor);
  document.body.style.backgroundColor = newBgColor;

  const hexAccent = document.getElementById('hex-accent-val');
  const hexText = document.getElementById('hex-text-val');
  const hexBg = document.getElementById('hex-bg-val');
  const bgInput = document.getElementById('input-bg-color');
  const textInput = document.getElementById('input-text-color');

  if (hexAccent) hexAccent.textContent = bestAccent;
  if (hexText) hexText.textContent = newTextColor;
  if (hexBg) hexBg.textContent = newBgColor;
  if (bgInput) bgInput.value = newBgColor;
  if (textInput) textInput.value = newTextColor;

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

  const color1 = document.getElementById('grad-color-1')?.value || '#0A84FF';
  const color2 = document.getElementById('grad-color-2')?.value || '#BF5AF2';
  const type = document.getElementById('gradient-type-dropdown')?.dataset.value || 'linear';
  const angleSlider = document.querySelector('.custom-slider[data-id="grad-angle"]');
  const angle = angleSlider ? (angleSlider.dataset.val || '135') : '135';

  currentGradientState = {
    enabled: true,
    color1,
    color2,
    type,
    angle,
    css: gradCss,
  };

  try {
    localStorage.setItem('liquid_glass_custom_gradient', JSON.stringify(currentGradientState));
  } catch (e) { }

  const dropzone = document.getElementById('bg-dropzone');
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
  if (dropzone) {
    dropzone.innerHTML = `<div>${dict.dropzoneLoadedGrad || 'Custom gradient applied'}</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">${dict.dropzoneChangeHint || 'Click or drop to set a custom image'}</div>`;
  }

  // Update intelligent color preference from custom gradient
  updateUserColorPreferenceFromGradient(color1, color2, parseInt(angle, 10));

  const pref = userColorPreferenceModel;
  checkAndUpdateThemeContrast(pref.suggestedBg, pref.suggestedText);
  saveSettings();
}

// ==========================================
// HSV / HEX Math & Color Helpers
// ==========================================
let currentPickerHsv = { h: 210, s: 0.8, v: 0.9 };

function getHexLuminance(hex) {
  let c = (hex || '').replace('#', '').trim();
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const num = parseInt(c, 16);
  if (isNaN(num) || c.length !== 6) return 128;
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function checkAndUpdateThemeContrast(bgColor, textColor) {
  const lum = getHexLuminance(bgColor || '#FFFFFF');
  const isLight = lum > 130;
  if (isLight) {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function renderAllPalettes() {
  // Safe no-op for backward compatibility
}

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
  return { h: Math.round(((h % 360) + 360) % 360), s, v };
}

// ==========================================
// Strict Dual-Color Settings Engine (Background & Text Only)
// ==========================================
function initColorSettings() {
  const bgInput = document.getElementById('input-bg-color');
  const textInput = document.getElementById('input-text-color');
  const hexBg = document.getElementById('hex-bg-val');
  const hexText = document.getElementById('hex-text-val');

  const setBg = (hex) => {
    if (!hex) return;
    document.documentElement.style.setProperty('--bg-color', hex);
    document.documentElement.style.setProperty('--accent-color', hex);
    document.body.style.backgroundColor = hex;
    if (bgInput) bgInput.value = hex;
    if (hexBg) hexBg.textContent = hex.toUpperCase();
    checkAndUpdateThemeContrast(hex, hexText?.textContent.trim());
    saveSettings();
  };

  const setText = (hex) => {
    if (!hex) return;
    document.documentElement.style.setProperty('--text-color', hex);
    if (textInput) textInput.value = hex;
    if (hexText) hexText.textContent = hex.toUpperCase();
    saveSettings();
  };

  if (bgInput) {
    bgInput.addEventListener('input', (e) => setBg(e.target.value));
  }
  if (textInput) {
    textInput.addEventListener('input', (e) => setText(e.target.value));
  }
  if (hexBg) {
    hexBg.addEventListener('blur', () => {
      let v = hexBg.textContent.trim();
      if (!v.startsWith('#')) v = '#' + v;
      if (/^#[0-9A-Fa-f]{6}$/.test(v)) setBg(v.toUpperCase());
    });
    hexBg.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        hexBg.blur();
      }
    });
  }
  if (hexText) {
    hexText.addEventListener('blur', () => {
      let v = hexText.textContent.trim();
      if (!v.startsWith('#')) v = '#' + v;
      if (/^#[0-9A-Fa-f]{6}$/.test(v)) setText(v.toUpperCase());
    });
    hexText.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        hexText.blur();
      }
    });
  }
}

// ==========================================
// Perfect Alignment Layout Presets
// ==========================================
// Default Layout Positioning
// ==========================================
function initDefaultCenterLayout() {
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;

  const clock = document.getElementById('clock-card');
  const search = document.getElementById('search-card');
  const dock = document.getElementById('liquid-dock');
  const notes = Array.from(document.querySelectorAll('.note-card'));

  if (clock) {
    const clockW = 360;
    clock.style.left = `${Math.round((winW - clockW) / 2)}px`;
    clock.style.top = `${Math.round(winH * 0.18)}px`;
    clock.style.width = `${clockW}px`;
    clock.style.display = '';
    clock.dataset.layoutLoaded = '1';
    updateClockCardScale(clock, clockW, 140);
  }

  if (search) {
    const searchW = Math.min(620, winW - 40);
    search.style.left = `${Math.round((winW - searchW) / 2)}px`;
    search.style.top = `${Math.round(winH * 0.18 + 190)}px`;
    search.style.width = `${searchW}px`;
    search.style.display = '';
    search.dataset.layoutLoaded = '1';
  }

  if (dock) {
    dock.classList.remove('positioned');
    dock.style.left = '';
    dock.style.top = '';
    dock.style.bottom = '';
    dock.style.transform = '';
    dock.style.display = '';
    dock.dataset.layoutLoaded = '1';
  }

  if (notes.length > 0) {
    const noteW = 290;
    const noteH = 210;
    const gap = 20;
    const totalW = notes.length * noteW + (notes.length - 1) * gap;
    let startLeft = Math.max(30, Math.round((winW - totalW) / 2));
    const topPos = Math.min(winH - noteH - 90, Math.round(winH * 0.58));

    notes.forEach((note, idx) => {
      note.style.left = `${startLeft + idx * (noteW + gap)}px`;
      note.style.top = `${topPos}px`;
      note.style.width = `${noteW}px`;
      note.style.height = `${noteH}px`;
      note.style.display = '';
      note.dataset.layoutLoaded = '1';
    });
  }

  saveLayout();
}

// ==========================================
// Dock Links & Editor Modal
// ==========================================
function initDock() {
  renderDock();
  renderDockSettingsList();

  const addBtn = document.getElementById('add-dock-item-btn');
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
  dock.innerHTML = '<div class="card-drag-handle dock-drag-handle" id="dock-drag-handle" title="拖曳書籤列">⠿</div>';

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
  bindCardControls(dock);
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
      const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
      if (confirm(dict.resetConfirm || 'Reset all settings to factory defaults?')) {
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
          const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
          alert(dict.importFailed || 'Import failed: invalid file format');
        }
      };
      reader.readAsText(file);
    });
  }
}

function saveSettingsImmediate() {
  if (!settingsLoaded) return;
  const cfg = {
    language: currentLanguage,
    accentColor: document.getElementById('hex-accent-val')?.textContent.trim() || '#0A84FF',
    textColor: document.getElementById('hex-text-val')?.textContent.trim() || '#000000',
    bgColor: document.getElementById('hex-bg-val')?.textContent.trim() || '#FFFFFF',
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
    searchEngine: document.getElementById('settings-engine-dropdown')?.dataset.value,
    searchInNewTab,
    searchHistoryEnabled,
    dockLinks: userDockLinks,
    wallpaperGradient: currentGradientState,
    chromeSyncEnabled: useChromeSync,
    hotkeys: userHotkeys,
    customWidgets: typeof userCustomWidgets !== 'undefined' ? userCustomWidgets : [],
    customCss: document.getElementById('custom-css-input')?.value || '',
    customJs: document.getElementById('custom-js-input')?.value || '',
  };

  AppStorage.set({ desktop_config: cfg });
  AppStorage.set({
    hotkeys: userHotkeys,
    chromeSyncEnabled: useChromeSync,
    custom_widgets: userCustomWidgets,
    custom_css: cfg.customCss,
    custom_js: cfg.customJs,
  });
}

const saveSettings = createDebounced(function () { saveSettingsImmediate(); }, 450);
const saveLayoutDebounced = createDebounced(function () { if (typeof saveLayoutImmediate === "function") saveLayoutImmediate(); }, 450);


function saveLayout() {
  if (!settingsLoaded) return;
  const clock = document.getElementById('clock-card');
  const search = document.getElementById('search-card');
  const notes = [];
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;

  document.querySelectorAll('.note-card').forEach((note) => {
    const textarea = note.querySelector('.note-textarea');
    const leftPx = parseInt(note.style.left, 10) || 0;
    const topPx = parseInt(note.style.top, 10) || 0;
    const leftPct = Number(((leftPx / winW) * 100).toFixed(3));
    const topPct = Number(((topPx / winH) * 100).toFixed(3));

    notes.push({
      leftPct,
      topPct,
      left: leftPct,
      top: topPct,
      unit: '%',
      width: parseInt(note.style.width, 10) || null,
      height: parseInt(note.style.height, 10) || null,
      content: textarea ? textarea.value : '',
      mode: textarea && textarea.style.display !== 'none' ? 'edit' : 'preview',
      display: note.style.display || '',
    });
  });

  const getCardData = (el) => {
    if (!el) return null;
    const isDock = el.id === 'liquid-dock';
    const isPositioned = el.classList.contains('positioned') && el.style.left !== '' && el.style.top !== '';

    if (isDock && !isPositioned) {
      return {
        positioned: false,
        display: el.style.display || '',
      };
    }

    const rawLeft = parseInt(el.style.left, 10);
    const rawTop = parseInt(el.style.top, 10);
    if (isNaN(rawLeft) || isNaN(rawTop)) {
      if (isDock) {
        return {
          positioned: false,
          display: el.style.display || '',
        };
      }
      return null;
    }

    const leftPct = Number(((rawLeft / winW) * 100).toFixed(3));
    const topPct = Number(((rawTop / winH) * 100).toFixed(3));
    return {
      positioned: isDock ? true : undefined,
      leftPct,
      topPct,
      left: leftPct,
      top: topPct,
      unit: '%',
      width: parseInt(el.style.width, 10) || null,
      height: parseInt(el.style.height, 10) || null,
      display: el.style.display || '',
    };
  };

  const dock = document.getElementById('liquid-dock');
  const layout = {
    clock: getCardData(clock),
    search: getCardData(search),
    dock: getCardData(dock),
    notes,
  };

  // Persist positions of user custom cards into custom_widgets storage
  if (typeof userCustomWidgets !== 'undefined' && Array.isArray(userCustomWidgets)) {
    let changed = false;
    document.querySelectorAll('.user-custom-card').forEach((el) => {
      const w = userCustomWidgets.find((x) => x.id === el.id);
      if (!w) return;
      const leftPx = parseInt(el.style.left, 10);
      const topPx = parseInt(el.style.top, 10);
      if (isNaN(leftPx) || isNaN(topPx)) return;
      const leftPct = Number(((leftPx / winW) * 100).toFixed(3));
      const topPct = Number(((topPx / winH) * 100).toFixed(3));
      const width = parseInt(el.style.width, 10) || w.width || null;
      const height = parseInt(el.style.height, 10) || w.height || null;
      if (w.left !== leftPct || w.top !== topPct || w.width !== width || w.height !== height || w.unit !== '%') {
        w.left = leftPct;
        w.top = topPct;
        w.leftPct = leftPct;
        w.topPct = topPct;
        w.unit = '%';
        w.width = width;
        w.height = height;
        changed = true;
      }
    });
    if (changed) {
      AppStorage.set({ custom_widgets: userCustomWidgets });
    }
  }

  AppStorage.set({ desktop_layout: layout });
}

async function loadSettings() {
  let hasCustomImage = false;
  try {
    const bgImgUrl = await LiquidGlassDB.loadBgImage();
    const bgContainer = document.getElementById('desktop-bg');
    if (bgImgUrl && bgContainer) {
      hasCustomImage = true;
      bgContainer.style.backgroundImage = `url("${bgImgUrl}")`;
      bgContainer.classList.remove('hidden-bg');
      const dropzone = document.getElementById('bg-dropzone');
      const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
      if (dropzone) dropzone.innerHTML = `<div>${dict.dropzoneLoadedBg || 'Custom wallpaper loaded'}</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">${dict.dropzoneSavedHint || 'High-resolution image saved'}</div>`;
    }
  } catch (err) {
    console.error('Error loading background image from LiquidGlassDB:', err);
  }

  // Restore fallback gradient from local storage if no image
  if (!hasCustomImage) {
    try {
      const storedGrad = localStorage.getItem('liquid_glass_custom_gradient');
      if (storedGrad) {
        const parsed = JSON.parse(storedGrad);
        if (parsed && parsed.enabled && parsed.css) {
          currentGradientState = parsed;
          const bgContainer = document.getElementById('desktop-bg');
          if (bgContainer) {
            bgContainer.style.backgroundImage = parsed.css;
            bgContainer.classList.remove('hidden-bg');
          }
        }
      }
    } catch (e) { }
  }

  return new Promise((resolve) => {
    AppStorage.get(['desktop_config', 'desktop_layout'], (res) => {
      if (res && res.desktop_config) applyConfig(res.desktop_config, hasCustomImage);
      if (res && res.desktop_layout) applyLayout(res.desktop_layout);
      resolve();
    });
  });
}

function applyConfig(cfg, hasCustomImage = false) {
  if (cfg.language) {
    setDropdownValue('language-dropdown', cfg.language);
    applyLanguage(cfg.language);
  } else {
    applyLanguage('auto');
  }

  const textColor = cfg.textColor || '#000000';
  const bgColor = cfg.bgColor || '#FFFFFF';

  const textEl = document.getElementById('hex-text-val');
  if (textEl) textEl.textContent = textColor;
  const textInput = document.getElementById('input-text-color');
  if (textInput) textInput.value = textColor;
  document.documentElement.style.setProperty('--text-color', textColor);

  const bgEl = document.getElementById('hex-bg-val');
  if (bgEl) bgEl.textContent = bgColor;
  const bgInput = document.getElementById('input-bg-color');
  if (bgInput) bgInput.value = bgColor;
  document.documentElement.style.setProperty('--bg-color', bgColor);
  document.documentElement.style.setProperty('--accent-color', bgColor);
  document.body.style.backgroundColor = bgColor;
  checkAndUpdateThemeContrast(bgColor, textColor);
  if (cfg.fontFamily) {
    setDropdownValue('font-family-dropdown', cfg.fontFamily);
    const fontVal = FONT_MAP[cfg.fontFamily] || FONT_MAP.system;
    document.documentElement.style.setProperty('--custom-font-family', fontVal);
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

  if (cfg.dockLinks && Array.isArray(cfg.dockLinks)) {
    userDockLinks = cfg.dockLinks;
    renderDock();
    renderDockSettingsList();
  }

  if (cfg.searchEngine) {
    setDropdownValue('engine-dropdown', cfg.searchEngine);
    setDropdownValue('settings-engine-dropdown', cfg.searchEngine);
  }

  // Restore gradient wallpaper if no custom photo uploaded
  const gradCfg = cfg.wallpaperGradient || currentGradientState;
  if (!hasCustomImage && gradCfg && gradCfg.enabled && gradCfg.css) {
    currentGradientState = gradCfg;
    const bgContainer = document.getElementById('desktop-bg');
    if (bgContainer) {
      bgContainer.style.backgroundImage = gradCfg.css;
      bgContainer.classList.remove('hidden-bg');
    }
    const color1 = document.getElementById('grad-color-1');
    const color2 = document.getElementById('grad-color-2');
    const hex1 = document.getElementById('grad-hex-1');
    const hex2 = document.getElementById('grad-hex-2');
    if (color1 && gradCfg.color1) color1.value = gradCfg.color1;
    if (color2 && gradCfg.color2) color2.value = gradCfg.color2;
    if (hex1 && gradCfg.color1) hex1.textContent = gradCfg.color1.toUpperCase();
    if (hex2 && gradCfg.color2) hex2.textContent = gradCfg.color2.toUpperCase();
    if (gradCfg.type) setDropdownValue('gradient-type-dropdown', gradCfg.type);
    if (gradCfg.angle) setSliderVal('grad-angle', gradCfg.angle);
    updateCustomGradientPreview();
    const dropzone = document.getElementById('bg-dropzone');
    const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
    if (dropzone) {
      dropzone.innerHTML = `<div>${dict.dropzoneLoadedGrad || 'Custom gradient applied'}</div><div style="font-size:10px;opacity:0.6;margin-top:4px;">${dict.dropzoneChangeHint || 'Click or drop to set a custom image'}</div>`;
    }
  }

  // Restore new advanced settings
  if (typeof cfg.chromeSyncEnabled === 'boolean') {
    useChromeSync = cfg.chromeSyncEnabled;
    const t = document.getElementById('chrome-sync-toggle');
    if (t) t.classList.toggle('active', useChromeSync);
  }
  if (cfg.hotkeys && typeof cfg.hotkeys === 'object') {
    userHotkeys = { ...DEFAULT_HOTKEYS, ...cfg.hotkeys };
    if (typeof applyHotkeyLabels === 'function') applyHotkeyLabels();
  }
  if (cfg.customWidgets && Array.isArray(cfg.customWidgets)) {
    userCustomWidgets = cfg.customWidgets;
  }
  if (cfg.customCss) {
    const cssEl = document.getElementById('custom-css-input');
    if (cssEl) cssEl.value = cfg.customCss;
    let styleTag = document.getElementById('prism-custom-css-tag');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'prism-custom-css-tag';
      document.head.appendChild(styleTag);
    }
    styleTag.textContent = cfg.customCss;
  }
  if (cfg.customJs) {
    const jsEl = document.getElementById('custom-js-input');
    if (jsEl) jsEl.value = cfg.customJs;
  }
}

function setToggle(id, active) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('active', !!active);
}

function applyLayout(layout) {
  if (!layout) return;
  if (layout.clock) applyCardLayout('clock-card', layout.clock);
  if (layout.search) applyCardLayout('search-card', layout.search);
  if (layout.dock) {
    const dockEl = document.getElementById('liquid-dock');
    const isExplicitlyPositioned = layout.dock.positioned === true &&
      layout.dock.leftPct != null && !isNaN(layout.dock.leftPct) &&
      layout.dock.topPct != null && !isNaN(layout.dock.topPct) &&
      (layout.dock.leftPct > 0 || layout.dock.topPct > 0);

    if (isExplicitlyPositioned) {
      applyCardLayout('liquid-dock', layout.dock);
      if (dockEl) {
        dockEl.classList.add('positioned');
        dockEl.style.bottom = 'auto';
        dockEl.style.transform = 'none';
      }
    } else {
      if (dockEl) {
        dockEl.classList.remove('positioned');
        dockEl.style.left = '';
        dockEl.style.top = '';
        dockEl.style.bottom = '';
        dockEl.style.transform = '';
        if (layout.dock.display === 'none') {
          dockEl.style.display = 'none';
        } else {
          dockEl.style.display = '';
        }
        dockEl.dataset.layoutLoaded = '1';
      }
    }
  } else {
    const dockEl = document.getElementById('liquid-dock');
    if (dockEl) {
      dockEl.classList.remove('positioned');
      dockEl.style.left = '';
      dockEl.style.top = '';
      dockEl.style.bottom = '';
      dockEl.style.transform = '';
      dockEl.dataset.layoutLoaded = '1';
    }
  }
  // Control center is fixed — ignore any legacy layout.controlPanel position data
  if (layout.notes && Array.isArray(layout.notes)) {
    layout.notes.forEach((n) => {
      createNoteCard(n.content, n.left, n.top, n.width, n.height, n.mode || 'preview', n.unit || '%');
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
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;

  let leftPx = 0;
  if (data.unit === '%' || (data.leftPct != null && !isNaN(data.leftPct))) {
    const pct = data.leftPct != null ? data.leftPct : data.left;
    leftPx = Math.round((parseFloat(pct) / 100) * winW);
  } else if (data.left != null) {
    if (typeof data.left === 'number' && data.left <= 100 && data.left >= 0 && !data.unit) {
      leftPx = Math.round((data.left / 100) * winW);
    } else {
      leftPx = parseFloat(data.left);
    }
  }

  let topPx = 0;
  if (data.unit === '%' || (data.topPct != null && !isNaN(data.topPct))) {
    const pct = data.topPct != null ? data.topPct : data.top;
    topPx = Math.round((parseFloat(pct) / 100) * winH);
  } else if (data.top != null) {
    if (typeof data.top === 'number' && data.top <= 100 && data.top >= 0 && !data.unit) {
      topPx = Math.round((data.top / 100) * winH);
    } else {
      topPx = parseFloat(data.top);
    }
  }

  const cardW = data.width || el.offsetWidth || 360;
  const cardH = data.height || el.offsetHeight || 140;
  leftPx = Math.max(10, Math.min(winW - cardW - 10, leftPx));
  topPx = Math.max(10, Math.min(winH - cardH - 10, topPx));

  el.style.left = `${leftPx}px`;
  el.style.top = `${topPx}px`;

  if (data.width) el.style.width = `${data.width}px`;
  if (data.height) el.style.height = `${data.height}px`;

  if (id === 'clock-card') {
    updateClockCardScale(el, data.width, data.height);
  }
  if (id === 'search-card') {
    el.style.height = '';
    updateSearchCardScale(el, data.width);
  }

  if (data.display === 'none') el.style.display = 'none';
  el.dataset.layoutLoaded = '1';
}

window.addEventListener('resize', () => {
  const winW = window.innerWidth || document.documentElement.clientWidth || 1200;
  const winH = window.innerHeight || document.documentElement.clientHeight || 800;

  if (!document.body.classList.contains('edit-mode') && !hasSavedLayout()) {
    initDefaultCenterLayout();
    return;
  }

  // Adjust all draggable cards so they stay fully visible on screen
  document.querySelectorAll('.draggable-card').forEach((card) => {
    if (card.id === 'liquid-dock' && !card.classList.contains('positioned')) {
      return;
    }
    const curLeft = parseInt(card.style.left, 10);
    const curTop = parseInt(card.style.top, 10);
    if (!isNaN(curLeft) && !isNaN(curTop)) {
      const cardW = card.offsetWidth || 300;
      const cardH = card.offsetHeight || 120;
      const safeLeft = Math.max(10, Math.min(winW - cardW - 10, curLeft));
      const safeTop = Math.max(10, Math.min(winH - cardH - 10, curTop));
      card.style.left = `${safeLeft}px`;
      card.style.top = `${safeTop}px`;
    }
  });
});

// ==========================================
// Hotkeys — Customizable Keyboard Shortcuts
// ==========================================
const DEFAULT_HOTKEYS = {
  'open-control': 'Ctrl+,',
  'focus-search': 'Ctrl+K',
  'reset-layout': 'Ctrl+Shift+R',
  'toggle-clock': 'Ctrl+Shift+C',
  'toggle-search': 'Ctrl+Shift+S',
  'toggle-dock': 'Ctrl+Shift+D',
  'add-note': 'Ctrl+Shift+N',
  'add-custom-card': 'Ctrl+Shift+W',
  'export-config': 'Ctrl+Shift+E',
  'clear-search': 'Ctrl+Shift+X',
};
let userHotkeys = Object.assign({}, DEFAULT_HOTKEYS);
let listeningHotkeyBtn = null;
let userCustomWidgets = [];
let editingCustomWidgetId = null;

function normalizeKeyEvent(e) {
  const parts = [];
  if (e.ctrlKey || e.metaKey) parts.push('Ctrl');
  if (e.altKey) parts.push('Alt');
  if (e.shiftKey) parts.push('Shift');
  let key = e.key;
  if (key === ' ') key = 'Space';
  if (key === 'Escape') return 'Escape';
  if (['Control', 'Shift', 'Alt', 'Meta'].includes(key)) return null;
  if (key.length === 1) key = key.toUpperCase();
  parts.push(key);
  return parts.join('+');
}

function hotkeyMatches(combo, e) {
  if (!combo) return false;
  const pressed = normalizeKeyEvent(e);
  if (!pressed || pressed === 'Escape') return false;
  return pressed.toLowerCase() === String(combo).toLowerCase();
}

function applyHotkeyLabels() {
  document.querySelectorAll('.hotkey-row').forEach((row) => {
    const action = row.dataset.action;
    const btn = row.querySelector('.hotkey-bind-btn');
    if (btn && action) {
      btn.textContent = (userHotkeys[action] || btn.dataset.default || '').replace(/\+/g, ' + ');
    }
  });
}

function executeHotkeyAction(action) {
  if (action === 'open-control') {
    const panel = document.getElementById('control-panel');
    if (panel) panel.classList.toggle('active');
  } else if (action === 'focus-search') {
    document.getElementById('search-input-box')?.focus();
  } else if (action === 'reset-layout') {
    if (typeof initDefaultCenterLayout === 'function') initDefaultCenterLayout();
  } else if (action === 'toggle-clock') {
    const card = document.getElementById('clock-card');
    if (card) card.style.display = card.style.display === 'none' ? '' : 'none';
    if (typeof saveLayout === 'function') saveLayout();
  } else if (action === 'toggle-search') {
    const card = document.getElementById('search-card');
    if (card) card.style.display = card.style.display === 'none' ? '' : 'none';
    if (typeof saveLayout === 'function') saveLayout();
  } else if (action === 'toggle-dock') {
    const dock = document.getElementById('liquid-dock');
    if (dock) dock.style.display = dock.style.display === 'none' ? '' : 'none';
    if (typeof saveLayout === 'function') saveLayout();
  } else if (action === 'add-note') {
    if (typeof createNoteCard === 'function') {
      const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
      createNoteCard(dict.noteDefaultContent || '# Tasks\n- [ ] New item', null, null, null, null, 'edit');
      if (typeof saveLayout === 'function') saveLayout();
    }
  } else if (action === 'add-custom-card') {
    openCardBuilder(null);
  } else if (action === 'export-config') {
    document.getElementById('export-config-btn')?.click();
  } else if (action === 'clear-search') {
    const box = document.getElementById('search-input-box');
    if (box) box.textContent = '';
  }
}

function initHotkeys() {
  applyHotkeyLabels();
  document.querySelectorAll('.hotkey-bind-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (listeningHotkeyBtn) {
        listeningHotkeyBtn.classList.remove('listening');
        const prevAction = listeningHotkeyBtn.closest('.hotkey-row')?.dataset.action;
        listeningHotkeyBtn.textContent = (userHotkeys[prevAction] || listeningHotkeyBtn.dataset.default || '').replace(/\+/g, ' + ');
      }
      listeningHotkeyBtn = btn;
      btn.classList.add('listening');
      const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
      btn.textContent = dict.pressKeys || 'Press keys…';
    });
  });
  document.getElementById('reset-hotkeys-btn')?.addEventListener('click', () => {
    userHotkeys = Object.assign({}, DEFAULT_HOTKEYS);
    applyHotkeyLabels();
    AppStorage.set({ hotkeys: userHotkeys });
  });
  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    const isTyping = tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable);
    if (listeningHotkeyBtn) {
      e.preventDefault();
      e.stopPropagation();
      const combo = normalizeKeyEvent(e);
      if (combo === 'Escape') {
        listeningHotkeyBtn.classList.remove('listening');
        const action = listeningHotkeyBtn.closest('.hotkey-row')?.dataset.action;
        listeningHotkeyBtn.textContent = (userHotkeys[action] || listeningHotkeyBtn.dataset.default || '').replace(/\+/g, ' + ');
        listeningHotkeyBtn = null;
        return;
      }
      if (!combo) return;
      const action = listeningHotkeyBtn.closest('.hotkey-row')?.dataset.action;
      if (action) {
        userHotkeys[action] = combo;
        listeningHotkeyBtn.textContent = combo.replace(/\+/g, ' + ');
        listeningHotkeyBtn.classList.remove('listening');
        listeningHotkeyBtn = null;
        AppStorage.set({ hotkeys: userHotkeys });
      }
      return;
    }
    if (isTyping) return;
    for (const action of Object.keys(userHotkeys)) {
      if (hotkeyMatches(userHotkeys[action], e)) {
        e.preventDefault();
        executeHotkeyAction(action);
        break;
      }
    }
  });
}

function initChromeSyncUI() {
  const toggle = document.getElementById('chrome-sync-toggle');
  if (toggle) {
    toggle.classList.toggle('active', !!useChromeSync);
    toggle.addEventListener('click', () => {
      useChromeSync = !useChromeSync;
      toggle.classList.toggle('active', useChromeSync);
      AppStorage.set({ chromeSyncEnabled: useChromeSync });
    });
  }
  document.getElementById('sync-now-btn')?.addEventListener('click', () => {
    const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
    AppStorage.pushToSync((err) => {
      if (err) alert((dict.syncFailed || 'Sync failed: ') + (err.message || err));
      else alert(dict.syncPushed || 'Settings pushed to Chrome Sync');
    });
  });
  document.getElementById('pull-sync-btn')?.addEventListener('click', () => {
    const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
    AppStorage.pullFromSync((err) => {
      if (err) alert((dict.syncPullFailed || 'Failed to restore from cloud: ') + (err.message || err));
      else {
        alert(dict.syncPulled || 'Settings restored from the cloud. Reloading…');
        location.reload();
      }
    });
  });
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function saveCustomWidgets() {
  AppStorage.set({ custom_widgets: userCustomWidgets });
}

function renderCustomCardsList() {
  const list = document.getElementById('custom-cards-list');
  if (!list) return;
  list.innerHTML = '';
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
  if (!userCustomWidgets.length) {
    list.innerHTML = '<div style="font-size:11px;opacity:0.5;padding:8px;white-space:nowrap;">' + (dict.noCustomCards || 'No custom cards yet') + '</div>';
    return;
  }
  userCustomWidgets.forEach((w, idx) => {
    const row = document.createElement('div');
    row.className = 'dock-link-row';
    row.innerHTML = '<div class="dock-link-badge">' + (idx + 1) + '</div><div class="dock-link-info"><div class="dock-link-title" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + escapeHtml(w.title || dict.untitledCard || 'Untitled card') + '</div><div class="dock-link-url" style="white-space:nowrap;">HTML/CSS/JS</div></div><div class="dock-link-actions"><div class="custom-btn secondary-btn xs edit-cw-btn">' + (dict.edit || 'Edit') + '</div><div class="custom-btn del-btn xs del-cw-btn">✕</div></div>';
    row.querySelector('.edit-cw-btn')?.addEventListener('click', () => openCardBuilder(w.id));
    row.querySelector('.del-cw-btn')?.addEventListener('click', () => {
      userCustomWidgets = userCustomWidgets.filter((x) => x.id !== w.id);
      document.getElementById(w.id)?.remove();
      saveCustomWidgets();
      renderCustomCardsList();
    });
    list.appendChild(row);
  });
}

function renderAllCustomWidgetCards() {
  document.querySelectorAll('.user-custom-card').forEach((el) => {
    if (!userCustomWidgets.find((w) => w.id === el.id)) el.remove();
  });
  userCustomWidgets.forEach((w, idx) => createOrUpdateCustomWidgetCard(w, idx));
}

function createOrUpdateCustomWidgetCard(widget, idx) {
  let card = document.getElementById(widget.id);
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
  if (!card) {
    card = document.createElement('div');
    card.id = widget.id;
    card.className = 'liquid-glass draggable-card user-custom-card';
    // glass material must cover entire shell
    card.innerHTML = '<div class="card-drag-handle" title="' + (dict.noteDragHandle || 'Drag') + '">⠿</div><div class="user-custom-del">✕</div><div class="card-body user-custom-body"></div><div class="note-resize-handle" title="' + (dict.noteResizeHandle || 'Resize') + '"></div>';
    document.body.appendChild(card);
    const winW = window.innerWidth || 1200;
    const winH = window.innerHeight || 800;
    if (widget.left != null && widget.top != null) {
      const leftPx = widget.unit === '%' ? Math.round((widget.left / 100) * winW) : widget.left;
      const topPx = widget.unit === '%' ? Math.round((widget.top / 100) * winH) : widget.top;
      card.style.left = leftPx + 'px';
      card.style.top = topPx + 'px';
    } else {
      card.style.left = Math.max(40, winW - 320 - (idx % 3) * 40) + 'px';
      card.style.top = Math.max(80, 120 + (idx % 5) * 36) + 'px';
    }
    card.style.width = (widget.width || 280) + 'px';
    if (widget.height) card.style.height = widget.height + 'px';
    if (typeof bindCardControls === 'function') bindCardControls(card);
    if (typeof bindNoteResize === 'function') bindNoteResize(card);
    if (typeof applyGlassVarsFromRoot === 'function') applyGlassVarsFromRoot(card);
    card.querySelector('.user-custom-del')?.addEventListener('click', (e) => {
      e.stopPropagation();
      userCustomWidgets = userCustomWidgets.filter((x) => x.id !== widget.id);
      card.remove();
      saveCustomWidgets();
      renderCustomCardsList();
    });
  }
  const body = card.querySelector('.user-custom-body');
  if (body) {
    // Render HTML/CSS in the SAME document as the liquid-glass shell so backdrop-filter
    // stays continuous (no iframe seam / mid-card split).
    const html = widget.html || '';
    const css = widget.css || '';
    const jsc = widget.js || '';
    const scope = '#' + (window.CSS && CSS.escape ? CSS.escape(widget.id) : widget.id.replace(/[^a-zA-Z0-9_-]/g, '\\$&')) + ' .user-custom-body';

    let scopedCss = css || '';
    if (scopedCss.trim()) {
      scopedCss = scopedCss.replace(/(^|})\s*([^{}@/]+)\s*\{/g, function (m, brace, sel) {
        const parts = sel.split(',').map(function (s) {
          s = s.trim();
          if (!s || s.startsWith('@') || s.indexOf(scope) === 0) return s;
          return scope + ' ' + s;
        });
        return brace + ' ' + parts.join(', ') + ' {';
      });
    }

    body.innerHTML =
      '<style data-prism-card-style="1">' +
      scope + '{background:transparent!important;border:none!important;box-shadow:none!important;}' +
      scopedCss +
      '</style><div class="user-card-html-root">' + html + '</div>';

    // Optional JS: run inside hidden extension sandbox (CSP-safe). Visual content stays in-DOM.
    let runner = document.getElementById('prism-js-sandbox-frame');
    if (jsc && String(jsc).trim()) {
      const sandboxUrl = (typeof chrome !== 'undefined' && browser.runtime && browser.runtime.getURL)
        ? browser.runtime.getURL('src/shared/sandbox/sandbox.html')
        : '../shared/sandbox/sandbox.html';

      const runJs = function () {
        try {
          if (runner && runner.contentWindow) {
            runner.contentWindow.postMessage({
              type: 'prism-card-render',
              html: '',
              css: '',
              js: jsc
            }, '*');
          }
        } catch (e) {
          console.warn('card JS sandbox failed', e);
        }
      };

      if (!runner) {
        runner = document.createElement('iframe');
        runner.id = 'prism-js-sandbox-frame';
        runner.title = 'prism-js-sandbox';
        runner.setAttribute('aria-hidden', 'true');
        runner.style.cssText = 'position:fixed;width:0;height:0;border:0;opacity:0;pointer-events:none;left:-9999px;top:-9999px;';
        document.body.appendChild(runner);
        runner.addEventListener('load', function () { setTimeout(runJs, 10); });
        runner.src = sandboxUrl;
      } else {
        runJs();
      }
    }
  }
  if (typeof applyGlassVarsFromRoot === 'function') applyGlassVarsFromRoot(card);
  card.style.display = '';
}

function openCardBuilder(widgetId) {
  editingCustomWidgetId = widgetId || null;
  const modal = document.getElementById('card-builder-modal');
  const titleInput = document.getElementById('card-builder-title-input');
  const htmlIn = document.getElementById('card-html-input');
  const cssIn = document.getElementById('card-css-input');
  const jsIn = document.getElementById('card-js-input');
  const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
  const titleEl = document.getElementById('lbl-card-builder-title');
  if (widgetId) {
    const w = userCustomWidgets.find((x) => x.id === widgetId);
    if (titleInput) titleInput.value = w?.title || '';
    if (htmlIn) htmlIn.value = w?.html || '';
    if (cssIn) cssIn.value = w?.css || '';
    if (jsIn) jsIn.value = w?.js || '';
    if (titleEl) titleEl.textContent = dict.editCard || 'Edit custom card';
  } else {
    if (titleInput) titleInput.value = dict.untitledCard || 'My card';
    if (htmlIn) htmlIn.value = '<div style="font-size:13px;"><strong>Hello</strong><p style="opacity:0.75;margin-top:4px;">Edit me</p></div>';
    if (cssIn) cssIn.value = '';
    if (jsIn) jsIn.value = '';
    if (titleEl) titleEl.textContent = dict.newCard || 'Add custom card';
  }
  if (modal) modal.classList.add('active');
}

function closeCardBuilder() {
  document.getElementById('card-builder-modal')?.classList.remove('active');
  editingCustomWidgetId = null;
}

function initCardBuilder() {
  document.getElementById('open-card-builder-btn')?.addEventListener('click', () => openCardBuilder(null));
  document.getElementById('close-card-builder')?.addEventListener('click', closeCardBuilder);
  document.getElementById('cancel-card-builder-btn')?.addEventListener('click', closeCardBuilder);
  document.getElementById('save-card-builder-btn')?.addEventListener('click', () => {
    const title = (document.getElementById('card-builder-title-input')?.value || '').trim() || 'Card';
    const html = document.getElementById('card-html-input')?.value || '';
    const css = document.getElementById('card-css-input')?.value || '';
    const jsc = document.getElementById('card-js-input')?.value || '';
    if (editingCustomWidgetId) {
      const w = userCustomWidgets.find((x) => x.id === editingCustomWidgetId);
      if (w) {
        w.title = title;
        w.html = html;
        w.css = css;
        w.js = jsc;
      }
    } else {
      userCustomWidgets.push({
        id: 'cw-' + Date.now(),
        title: title,
        html: html,
        css: css,
        js: jsc,
        enabled: true,
      });
    }
    saveCustomWidgets();
    renderCustomCardsList();
    renderAllCustomWidgetCards();
    closeCardBuilder();
  });
  AppStorage.get(['custom_widgets'], (res) => {
    if (res && Array.isArray(res.custom_widgets)) {
      userCustomWidgets = res.custom_widgets;
      renderCustomCardsList();
      renderAllCustomWidgetCards();
    }
  });
}

(function bootPrismExtras() {
  function run() {
    try {
      AppStorage.get(['chromeSyncEnabled', 'hotkeys'], (r) => {
        if (typeof r.chromeSyncEnabled === 'boolean') useChromeSync = r.chromeSyncEnabled;
        if (r.hotkeys && typeof r.hotkeys === 'object') userHotkeys = Object.assign({}, DEFAULT_HOTKEYS, r.hotkeys);
        initChromeSyncUI();
        initHotkeys();
      });
      initCardBuilder();
      // Ensure note button works outside widget hub
      const addNoteBtn = document.getElementById('add-note-btn');
      if (addNoteBtn && !addNoteBtn.dataset.bound) {
        addNoteBtn.dataset.bound = '1';
        addNoteBtn.addEventListener('click', () => {
          if (typeof createNoteCard === 'function') {
            const dict = TRANSLATIONS[resolvedLanguage] || TRANSLATIONS.en || TRANSLATIONS['zh-TW'];
            createNoteCard(dict.noteDefaultContent || '# Tasks\n- [ ] New item', null, null, null, null, 'edit');
            if (typeof saveLayout === 'function') saveLayout();
          }
        });
      }
    } catch (e) {
      console.error('PrismTab extras init error', e);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { setTimeout(run, 60); });
  } else {
    setTimeout(run, 60);
  }
})();
