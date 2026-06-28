/* =================================================================
   data.js — all content. Add lessons/words/quizzes by editing here.
   French is written with correct accents and « guillemets ».
   ================================================================= */
window.FR = window.FR || {};
FR.data = {

  /* ---------- The learning path (le sommaire) ---------- */
  modules: [
    { num: '01', id: 'pronunciation', href: 'pronunciation.html',
      title: 'Sounds & Pronunciation', mins: 12, status: 'ready',
      desc: 'The few rules that make written French make sense out loud.' },
    { num: '02', id: 'greetings', href: 'greetings.html',
      title: 'Greetings & Politeness', mins: 10, status: 'ready',
      desc: 'Say hello, be polite, and know when to use tu vs vous.' },
    { num: '03', id: 'articles', href: 'articles-and-gender.html',
      title: 'Gender & Articles', mins: 12, status: 'ready',
      desc: 'le, la, un, une — why every noun has a gender, made painless.' },
    { num: '04', id: 'etre-avoir', href: '#',
      title: 'To Be, To Have & Pronouns', mins: 14, status: 'soon',
      desc: 'être and avoir — the two verbs everything is built on.' },
    { num: '05', id: 'er-verbs', href: '#',
      title: 'Your First Verbs', mins: 12, status: 'soon',
      desc: 'Regular -er verbs: talk about what you do every day.' },
    { num: '06', id: 'aller-faire', href: '#',
      title: 'Going & Doing', mins: 12, status: 'soon',
      desc: 'aller and faire, plus the easy near-future (je vais manger).' },
    { num: '07', id: 'adjectives', href: '#',
      title: 'Describing Things', mins: 11, status: 'soon',
      desc: 'Adjectives and how they agree — petit, petite, petits…' },
    { num: '08', id: 'questions', href: '#',
      title: 'Saying No & Asking Questions', mins: 11, status: 'soon',
      desc: 'ne…pas, and the three ways to ask a question.' },
    { num: '09', id: 'numbers', href: '#',
      title: 'Numbers, Time & Dates', mins: 13, status: 'soon',
      desc: 'Count, tell the time, and survive French 70s, 80s, 90s.' },
    { num: '10', id: 'past', href: '#',
      title: 'The Past', mins: 15, status: 'soon',
      desc: 'passé composé: say what happened earlier today.' }
  ],

  /* ---------- Vocabulary tracks ---------- */
  themes: [
    { id: 'food',    emoji: '🥖', title: 'Food & Drink',    href: 'vocabulary-food.html', status: 'ready' },
    { id: 'people',  emoji: '👪', title: 'Family & People', href: '#', status: 'soon' },
    { id: 'about',   emoji: '🧭', title: 'Out & About',     href: '#', status: 'soon' },
    { id: 'home',    emoji: '🏠', title: 'Home & Daily Life', href: '#', status: 'soon' },
    { id: 'time',    emoji: '🗓️', title: 'Days & Time',     href: '#', status: 'soon' }
  ],

  /* ---------- Phrase of the day (rotates by date) ---------- */
  phrases: [
    { fr: 'On y va !',            en: 'Let’s go!' },
    { fr: 'Je ne sais pas.',      en: 'I don’t know.' },
    { fr: 'Ça me plaît.',         en: 'I like it.' },
    { fr: 'Tu as raison.',        en: 'You’re right.' },
    { fr: 'C’est pas grave.',     en: 'It’s no big deal.' },
    { fr: 'J’arrive !',           en: 'I’m on my way!' },
    { fr: 'À tout à l’heure.',    en: 'See you later (today).' },
    { fr: 'Avec plaisir.',        en: 'Gladly / with pleasure.' },
    { fr: 'Tant pis.',            en: 'Oh well / never mind.' },
    { fr: 'Bien sûr.',            en: 'Of course.' },
    { fr: 'Ça dépend.',           en: 'It depends.' },
    { fr: 'On verra.',            en: 'We’ll see.' },
    { fr: 'Je t’écoute.',         en: 'I’m listening.' },
    { fr: 'Qu’est-ce que c’est ?', en: 'What is it?' }
  ],

  /* ---------- Flashcard decks ---------- */
  vocab: {
    food: [
      { fr: 'le pain',          en: 'bread',       ex: 'Je voudrais du pain, s’il vous plaît.', exEn: 'I’d like some bread, please.' },
      { fr: 'le croissant',     en: 'croissant',   ex: 'Un croissant et un café.',              exEn: 'A croissant and a coffee.' },
      { fr: 'le fromage',       en: 'cheese',      ex: 'La France a plus de 1000 fromages.',     exEn: 'France has over 1,000 cheeses.' },
      { fr: 'le café',          en: 'coffee',      ex: 'Un café, s’il vous plaît.',              exEn: 'A coffee, please.' },
      { fr: 'le thé',           en: 'tea',         ex: 'Je préfère le thé.',                      exEn: 'I prefer tea.' },
      { fr: 'l’eau',            en: 'water (f.)',  ex: 'Une carafe d’eau, s’il vous plaît.',     exEn: 'A jug of water, please.',
        note: 'Feminine: une eau. Before a vowel, la becomes l’, so the gender is hidden.' },
      { fr: 'le vin',           en: 'wine',        ex: 'Un verre de vin rouge.',                  exEn: 'A glass of red wine.' },
      { fr: 'la bière',         en: 'beer',        ex: 'Une bière pression.',                     exEn: 'A draught beer.' },
      { fr: 'le lait',          en: 'milk',        ex: 'Un café au lait.',                        exEn: 'A coffee with milk.' },
      { fr: 'la pomme',         en: 'apple',       ex: 'Une pomme par jour.',                     exEn: 'An apple a day.' },
      { fr: 'le poulet',        en: 'chicken',     ex: 'Le poulet est très bon ici.',             exEn: 'The chicken is very good here.' },
      { fr: 'le poisson',       en: 'fish',        ex: 'Le poisson du jour.',                     exEn: 'The fish of the day.',
        note: 'Mind the double s: poisson = fish, but poison = poison.' },
      { fr: 'les légumes',      en: 'vegetables (m.)', ex: 'Avec des légumes.',                   exEn: 'With vegetables.' },
      { fr: 'l’addition',       en: 'the bill (f.)',   ex: 'L’addition, s’il vous plaît.',        exEn: 'The bill, please.',
        note: 'The phrase to remember in any restaurant.' },
      { fr: 'la carte',         en: 'the menu (list)', ex: 'Je peux voir la carte ?',            exEn: 'Can I see the menu?',
        note: 'Faux-ami: “la carte” is the menu you order from. “le menu” is a fixed-price set meal.' },
      { fr: 'le petit-déjeuner', en: 'breakfast',  ex: 'Le petit-déjeuner est à 8h.',             exEn: 'Breakfast is at 8.' },
      { fr: 'le déjeuner',      en: 'lunch',        ex: 'On déjeune à midi.',                      exEn: 'We have lunch at noon.' },
      { fr: 'le dîner',         en: 'dinner',       ex: 'Le dîner est prêt !',                     exEn: 'Dinner is ready!' }
    ]
  },

  /* ---------- Quizzes ---------- */
  quizzes: {
    articles: {
      title: 'Quick check: le, la, un, une',
      intro: 'Pick the right article. Don’t worry about getting them all — the explanations are the point.',
      questions: [
        { promptFr: '___ table', hint: 'table = table (the furniture)', frOpts: true,
          options: ['le', 'la'], answer: 1,
          explain: '« la table » — table is feminine. There’s rarely a logical reason; you learn the gender together with the word.' },
        { promptFr: '___ problème', hint: 'problème = problem', frOpts: true,
          options: ['le', 'la'], answer: 0,
          explain: '« le problème » — masculine, even though it ends in -e. A final -e often signals feminine, but plenty of -e words (problème, programme, système) are masculine.' },
        { promptFr: 'Je voudrais ___ café.', hint: 'You want “a coffee”.', frOpts: true,
          options: ['un', 'une'], answer: 0,
          explain: '« un café » — café is masculine, so “a” is un. (un = a/an for masculine, une for feminine.)' },
        { promptFr: '___ maison', hint: 'maison = house', frOpts: true,
          options: ['le', 'la'], answer: 1,
          explain: '« la maison » — feminine. Heads up if you think in German: das Haus is neuter, but French genders don’t match German ones, so don’t transfer them.' },
        { promptFr: '___ eau', hint: 'eau = water', frOpts: true,
          options: ['le', 'la', 'l’'], answer: 2,
          explain: '« l’eau » — before a vowel sound, both le and la shrink to l’, so you can’t hear the gender. (It’s actually feminine: une eau.)' },
        { promptFr: 'C’est ___ étudiante.', hint: 'a (female) student', frOpts: true,
          options: ['un', 'une'], answer: 1,
          explain: '« une étudiante » — the -e ending and the meaning are both feminine. A male student would be « un étudiant ».' }
      ]
    }
  }
};
