# le français · pour Emma

A small, beautiful, self-paced French course — built as a static site so it deploys to GitHub Pages with zero configuration.

**Design:** *“L’encre violette”* — modelled on a French school notebook (the pale Seyès grid + violet schoolroom ink), with gold reserved for streaks and milestones. Serif type (Spectral) is always the **French** being learned; sans (Inter) is the **English** explaining it.

---

## What’s here

```
french-for-emma/
├── index.html               ← the hub (path, progress, streak, phrase of the day)
├── pronunciation.html       ← Lesson 01 · How French really sounds
├── greetings.html           ← Lesson 02 · Small talk & sounding natural
├── about-you.html           ← Lesson 03 · Talking about yourself
├── opinions.html            ← Lesson 04 · Opinions, tastes & (dis)agreeing
├── the-past.html            ← Lesson 05 · Telling stories: the past
├── making-plans.html        ← Lesson 06 · Making plans & suggestions
├── feelings.html            ← Lesson 07 · Feelings & how you’re doing
├── repair.html              ← Lesson 08 · When you’re lost in a conversation
├── out-and-about.html       ← Lesson 09 · Out in the world (socially)
├── pronouns.html            ← Lesson 10 · Pronouns so you don’t repeat yourself
├── native-touches.html      ← Lesson 11 · Sounding more French
├── politeness.html          ← Lesson 12 · Polite & hypothetical chunks
├── articles-and-gender.html ← quick reference (gender & articles)
├── vocabulary-*.html        ← flashcard decks: feelings, daily, food, plans, people
├── css/styles.css           ← the whole design system
├── js/
│   ├── data.js              ← ALL content lives here (edit this to add lessons/words/quizzes)
│   ├── shell.js             ← header, footer, nav, French text-to-speech
│   ├── progress.js          ← completion + daily streak (localStorage)
│   └── components.js        ← flashcards, quiz, dialogue, accordion, hub rendering
└── assets/
    ├── audio/               ← drop your own voice recordings here (see below)
    └── img/
```

No build step, no dependencies, no framework. It’s plain HTML/CSS/JS on purpose.

---

## Run it locally

Because the pages share a header/footer and pull content from `data.js`, open it through a tiny local server rather than double-clicking (file paths behave better):

```bash
cd french-for-emma
python3 -m http.server 8000
# then open http://localhost:8000
```

(Or use the VS Code “Live Server” extension.)

---

## Deploy to GitHub Pages

1. Create a new repo and push this folder’s contents to the `main` branch.
2. Repo **Settings → Pages**.
3. Under **Build and deployment**, set **Source: Deploy from a branch**, **Branch: `main` / `(root)`**, save.
4. Wait ~1 minute. Your site is live at `https://<your-username>.github.io/<repo-name>/`.

All links are relative, so it works correctly under the `/<repo-name>/` sub-path with no changes.

---

## Add content (the fun part)

Everything is in **`js/data.js`** — no HTML needed for new words, phrases, or quiz questions.

**A new flashcard** — add to `FR.data.vocab.food`:
```js
{ fr: 'le beurre', en: 'butter', ex: 'Du pain et du beurre.', exEn: 'Bread and butter.' }
```

**A new phrase of the day** — add to `FR.data.phrases`:
```js
{ fr: 'Ça marche !', en: 'Sounds good! / It works!' }
```

**A new quiz question** — add to `FR.data.quizzes.articles.questions`:
```js
{ promptFr: '___ soleil', hint: 'soleil = sun', frOpts: true,
  options: ['le', 'la'], answer: 0,
  explain: '« le soleil » — masculine (die Sonne is feminine in German — don’t transfer it).' }
```

**A brand-new lesson:** copy any module page (e.g. `greetings.html`), write the content, then flip its entry in `FR.data.modules` from `status: 'soon'` to `status: 'ready'` and point `href` at the new file. It appears on the hub automatically.

The content building-blocks you can drop into any page: `.callout` (variants `--note`, `--tip`, `--german`, `--warn`), `.phrase` blocks, `.fr-tbl` tables, `.accordion`, plus `data-deck="…"` and `data-quiz="…"` for interactive components.

---

## Adding your own voice

Right now audio uses the browser’s built-in French voice (the Web Speech API) — free and instant. To use **your** recordings instead:

1. Record clips and save them as e.g. `assets/audio/bonjour.mp3`.
2. Swap a `<button class="audio-btn" data-speak="bonjour">` for an `<audio>` element, or extend `FR.speak()` in `shell.js` to look up a recorded file before falling back to the synth voice.

(Happy to wire up the recorded-audio path properly when you’re ready.)

---

Made with ❤ by Victor, for Emma.
