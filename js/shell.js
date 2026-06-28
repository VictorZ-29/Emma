/* =================================================================
   shell.js — shared chrome, navigation, French audio, toasts
   No build step, no modules: works on file:// and on GitHub Pages.
   ================================================================= */
window.FR = window.FR || {};

/* ---- Icons (inline SVG) ---- */
FR.icons = {
  speaker: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a9 9 0 0 1 0 14"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  prev: '‹', next: '›', shuffle: '⤮'
};

/* ---- Nav definition (French labels — all near-cognates, low friction) ---- */
FR.nav = [
  { label: 'Accueil',      href: 'index.html' },
  { label: 'Prononciation', href: 'pronunciation.html' },
  { label: 'Salutations',  href: 'greetings.html' },
  { label: 'Grammaire',    href: 'articles-and-gender.html' },
  { label: 'Vocabulaire',  href: 'vocabulary-food.html' }
];

FR.currentFile = (location.pathname.split('/').pop() || 'index.html');

/* ---- Header / footer injection ---- */
FR.renderShell = function () {
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    const links = FR.nav.map(n => {
      const active = n.href === FR.currentFile ? ' aria-current="page"' : '';
      return `<a href="${n.href}"${active}>${n.label}</a>`;
    }).join('');
    headerEl.outerHTML = `
      <header class="site-header">
        <div class="site-header__inner">
          <a class="brand" href="index.html" aria-label="le français — accueil">
            <span class="brand__mark">le fran<span class="accent">ç</span>ais</span>
            <span class="brand__tag">· pour Emma</span>
          </a>
          <button class="nav__toggle" aria-label="Menu" aria-expanded="false">${FR.icons.menu}</button>
          <nav class="nav" id="primary-nav">${links}</nav>
        </div>
      </header>`;
    const toggle = document.querySelector('.nav__toggle');
    const nav = document.getElementById('primary-nav');
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
  }

  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.outerHTML = `
      <footer class="site-footer">
        <div class="site-footer__inner">
          <p>Fait avec <span class="heart">❤</span> par Victor, pour Emma.</p>
          <p><button class="linkbtn" id="reset-progress">Reset my progress</button></p>
        </div>
      </footer>`;
    const reset = document.getElementById('reset-progress');
    if (reset) reset.addEventListener('click', () => {
      if (confirm('Reset all progress and streaks? This cannot be undone.')) {
        FR.progress && FR.progress.reset();
        FR.toast('Progress reset');
        setTimeout(() => location.reload(), 500);
      }
    });
  }
};

/* ---- French text-to-speech (Web Speech API) ---- */
FR._voices = [];
FR._loadVoices = function () {
  try { FR._voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; } catch (e) { FR._voices = []; }
};
FR._loadVoices();
if (window.speechSynthesis) speechSynthesis.addEventListener('voiceschanged', FR._loadVoices);

FR.speak = function (text, btn) {
  if (!('speechSynthesis' in window)) { FR.toast('Audio isn’t supported in this browser'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fr-FR';
  u.rate = 0.92;
  const v = FR._voices.find(x => /fr[-_]fr/i.test(x.lang)) || FR._voices.find(x => /^fr/i.test(x.lang));
  if (v) u.voice = v;
  if (btn) {
    btn.classList.add('is-playing');
    const clear = () => btn.classList.remove('is-playing');
    u.onend = clear; u.onerror = clear;
  }
  speechSynthesis.speak(u);
};

/* Build a ready-to-use audio button element */
FR.audioButton = function (text, label) {
  const b = document.createElement('button');
  b.className = 'audio-btn' + (label ? ' audio-btn--label' : '');
  b.type = 'button';
  b.setAttribute('aria-label', 'Listen: ' + text);
  b.dataset.speak = text;
  b.innerHTML = FR.icons.speaker + (label ? `<span>${label}</span>` : '');
  return b;
};

/* Delegate clicks on any [data-speak] audio button (incl. dynamically added) */
document.addEventListener('click', e => {
  const btn = e.target.closest('.audio-btn[data-speak]');
  if (btn) { e.preventDefault(); FR.speak(btn.dataset.speak, btn); }
});

/* Fill in any audio buttons authored without an icon */
FR.hydrateAudioButtons = function () {
  document.querySelectorAll('.audio-btn[data-speak]').forEach(b => {
    if (!b.querySelector('svg')) {
      const label = b.dataset.label ? `<span>${b.dataset.label}</span>` : '';
      b.innerHTML = FR.icons.speaker + label;
      if (!b.getAttribute('aria-label')) b.setAttribute('aria-label', 'Listen: ' + b.dataset.speak);
    }
  });
};

/* ---- Toast ---- */
FR.toast = function (msg, opts) {
  opts = opts || {};
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.innerHTML = (opts.tick ? '<span class="tick">✓</span>' : '') + `<span>${msg}</span>`;
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(FR._toastTimer);
  FR._toastTimer = setTimeout(() => t.classList.remove('show'), opts.duration || 2200);
};

/* ---- Boot ---- */
document.addEventListener('DOMContentLoaded', () => {
  FR.renderShell();
  FR.hydrateAudioButtons();
});
