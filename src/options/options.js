// PrismTab Options Script
document.addEventListener('DOMContentLoaded', async () => {
  // Tab navigation
  const tabBtns = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.style.display = 'none');
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.style.display = 'block';
    });
  });

  // Open new tab button
  document.getElementById('btn-open-newtab')?.addEventListener('click', () => {
    if (typeof chrome !== 'undefined' && browser.tabs) {
      browser.tabs.create({ url: 'chrome://newtab' });
    } else {
      window.open('newtab.html', '_blank');
    }
  });

  // Load existing config
  let currentConfig = {};
  if (typeof chrome !== 'undefined' && browser.storage && browser.storage.local) {
    browser.storage.local.get(['prism_custom_config'], (res) => {
      if (res && res.prism_custom_config) {
        applyLoadedConfig(res.prism_custom_config);
      }
    });
  } else {
    try {
      const saved = localStorage.getItem('prism_custom_config');
      if (saved) applyLoadedConfig(JSON.parse(saved));
    } catch (e) {}
  }

  function applyLoadedConfig(cfg) {
    currentConfig = cfg;
    if (cfg.language && document.getElementById('opt-language')) document.getElementById('opt-language').value = cfg.language;
    if (cfg.bgColor && document.getElementById('opt-bg-color')) document.getElementById('opt-bg-color').value = cfg.bgColor;
    if (cfg.textColor && document.getElementById('opt-text-color')) document.getElementById('opt-text-color').value = cfg.textColor;
    if (cfg.fontFamily && document.getElementById('opt-font-select')) document.getElementById('opt-font-select').value = cfg.fontFamily;
    if (cfg.fontWeight && document.getElementById('opt-font-weight')) document.getElementById('opt-font-weight').value = cfg.fontWeight;
    if (cfg.fontSize && document.getElementById('opt-font-size')) document.getElementById('opt-font-size').value = cfg.fontSize;

    if (cfg.bgMode && document.getElementById('opt-bg-mode')) document.getElementById('opt-bg-mode').value = cfg.bgMode;
    if (cfg.overlayOpacity !== undefined && document.getElementById('opt-overlay-opacity')) document.getElementById('opt-overlay-opacity').value = cfg.overlayOpacity;
    if (cfg.blurAmount !== undefined && document.getElementById('opt-bg-blur')) document.getElementById('opt-bg-blur').value = cfg.blurAmount;

    if (cfg.widgets) {
      if (document.getElementById('opt-show-clock')) document.getElementById('opt-show-clock').checked = !!cfg.widgets.showClock;
      if (document.getElementById('opt-show-search')) document.getElementById('opt-show-search').checked = !!cfg.widgets.showSearch;
      if (document.getElementById('opt-show-dock')) document.getElementById('opt-show-dock').checked = !!cfg.widgets.showDock;
    }

    if (cfg.clockConfig) {
      if (document.getElementById('opt-clock-24h')) document.getElementById('opt-clock-24h').checked = !!cfg.clockConfig.format24h;
      if (document.getElementById('opt-clock-seconds')) document.getElementById('opt-clock-seconds').checked = !!cfg.clockConfig.showSeconds;
      if (document.getElementById('opt-clock-date')) document.getElementById('opt-clock-date').checked = !!cfg.clockConfig.showDate;
    }

    if (cfg.searchEngine && document.getElementById('opt-search-engine')) document.getElementById('opt-search-engine').value = cfg.searchEngine;
    if (cfg.searchNewTab !== undefined && document.getElementById('opt-search-newtab')) document.getElementById('opt-search-newtab').checked = !!cfg.searchNewTab;
    if (cfg.searchHistory !== undefined && document.getElementById('opt-search-history')) document.getElementById('opt-search-history').checked = !!cfg.searchHistory;

    if (cfg.dockConfig) {
      if (document.getElementById('opt-dock-shape')) document.getElementById('opt-dock-shape').value = cfg.dockConfig.iconShape || 'squircle';
      if (document.getElementById('opt-dock-size')) document.getElementById('opt-dock-size').value = cfg.dockConfig.iconSize || 'md';
      if (document.getElementById('opt-dock-labels')) document.getElementById('opt-dock-labels').checked = cfg.dockConfig.showLabels !== false;
      if (document.getElementById('opt-dock-newtab')) document.getElementById('opt-dock-newtab').checked = cfg.dockConfig.openInNewTab !== false;
    }

    if (cfg.customWidgetCode && document.getElementById('opt-custom-widget-code')) document.getElementById('opt-custom-widget-code').value = cfg.customWidgetCode;

    if (cfg.glassBlur !== undefined && document.getElementById('opt-glass-blur')) document.getElementById('opt-glass-blur').value = cfg.glassBlur;
    if (cfg.glassOpacity !== undefined && document.getElementById('opt-glass-opacity')) document.getElementById('opt-glass-opacity').value = Math.round(cfg.glassOpacity * 100);
    if (cfg.borderOpacity !== undefined && document.getElementById('opt-border-opacity')) document.getElementById('opt-border-opacity').value = Math.round(cfg.borderOpacity * 100);
    if (cfg.glassSaturate !== undefined && document.getElementById('opt-glass-saturate')) document.getElementById('opt-glass-saturate').value = cfg.glassSaturate;
    if (cfg.noiseRefraction !== undefined && document.getElementById('opt-noise-refraction')) document.getElementById('opt-noise-refraction').value = cfg.noiseRefraction;
    if (cfg.glassRadius !== undefined && document.getElementById('opt-glass-radius')) document.getElementById('opt-glass-radius').value = cfg.glassRadius;

    if (cfg.customCss && document.getElementById('opt-custom-css')) document.getElementById('opt-custom-css').value = cfg.customCss;
    if (cfg.customJs && document.getElementById('opt-custom-js')) document.getElementById('opt-custom-js').value = cfg.customJs;
    if (cfg.chromeSync !== undefined && document.getElementById('opt-chrome-sync')) document.getElementById('opt-chrome-sync').checked = !!cfg.chromeSync;
  }

  // Save Settings
  document.getElementById('btn-save-all')?.addEventListener('click', () => {
    const newConfig = {
      ...currentConfig,
      language: document.getElementById('opt-language')?.value || 'zh-TW',
      bgColor: document.getElementById('opt-bg-color')?.value || '#000000',
      textColor: document.getElementById('opt-text-color')?.value || '#FFFFFF',
      fontFamily: document.getElementById('opt-font-select')?.value || 'System Sans-Serif',
      fontWeight: Number(document.getElementById('opt-font-weight')?.value || 500),
      fontSize: Number(document.getElementById('opt-font-size')?.value || 16),

      bgMode: document.getElementById('opt-bg-mode')?.value || 'solid',
      overlayOpacity: Number(document.getElementById('opt-overlay-opacity')?.value || 0),
      blurAmount: Number(document.getElementById('opt-bg-blur')?.value || 0),

      widgets: {
        showClock: document.getElementById('opt-show-clock')?.checked ?? true,
        showSearch: document.getElementById('opt-show-search')?.checked ?? true,
        showDock: document.getElementById('opt-show-dock')?.checked ?? true,
      },

      clockConfig: {
        format24h: document.getElementById('opt-clock-24h')?.checked ?? true,
        showSeconds: document.getElementById('opt-clock-seconds')?.checked ?? false,
        showDate: document.getElementById('opt-clock-date')?.checked ?? true,
      },

      searchEngine: document.getElementById('opt-search-engine')?.value || 'google',
      searchNewTab: document.getElementById('opt-search-newtab')?.checked ?? true,
      searchHistory: document.getElementById('opt-search-history')?.checked ?? true,

      dockConfig: {
        iconShape: document.getElementById('opt-dock-shape')?.value || 'squircle',
        iconSize: document.getElementById('opt-dock-size')?.value || 'md',
        showLabels: document.getElementById('opt-dock-labels')?.checked ?? true,
        openInNewTab: document.getElementById('opt-dock-newtab')?.checked ?? true,
      },

      customWidgetCode: document.getElementById('opt-custom-widget-code')?.value || '',

      glassBlur: Number(document.getElementById('opt-glass-blur')?.value || 40),
      glassOpacity: Number(document.getElementById('opt-glass-opacity')?.value || 14) / 100,
      borderOpacity: Number(document.getElementById('opt-border-opacity')?.value || 12) / 100,
      glassSaturate: Number(document.getElementById('opt-glass-saturate')?.value || 125),
      noiseRefraction: Number(document.getElementById('opt-noise-refraction')?.value || 8),
      glassRadius: Number(document.getElementById('opt-glass-radius')?.value || 20),

      customCss: document.getElementById('opt-custom-css')?.value || '',
      customJs: document.getElementById('opt-custom-js')?.value || '',
      chromeSync: document.getElementById('opt-chrome-sync')?.checked ?? true,
    };

    if (typeof chrome !== 'undefined' && browser.storage && browser.storage.local) {
      browser.storage.local.set({ prism_custom_config: newConfig }, () => {
        showFeedback();
      });
    } else {
      localStorage.setItem('prism_custom_config', JSON.stringify(newConfig));
      showFeedback();
    }
  });

  function showFeedback() {
    const fb = document.getElementById('save-feedback');
    if (fb) {
      fb.style.display = 'inline';
      setTimeout(() => fb.style.display = 'none', 3000);
    }
  }

  // Local Export / Import
  document.getElementById('opt-export-btn')?.addEventListener('click', () => {
    const data = { prism_custom_config: currentConfig };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prismtab-config-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
  document.getElementById('opt-import-btn')?.addEventListener('click', () => {
    document.getElementById('opt-import-file')?.click();
  });
  document.getElementById('opt-import-file')?.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const data = JSON.parse(evt.target.result);
        const cfg = data.prism_custom_config || data;
        applyLoadedConfig(cfg);
        currentConfig = cfg;
        if (typeof chrome !== 'undefined' && browser.storage && browser.storage.local) {
          browser.storage.local.set({ prism_custom_config: cfg }, () => showFeedback());
        } else {
          localStorage.setItem('prism_custom_config', JSON.stringify(cfg));
          showFeedback();
        }
      } catch (err) {
        alert('匯入失敗：檔案格式不正確');
      }
    };
    reader.readAsText(file);
  });

  // Global Reset
  document.getElementById('opt-reset-btn')?.addEventListener('click', () => {
    if (confirm('確定要將所有設定重置為預設狀態嗎？')) {
      const defaultConfig = {
        language: 'zh-TW',
        bgColor: '#000000',
        textColor: '#FFFFFF',
        fontFamily: 'System Sans-Serif',
        fontWeight: 500,
        fontSize: 16,
        bgMode: 'solid',
        overlayOpacity: 0,
        blurAmount: 0,
        widgets: { showClock: true, showSearch: true, showDock: true },
        clockConfig: { format24h: true, showSeconds: false, showDate: true },
        searchEngine: 'google',
        searchNewTab: true,
        searchHistory: true,
        dockConfig: { iconShape: 'squircle', iconSize: 'md', showLabels: true, openInNewTab: true },
        customWidgetCode: '',
        glassBlur: 40,
        glassOpacity: 0.14,
        borderOpacity: 0.12,
        glassSaturate: 125,
        noiseRefraction: 8,
        glassRadius: 20,
        customCss: '',
        customJs: '',
        chromeSync: true,
      };
      applyLoadedConfig(defaultConfig);
      if (typeof chrome !== 'undefined' && browser.storage && browser.storage.local) {
        browser.storage.local.set({ prism_custom_config: defaultConfig }, () => {
          showFeedback();
        });
      } else {
        localStorage.setItem('prism_custom_config', JSON.stringify(defaultConfig));
        showFeedback();
      }
    }
  });
});
