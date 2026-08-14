// ==========================================
// Liquid Glass Content Script
// Automatically syncs user custom colors & glass optics to all websites
// ==========================================

(function initGlobalLiquidGlass() {
  function syncColorsFromStorage() {
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['desktop_config'], (res) => {
        if (res && res.desktop_config) {
          const cfg = res.desktop_config;
          if (cfg.accentColor) {
            document.documentElement.style.setProperty('--lg-accent', cfg.accentColor);
          }
          if (cfg.textColor) {
            document.documentElement.style.setProperty('--lg-text', cfg.textColor);
          }
        }
      });
    }
  }

  syncColorsFromStorage();

  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.onChanged) {
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area === 'local' && changes.desktop_config) {
        const cfg = changes.desktop_config.newValue;
        if (cfg?.accentColor) document.documentElement.style.setProperty('--lg-accent', cfg.accentColor);
        if (cfg?.textColor) document.documentElement.style.setProperty('--lg-text', cfg.textColor);
      }
    });
  }

  // If on Google search pages, inject Apple liquid glass search card aesthetic
  const isGoogle = location.hostname.includes('google.');
  if (isGoogle) {
    const style = document.createElement('style');
    style.id = 'liquid-glass-google-theme';
    style.textContent = `
      div.g, div.RNNX2b, header, .sfbg, .sbfbar {
        border-radius: 16px !important;
        transition: all 0.25s ease !important;
      }
      div.g:hover {
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08) !important;
      }
    `;
    if (!document.getElementById('liquid-glass-google-theme')) {
      document.head.appendChild(style);
    }
  }
})();
