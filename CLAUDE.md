# CLAUDE.md — working brief for *le français · pour Emma*

This file is the source of truth for anyone (human or Claude Code) building on this
repo. Read it fully before writing content or code. It is split into two halves that
matter equally:

- **Part A — Pedagogy & content.** *What* to teach and *how*. This is where generic
  output creeps in, so it's first and it's detailed. Treat it as non-negotiable.
- **Part B — Technical conventions.** *How the code works.* Architecture, data model,
  design system, and the recipes for adding content without breaking anything.

When Part A and a tempting technical shortcut conflict, Part A wins. When you're unsure
about an exact class name or function, **read the existing files** — they are the
canonical reference and they are small.

---

## 0. The project in one paragraph

A small, beautiful, static website that helps **Emma** become able to **hold a
conversation in French**. No build step, no framework — plain HTML/CSS/JS that deploys
to GitHub Pages untouched. All content lives in `js/data.js`; pages are thin. The visual
identity is a French school notebook ("L'encre violette"). The whole thing is a gift, so
the bar is "this feels personal and lovingly made," not "this is a course platform."

---

# PART A — PEDAGOGY & CONTENT

## A1. Who this is actually for (read twice)

- **Emma.** Native English speaker. **Lived in Zurich for a few years as a child, so she
  has some German** — use that, it's an asset (see A5).
- **Level: A2, reaching toward B1.** She is **not a beginner.** She can already **read
  French reasonably and pronounce it OK.** Assume she knows: the alphabet, basic phonics,
  `le/la/un/une`, numbers, days, "bonjour = hello," present tense of common verbs, basic
  everyday vocab. **Do not teach these from zero.** If a lesson's core could be in a
  first-week textbook, it is too basic — raise the level or cut it.
- **The one goal: conversation.** She wants to be able to **talk with people in French** —
  understand and be understood in real, casual spoken exchanges. Not exam prep, not essay
  writing, not literary reading, not grammar mastery for its own sake. Every single lesson
  must pass this test:

  > **"After this, what can Emma now *say* or *handle* in a live conversation that she
  > couldn't before?"**

  If you can't answer that crisply, the lesson is wrong.

## A2. The north star: build a *speaker*, not a *student*

Optimise relentlessly for **spoken, informal, real French** — the French people actually
use with friends, not the stiff textbook version. Concretely, that means:

- **Default to the informal/spoken register.** Use `tu`, `on` (not `nous`) for "we", and
  the way negation is really spoken — **the `ne` is dropped** in casual speech
  (`je sais pas`, `c'est pas grave`, `j'ai pas faim`). Teach the "correct" written form
  too, but make clear what she'll actually *hear and say*. Flag where formal `vous` /
  full `ne…pas` is needed (strangers, professional settings).
- **Teach the connective tissue of conversation**, which textbooks underweight and which
  is exactly what makes someone sound fluent:
  - **Fillers / discourse markers:** `euh`, `ben`, `bah`, `du coup`, `en fait`, `genre`,
    `quoi` (sentence-final), `voilà`, `bref`, `tu vois`, `je veux dire`.
  - **Reactions / backchannels** (how you show you're listening): `ah bon ?`, `c'est
    vrai ?`, `ah ouais ?`, `carrément`, `c'est clair`, `grave`, `n'importe quoi`,
    `sérieux ?`, `mais non !`, `tant mieux`, `tant pis`.
  - **Spoken reductions** she needs to *recognise by ear*: `je suis → chuis`,
    `je ne sais pas → chais pas`, `il y a → y'a`, `tu es → t'es`, `tu as → t'as`,
    `qu'est-ce que → keske`. (Teach for listening; she can use the fuller forms herself.)
  - **Asking in speech:** rising intonation (`Tu viens ?`) and `est-ce que`, NOT formal
    inversion (`Viens-tu ?`) as the default — inversion is for writing/formality.
- **Grammar is a servant, never the subject.** Only introduce a structure when a
  conversational need demands it, and frame it by the function: not "the passé composé"
  but "telling someone what you did this weekend." Keep conjugation tables short and
  practical; never drill paradigms for completeness. The high-value grammar for
  conversation, in rough order: **passé composé + imparfait** (telling stories — the
  single most important), **near future** (`je vais` + inf), **object & adverbial
  pronouns** (`le/la/les`, `lui/leur`, `y`, `en` — so she stops repeating nouns),
  **conditional for politeness/suggestions** (`je voudrais`, `on pourrait`, `ça te dirait
  de`), and **a few subjunctive chunks as fixed expressions** (`il faut que`, `je veux
  que`) — *not* a full subjunctive course.
- **Audio is core, not decoration.** Conversation is sound. Put a 🔊 on every French line.
  Build lessons she can **listen to and shadow** (repeat aloud). Where possible, give her
  something to *say*, not just read (see the "Your turn" pattern, B-section).
- **Chunks over rules.** Prefer teaching ready-to-use whole phrases she can deploy
  immediately (`ça te dit de…`, `j'en peux plus`, `du coup`, `ça marche`) over abstract
  rules she'd have to assemble under pressure. Fluency at this stage is having phrases
  ready, not deriving them.

## A3. What "good" looks like vs. what to avoid

**Good** (do this):
- A lesson titled by a *can-do*: "Reacting and keeping a conversation going,"
  "Telling someone about your weekend," "Making plans with a friend."
- A short model **dialogue** that sounds like two real friends, with audio, that she can
  shadow — then the phrases pulled out and explained.
- Insider notes: *"What a French person actually says here is ___ ; the textbook version
  ___ sounds a bit formal."*
- Tight, high-frequency vocabulary tied to a conversation topic, taught **with article and
  in example sentences** (the "learn the noun with its article" habit still holds — it's
  how she'll get genders right, and she's past needing the concept explained).

**Avoid** (these are the failure modes):
- Absolute-beginner content (alphabet, "le = the", numbers 1–10, "comment dire bonjour").
- Long grammar tables presented for their own sake; exhaustive conjugation paradigms;
  exceptions-of-exceptions she'll never need to speak.
- Stiff, written, textbook French as the *default* model ("Comment vous portez-vous ?"
  as the everyday greeting).
- Reading/writing-heavy tasks. This is for *talking*. Translation drills and fill-in-the-
  blank grammar worksheets are not the point — model dialogues, reaction phrases, and
  speaking prompts are.
- Walls of prose. Keep it scannable and warm; she should be able to do a lesson in
  10–15 minutes.

## A4. Recommended curriculum (this supersedes the original beginner path)

The original `modules` list in `data.js` was an A1 grammar syllabus. **Replace it** with a
conversation-first path roughly like this (adjust freely, but keep the spirit — every item
is a conversational competence, not a grammar topic). Suggested `id` in brackets.

1. **How French really sounds** `[real-sounds]` — *not* phonics. Liaisons, the rhythm,
   spoken reductions (`chuis`, `y'a`, dropped `ne`), intonation questions. So she
   *understands fast speech* and sounds natural. (Repurpose the existing `pronunciation`
   page into this — see A6.)
2. **Small talk & sounding natural** `[small-talk]` — casual greetings at her level
   (`ça roule ?`, `quoi de neuf ?`, `ça va ?` and real answers), fillers, the reaction/
   backchannel toolkit. The "don't sound like a textbook" lesson.
3. **Talking about yourself** `[about-you]` — fluent self-presentation: work/studies, where
   you live, what you're into, your day — beyond `je m'appelle`.
4. **Opinions, tastes & (dis)agreeing** `[opinions]` — `je trouve que`, `je pense que`,
   `j'adore / je déteste / ça me soûle`, `je suis d'accord`, `t'as raison`, `mouais`,
   `ça dépend`.
5. **Telling stories: the past** `[the-past]` — passé composé vs imparfait, framed as
   "what happened this weekend." The most important grammar lesson; keep it practical.
6. **Making plans & suggestions** `[making-plans]` — near future, `on pourrait`,
   `ça te dit de…`, proposing/accepting/declining, arranging to meet.
7. **Feelings & how you're doing** `[feelings]` — `être content/crevé/stressé`,
   `ça va pas fort`, `j'en peux plus`, saying how you really feel.
8. **When you're lost in a conversation** `[repair]` — ask to repeat/slow down, "how do
   you say…", buy time, check you understood. Survival skills for real exchanges.
9. **Out in the world (socially)** `[out-and-about]` — café/shop/restaurant as *social*
   interactions and chit-chat, not just transactions. (The existing food vocab feeds this.)
10. **Pronouns so you don't repeat yourself** `[pronouns]` — `le/la/les`, `lui/leur`,
    `y`, `en`, stressed `moi/toi/lui` — the big fluency unlock.
11. **Sounding more French** `[native-touches]` — `c'est` vs `il est`, `on` vs `nous`,
    softeners (`un peu`, `quoi`, `hein`), common idioms & chunks.
12. **Polite & hypothetical chunks** `[politeness]` — conditional for politeness,
    `il faut que` / `je voudrais que` as fixed expressions.

**Vocabulary themes** (in `themes`) should also be conversation-topic-led, e.g.: *Feelings
& reactions*, *Daily life & routine*, *Food & going out*, *Work & studies*, *Plans & free
time*, *Family & relationships*, *Opinions & current stuff*. Keep the existing
`Food & Drink` deck (it's fine and feeds module 9) but reframe its page toward social
ordering and chit-chat rather than pure survival vocab.

## A5. Using Emma's German (a real advantage)

She has some German from her Zurich years. Use it for genuine "you already know this"
wins, via the **German-bridge callout** (`callout--german`, 🇩🇪). Good bridges:
- Sounds she already owns: French `u` (`tu`, `rue`) = German **ü**; French `ou` = German
  **u**; French `ch` = German **sch**; the throaty French **R** ≈ German/Swiss *ch* in
  *Bach*.
- Structure she already has the instinct for: `tu` vs `vous` = **du** vs **Sie** (the
  social rules line up almost exactly); nouns having gender (der/die/das) — the *concept*
  is familiar.
- **Always warn where transfer fails:** French and German genders **don't match**
  (`la table` f vs *der Tisch* m). Use German for intuition, never for guessing genders or
  vocabulary (false friends abound). Keep bridges occasional and high-value — they're
  seasoning, not the meal.

## A6. What to do with the existing pages (they were built at A1)

The current scaffold was built before the level/goal were settled. Bring it up to brief:
- `pronunciation.html` → **rebuild as "How French really sounds"** (module 1 above): drop
  the basic phonics table, keep/expand liaison, add spoken reductions, rhythm, intonation.
- `greetings.html` → **level up into "Small talk & sounding natural"**: cut "bonjour means
  hello"; lead with casual register, real answers to `ça va ?`, fillers and reactions.
- `articles-and-gender.html` → **demote to an optional quick-reference**, or fold the only
  still-useful bit (gender-guessing by ending, agreement) into a vocab habit. She doesn't
  need `le/la` taught. Don't feature it as a core conversational module.
- `vocabulary-food.html` / `food` deck → **keep**, reframe page toward ordering-as-social.
- Then rewrite the `modules` array to the A4 path and set statuses accordingly.

## A7. Copy & voice

- Warm, encouraging, second person to Emma, lightly personal (this is from Victor). Never
  preachy, never over-explaining.
- Plain English for explanations; concise. Lead with the useful thing, explanation after.
- Insider, native-speaker framing ("here's what people actually say") — that's the value
  she can't get from an app.
- Sentence case, no emoji spam (the design uses a few deliberately). British English in
  explanatory copy (Victor is UK-based): "practise," "colour," etc.
- Encouragement should be specific and earned, not "Great job!!!" confetti.

## A8. French accuracy (non-negotiable)

- **Correct accents always:** é è ê ë à ù â î ô û ç. Never write unaccented French.
- **Typographic convention:** French uses `«  »` guillemets for quotes and a (thin) space
  before `? ! : ;` and inside guillemets — e.g. `« Ça va ? »`. Follow this in display
  French; it's part of the identity and it's correct.
- **Verify gender** of every new noun rather than guessing (especially don't infer from
  German). When in doubt, check.
- **Model natural, idiomatic French**, not word-for-word translations of English. If a
  French person wouldn't say it that way, don't teach it.
- Keep the register consistent within a phrase (don't mix `tu` and `vous` about the same
  person; don't pair dropped-`ne` casual with formal vocabulary).

---

# PART B — TECHNICAL CONVENTIONS

## B1. Stack & hard constraints

- **Plain HTML + CSS + JS. No framework, no bundler, no build step, no `npm install`.**
  Keep it that way — it's why it deploys to Pages untouched and Emma can open it anywhere.
- **No ES modules, no `fetch()` for content.** Content is plain JS assigned to a global
  (`window.FR`), loaded via normal `<script>` tags. This is deliberate: it works
  identically on `file://` (double-click) and on GitHub Pages. **Do not** convert `data.js`
  to JSON-loaded-by-fetch or to `import/export`.
- **All pages live flat at the repo root** (not in a `modules/` subfolder), and **all
  asset paths are relative** (`css/styles.css`, `js/…`, `greetings.html`). This is what
  makes it work under `username.github.io/<repo>/`. Keep new pages at root.
- **No `localStorage`/`sessionStorage` assumptions for correctness** — it's used only for
  progress/streak and is wrapped in try/catch; the site must work fully without it.
- **Accessibility floor:** real `<button>`s, visible keyboard focus, `prefers-reduced-
  motion` respected, sensible `aria-label`s on icon-only controls. Don't regress this.

## B2. File structure

```
index.html                 hub: path, progress, streak, phrase-of-the-day (rendered from data)
<lesson>.html              one module per file, flat at root
vocabulary-<theme>.html    one vocab deck page per theme
css/styles.css             the entire design system (design tokens as CSS vars at top)
js/data.js                 ALL content. Edit this to add lessons/words/quizzes/dialogues.
js/shell.js                header, footer, nav, French TTS (FR.speak), toast, audio buttons
js/progress.js             completion + daily streak (localStorage), FR.progress.*
js/components.js           flashcards, quiz, accordion, completion, hub rendering; boots on DOMContentLoaded
assets/audio/              drop real voice recordings here (currently unused; see B7)
assets/img/
README.md                  human-facing deploy/run instructions
CLAUDE.md                  this file
```

`design-showcase.html` and `build_showcase.py` are **preview-only tooling** (a single-file
render of every component) and are git-ignored. Regenerate with `python3 build_showcase.py`
after design changes if you want to eyeball things; never link to it from the site.

## B3. The global API (read the files for full signatures)

Everything hangs off `window.FR`:

- `FR.data` — all content (schema in B4).
- `FR.nav` — array of `{label, href}` for the header nav.
- `FR.speak(text, btn?)` — speaks French via the Web Speech API (`fr-FR`).
- `FR.audioButton(text, label?)` — returns a ready `<button class="audio-btn">` element.
- `FR.toast(msg, {tick?, duration?})` — transient toast.
- `FR.progress.{ isDone(id), setDone(id,bool), readyTotal(), countReadyDone(),
  pingStreak(), streak(), reset() }`.
- `FR.init*()` — `initAccordions, initDecks, initQuizzes, initCompletion, initHub`; all run
  automatically on `DOMContentLoaded`. New component types get a matching `FR.initX()` added
  to this boot list.

**Script load order on every page (do not change):**
```html
<script src="js/data.js"></script>
<script src="js/shell.js"></script>
<script src="js/progress.js"></script>
<script src="js/components.js"></script>
```

## B4. Data model (`js/data.js`)

```js
window.FR = window.FR || {};
FR.data = {
  // The learning path shown on the hub, in order.
  modules: [
    { num: '01', id: 'small-talk', href: 'small-talk.html',
      title: 'Small talk & sounding natural', mins: 12,
      status: 'ready',            // 'ready' = live & linkable | 'soon' = greyed "Bientôt"
      desc: 'One-line teaser shown under the title.' },
    // ...
  ],

  // Vocabulary tracks (cards on the hub). id must match a vocab deck key —
  // the hub shows the card count from it. (No emoji — the title carries the card.)
  themes: [
    { id: 'food', title: 'Food & going out',
      href: 'vocabulary-food.html', status: 'ready' },  // status as above
  ],

  // Phrase-of-the-day pool; the hub picks one per calendar day.
  phrases: [ { fr: 'Ça marche !', en: 'Sounds good! / OK!' } ],

  // Flashcard decks, keyed by deck id (matches data-deck="…").
  vocab: {
    food: [
      { fr: 'le café', en: 'coffee',
        ex: 'Je voudrais un café, s’il vous plaît.',   // optional example (French)
        exEn: 'I’d like a coffee, please.',             // optional example gloss
        note: 'Insider tip shown on the back.' }        // optional
    ]
  },

  // Quizzes, keyed by quiz id (matches data-quiz="…").
  quizzes: {
    articles: {
      title: '…', intro: '…',
      questions: [
        { promptFr: '___ table',       // use promptFr for French prompt (rendered serif),
          // or `prompt:` for an English/HTML prompt
          hint: 'table = table',
          frOpts: true,                // true → option labels rendered in serif (French)
          options: ['le', 'la'],
          answer: 1,                   // 0-based index of the correct option
          explain: 'Why, in one or two sentences. Teach here.' }
      ]
    }
  }
};
```

**Conventions:** French strings always correctly accented and using `«  »` where quoting.
`status` controls hub rendering automatically — set a module/theme to `'ready'` only once
its page exists. Keep `desc`/`title` short.

## B5. Design system — identity & the rules that must hold

Identity: **"L'encre violette" — a French school notebook.** Seyès ruled paper + violet
schoolroom ink, with **gold reserved for rewards/streaks/milestones**. Don't drift this
toward the generic warm-cream-serif-terracotta look; the violet-ink-on-cool-paper identity
is the point.

Two rules that encode meaning and must be kept:
1. **Typography = language.** **Serif (Spectral) is always the French being learned; sans
   (Inter) is the English explaining it.** When you output a French word/phrase inside
   English copy, wrap it: `<span class="fr">…</span>`. French example blocks, card fronts,
   quiz French prompts, and table French columns are all serif by their classes.
2. **Colour logic.** Violet = primary/brand/interactive (links, primary buttons, active
   nav, progress). Gold = rewards only (streak, milestones, phrase-du-jour accent).
   Green/red = quiz feedback only. Don't repaint outside this logic.

All colour, type, spacing, radius, and shadow values are **CSS custom properties** at the
top of `styles.css` (`--violet`, `--gold`, `--paper`, `--ink`, `--serif`, `--sans`, etc.).
**Use the variables; never hardcode hex.** Keep selectors single-class to avoid specificity
fights (see the note at the bottom of `styles.css`).

## B6. Component catalogue (HTML you can drop into any page)

These already exist and are styled. Match these patterns exactly.

- **Callout** (4 variants — pick by meaning: note=key idea · tip=insider/"what people
  actually say" · german=🇩🇪 bridge · warn=false-friend/mistake). No icon column — the
  small-caps title carries the variant; the 🇩🇪 goes in the german callout's title text:
  ```html
  <div class="callout callout--note">
    <p class="callout__title">Title</p>
    <p class="mb-0">Body.</p>
  </div>
  ```
- **French example block** (with audio):
  ```html
  <div class="phrase">
    <div class="phrase__fr">Ça te dit de venir ? <button class="audio-btn" data-speak="Ça te dit de venir ?"></button></div>
    <p class="phrase__en">"Fancy coming along?"</p>
    <!-- optional: <p class="phrase__ipa">/…/</p> -->
  </div>
  ```
- **Audio button** anywhere: `<button class="audio-btn" data-speak="le café"></button>`
  (the icon is injected automatically; clicks are handled by delegation).
- **Table** (`.fr-tbl` inside `.tbl-wrap`), with French cells in `class="col-fr"` and IPA in
  `class="col-ipa"`.
- **Accordion** (for optional "go deeper" detail):
  ```html
  <div class="accordion">
    <div class="acc-item">
      <button class="acc-head">Heading <span class="acc-head__icon">+</span></button>
      <div class="acc-panel"><div class="acc-panel__inner"><p class="mb-0">…</p></div></div>
    </div>
  </div>
  ```
- **Flashcard deck:** `<div data-deck="food"></div>` (renders from `FR.data.vocab.food`).
- **Quiz:** `<div data-quiz="articles"></div>` (renders from `FR.data.quizzes.articles`).
- **Completion button** (module pages): `<button class="btn btn--primary btn--complete"
  data-complete="MODULE_ID">Mark as complete</button>` plus a `<span data-complete-msg>`.
- Buttons: `.btn` + `--primary | --ghost | --quiet | --gold | --sm`. Pills: `.pill` +
  `--violet | --gold | --done | --soon`. Section helpers: `.wrap`, `.prose`, `.section`,
  `.section--tight`, `.stack`, `.stack-lg`, `.divider-label`, `.eyebrow` (+`.gold`).

## B7. New components to build for the conversational pivot

The current kit was built for a beginner reference site. Conversation needs two more
patterns. Build them **data-driven and in keeping with everything above** (relative paths,
`window.FR`, a `FR.initX()` added to the boot list in `components.js`, classes that follow
the existing naming, audio via `FR.audioButton`/`data-speak`, CSS via the tokens). Suggested
specs — refine as you implement:

- **Dialogue** (the most important new piece — a short, natural exchange she can shadow):
  - Mount: `<div data-dialogue="making_plans"></div>`
  - Data: `FR.data.dialogues = { making_plans: { title, setting, lines: [ { who:'A',
    name:'Léa', fr:'…', en:'…' }, … ], notes?: [...] } }`
  - Render: alternating speaker lines, each with its own 🔊; a "Play all" button that speaks
    the lines in sequence; visually distinguish the two speakers; French serif, English
    sans. Optional "shadow mode" hint ("play a line, pause, repeat it aloud").
- **"Your turn" speaking prompt** (turns reading into producing):
  - An English cue ("Tell a friend you're tired and want to stay in") with a **"Show a
    natural answer"** reveal that shows a model French response + 🔊. Author inline per
    lesson, or as a small list in `data.js` — your call, keep it simple. Class e.g.
    `.your-turn`. The goal is to get her *saying* things, not just recognising them.

For "what French people actually say" register notes, **reuse `callout--tip`** (gold) —
don't add a new colour. Keep callout colours to the existing four.

## B8. Recipes

**Add a flashcard / phrase / quiz question:** edit the relevant array in `js/data.js`. No
HTML needed. (Examples in B4.)

**Add a new lesson page:**
1. Copy an existing module page as the skeleton (they all share the same head/scripts and
   the `#site-header` / `#site-footer` placeholders).
2. Write the content using the component patterns in B6/B7. Lead with a model dialogue or
   the key phrases; keep it ~10–15 min; audio on every French line.
3. Add/locate its entry in `FR.data.modules`, set the real `href`, flip `status` to
   `'ready'`. It appears on the hub automatically.
4. Set the page's `data-complete="<module-id>"` to match the module `id`.
5. Fix the `page-nav` prev/next links on it and on its neighbours.

**Page skeleton (head + shell + scripts):**
```html
<!DOCTYPE html><html lang="en"><head>
<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>… · le français pour Emma</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Spectral:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="css/styles.css" />
</head><body>
  <div id="site-header"></div>
  <main class="wrap prose"> … </main>
  <div id="site-footer"></div>
  <script src="js/data.js"></script>
  <script src="js/shell.js"></script>
  <script src="js/progress.js"></script>
  <script src="js/components.js"></script>
</body></html>
```

**Wire up real (recorded) audio** (when Victor records his voice — better than the synth
voice for the tricky stuff): drop clips in `assets/audio/` and extend `FR.speak()` in
`shell.js` to look up a recorded file for a given key and play an `<audio>` element, falling
back to the speech synth when there's no recording. Don't rip out the synth fallback — it
keeps every line playable.

## B9. Definition of done (check before committing)

- [ ] Passes the A1 test: it's clear what Emma can now *say/handle* in conversation.
- [ ] Calibrated to **A2/B1**, not beginner; default register is **spoken/informal**.
- [ ] Every French line has working audio; lesson is shadow-able.
- [ ] French is correctly accented, idiomatic, uses `«  »`, genders verified.
- [ ] Serif=French / sans=English respected (`<span class="fr">` around inline French).
- [ ] Colours via tokens; violet/gold/feedback logic intact; identity not drifted.
- [ ] No build step introduced; no `fetch`/modules added; paths relative; works on
      `file://` and Pages.
- [ ] Keyboard focus visible, reduced-motion respected, icon buttons have labels.
- [ ] `status` only `'ready'` once the page truly exists; hub renders correctly; page-nav
      links correct both directions.
- [ ] Run it: `python3 -m http.server` and click through, including on a narrow viewport.

## B10. Working conventions

- Make changes in the repo and test with a local server (`python3 -m http.server 8000`)
  before committing — the shared shell and `data.js` want a server, not a double-click.
- Small, focused commits with clear messages (e.g. `feat: add "making plans" lesson`,
  `content: level up greetings to A2 small-talk`).
- Prefer editing `data.js` over touching HTML when adding content; prefer extending the
  existing components over inventing parallel ones.
- When in doubt about a convention, the existing files are the spec — read them.

---

*Made with ❤ by Victor, for Emma. Keep that energy: this should feel personal, warm, and
genuinely useful for actually talking to people — not like a course.*
