(function () {
  var GA_ID = 'G-DVK0M3BREL';
  var KEY = 'ic-consent';
  var INK = '#1C1C1C', LINEN = '#ECEBE3', PAPER70 = 'rgba(236,235,227,0.70)';
  var SANS = '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif';

  var T = {
    de: {
      title: 'cookies & analyse',
      body: 'Diese Website funktioniert ohne Tracking. Optional darfst du mir erlauben, die Nutzung anonymisiert mit Google Analytics auszuwerten — das hilft mir, die Seite zu verbessern. Du kannst deine Entscheidung jederzeit im Footer ändern.',
      more: 'Datenschutz',
      accept: 'einverstanden',
      decline: 'nur notwendige'
    },
    en: {
      title: 'cookies & analytics',
      body: 'this website works without tracking. optionally you can allow me to evaluate usage anonymously with google analytics — it helps me improve the site. you can change your choice at any time via the footer.',
      more: 'privacy',
      accept: 'that\'s fine',
      decline: 'essential only'
    }
  };

  function lang() {
    try { return localStorage.getItem('ic-lang') === 'en' ? 'en' : 'de'; } catch (e) { return 'de'; }
  }
  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  var loaded = false;
  function loadGA() {
    if (loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, { anonymize_ip: true });
  }

  var el = null;
  function close() {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    setTimeout(function () { if (el && el.parentNode) el.parentNode.removeChild(el); el = null; }, 260);
  }

  function decide(v) {
    store(v);
    if (v === 'granted') loadGA();
    close();
  }

  function banner() {
    if (el) return;
    var t = T[lang()];
    el = document.createElement('div');
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', t.title);
    el.style.cssText = [
      'position:fixed', 'left:16px', 'right:16px', 'bottom:16px', 'z-index:2147483000',
      'max-width:560px', 'margin:0 auto', 'box-sizing:border-box',
      'background:' + INK, 'color:' + LINEN, 'border-radius:14px',
      'padding:26px 28px', 'box-shadow:0 18px 48px rgba(28,28,28,0.28)',
      'font-family:' + SANS, 'display:flex', 'flex-direction:column', 'gap:16px',
      'opacity:0', 'transform:translateY(12px)',
      'transition:opacity 240ms cubic-bezier(0.22,0.61,0.36,1),transform 240ms cubic-bezier(0.22,0.61,0.36,1)'
    ].join(';');

    var h = document.createElement('div');
    h.textContent = t.title;
    h.style.cssText = 'font-family:"Classico",Georgia,serif;font-weight:700;font-size:20px;letter-spacing:-0.01em;text-transform:lowercase;color:' + LINEN;

    var p = document.createElement('p');
    p.textContent = t.body;
    p.style.cssText = 'margin:0;font-size:14px;line-height:1.55;color:' + PAPER70;

    var a = document.createElement('a');
    a.href = location.pathname.indexOf('.dc.html') !== -1 ? 'datenschutz.dc.html' : 'datenschutz.html';
    a.textContent = t.more;
    a.style.cssText = 'font-size:13px;color:' + PAPER70 + ';text-decoration:underline;align-self:flex-start';

    var row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:12px;flex-wrap:wrap;padding-top:2px';

    function btn(label, primary, onClick) {
      var b = document.createElement('button');
      b.type = 'button';
      b.textContent = label;
      b.style.cssText = [
        'appearance:none', 'cursor:pointer', 'font-family:' + SANS,
        'font-size:14px', 'font-weight:500', 'padding:13px 24px', 'border-radius:8px',
        'transition:opacity 240ms cubic-bezier(0.22,0.61,0.36,1)',
        primary
          ? 'background:' + LINEN + ';color:' + INK + ';border:1px solid ' + LINEN
          : 'background:transparent;color:' + PAPER70 + ';border:1px solid rgba(236,235,227,0.28)'
      ].join(';');
      b.addEventListener('mouseenter', function () { b.style.opacity = '0.82'; });
      b.addEventListener('mouseleave', function () { b.style.opacity = '1'; });
      b.addEventListener('click', onClick);
      return b;
    }

    row.appendChild(btn(t.accept, true, function () { decide('granted'); }));
    row.appendChild(btn(t.decline, false, function () { decide('denied'); }));

    el.appendChild(h);
    el.appendChild(p);
    el.appendChild(a);
    el.appendChild(row);
    document.body.appendChild(el);
    requestAnimationFrame(function () {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }

  window.icOpenConsent = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    banner();
  };

  function init() {
    var s = stored();
    if (s === 'granted') loadGA();
    else if (s !== 'denied') banner();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
