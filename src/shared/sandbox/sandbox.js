(function () {
  function reportHeight() {
    try {
      var h = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 48);
      parent.postMessage({ type: 'prism-card-resize', height: h }, '*');
    } catch (e) {}
  }

  window.addEventListener('message', function (e) {
    var data = e.data;
    if (!data || data.type !== 'prism-card-render') return;

    // Clear previous content (keep base styles in head)
    var oldStyle = document.getElementById('user-css');
    if (oldStyle) oldStyle.remove();
    document.body.innerHTML = '';

    if (data.css) {
      var st = document.createElement('style');
      st.id = 'user-css';
      st.textContent = data.css;
      document.head.appendChild(st);
    }

    var root = document.createElement('div');
    root.id = 'card-root';
    root.innerHTML = data.html || '';
    document.body.appendChild(root);

    if (data.js && String(data.js).trim()) {
      try {
        // Chrome sandbox page / Firefox MV2 CSP (unsafe-eval) allows this
        var fn = new Function('root', data.js);
        fn(root);
      } catch (err) {
        console.error('PrismTab card JS error:', err);
        var errEl = document.createElement('pre');
        errEl.style.cssText = 'color:#ff8a8a;font-size:11px;white-space:pre-wrap;';
        errEl.textContent = String(err);
        document.body.appendChild(errEl);
      }
    }

    reportHeight();
    setTimeout(reportHeight, 50);
    setTimeout(reportHeight, 250);
  });

  // Ready signal
  parent.postMessage({ type: 'prism-card-ready' }, '*');
})();
