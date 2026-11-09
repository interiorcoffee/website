/* interior coffee · Bewegung (siehe motion.css). Läuft auf allen Seiten. */
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isContact = /kontakt(\.html)?$/.test(location.pathname);
  var header = null, hero = null, heroImg = null, lastY = 0, ticking = false;

  function measure() {
    if (!header || (window.scrollY || 0) > 10) return;
    root.style.setProperty('--ic-hh', header.offsetHeight + 'px');
  }

  function update() {
    ticking = false;
    var y = window.scrollY || 0;
    if (header) {
      root.classList.toggle('ic-compact', y > 80);
      if (y > 240 && y > lastY + 4) root.classList.add('ic-hide');
      else if (y < lastY - 4 || y <= 240) root.classList.remove('ic-hide');
      var past;
      if (hero && hero.isConnected) past = hero.getBoundingClientRect().bottom < header.offsetHeight;
      else past = y > 500;
      root.classList.toggle('ic-cta', past && !isContact);
      document.querySelectorAll('.ic-head-cta').forEach(function (c) { c.tabIndex = (past && !isContact) ? 0 : -1; });
    }
    if (heroImg && !reduce) {
      var r = hero.getBoundingClientRect();
      var p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      heroImg.style.transform = 'scale(' + (1 + p * 0.14).toFixed(4) + ')';
    }
    lastY = y;
  }

  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }

  function setupReveal() {
    if (reduce || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove('ic-pre'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      if (el.dataset.revealDone) return;
      el.dataset.revealDone = '1';
      el.classList.add('ic-reveal');
      var d = el.getAttribute('data-reveal');
      if (d) el.style.transitionDelay = d + 's';
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add('ic-pre'); io.observe(el); }
    });
  }


  // Unterseiten: Einblenden und Hover automatisch nach denselben Regeln wie auf der Startseite
  var curated = null;
  function kids(el) {
    var out = [];
    Array.prototype.forEach.call(el.children, function (c) {
      var t = c.tagName;
      if (t === 'SCRIPT' || t === 'STYLE' || t === 'TEMPLATE') return;
      if (t.indexOf('-') > 0 || getComputedStyle(c).display === 'contents') out = out.concat(kids(c));
      else if (c.offsetParent !== null || getComputedStyle(c).position === 'fixed') out.push(c);
    });
    return out;
  }
  function radius(el) { return parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0; }
  function isCard(el) {
    var cs = getComputedStyle(el), w = el.getBoundingClientRect().width;
    if (w > window.innerWidth * 0.72 || w < 120) return false;
    var framed = parseFloat(cs.borderTopWidth) > 0 || cs.boxShadow !== 'none' || (cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent');
    return radius(el) >= 12 && framed;
  }
  function autoEnhance() {
    if (curated === null) curated = !!document.querySelector('[data-reveal]');
    if (curated) return; // Seite ist bereits von Hand ausgezeichnet (Startseite)
    var hdr = document.querySelector('.ic-header');
    var sections = Array.prototype.filter.call(document.querySelectorAll('main section, body section, article.card'), function (sec) {
      return !(hdr && hdr.contains(sec)) && !sec.closest('footer') && !sec.parentElement.closest('section');
    });
    sections.forEach(function (sec) {
      var el = sec, k = kids(el);
      while (k.length === 1 && k[0].tagName === 'DIV') { el = k[0]; k = kids(el); }
      k.forEach(function (c) {
        var items = kids(c), cs = getComputedStyle(c);
        var grid = (cs.display === 'grid' || cs.display === 'flex') && items.length >= 2 && items.filter(isCard).length >= 2;
        if (grid) items.forEach(function (it, i) { if (!it.hasAttribute('data-reveal')) it.setAttribute('data-reveal', String(Math.min(i, 4) * 0.08)); });
        else if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', '');
      });
    });
    // Hover: Karten heben sich, Bilder in abgerundeten Rahmen zoomen leicht, Buttons und Pfeile bewegen sich
    document.querySelectorAll('body *').forEach(function (el) {
      if (hdr && hdr.contains(el)) return;
      if (el.closest('footer') || el.closest('[role=dialog]')) return;
      var t = el.tagName;
      if ((t === 'DIV' || t === 'A' || t === 'ARTICLE' || t === 'LI') && isCard(el)) {
        var img = el.querySelector('img');
        var onlyMedia = img && kids(el).length === 1;
        if (!onlyMedia) el.classList.add('ic-lift');
      }
      if ((t === 'DIV' || t === 'LI' || t === 'ARTICLE') && !el.classList.contains('ic-lift')) {
        var cst = getComputedStyle(el);
        var lined = parseFloat(cst.borderTopWidth) >= 1 || parseFloat(cst.borderBottomWidth) >= 1;
        var head = el.querySelector('h2, h3');
        if (lined && radius(el) < 12 && head && !el.querySelector('section') && !el.querySelector('.ic-row') && el.getBoundingClientRect().height < 600) {
          el.classList.add('ic-row'); head.classList.add('ic-row-title');
        }
      }
      if (t === 'IMG') {
        var box = el.parentElement;
        if (box && getComputedStyle(box).overflow === 'hidden' && radius(box) >= 12 && kids(box).length === 1) {
          el.classList.add('ic-zoom');
          if (!box.closest('.ic-lift')) box.classList.add('ic-zoom-wrap');
        }
      }
      if (t === 'A') {
        var cs = getComputedStyle(el), r = radius(el);
        var filled = cs.backgroundColor !== 'rgba(0, 0, 0, 0)' && cs.backgroundColor !== 'transparent';
        var outlined = parseFloat(cs.borderTopWidth) > 0 && parseFloat(cs.borderBottomWidth) > 0 && r >= 4;
        if ((filled || outlined) && r >= 4 && r < 12 && parseFloat(cs.paddingLeft) >= 14) el.classList.add('ic-btn');
      }
    });
  }

  function init() {
    header = document.querySelector('.ic-header');
    if (!header) return false;
    hero = document.querySelector('.hero-sec');
    heroImg = document.querySelector('.hero-img');
    if (heroImg) heroImg.style.willChange = 'transform';
    measure();
    root.classList.add('ic-hdr');
    if ('ResizeObserver' in window) new ResizeObserver(measure).observe(header);
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', onScroll, { passive: true });
    requestAnimationFrame(function () { requestAnimationFrame(function () { autoEnhance(); setupReveal(); }); });
    window.addEventListener('load', function () { autoEnhance(); setupReveal(); });
    update();
    return true;
  }

  // Seiten mit Baukasten rendern Header und Inhalte erst nach dem Laden: warten, bis sie da sind
  function start() {
    if (init()) return;
    var mo = new MutationObserver(function () { if (init()) mo.disconnect(); });
    mo.observe(document.body || root, { childList: true, subtree: true });
    setTimeout(function () { mo.disconnect(); }, 15000);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
