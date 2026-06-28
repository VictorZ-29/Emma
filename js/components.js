/* =================================================================
   components.js — interactive pieces, all data-attribute driven.
   Pages opt in with: data-deck, data-quiz, data-complete, [.acc-head],
   and hub containers (#sommaire, #themes, #phrase-day, #hero-stats).
   ================================================================= */
window.FR = window.FR || {};

/* ------------------------------------------------------------------
   Accordion
------------------------------------------------------------------ */
FR.initAccordions = function () {
  document.querySelectorAll('.acc-head').forEach(head => {
    head.setAttribute('aria-expanded', 'false');
    head.addEventListener('click', () => {
      const item = head.closest('.acc-item');
      const open = item.classList.toggle('open');
      head.setAttribute('aria-expanded', open);
    });
  });
};

/* ------------------------------------------------------------------
   Flashcard deck
------------------------------------------------------------------ */
FR.initDecks = function () {
  document.querySelectorAll('[data-deck]').forEach(host => {
    const id = host.dataset.deck;
    const source = (FR.data.vocab && FR.data.vocab[id]) || [];
    if (!source.length) { host.innerHTML = '<p class="muted">No cards found for “' + id + '”.</p>'; return; }

    let cards = source.slice();
    let i = 0, knownSeen = 0;
    const seen = new Set();

    host.classList.add('deck');
    host.innerHTML = `
      <div class="deck__progress"></div>
      <button class="flashcard" type="button" aria-label="Flip card">
        <div class="flashcard__inner">
          <div class="flashcard__face flashcard__face--front">
            <span class="flashcard__tag">🇫🇷 French</span>
            <div class="flashcard__fr"></div>
            <div class="fc-audio"></div>
            <div class="flashcard__hint">Tap the card to flip</div>
          </div>
          <div class="flashcard__face flashcard__face--back">
            <span class="flashcard__tag">🇬🇧 English</span>
            <div class="flashcard__en"></div>
            <div class="flashcard__ex"></div>
          </div>
        </div>
      </button>
      <div class="deck__controls">
        <div class="deck__nav">
          <button class="icon-btn" data-prev type="button" aria-label="Previous card">‹</button>
          <button class="icon-btn" data-next type="button" aria-label="Next card">›</button>
        </div>
        <button class="btn btn--ghost btn--sm" data-shuffle type="button">⤮ Shuffle</button>
        <button class="btn btn--gold btn--sm" data-known type="button">Got it 👍</button>
      </div>
      <div class="deck__done"></div>`;

    const elCard = host.querySelector('.flashcard');
    const elFr = host.querySelector('.flashcard__fr');
    const elAudio = host.querySelector('.fc-audio');
    const elEn = host.querySelector('.flashcard__en');
    const elEx = host.querySelector('.flashcard__ex');
    const elProg = host.querySelector('.deck__progress');
    const elDone = host.querySelector('.deck__done');

    function render() {
      const c = cards[i];
      elCard.classList.remove('flipped');
      elFr.textContent = c.fr;
      elAudio.innerHTML = '';
      elAudio.appendChild(FR.audioButton(c.fr));
      elEn.textContent = c.en;
      let back = c.ex ? `« ${c.ex} »` : '';
      if (c.exEn) back += `<br><span style="font-style:normal;color:var(--ink-faint)">${c.exEn}</span>`;
      if (c.note) back += `<br><br><span style="font-style:normal;color:var(--violet-deep);font-size:.85rem">💡 ${c.note}</span>`;
      elEx.innerHTML = back;
      elProg.textContent = `Card ${i + 1} of ${cards.length}` + (knownSeen ? ` · ${knownSeen} marked “got it”` : '');
      seen.add(cards[i].fr);
      elDone.textContent = (seen.size === cards.length) ? 'Nice — you’ve been through the whole deck. Bravo ! 🎉' : '';
    }
    function go(n) { i = (n + cards.length) % cards.length; render(); }

    elCard.addEventListener('click', e => {
      if (e.target.closest('.audio-btn')) return;     // don't flip when tapping audio
      elCard.classList.toggle('flipped');
    });
    host.querySelector('[data-prev]').addEventListener('click', () => go(i - 1));
    host.querySelector('[data-next]').addEventListener('click', () => go(i + 1));
    host.querySelector('[data-shuffle]').addEventListener('click', () => {
      for (let k = cards.length - 1; k > 0; k--) { const j = Math.floor(Math.random() * (k + 1)); [cards[k], cards[j]] = [cards[j], cards[k]]; }
      i = 0; render(); FR.toast('Shuffled');
    });
    host.querySelector('[data-known]').addEventListener('click', () => { knownSeen++; go(i + 1); });

    render();
  });
};

/* ------------------------------------------------------------------
   Quiz
------------------------------------------------------------------ */
FR.initQuizzes = function () {
  document.querySelectorAll('[data-quiz]').forEach(host => {
    const id = host.dataset.quiz;
    const q = FR.data.quizzes && FR.data.quizzes[id];
    if (!q) { host.innerHTML = '<p class="muted">Quiz “' + id + '” not found.</p>'; return; }

    let idx = 0, score = 0;
    const marks = q.questions.map(() => null); // null | 'good' | 'bad'
    host.classList.add('quiz');

    function dots() {
      return '<div class="quiz__dots">' + q.questions.map((_, n) => {
        let cls = 'quiz__dot';
        if (n === idx) cls += ' is-current';
        if (marks[n] === 'good') cls += ' is-good';
        if (marks[n] === 'bad') cls += ' is-bad';
        return `<span class="${cls}"></span>`;
      }).join('') + '</div>';
    }

    function renderQuestion() {
      const item = q.questions[idx];
      const keys = ['A', 'B', 'C', 'D'];
      const opts = item.options.map((o, n) =>
        `<button class="opt" type="button" data-i="${n}">
           <span><span class="opt__key">${keys[n]}</span>&nbsp;&nbsp;${item.frOpts ? `<span class="fr">${o}</span>` : o}</span>
           <span class="opt__mark"></span>
         </button>`).join('');
      const prompt = item.promptFr
        ? `<span class="quiz__prompt-fr">${item.promptFr}</span>`
        : item.prompt;
      host.innerHTML = `
        ${dots()}
        <p class="quiz__q">${prompt}</p>
        ${item.hint ? `<p class="quiz__hint">${item.hint}</p>` : ''}
        <div class="quiz__options">${opts}</div>
        <div class="quiz__explain-slot"></div>
        <div class="quiz__foot"></div>`;

      const optionEls = host.querySelectorAll('.opt');
      optionEls.forEach(btn => btn.addEventListener('click', () => {
        const chosen = +btn.dataset.i;
        const correct = item.answer;
        const right = chosen === correct;
        if (right) { score++; marks[idx] = 'good'; } else { marks[idx] = 'bad'; }

        optionEls.forEach(b => {
          b.disabled = true;
          const bi = +b.dataset.i;
          if (bi === correct) { b.classList.add('correct'); b.querySelector('.opt__mark').textContent = '✓'; }
          if (bi === chosen && !right) { b.classList.add('wrong'); b.querySelector('.opt__mark').textContent = '✗'; }
        });

        host.querySelector('.quiz__explain-slot').innerHTML =
          `<div class="quiz__explain ${right ? 'good' : 'bad'}">${right ? '<strong>Correct.</strong> ' : '<strong>Not quite.</strong> '}${item.explain}</div>`;

        const last = idx === q.questions.length - 1;
        host.querySelector('.quiz__foot').innerHTML =
          `<button class="btn btn--primary" data-next type="button">${last ? 'See result' : 'Next question'} →</button>`;
        host.querySelector('[data-next]').addEventListener('click', () => {
          if (last) { renderResult(); } else { idx++; renderQuestion(); }
        });
        // refresh dots to reflect this answer
        host.querySelector('.quiz__dots').outerHTML = dots();
      }));
    }

    function renderResult() {
      const total = q.questions.length;
      const pct = score / total;
      let verdict;
      if (pct === 1) verdict = 'Parfait ! 🎉';
      else if (pct >= 0.7) verdict = 'Très bien !';
      else if (pct >= 0.4) verdict = 'Pas mal — revois et recommence.';
      else verdict = 'Ça vient, promis. Réessaie !';
      host.innerHTML = `
        <div class="quiz__result">
          <div class="quiz__score">${score}<small> / ${total}</small></div>
          <p class="quiz__verdict">${verdict}</p>
          <button class="btn btn--ghost" data-retry type="button">Try again</button>
        </div>`;
      host.querySelector('[data-retry]').addEventListener('click', () => {
        idx = 0; score = 0; marks.fill(null); renderQuestion();
      });
    }

    renderQuestion();
  });
};

/* ------------------------------------------------------------------
   Dialogue — a short exchange to shadow (data-dialogue="…")
------------------------------------------------------------------ */
FR.initDialogues = function () {
  document.querySelectorAll('[data-dialogue]').forEach(host => {
    const id = host.dataset.dialogue;
    const d = FR.data.dialogues && FR.data.dialogues[id];
    if (!d) { host.innerHTML = '<p class="muted">Dialogue “' + id + '” not found.</p>'; return; }
    const lines = d.lines || [];

    host.classList.add('dialogue');
    let html = '';
    if (d.setting) html += `<p class="dialogue__setting">${d.setting}</p>`;
    html += `<div class="dialogue__controls">
        <button class="btn btn--ghost btn--sm" data-playall type="button">▶ Play all</button>
        <span class="dialogue__hint">Play a line, pause, and say it back out loud.</span>
      </div>
      <div class="dialogue__lines">`;
    lines.forEach((ln, n) => {
      const side = ln.who === 'B' ? 'b' : 'a';
      html += `<div class="dline dline--${side}" data-line="${n}">
          <div class="dline__bubble">
            <p class="dline__name">${ln.name || ln.who}</p>
            <p class="dline__fr">${ln.fr} <span class="dline__audio"></span></p>
            <p class="dline__en">${ln.en}</p>
          </div>
        </div>`;
    });
    html += '</div>';
    if (d.notes && d.notes.length) {
      html += '<div class="dialogue__notes">' +
        d.notes.map(nt => `<p class="dialogue__note">${nt}</p>`).join('') + '</div>';
    }
    host.innerHTML = html;

    // per-line audio
    host.querySelectorAll('.dline').forEach((el, n) => {
      el.querySelector('.dline__audio').appendChild(FR.audioButton(lines[n].fr));
    });

    // "Play all" sequencer
    const playBtn = host.querySelector('[data-playall]');
    let seq = null;
    function reset() {
      playBtn.textContent = '▶ Play all';
      host.querySelectorAll('.dline.is-speaking').forEach(e => e.classList.remove('is-speaking'));
      seq = null;
    }
    playBtn.addEventListener('click', () => {
      if (seq) { seq.stop(); reset(); return; }
      playBtn.textContent = '■ Stop';
      seq = FR.speakSequence(lines.map(l => l.fr), {
        onLineStart(idx) {
          host.querySelectorAll('.dline.is-speaking').forEach(e => e.classList.remove('is-speaking'));
          const cur = host.querySelector(`.dline[data-line="${idx}"]`);
          if (cur) cur.classList.add('is-speaking');
        },
        onDone: reset
      });
      if (!seq) reset();   // speech synthesis unavailable
    });
  });
};

/* ------------------------------------------------------------------
   "Your turn" — speaking prompt with a reveal (.your-turn[data-answer])
------------------------------------------------------------------ */
FR.initYourTurn = function () {
  document.querySelectorAll('.your-turn').forEach(el => {
    const answer = el.dataset.answer;
    if (!answer || el.dataset.ready) return;
    el.dataset.ready = '1';

    const reveal = document.createElement('div');
    reveal.className = 'your-turn__reveal';
    reveal.hidden = true;
    reveal.innerHTML = `<p class="your-turn__fr">« ${answer} » <span class="your-turn__audio"></span></p>`;
    reveal.querySelector('.your-turn__audio').appendChild(FR.audioButton(answer));

    const btn = document.createElement('button');
    btn.className = 'btn btn--ghost btn--sm your-turn__btn';
    btn.type = 'button';
    btn.textContent = 'Show a natural answer';
    btn.addEventListener('click', () => { reveal.hidden = false; btn.hidden = true; });

    el.appendChild(btn);
    el.appendChild(reveal);
  });
};

/* ------------------------------------------------------------------
   "Mark complete" buttons on module pages
------------------------------------------------------------------ */
FR.initCompletion = function () {
  document.querySelectorAll('[data-complete]').forEach(btn => {
    const id = btn.dataset.complete;
    const msg = document.querySelector('[data-complete-msg]');
    function paint() {
      const done = FR.progress.isDone(id);
      btn.classList.toggle('is-done', done);
      btn.textContent = done ? '✓ Completed' : 'Mark as complete';
      if (msg) msg.textContent = done ? 'Done — it’ll show a check on the home page.' : 'Finished this lesson? Mark it and keep your streak going.';
    }
    btn.addEventListener('click', () => {
      const next = !FR.progress.isDone(id);
      FR.progress.setDone(id, next);
      paint();
      if (next) FR.toast('Lesson complete', { tick: true });
    });
    paint();
  });
};

/* ------------------------------------------------------------------
   Hub (home page) rendering
------------------------------------------------------------------ */
FR.initHub = function () {
  // Phrase of the day
  const pd = document.getElementById('phrase-day');
  if (pd) {
    const list = FR.data.phrases;
    const start = new Date(new Date().getFullYear(), 0, 0);
    const day = Math.floor((Date.now() - start) / 86400000);
    const p = list[day % list.length];
    pd.innerHTML = `
      <div class="phrase-day__body">
        <p class="eyebrow gold">Phrase du jour</p>
        <p class="phrase-day__fr">« ${p.fr} »</p>
        <p class="phrase-day__en">${p.en}</p>
      </div>
      <div class="phrase-day__audio"></div>`;
    pd.querySelector('.phrase-day__audio').appendChild(FR.audioButton(p.fr, 'Listen'));
  }

  // Sommaire (the path)
  const som = document.getElementById('sommaire');
  if (som) {
    som.classList.add('sommaire');
    let html = '<div class="sommaire__line"></div>';
    FR.data.modules.forEach(m => {
      const done = m.status === 'ready' && FR.progress.isDone(m.id);
      const ready = m.status === 'ready';
      const tag = ready ? 'a' : 'div';
      const href = ready ? ` href="${m.href}"` : '';
      let pill;
      if (done) pill = '<span class="pill pill--done">Terminé ✓</span>';
      else if (ready) pill = `<span class="pill pill--violet">Commencer →</span>`;
      else pill = '<span class="pill pill--soon">Bientôt</span>';
      html += `
        <${tag} class="entry ${done ? 'is-done' : ''} ${ready ? '' : 'is-soon'}"${href}>
          <div class="entry__num"><span>${m.num}</span></div>
          <div>
            <p class="entry__title">${m.title}</p>
            <p class="entry__desc">${m.desc}</p>
            <div class="entry__meta"><span>⏱ ${m.mins} min</span></div>
          </div>
          <div class="entry__status">${pill}</div>
        </${tag}>`;
    });
    som.innerHTML = html;
  }

  // Vocabulary themes
  const th = document.getElementById('themes');
  if (th) {
    th.classList.add('grid', 'grid--themes');
    th.innerHTML = FR.data.themes.map(t => {
      const ready = t.status === 'ready';
      const tag = ready ? 'a' : 'div';
      const href = ready ? ` href="${t.href}"` : '';
      const meta = ready ? 'Flashcards ready' : 'Coming soon';
      return `<${tag} class="theme ${ready ? '' : 'is-soon'}"${href}>
          <span class="theme__emoji">${t.emoji}</span>
          <p class="theme__title">${t.title}</p>
          <span class="theme__meta">${meta}</span>
        </${tag}>`;
    }).join('');
  }

  // Hero stats + start CTA
  const streak = FR.progress.pingStreak();
  const doneN = FR.progress.countReadyDone();
  const totalN = FR.progress.readyTotal();
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('stat-streak', streak);
  set('stat-done', `${doneN}/${totalN}`);
  set('stat-streak-label', streak === 1 ? 'day streak' : 'day streak');

  const cta = document.getElementById('start-cta');
  if (cta) {
    const firstUndone = FR.data.modules.find(m => m.status === 'ready' && !FR.progress.isDone(m.id));
    if (doneN === 0) { cta.href = FR.data.modules[0].href; cta.textContent = 'Start here →'; }
    else if (firstUndone) { cta.href = firstUndone.href; cta.textContent = 'Continue →'; }
    else { cta.href = FR.data.modules[0].href; cta.textContent = 'Review from the top →'; }
  }
};

/* ------------------------------------------------------------------
   Boot
------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  FR.progress.pingStreak();   // count today's visit on every page
  FR.initAccordions();
  FR.initDecks();
  FR.initQuizzes();
  FR.initDialogues();
  FR.initYourTurn();
  FR.initCompletion();
  FR.initHub();
});
