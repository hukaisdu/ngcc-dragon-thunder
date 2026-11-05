/* Theme toggle for NGCC Dragon & Thunder study pages.
   Applies saved theme ASAP (script is loaded in <head>), then injects
   a toggle button into the site header once the DOM is ready. */
(function () {
  var KEY = 'ngcc-theme';
  var root = document.documentElement;

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'dark' || saved === 'light') {
    root.setAttribute('data-theme', saved);
  }

  function current() {
    var t = root.getAttribute('data-theme');
    if (t === 'dark' || t === 'light') return t;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function label(t) { return t === 'dark' ? '\u2600\uFE0F' : '\uD83C\uDF19'; } // in dark: sun; in light: moon
  function aria(t) { return t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'; }

  function makeButton() {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'theme-toggle';
    function sync() { var t = current(); b.textContent = label(t); b.setAttribute('aria-label', aria(t)); b.title = aria(t); }
    b.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
    sync();
    // follow live system changes only while the user has not chosen explicitly
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
        if (!root.getAttribute('data-theme')) sync();
      });
    }
    return b;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      var h = document.querySelector('header.site .in');
      if (h) h.appendChild(makeButton());
    });
  } else {
    var h = document.querySelector('header.site .in');
    if (h) h.appendChild(makeButton());
  }
})();
