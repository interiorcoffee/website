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
    setupReveal();
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
