/* =================================================================
   data.js — all content. Add lessons/words/quizzes by editing here.
   French is written with correct accents and « guillemets ».
   ================================================================= */
window.FR = window.FR || {};
FR.data = {

  /* ---------- The learning path (le sommaire) ---------- */
  modules: [
    { num: '01', id: 'real-sounds', href: 'pronunciation.html',
      title: 'How French really sounds', mins: 13, status: 'ready',
      desc: 'Why fast French blurs together — liaisons, rhythm and the sounds people swallow, so you can follow it.' },
    { num: '02', id: 'small-talk', href: 'greetings.html',
      title: 'Small talk & sounding natural', mins: 12, status: 'ready',
      desc: 'Open and keep casual chat going — real greetings, fillers, and reactions.' },
    { num: '03', id: 'about-you', href: 'about-you.html',
      title: 'Talking about yourself', mins: 13, status: 'ready',
      desc: 'Say what you do, where you live and what you’re into — beyond « je m’appelle ».' },
    { num: '04', id: 'opinions', href: '#',
      title: 'Opinions, tastes & (dis)agreeing', mins: 12, status: 'soon',
      desc: 'Give your take and react to others — « je trouve que… », « t’as raison », « mouais ».' },
    { num: '05', id: 'the-past', href: '#',
      title: 'Telling stories: the past', mins: 15, status: 'soon',
      desc: 'Say what you did this weekend — passé composé and imparfait, the practical way.' },
    { num: '06', id: 'making-plans', href: '#',
      title: 'Making plans & suggestions', mins: 12, status: 'soon',
      desc: 'Propose, accept and arrange to meet — « ça te dit de… », « on pourrait… ».' },
    { num: '07', id: 'feelings', href: '#',
      title: 'Feelings & how you’re doing', mins: 11, status: 'soon',
      desc: 'Say how you really feel — « crevé », « ça va pas fort », « j’en peux plus ».' },
    { num: '08', id: 'repair', href: '#',
      title: 'When you’re lost in a conversation', mins: 10, status: 'soon',
      desc: 'Ask people to repeat or slow down, buy time, and check you understood.' },
    { num: '09', id: 'out-and-about', href: '#',
      title: 'Out in the world (socially)', mins: 12, status: 'soon',
      desc: 'Café, shop and restaurant as chit-chat, not just transactions.' },
    { num: '10', id: 'pronouns', href: '#',
      title: 'Pronouns so you don’t repeat yourself', mins: 13, status: 'soon',
      desc: 'le/la/les, lui/leur, y, en — the big fluency unlock for flowing speech.' },
    { num: '11', id: 'native-touches', href: '#',
      title: 'Sounding more French', mins: 12, status: 'soon',
      desc: 'c’est vs il est, on vs nous, softeners and the little idioms.' },
    { num: '12', id: 'politeness', href: '#',
      title: 'Polite & hypothetical chunks', mins: 11, status: 'soon',
      desc: 'The conditional for politeness — « je voudrais », « on pourrait », « il faut que ».' }
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
    },

    reactions: {
      title: 'Quick check: pick the natural reaction',
      intro: 'Someone says something — pick the reaction that fits. Trust your gut; the explanations are the point.',
      questions: [
        { promptFr: '« J’ai réussi mon permis ! »', hint: 'Your friend’s great news — react.', frOpts: true,
          options: ['Tant pis.', 'Carrément !', 'Génial ! Bravo !'], answer: 2,
          explain: '« Génial ! Bravo ! » celebrates it. « Tant pis » is “oh well” for letdowns, and « carrément » means “totally” — perfect for agreeing, but not for congratulating.' },
        { promptFr: '« Tu sais pas ce qui m’est arrivé hier… »', hint: 'Show you’re hooked and want the story.', frOpts: true,
          options: ['Ah bon ? Raconte !', 'De rien.', 'Bonne journée !'], answer: 0,
          explain: '« Ah bon ? Raconte ! » = “oh really? do tell!” — it keeps them going. The other two are unrelated set phrases (“you’re welcome”, “have a good day”).' },
        { promptFr: '« Ce film était vraiment nul. »', hint: 'You completely agree.', frOpts: true,
          options: ['N’importe quoi !', 'C’est clair !', 'Tant pis.'], answer: 1,
          explain: '« C’est clair ! » = “totally, exactly”. « N’importe quoi ! » means the opposite — “that’s nonsense” — and « tant pis » is “oh well”.' },
        { promptFr: '« Les licornes existent, j’en ai vu une ! »', hint: 'You think that’s ridiculous.', frOpts: true,
          options: ['Carrément.', 'N’importe quoi !', 'Avec plaisir.'], answer: 1,
          explain: '« N’importe quoi ! » is exactly “yeah, right / that’s rubbish”. « Carrément » would be agreeing, and « avec plaisir » means “gladly”.' },
        { promptFr: '« Désolé, je peux pas venir ce soir. »', hint: 'A bit of a letdown, but no big deal.', frOpts: true,
          options: ['Tant mieux !', 'Tant pis, ce sera pour une prochaine fois.', 'Carrément !'], answer: 1,
          explain: '« Tant pis » is the gentle “oh well, never mind”. « Tant mieux » means “all the better” — which would sound weirdly glad they cancelled.' }
      ]
    },

    real_sounds: {
      title: 'Quick check: decode the fast version',
      intro: 'You’ll only ever hear the left-hand version out loud. What is each one really?',
      questions: [
        { promptFr: 'chais pas', hint: 'A friend mumbles it with a shrug.', frOpts: true,
          options: ['je sais', 'je ne sais pas', 'je sais bien'], answer: 1,
          explain: '« chais pas » is « je (ne) sais pas » with the « je » and the « ne » swallowed — “dunno”. The shrug carries half the meaning.' },
        { promptFr: 'y’a', hint: 'As in « y’a un problème ».', frOpts: true,
          options: ['il a', 'il y a', 'y aller'], answer: 1,
          explain: '« y’a » is « il y a » (“there is / there are”) squashed right down. You’ll hear it constantly.' },
        { promptFr: 't’as', hint: 'As in « t’as les clés ? ».', frOpts: true,
          options: ['tu es', 'tu as', 'tu vas'], answer: 1,
          explain: '« t’as » = « tu as » (“you have”). Its cousin « t’es » = « tu es » (“you are”) — tell them apart by the verb that follows.' },
        { promptFr: 'chuis', hint: 'As in « chuis crevé ».', frOpts: true,
          options: ['je suis', 'je sais', 'chez'], answer: 0,
          explain: '« chuis » is « je suis » (“I am”) — the « je s » collapses into one “ch” sound.' },
        { promptFr: 'keske tu fais ?', hint: 'A very common opener.', frOpts: true,
          options: ['qui te fait', 'qu’est-ce que tu fais', 'que sais-tu'], answer: 1,
          explain: '« keske » is « qu’est-ce que » run together — here, “what are you doing?”. Catch « keske » and a huge number of spoken questions open up.' }
      ]
    },

    about_you: {
      title: 'Quick check: talking about yourself',
      intro: 'Pick what a French person would actually say. The explanations are the point.',
      questions: [
        { promptFr: '« Tu fais quoi dans la vie ? »', hint: 'Someone you’ve just met asks you this.',
          options: ['What are you doing right now?', 'What do you do for a living?', 'What are you making?'], answer: 1,
          explain: 'It’s the everyday “what do you do for a living?” — answer with your job or studies, then ask it back with « et toi ? ».' },
        { promptFr: 'Je ___ prof.', hint: '“I’m a teacher.” What fills the gap?', frOpts: true,
          options: ['suis une', 'suis', 'suis le'], answer: 1,
          explain: 'No article before a job: « je suis prof », never « je suis une prof ». (Your German already does this — ich bin Lehrerin.)' },
        { promptFr: 'J’habite ___ France.', hint: 'Which one goes before a country like France?', frOpts: true,
          options: ['à', 'en', 'au'], answer: 1,
          explain: '« en » for feminine countries → en France, en Suisse. Cities take « à » (à Paris); masculine countries take « au » (au Canada).' },
        { promptFr: 'J’habite ici ___ deux ans.', hint: '“…for two years — and I still do.”', frOpts: true,
          options: ['depuis', 'pour', 'pendant'], answer: 0,
          explain: 'Still true now → present tense + « depuis ». « pour » is for a planned future stretch; « pendant » for one that’s finished.' },
        { promptFr: 'Je ___ escalade.', hint: '“I go climbing / I do a bit of climbing.”', frOpts: true,
          options: ['fais de l’', 'fais l’', 'suis l’'], answer: 0,
          explain: '« faire de » + activity → je fais de l’escalade, du foot, de la danse. That’s how you say what you do for fun.' }
      ]
    }
  },

  /* ---------- Dialogues (short exchanges to shadow) ---------- */
  dialogues: {
    small_talk: {
      title: 'Running into a friend',
      setting: 'You bump into your friend Léa in the street.',
      lines: [
        { who: 'A', name: 'Léa', fr: 'Salut ! Ça roule ?', en: 'Hey! How’s it going?' },
        { who: 'B', name: 'Toi', fr: 'Coucou ! Ouais, tranquille, et toi ?', en: 'Hi! Yeah, all good — you?' },
        { who: 'A', name: 'Léa', fr: 'Ça va, ça va. Quoi de neuf ?', en: 'Good, good. What’s new?' },
        { who: 'B', name: 'Toi', fr: 'Bah, pas grand-chose. J’ai commencé le français, du coup je révise un peu.', en: 'Eh, not much. I’ve started French, so I’m revising a bit.' },
        { who: 'A', name: 'Léa', fr: 'Ah ouais ? C’est cool, ça !', en: 'Oh really? That’s cool!' },
        { who: 'B', name: 'Toi', fr: 'Ouais, enfin… c’est pas évident, mais ça vient.', en: 'Yeah, well… it’s not easy, but it’s coming along.' },
        { who: 'A', name: 'Léa', fr: 'Carrément. Allez, bon courage, hein !', en: 'Totally. Right, good luck with it!' }
      ],
      notes: [
        'Nobody reaches for the textbook <span class="fr">« comment vas-tu ? »</span> — friends open with <span class="fr">« ça roule ? »</span> or <span class="fr">« quoi de neuf ? »</span>.',
        'The <span class="fr">ne</span> is dropped all the way through: <span class="fr">« c’est pas évident »</span>, <span class="fr">« pas grand-chose »</span>. That’s how it’s really spoken.',
        'Little glue words do the heavy lifting: <span class="fr">du coup</span> (“so”), <span class="fr">enfin</span> (“well…”), <span class="fr">hein</span> (a soft “eh?”).'
      ]
    },

    real_sounds: {
      title: 'Real speed, decoded',
      setting: 'Léa is hurrying you out the door.',
      lines: [
        { who: 'A', name: 'Léa', fr: 'T’es prêt ? On y va ?', en: 'You ready? Shall we go?' },
        { who: 'B', name: 'Toi', fr: 'Ouais, deux secondes… j’arrive !', en: 'Yeah, two secs… coming!' },
        { who: 'A', name: 'Léa', fr: 'Y’a un bus dans cinq minutes, faut pas le rater.', en: 'There’s a bus in five minutes, we can’t miss it.' },
        { who: 'B', name: 'Toi', fr: 'Attends, t’as les clés ?', en: 'Wait, have you got the keys?' },
        { who: 'A', name: 'Léa', fr: 'Ouais ouais. Bon, on y va, chuis déjà en retard !', en: 'Yeah yeah. Right, let’s go, I’m already late!' }
      ],
      notes: [
        'Heard the swallowed words? <span class="fr">t’es, t’as, y’a, chuis</span> are <span class="fr">tu es, tu as, il y a, je suis</span> — nobody says the full forms at speed.',
        '<span class="fr">On y va</span> links into a single run — “on-n-i-va”. That join is <em>liaison</em>, coming up next.',
        '<span class="fr">Faut pas le rater</span> is really <span class="fr">il ne faut pas le rater</span> — both the <span class="fr">il</span> and the <span class="fr">ne</span> vanish out loud.'
      ]
    },

    about_you: {
      title: 'Getting to know someone',
      setting: 'At a friend’s party, someone you’ve just met starts chatting.',
      lines: [
        { who: 'A', name: 'Max', fr: 'Alors, tu fais quoi dans la vie ?', en: 'So, what do you do?' },
        { who: 'B', name: 'Toi', fr: 'Je suis prof d’anglais. Et toi ?', en: 'I’m an English teacher. You?' },
        { who: 'A', name: 'Max', fr: 'Moi, je suis dans l’informatique. T’es d’ici ?', en: 'Me, I’m in IT. Are you from around here?' },
        { who: 'B', name: 'Toi', fr: 'Non, je suis anglaise. J’habite ici depuis deux ans.', en: 'No, I’m English. I’ve lived here for two years.' },
        { who: 'A', name: 'Max', fr: 'Ah ! Et ça te plaît ?', en: 'Oh! And do you like it?' },
        { who: 'B', name: 'Toi', fr: 'J’adore. J’ai vécu à Zurich avant, donc le changement me fait du bien.', en: 'I love it. I lived in Zurich before, so the change is good for me.' },
        { who: 'A', name: 'Max', fr: 'Et à part bosser, tu fais quoi ?', en: 'And apart from work, what do you get up to?' },
        { who: 'B', name: 'Toi', fr: 'Je fais pas mal d’escalade, et j’apprends le français, du coup…', en: 'I do a fair bit of climbing, and I’m learning French, so…' }
      ],
      notes: [
        'The real “what do you do?” is <span class="fr">« tu fais quoi dans la vie ? »</span> — not the stiff <span class="fr">« quelle est votre profession ? »</span>.',
        'Jobs take no “a”: <span class="fr">je suis prof</span>, <span class="fr">je suis dans l’informatique</span> — never <span class="fr">« je suis une prof »</span>.',
        '<span class="fr">Depuis deux ans</span> with the <em>present</em> tense means “for two years, and still” — French stays in the present where English switches to “have lived”.'
      ]
    }
  }
};
