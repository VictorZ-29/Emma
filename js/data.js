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
    { num: '04', id: 'opinions', href: 'opinions.html',
      title: 'Opinions, tastes & (dis)agreeing', mins: 12, status: 'ready',
      desc: 'Give your take and react to others — « je trouve que… », « t’as raison », « mouais ».' },
    { num: '05', id: 'the-past', href: 'the-past.html',
      title: 'Telling stories: the past', mins: 15, status: 'ready',
      desc: 'Say what you did this weekend — passé composé and imparfait, the practical way.' },
    { num: '06', id: 'making-plans', href: 'making-plans.html',
      title: 'Making plans & suggestions', mins: 12, status: 'ready',
      desc: 'Propose, accept and arrange to meet — « ça te dit de… », « on pourrait… ».' },
    { num: '07', id: 'feelings', href: 'feelings.html',
      title: 'Feelings & how you’re doing', mins: 11, status: 'ready',
      desc: 'Say how you really feel — « crevée », « ça va pas fort », « j’en peux plus ».' },
    { num: '08', id: 'repair', href: 'repair.html',
      title: 'When you’re lost in a conversation', mins: 10, status: 'ready',
      desc: 'Ask people to repeat or slow down, buy time, and check you understood.' },
    { num: '09', id: 'out-and-about', href: 'out-and-about.html',
      title: 'Out in the world (socially)', mins: 12, status: 'ready',
      desc: 'Café, shop and restaurant as chit-chat, not just transactions.' },
    { num: '10', id: 'pronouns', href: 'pronouns.html',
      title: 'Pronouns so you don’t repeat yourself', mins: 13, status: 'ready',
      desc: 'le/la/les, lui/leur, y, en — the big fluency unlock for flowing speech.' },
    { num: '11', id: 'native-touches', href: 'native-touches.html',
      title: 'Sounding more French', mins: 12, status: 'ready',
      desc: 'c’est vs il est, on vs nous, softeners and the little idioms.' },
    { num: '12', id: 'politeness', href: 'politeness.html',
      title: 'Polite & hypothetical chunks', mins: 11, status: 'ready',
      desc: 'The conditional for politeness — « je voudrais », « vous pourriez », « il faut que j’y aille ».' }
  ],

  /* ---------- Vocabulary tracks (conversation-topic-led) ---------- */
  themes: [
    { id: 'feelings', title: 'Feelings & reactions',    href: 'vocabulary-feelings.html', status: 'ready' },
    { id: 'daily',    title: 'Daily life & routine',    href: 'vocabulary-daily.html',    status: 'ready' },
    { id: 'food',     title: 'Food & going out',        href: 'vocabulary-food.html',     status: 'ready' },
    { id: 'plans',    title: 'Plans & free time',       href: 'vocabulary-plans.html',    status: 'ready' },
    { id: 'people',   title: 'Family & relationships',  href: 'vocabulary-people.html',   status: 'ready' }
  ],

  /* ---------- Phrase of the day (rotates by date) ---------- */
  phrases: [
    { fr: 'On y va !',             en: 'Let’s go!' },
    { fr: 'Ça marche !',           en: 'Sounds good! / Deal!' },
    { fr: 'Je sais pas.',          en: 'I don’t know. (spoken — the « ne » drops)' },
    { fr: 'Ça me plaît.',          en: 'I like it.' },
    { fr: 'T’as raison.',          en: 'You’re right.' },
    { fr: 'C’est pas grave.',      en: 'It’s no big deal.' },
    { fr: 'J’arrive !',            en: 'I’m on my way!' },
    { fr: 'À tout à l’heure.',     en: 'See you later (today).' },
    { fr: 'Avec plaisir.',         en: 'Gladly / with pleasure.' },
    { fr: 'Tant pis.',             en: 'Oh well / never mind.' },
    { fr: 'Bien sûr.',             en: 'Of course.' },
    { fr: 'Ça dépend.',            en: 'It depends.' },
    { fr: 'On verra.',             en: 'We’ll see.' },
    { fr: 'Je t’écoute.',          en: 'I’m listening.' },
    { fr: 'C’est parti !',         en: 'Here we go!' },
    { fr: 'T’inquiète.',           en: 'Don’t worry. (very casual)' },
    { fr: 'J’en peux plus.',       en: 'I can’t take it any more.' },
    { fr: 'Ça te dit ?',           en: 'Fancy it? / Are you up for it?' },
    { fr: 'J’avoue.',              en: 'True, fair point. (casual agreement)' },
    { fr: 'Laisse tomber.',        en: 'Forget it / drop it.' },
    { fr: 'N’importe quoi !',      en: 'Nonsense! / Yeah, right!' },
    { fr: 'Nickel !',              en: 'Perfect! / Spot on!' },
    { fr: 'Ça y est.',             en: 'That’s it / done / finally.' },
    { fr: 'Franchement…',          en: 'Honestly… (the classic opinion-opener)' },
    { fr: 'Il faut que j’y aille.', en: 'I’ve got to go. (THE way to leave)' },
    { fr: 'Qu’est-ce que c’est ?', en: 'What is it?' }
  ],

  /* ---------- Flashcard decks ---------- */
  vocab: {
    food: [
      { fr: 'le pain',          en: 'bread',       ex: 'Je voudrais du pain, s’il vous plaît.', exEn: 'I’d like some bread, please.' },
      { fr: 'le croissant',     en: 'croissant',   ex: 'Un croissant et un café.',              exEn: 'A croissant and a coffee.' },
      { fr: 'le fromage',       en: 'cheese',      ex: 'La France a plus de 1000 fromages.',     exEn: 'France has over 1,000 cheeses.' },
      { fr: 'le café',          en: 'coffee',      ex: 'Un café, s’il vous plaît.',              exEn: 'A coffee, please.',
        note: 'Ordering « un café » gets you a small espresso — a milky one is « un crème ».' },
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
        note: 'Faux ami: « la carte » is the menu you order from. « Le menu » is a fixed-price set meal.' },
      { fr: 'l’entrée',         en: 'starter (f.)', ex: 'Comme entrée, la soupe, s’il vous plaît.', exEn: 'For the starter, the soup, please.',
        note: 'Faux ami: in France « l’entrée » is the starter, never the main course.' },
      { fr: 'le plat du jour',  en: 'dish of the day', ex: 'Je vais prendre le plat du jour.',    exEn: 'I’ll have the dish of the day.',
        note: 'Usually the best-value thing on the board — ordering it sounds like a local.' },
      { fr: 'le dessert',       en: 'dessert',     ex: 'Vous prendrez un dessert ?',              exEn: 'Will you have a dessert?' },
      { fr: 'l’apéro',          en: 'pre-dinner drinks (m.)', ex: 'Tu viens prendre l’apéro ?',   exEn: 'Fancy coming round for a drink before dinner?',
        note: 'Short for apéritif — drinks and nibbles before dinner. A national institution.' },
      { fr: 'un verre',         en: 'a drink (lit. a glass)', ex: 'On va boire un verre ?',       exEn: 'Shall we go for a drink?',
        note: '« Boire un verre » or « prendre un verre » — this is how you suggest going out.' },
      { fr: 'la terrasse',      en: 'café terrace', ex: 'On se met en terrasse ?',                exEn: 'Shall we sit outside?',
        note: 'The moment the sun appears, all of France is « en terrasse ».' },
      { fr: 'le petit-déjeuner', en: 'breakfast',  ex: 'Le petit-déjeuner est à 8h.',             exEn: 'Breakfast is at 8.' },
      { fr: 'le déjeuner',      en: 'lunch',        ex: 'On déjeune à midi.',                      exEn: 'We have lunch at noon.' },
      { fr: 'le dîner',         en: 'dinner',       ex: 'Le dîner est prêt !',                     exEn: 'Dinner is ready!' }
    ],

    feelings: [
      { fr: 'crevée',           en: 'knackered', ex: 'Je suis crevée, je vais me coucher.', exEn: 'I’m knackered, I’m off to bed.',
        note: 'The everyday word for exhausted — far more common than « épuisée ». A man says « crevé ».' },
      { fr: 'la flemme',        en: 'can’t-be-bothered feeling', ex: 'J’ai la flemme de cuisiner ce soir.', exEn: 'I can’t be bothered to cook tonight.',
        note: '« Avoir la flemme de… » — gloriously untranslatable, and used daily.' },
      { fr: 'en avoir marre',   en: 'to be fed up', ex: 'J’en ai marre de la pluie.', exEn: 'I’m fed up with the rain.',
        note: 'Learn it as a chunk: « j’en ai marre (de…) ».' },
      { fr: 'j’en peux plus',   en: 'I can’t take it any more', ex: 'J’en peux plus, cette semaine est interminable.', exEn: 'I’m done in — this week never ends.',
        note: 'Spoken form of « je n’en peux plus » — the ne disappears.' },
      { fr: 'le moral',         en: 'spirits, morale', ex: 'T’as le moral ?', exEn: 'Feeling OK? / Spirits up?',
        note: '« Avoir le moral » = to be in good spirits. Low? « J’ai pas le moral. »' },
      { fr: 'contente',         en: 'glad, happy', ex: 'Je suis trop contente de te voir !', exEn: 'I’m so happy to see you!',
        note: '« Trop » is the casual “so”. A man says « content ».' },
      { fr: 'ravie',            en: 'delighted', ex: 'Je suis ravie pour toi !', exEn: 'I’m thrilled for you!' },
      { fr: 'stressée',         en: 'stressed', ex: 'Je suis un peu stressée par le boulot.', exEn: 'I’m a bit stressed about work.' },
      { fr: 'déçue',            en: 'disappointed', ex: 'Franchement, je suis un peu déçue.', exEn: 'Honestly, I’m a bit disappointed.',
        note: 'Faux ami: « déçue » is disappointed, not deceived (that’s « trompée »).' },
      { fr: 'énervée',          en: 'annoyed, wound up', ex: 'Ça m’énerve, ce truc !', exEn: 'This thing is driving me mad!',
        note: 'Faux ami-ish: « énervée » = irritated, not “unnerved”.' },
      { fr: 'inquiète',         en: 'worried', ex: 'T’inquiète, ça va aller.', exEn: 'Don’t worry, it’ll be fine.',
        note: '« T’inquiète » = « ne t’inquiète pas » with both ne and pas gone. Peak spoken French.' },
      { fr: 'en pleine forme',  en: 'on great form', ex: 'Je suis en pleine forme aujourd’hui.', exEn: 'I’m on great form today.' },
      { fr: 'de bonne humeur',  en: 'in a good mood', ex: 'Il est de bonne humeur, profite !', exEn: 'He’s in a good mood — make the most of it!',
        note: 'Bad mood: « de mauvaise humeur ».' },
      { fr: 'avoir hâte',       en: 'to be unable to wait', ex: 'J’ai trop hâte !', exEn: 'I can’t wait!',
        note: '« J’ai hâte de te voir » = I can’t wait to see you.' },
      { fr: 'avoir peur',       en: 'to be scared', ex: 'J’ai peur d’oublier mon français.', exEn: 'I’m scared of forgetting my French.',
        note: 'French has fear, like German: « avoir peur » ≈ Angst haben — never « être » here.' }
    ],

    daily: [
      { fr: 'le boulot',        en: 'work (casual)', ex: 'Je vais au boulot à vélo.', exEn: 'I cycle to work.',
        note: 'The everyday word — « le travail » is fine but « le boulot » is what friends say. « Métro, boulot, dodo » = the daily grind.' },
      { fr: 'la journée',       en: 'the day', ex: 'Bonne journée !', exEn: 'Have a good day!',
        note: '« Jour » counts days; « journée » is the day as you live it.' },
      { fr: 'les courses',      en: 'the (food) shopping (f.)', ex: 'Je fais les courses samedi matin.', exEn: 'I do the shopping on Saturday morning.',
        note: '« Faire les courses » = groceries. Clothes shopping is « faire du shopping ».' },
      { fr: 'le ménage',        en: 'housework', ex: 'Je déteste faire le ménage.', exEn: 'I hate doing the housework.' },
      { fr: 'la lessive',       en: 'laundry', ex: 'Faut que je fasse une lessive.', exEn: 'I need to put a wash on.' },
      { fr: 'le réveil',        en: 'alarm clock', ex: 'Mon réveil sonne à sept heures.', exEn: 'My alarm goes off at seven.' },
      { fr: 'la grasse matinée', en: 'lie-in', ex: 'Dimanche, grasse matinée obligatoire.', exEn: 'Sunday: lie-in, non-negotiable.',
        note: 'Literally “the fat morning”. Friends shorten it: « faire la grasse mat’ ».' },
      { fr: 'le quartier',      en: 'neighbourhood', ex: 'J’adore mon quartier, on peut tout faire à pied.', exEn: 'I love my neighbourhood — everything’s walkable.' },
      { fr: 'la réunion',       en: 'meeting', ex: 'J’ai une réunion à dix heures.', exEn: 'I’ve got a meeting at ten.',
        note: 'Faux ami: a “reunion” with old friends is « des retrouvailles ».' },
      { fr: 'le truc',          en: 'thing, thingy', ex: 'Passe-moi ce truc, là.', exEn: 'Pass me that thing there.',
        note: 'The universal word for when the real word escapes you. Your best friend in conversation.' },
      { fr: 'le vélo',          en: 'bike', ex: 'J’y vais à vélo.', exEn: 'I’m going by bike.' },
      { fr: 'le frigo',         en: 'fridge', ex: 'Y’a plus rien dans le frigo.', exEn: 'There’s nothing left in the fridge.',
        note: 'Short for réfrigérateur — nobody says the long word.' },
      { fr: 'la douche',        en: 'shower', ex: 'Je prends une douche et j’arrive.', exEn: 'I’ll grab a shower and be right there.' },
      { fr: 'le portable',      en: 'mobile phone', ex: 'J’ai encore oublié mon portable !', exEn: 'I’ve forgotten my phone again!',
        note: '« Le portable » = phone; a laptop is « un ordinateur portable ».' }
    ],

    plans: [
      { fr: 'le week-end',      en: 'weekend', ex: 'Tu fais quoi ce week-end ?', exEn: 'What are you up to this weekend?',
        note: 'The most useful conversation-opener in France after « ça va ? ».' },
      { fr: 'la soirée',        en: 'evening / party', ex: 'On fait une soirée chez Léa samedi.', exEn: 'We’re having a party at Léa’s on Saturday.',
        note: '« Une soirée » is also a house party — context tells you which.' },
      { fr: 'le ciné',          en: 'cinema (casual)', ex: 'Ça te dit un ciné ce soir ?', exEn: 'Fancy a film tonight?',
        note: 'French chops its words: ciné, resto, apéro, expo. Using the short forms = instant native points.' },
      { fr: 'le resto',         en: 'restaurant (casual)', ex: 'On se fait un resto ?', exEn: 'Shall we treat ourselves to a meal out?',
        note: '« Se faire un resto / un ciné » = to treat yourselves to one.' },
      { fr: 'l’expo',           en: 'exhibition (f.)', ex: 'Y’a une expo photo super en ce moment.', exEn: 'There’s a great photo exhibition on right now.' },
      { fr: 'la rando',         en: 'hike', ex: 'On fait une rando dimanche ?', exEn: 'Shall we go for a hike on Sunday?',
        note: 'Short for randonnée.' },
      { fr: 'le rendez-vous',   en: 'appointment, meet-up', ex: 'J’ai rendez-vous chez le médecin à trois heures.', exEn: 'I’ve got a doctor’s appointment at three.',
        note: 'Any appointment — not just the romantic kind. Note: « j’ai rendez-vous », no article.' },
      { fr: 'la place',         en: 'ticket / seat / room', ex: 'J’ai deux places pour le concert !', exEn: 'I’ve got two tickets for the concert!',
        note: 'Also “space”: « y’a de la place » = there’s room.' },
      { fr: 'libre',            en: 'free (available)', ex: 'T’es libre jeudi soir ?', exEn: 'Are you free Thursday evening?' },
      { fr: 'dispo',            en: 'available (casual)', ex: 'Je suis dispo à partir de dix-huit heures.', exEn: 'I’m free from 6pm.',
        note: 'Short for disponible — very common in texts.' },
      { fr: 'prévu',            en: 'planned', ex: 'J’ai déjà un truc de prévu, désolée.', exEn: 'I’ve already got something on, sorry.',
        note: 'The polite escape hatch for declining plans.' },
      { fr: 'le plan',          en: 'plan / good tip', ex: 'Resto puis ciné ? Bon plan !', exEn: 'Dinner then a film? Great plan!',
        note: '« Un bon plan » is also a good deal or insider tip — « j’ai un bon plan pour les billets ».' },
      { fr: 'un verre',         en: 'a drink', ex: 'On prend un verre après le boulot ?', exEn: 'Drink after work?' },
      { fr: 'la piscine',       en: 'swimming pool', ex: 'Je vais à la piscine le mardi.', exEn: 'I swim on Tuesdays.',
        note: '« Le mardi » with the article = every Tuesday.' }
    ],

    people: [
      { fr: 'le copain / la copine', en: 'boyfriend/girlfriend — or mate', ex: 'Je te présente mon copain.', exEn: 'This is my boyfriend.',
        note: 'With mon/ma it usually means partner; with un/une it’s just a mate. « Un copain » ≠ « mon copain » !' },
      { fr: 'le / la pote',     en: 'mate, buddy', ex: 'C’est une pote du boulot.', exEn: 'She’s a mate from work.',
        note: 'Always safe — « pote » never implies romance.' },
      { fr: 'le mec',           en: 'guy, bloke', ex: 'C’est un mec super sympa.', exEn: 'He’s a really nice guy.',
        note: '« Mon mec » = my boyfriend, casually.' },
      { fr: 'la meuf',          en: 'woman, girlfriend (slang)', ex: 'C’est la meuf de Hugo.', exEn: 'She’s Hugo’s girlfriend.',
        note: 'Verlan (back-slang) for « femme » — femme flipped round. Young and casual; recognise it more than use it.' },
      { fr: 'le frère / la sœur', en: 'brother / sister', ex: 'J’ai un frère et une sœur.', exEn: 'I have a brother and a sister.' },
      { fr: 'les parents',      en: 'parents (m.)', ex: 'Mes parents viennent ce week-end.', exEn: 'My parents are coming this weekend.' },
      { fr: 'le gosse',         en: 'kid (casual)', ex: 'Les gosses sont adorables.', exEn: 'The kids are adorable.',
        note: 'Fine in France — but in Québec « gosses » means testicles. Choose your country carefully.' },
      { fr: 'le voisin / la voisine', en: 'neighbour', ex: 'Ma voisine est adorable.', exEn: 'My neighbour is lovely.' },
      { fr: 'le mari / la femme', en: 'husband / wife', ex: 'Son mari est suisse.', exEn: 'Her husband is Swiss.',
        note: '« La femme » = both woman and wife; « ma femme » is always “my wife”.' },
      { fr: 'la belle-mère',    en: 'mother-in-law / stepmother', ex: 'Sa belle-mère habite à Lyon.', exEn: 'His mother-in-law lives in Lyon.',
        note: 'One word for both — context decides. Beau-frère, belle-sœur… same pattern.' },
      { fr: 'ensemble',         en: 'together (as a couple)', ex: 'Ils sont ensemble depuis deux ans.', exEn: 'They’ve been together for two years.' },
      { fr: 'en couple',        en: 'in a relationship', ex: 'Non, il est en couple.', exEn: 'No, he’s taken.' },
      { fr: 'sympa',            en: 'nice, friendly', ex: 'Elle est hyper sympa.', exEn: 'She’s really nice.',
        note: 'The all-purpose compliment — for people, evenings, flats. « Hyper » and « super » are the casual intensifiers.' },
      { fr: 'proche',           en: 'close (to someone)', ex: 'On est très proches, ma sœur et moi.', exEn: 'My sister and I are very close.' }
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
    },

    opinions: {
      title: 'Quick check: opinions & reactions',
      intro: 'Pick the natural option — the one a French friend would actually reach for.',
      questions: [
        { promptFr: '« Alors, t’en as pensé quoi ? »', hint: 'You’ve just left the cinema together.',
          options: ['What did you think of it?', 'What are you thinking about?', 'Where did you put it?'], answer: 0,
          explain: 'It’s the spoken « qu’est-ce que tu en as pensé ? » — THE question after a film, a meal, a flat viewing. The « en » stands for “of it”.' },
        { promptFr: 'You loved the film. The strongest of these is…', frOpts: true, hint: 'Careful — one of them is a trap.',
          options: ['C’était pas mal.', 'J’ai adoré.', 'Mouais, ça va.'], answer: 1,
          explain: '« J’ai adoré » is real enthusiasm. « Pas mal » sounds positive but is only lukewarm — and « mouais » is barely a compliment at all.' },
        { promptFr: '« Ce resto est vraiment trop cher. »', hint: 'You completely agree.', frOpts: true,
          options: ['C’est clair.', 'N’importe quoi.', 'Tant mieux.'], answer: 0,
          explain: '« C’est clair » = “so true”. « N’importe quoi » would mean you think they’re talking rubbish, and « tant mieux » (“all the better”) doesn’t fit at all.' },
        { promptFr: '« Mouais… »', hint: 'Your friend answers your idea with this. What are they telling you?',
          options: ['They’re enthusiastic', 'They’re not convinced', 'They’re furious'], answer: 1,
          explain: '« Mouais » is « oui » drowned in doubt — “yeah… I guess”. Read it as a polite no, or at best a “convince me”.' },
        { promptFr: 'Disagree with a friend — nicely.', hint: 'One of these is friendly, one is a jab, one is off-topic.', frOpts: true,
          options: ['Je suis pas d’accord, moi.', 'Tu dis n’importe quoi !', 'Tant pis.'], answer: 0,
          explain: '« Je suis pas d’accord, moi » is a perfectly friendly push-back — disagreeing openly is normal in France. « Tu dis n’importe quoi » is for teasing close friends; « tant pis » means “oh well”.' },
        { promptFr: '« Ça me soûle. »', hint: 'Literally “it gets me drunk”…',
          options: ['I love it', 'It’s really annoying me', 'It makes me thirsty'], answer: 1,
          explain: '« Ça me soûle » = it’s doing my head in. Very common for anything tedious — traffic, admin, a boring series. Also spelled « saoule ».' }
      ]
    },

    the_past: {
      title: 'Quick check: telling the story',
      intro: 'Events move the story forward; descriptions set the scene. Pick the right tense — the explanations do the teaching.',
      questions: [
        { promptFr: 'Hier, on ___ au ciné.', hint: 'One-off thing that happened → which form?', frOpts: true,
          options: ['est allés', 'allait'], answer: 0,
          explain: 'A one-off event that moves the story forward → passé composé: « on est allés au ciné ». (Aller travels with être, not avoir.)' },
        { promptFr: 'Il ___ super froid, du coup on est rentrés.', hint: 'You’re setting the scene for why you went home.', frOpts: true,
          options: ['a fait', 'faisait'], answer: 1,
          explain: 'Background and atmosphere → imparfait: « il faisait froid ». The event inside that scenery (« on est rentrés ») stays passé composé.' },
        { promptFr: 'Quand j’étais petite, j’___ à Zurich.', hint: 'Something that used to be true for years.', frOpts: true,
          options: ['ai habité', 'habitais'], answer: 1,
          explain: 'A long-running state or habit in the past → imparfait: « j’habitais à Zurich ». « Quand j’étais petite, je… » + imparfait is a pattern worth memorising whole.' },
        { promptFr: 'Elle ___ partie tôt.', hint: 'partir — which helper verb?', frOpts: true,
          options: ['a', 'est'], answer: 1,
          explain: 'Partir is one of the “coming and going” verbs that take être: « elle est partie ». And with être, the participle agrees — that’s the extra -e on partie.' },
        { promptFr: '« J’ai trop ri hier soir ! »', hint: 'A friend says this about last night.',
          options: ['I laughed so much', 'I was so tired', 'I ate too much'], answer: 0,
          explain: '« Rire » (to laugh) has the tiny participle « ri » : « j’ai ri » = I laughed. « J’ai trop ri » = I laughed so much — a great thing to say after a good evening.' },
        { promptFr: 'Je marchais tranquillement quand quelqu’un m’a appelée.', hint: 'Which half is the “event”?', frOpts: true,
          options: ['je marchais', 'quelqu’un m’a appelée'], answer: 1,
          explain: 'The walking is the scenery (imparfait, rolling along); the call is the event that interrupts it (passé composé). That one sentence is the whole system in miniature.' }
      ]
    },

    making_plans: {
      title: 'Quick check: making plans',
      intro: 'Propose, accept, decline, pin it down — pick what a French friend would say.',
      questions: [
        { promptFr: '« Ça te dit de venir samedi ? »', hint: 'A friend texts you this.',
          options: ['Fancy coming on Saturday?', 'Did you say you’d come Saturday?', 'Can you tell me about Saturday?'], answer: 0,
          explain: '« Ça te dit de… ? » — literally “does it speak to you?” — is THE casual way to invite someone. Polite version: « ça vous dit de… ? »' },
        { promptFr: 'Suggest going for a drink.', hint: 'Which one sounds like a friend, not a memo?', frOpts: true,
          options: ['On pourrait prendre un verre.', 'Nous devons boire un verre.', 'Il est nécessaire de boire.'], answer: 0,
          explain: '« On pourrait… » (“we could…”) is the natural soft suggestion. « Nous devons » (“we must”) sounds like a work email.' },
        { promptFr: 'Accept with enthusiasm: « ___ ! »', hint: 'You’re very much in.', frOpts: true,
          options: ['Tant pis', 'Carrément', 'N’importe quoi'], answer: 1,
          explain: '« Carrément ! » = “totally, I’m in!”. « Avec plaisir », « grave » and « ça marche » work too.' },
        { promptFr: 'Decline without hurting anyone.', hint: 'Warm no > cold no.', frOpts: true,
          options: ['J’aurais bien aimé, mais je peux pas ce soir.', 'Non.', 'Ça me dit rien du tout.'], answer: 0,
          explain: '« J’aurais bien aimé, mais… » (“I’d have loved to, but…”) is the graceful no. Adding « une autre fois ? » makes it even friendlier.' },
        { promptFr: '« On se retrouve où ? »', hint: 'Sorting out the practical bit.',
          options: ['Where shall we meet?', 'Where did you find it?', 'Where are we?'], answer: 0,
          explain: '« Se retrouver » = to meet up. « On se retrouve où / à quelle heure ? » pins down the plan. Answer: « devant le ciné à vingt heures ».' },
        { promptFr: 'Je ___ réserver pour samedi.', hint: '“I’ll book for Saturday” — the spoken future.', frOpts: true,
          options: ['vais', 'va', 'irai'], answer: 0,
          explain: '« Je vais + verb » is the near future — and it covers almost all your future needs in conversation. No need for the formal future tense when chatting.' }
      ]
    },

    feelings: {
      title: 'Quick check: how you’re doing',
      intro: 'Real feelings, real phrases. Pick what fits.',
      questions: [
        { promptFr: '« Je suis crevée. »', hint: 'crever = literally, to puncture…',
          options: ['I’m exhausted', 'I’ve got a flat tyre', 'I’m starving'], answer: 0,
          explain: '« Crevé(e) » — literally “punctured” — is the everyday “knackered”. (A tyre can also be « crevé », which is why the image works.)' },
        { promptFr: '« J’en peux plus. »', hint: 'Said with a big sigh.',
          options: ['I can’t take it any more', 'I don’t want any more food', 'I can’t find it'], answer: 0,
          explain: '« J’en peux plus » (spoken form of « je n’en peux plus ») = I’m at the end of my rope — from tiredness, work, or your fourth Zoom call of the day.' },
        { promptFr: '« Ça va pas fort. »', hint: 'A friend answers your « ça va ? » like this. You say…', frOpts: true,
          options: ['Ah mince… qu’est-ce qui se passe ?', 'Tant mieux !', 'Carrément !'], answer: 0,
          explain: '« Ça va pas fort » = “not great, honestly”. « Ah mince » (“oh no”) plus a gentle question shows you heard them. « Tant mieux » would be celebrating their bad day.' },
        { promptFr: '« J’ai la flemme. »', hint: 'One of French’s greatest gifts to the world.',
          options: ['I can’t be bothered', 'I have a fever', 'I’m furious'], answer: 0,
          explain: '« Avoir la flemme » = that specific can’t-be-bothered feeling. « J’ai la flemme de cuisiner » — no English word does it justice.' },
        { promptFr: '« J’ai trop hâte ! »', hint: 'Said with shining eyes.',
          options: ['I can’t wait!', 'I’m in a big hurry!', 'I’m too late!'], answer: 0,
          explain: '« Avoir hâte » = to be excited for something coming. « J’ai trop hâte de te voir » = I can’t wait to see you. (Being late is « être en retard ».)' }
      ]
    },

    repair: {
      title: 'Quick check: staying afloat',
      intro: 'Someone’s talking at full speed. Pick the phrase that keeps you in the conversation.',
      questions: [
        { promptFr: 'They’re talking way too fast.', hint: 'Polite, and it works every time.', frOpts: true,
          options: ['Vous pouvez parler moins vite, s’il vous plaît ?', 'Stop ! Trop vite !', 'Quoi ??'], answer: 0,
          explain: '« Vous pouvez parler moins vite, s’il vous plaît ? » — nobody minds this, ever. With a friend: « tu peux parler moins vite ? »' },
        { promptFr: '« Comment on dit « to queue » en français ? »', hint: 'What is this question for?',
          options: ['Asking for the French word for something', 'Asking what a French word means', 'Asking someone to repeat'], answer: 0,
          explain: '« Comment on dit … en français ? » = “how do you say … in French?” — your tool for filling gaps mid-sentence. (Answer here: « faire la queue ».)' },
        { promptFr: 'Someone uses a word you don’t know.', hint: 'You want its meaning.', frOpts: true,
          options: ['Ça veut dire quoi, « bondé » ?', 'Comment on dit « bondé » ?', 'Bondé, s’il vous plaît.'], answer: 0,
          explain: '« Ça veut dire quoi, … ? » = “what does … mean?”. (Flip side: « comment on dit … ? » is for when you have the English and need the French.)' },
        { promptFr: 'You need two seconds to find a word.', hint: 'What do natives actually do?', frOpts: true,
          options: ['Euh… attends… comment dire…', '(switch to English)', '(say nothing and panic)'], answer: 0,
          explain: 'French speakers stall out loud constantly: « euh », « attends », « comment dire… ». Doing the same keeps the conversation yours — silence or switching gives it away.' },
        { promptFr: '« Si je comprends bien, on se voit vendredi ? »', hint: 'What is this move?',
          options: ['Checking you’ve understood correctly', 'Asking to repeat', 'Apologising'], answer: 0,
          explain: '« Si je comprends bien… » = “so if I’ve got this right…”. Repeat the key fact back and let them confirm — the single best trick against misunderstandings.' }
      ]
    },

    out_and_about: {
      title: 'Quick check: out in the world',
      intro: 'The little social rules that make everything smoother.',
      questions: [
        { promptFr: 'You walk into a bakery. Your first word is…', hint: 'This one really matters.', frOpts: true,
          options: ['Bonjour !', 'Salut !', 'Une baguette.'], answer: 0,
          explain: '« Bonjour » first, always — it’s a password, not decoration. Ordering without it reads as genuinely rude. (« Salut » is for friends, not shopkeepers.)' },
        { promptFr: 'Order like a local:', hint: 'All three are understandable — one is what people actually say.', frOpts: true,
          options: ['Je vais prendre une baguette, s’il vous plaît.', 'Donnez-moi une baguette.', 'Je désire une baguette.'], answer: 0,
          explain: '« Je vais prendre… » is the everyday ordering formula. « Donnez-moi » sounds bossy; « je désire » sounds like a period drama.' },
        { promptFr: '« Et avec ceci ? »', hint: 'The baker asks you this after your first item.',
          options: ['Anything else?', 'And with cash?', 'Is that for here?'], answer: 0,
          explain: '« Et avec ceci ? » = “anything else?” — the standard bakery follow-up. Done? « Ce sera tout, merci. »' },
        { promptFr: '« Sur place ou à emporter ? »', hint: 'You’ll hear this at every counter.',
          options: ['Eat in or take away?', 'By card or in cash?', 'With or without sugar?'], answer: 0,
          explain: '« Sur place » = eating here; « à emporter » = take-away. A two-second answer that’s worth having ready.' },
        { promptFr: 'You want the waiter’s attention.', hint: 'One of these is straight out of a 1950s film.', frOpts: true,
          options: ['S’il vous plaît !', 'Garçon !', 'Hé ! Monsieur !'], answer: 0,
          explain: 'A raised hand and « s’il vous plaît ! » is exactly right. « Garçon ! » is hopelessly dated (and a bit rude now) — leave it in the old films.' }
      ]
    },

    pronouns: {
      title: 'Quick check: shrink the sentence',
      intro: 'Replace the noun, keep the flow. Pick the right little word.',
      questions: [
        { promptFr: '« T’as vu Léa ? » — « Oui, je ___ ai vue hier. »', hint: 'Léa = her. Which form before a vowel?', frOpts: true,
          options: ['la', 'l’', 'lui'], answer: 1,
          explain: '« Je l’ai vue » — la shrinks to l’ before a vowel. (And spot the agreement: vue with an -e, because the « la » it stands for is Léa.)' },
        { promptFr: '« T’as parlé à tes parents ? » — « Oui, je ___ ai parlé hier. »', hint: 'parler à quelqu’un…', frOpts: true,
          options: ['les', 'leur', 'y'], answer: 1,
          explain: 'Parler à → indirect object → « leur » : « je leur ai parlé ». « Les » would be for a direct object (« je les ai vus »).' },
        { promptFr: '« Tu vas souvent à la piscine ? » — « J’___ vais tous les mardis. »', hint: 'Replacing a place.', frOpts: true,
          options: ['y', 'en', 'la'], answer: 0,
          explain: '« Y » stands for a place: « j’y vais » = I go there. You already know it from « on y va ! » — let’s go (there).' },
        { promptFr: '« Tu veux du gâteau ? » — « Oui, j’___ veux bien ! »', hint: 'Replacing “some of it”.', frOpts: true,
          options: ['en', 'y', 'le'], answer: 0,
          explain: '« En » replaces du/de la/des + thing: « j’en veux bien » = I’d love some. It’s the same en as in « j’en peux plus » and « t’en penses quoi ? ».' },
        { promptFr: '« Tu me le prêtes ? »', hint: 'Two pronouns in a row…',
          options: ['Will you lend it to me?', 'Are you ready for me?', 'Do you promise me?'], answer: 0,
          explain: '« Tu me le prêtes ? » = “you lend it to me?” — me (to me) + le (it) + verb. Both pronouns queue up before the verb in French.' },
        { promptFr: '« ___, je préfère le thé. »', hint: 'Emphasising that this is YOUR view.', frOpts: true,
          options: ['Je', 'Moi', 'Me'], answer: 1,
          explain: '« Moi, je… » is how French emphasises — where English just stresses the word “I”. It isn’t arrogant; it’s the normal way to give a personal take.' }
      ]
    },

    native_touches: {
      title: 'Quick check: the native touches',
      intro: 'Small swaps, big effect. Pick what a French speaker would say.',
      questions: [
        { promptFr: 'The meal arrives. « ___ délicieux ! »', hint: 'A general “this is delicious!”', frOpts: true,
          options: ['Il est', 'C’est'], answer: 1,
          explain: 'For reactions and comments, French defaults to « c’est » + adjective: « c’est délicieux », « c’est génial », « c’est n’importe quoi ».' },
        { promptFr: '« ___ va au ciné ce soir ? »', hint: 'Casual “shall we…?” between friends.', frOpts: true,
          options: ['Nous', 'On'], answer: 1,
          explain: 'In speech, “we” is « on » : « on va au ciné ? », « on y va ». « Nous » isn’t wrong — it just sounds like an official announcement.' },
        { promptFr: '« Tu connais Thomas ? » — « Oui, ___ un pote de Léa. »', hint: 'Introducing who someone is.', frOpts: true,
          options: ['il est', 'c’est'], answer: 1,
          explain: 'Before un/une/mon… + noun, French uses « c’est » : « c’est un pote de Léa ». Bare profession, no article → « il est prof ».' },
        { promptFr: '« C’est compliqué, ___. »', hint: 'The little word that rounds off a spoken sentence.', frOpts: true,
          options: ['quoi', 'que', 'qui'], answer: 0,
          explain: 'Sentence-final « quoi » is a softener — “…you know”. « C’est nul, quoi. » You don’t need to say it, but expect to hear it everywhere.' },
        { promptFr: '« Ça marche ! »', hint: 'You suggest 8pm; they answer this.',
          options: ['Deal / works for me!', 'It’s walking!', 'The machine is on!'], answer: 0,
          explain: '« Ça marche » — literally “it walks” — is the universal “OK, deal, works for me”. You’ll say it ten times a day.' },
        { promptFr: '« Nickel ! »', hint: 'Your friend checks the flat is clean, says this.',
          options: ['Perfect / spotless!', 'It’s made of metal!', 'Five cents!'], answer: 0,
          explain: '« Nickel » = perfect, spot on, gleaming. « C’est nickel ! » works for a plan, a room, a result — anything that’s just right.' }
      ]
    },

    politeness: {
      title: 'Quick check: the polite gears',
      intro: 'One tense — the conditional — does almost all of French politeness. Try it.',
      questions: [
        { promptFr: 'Vous ___ m’aider ?', hint: 'Asking a stranger for help — soften it.', frOpts: true,
          options: ['pouvez', 'pourriez'], answer: 1,
          explain: '« Vous pourriez m’aider ? » — the conditional turns “can you” into “could you”. « Vous pouvez » is fine; « vous pourriez » is smoother.' },
        { promptFr: 'In a shop: « Je ___ un café, s’il vous plaît. »', hint: 'The polite “I’d like”.', frOpts: true,
          options: ['veux', 'voudrais'], answer: 1,
          explain: '« Je voudrais » = I’d like. « Je veux » (“I want”) sounds demanding from an adult — it’s what toddlers say.' },
        { promptFr: '« Ça vous dérangerait de fermer la fenêtre ? »', hint: 'Reading the politeness level.',
          options: ['Would you mind closing the window?', 'You’re bothering me — close the window!', 'Did you forget to close the window?'], answer: 0,
          explain: '« Ça vous dérangerait de… ? » = “would you mind…?” — the gentlest way to ask for anything. Casual version: « ça te dérange si… ? »' },
        { promptFr: 'Il faut que j’y ___.', hint: 'THE phrase for leaving. Learn it whole.', frOpts: true,
          options: ['vais', 'aille'], answer: 1,
          explain: '« Il faut que j’y aille » = I’ve got to go. Yes, « aille » is subjunctive — don’t study the tense, just learn the chunk. It ends half the conversations in France.' },
        { promptFr: 'Suggest gently: « On ___ demander à Marie, non ? »', hint: '“We could maybe ask Marie?”', frOpts: true,
          options: ['pourrait', 'peut', 'pourra'], answer: 0,
          explain: '« On pourrait… » = “we could…”. Same conditional trick, pointed at suggestions instead of requests. The final « non ? » invites them to weigh in.' },
        { promptFr: '« Tu pourrais me passer le sel ? »', hint: 'Conditional with « tu » — what’s going on?',
          options: ['Politeness works with friends too', 'A grammar mistake', 'It means “you should”'], answer: 0,
          explain: 'The conditional isn’t only for « vous » — « tu pourrais… ? » is the everyday courteous ask between friends. Same softening, casual register.' }
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
        { who: 'A', name: 'Léa', fr: 'T’es prête ? On y va ?', en: 'You ready? Shall we go?' },
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
    },

    opinions: {
      title: 'Leaving the cinema',
      setting: 'You and Léa step out of a film you dragged her to.',
      lines: [
        { who: 'A', name: 'Léa', fr: 'Alors, t’en as pensé quoi ?', en: 'So, what did you think of it?' },
        { who: 'B', name: 'Toi', fr: 'Franchement ? J’ai trouvé ça super. Pas toi ?', en: 'Honestly? I thought it was great. Didn’t you?' },
        { who: 'A', name: 'Léa', fr: 'Mouais… c’était pas mal, mais c’est trop long, quoi.', en: 'Meh… it wasn’t bad, but it’s too long, you know.' },
        { who: 'B', name: 'Toi', fr: 'T’as raison, la fin traîne un peu. Mais les acteurs, j’ai adoré.', en: 'You’re right, the ending drags a bit. But the actors — I loved them.' },
        { who: 'A', name: 'Léa', fr: 'Ah ça, c’est clair. Lui, il est toujours excellent.', en: 'Oh, that’s for sure. That guy is always excellent.' },
        { who: 'B', name: 'Toi', fr: 'Tu vois ! Et la musique, t’en penses quoi ?', en: 'See! And the music — what do you make of it?' },
        { who: 'A', name: 'Léa', fr: 'Bof… elle m’a soûlée au bout d’un moment.', en: 'Meh… it got on my nerves after a while.' },
        { who: 'B', name: 'Toi', fr: 'N’importe quoi ! C’était le meilleur truc du film !', en: 'Rubbish! It was the best thing in the film!' }
      ],
      notes: [
        '<span class="fr">« T’en as pensé quoi ? »</span> is the question you’ll get after any shared experience. The <span class="fr">en</span> means “of it” — answer with <span class="fr">« j’ai trouvé ça… »</span> + adjective.',
        'Spot the scale: <span class="fr">j’ai adoré</span> → <span class="fr">c’était pas mal</span> (lukewarm!) → <span class="fr">bof / mouais</span> (unconvinced) → <span class="fr">n’importe quoi !</span> (playful “rubbish!”).',
        'Friends disagree head-on — <span class="fr">« n’importe quoi ! »</span> between friends is teasing, not rude. Note the agreement in <span class="fr">« elle m’a soûlée »</span>: Léa is a woman, so the participle takes an -e.'
      ]
    },

    the_past: {
      title: 'Monday morning debrief',
      setting: 'Max asks about your weekend by the coffee machine.',
      lines: [
        { who: 'A', name: 'Max', fr: 'Alors, c’était bien ce week-end ?', en: 'So, was it a good weekend?' },
        { who: 'B', name: 'Toi', fr: 'Ouais, trop bien ! Samedi, je suis allée à la mer avec Léa.', en: 'Yeah, so good! On Saturday I went to the seaside with Léa.' },
        { who: 'A', name: 'Max', fr: 'Ah ouais ? Vous avez eu beau temps ?', en: 'Oh yeah? Did you get good weather?' },
        { who: 'B', name: 'Toi', fr: 'Il faisait super beau, du coup on s’est baignées. L’eau était glacée, mais bon.', en: 'It was gorgeous, so we went for a swim. The water was freezing, but hey.' },
        { who: 'A', name: 'Max', fr: 'La chance ! Moi, j’ai rien fait. J’étais crevé, j’ai dormi tout le week-end.', en: 'Lucky you! Me, I did nothing. I was shattered — I slept all weekend.' },
        { who: 'B', name: 'Toi', fr: 'T’as bien fait ! Et dimanche, on a mangé chez ses parents. C’était super sympa.', en: 'Good for you! And on Sunday we ate at her parents’. It was really lovely.' },
        { who: 'A', name: 'Max', fr: 'Ils habitent où, déjà ?', en: 'Where do they live, again?' },
        { who: 'B', name: 'Toi', fr: 'À Nantes. Quand j’étais petite, j’allais souvent en vacances par là, d’ailleurs.', en: 'In Nantes. When I was little I often went on holiday round there, actually.' }
      ],
      notes: [
        'Hear the two layers? Events push the story on — <span class="fr">je suis allée, on a mangé, j’ai dormi</span> (passé composé). Scenery sits behind them — <span class="fr">il faisait beau, l’eau était glacée, j’étais crevé</span> (imparfait).',
        'You’re a woman, so with être the participle agrees: <span class="fr">je suis allée</span>, <span class="fr">on s’est baignées</span> (you and Léa — two women).',
        '<span class="fr">« Ils habitent où, déjà ? »</span> — that little <span class="fr">déjà</span> means “remind me”. Very handy, very French.'
      ]
    },

    making_plans: {
      title: 'Sorting out Saturday',
      setting: 'Léa texts, then calls, about the weekend.',
      lines: [
        { who: 'A', name: 'Léa', fr: 'Dis, ça te dit de faire un truc samedi ?', en: 'Hey, fancy doing something on Saturday?' },
        { who: 'B', name: 'Toi', fr: 'Carrément ! T’as une idée ?', en: 'Totally! Got an idea?' },
        { who: 'A', name: 'Léa', fr: 'On pourrait tester le nouveau resto près du canal. Il paraît que c’est super bon.', en: 'We could try the new restaurant by the canal. Apparently it’s really good.' },
        { who: 'B', name: 'Toi', fr: 'Ah ouais, grave ! Plutôt midi ou plutôt le soir ?', en: 'Oh yeah, for sure! More like lunch, or evening?' },
        { who: 'A', name: 'Léa', fr: 'Le soir, c’est mieux. On dit vingt heures ?', en: 'Evening’s better. Shall we say eight?' },
        { who: 'B', name: 'Toi', fr: 'Euh, je peux pas avant vingt heures trente… je finis tard.', en: 'Uh, I can’t before half eight… I finish late.' },
        { who: 'A', name: 'Léa', fr: 'Pas de souci. Vingt heures trente devant le resto, ça marche ?', en: 'No worries. Half eight outside the restaurant — deal?' },
        { who: 'B', name: 'Toi', fr: 'Ça marche ! Je réserve, du coup.', en: 'Deal! I’ll book, then.' }
      ],
      notes: [
        'The whole plan runs on three chunks: <span class="fr">ça te dit de… ?</span> (fancy…?), <span class="fr">on pourrait…</span> (we could…), <span class="fr">ça marche</span> (deal).',
        '<span class="fr">« On dit vingt heures ? »</span> is how you pin a time down — and France runs on the 24-hour clock in speech too: <span class="fr">vingt heures</span>, not “8pm”.',
        '<span class="fr">« Je peux pas avant… »</span> — pushing back on the time is completely normal; just offer the alternative in the same breath.'
      ]
    },

    feelings: {
      title: 'One of those weeks',
      setting: 'Max calls for a catch-up; you’re running on empty.',
      lines: [
        { who: 'A', name: 'Max', fr: 'Ça va ? T’as l’air fatiguée.', en: 'You OK? You seem tired.' },
        { who: 'B', name: 'Toi', fr: 'Chuis crevée, en fait. J’ai super mal dormi.', en: 'I’m shattered, actually. I slept really badly.' },
        { who: 'A', name: 'Max', fr: 'Ah mince. Grosse semaine ?', en: 'Oh no. Big week?' },
        { who: 'B', name: 'Toi', fr: 'Ouais, le boulot, c’est n’importe quoi en ce moment. J’en peux plus.', en: 'Yeah, work is a mess at the moment. I’m done in.' },
        { who: 'A', name: 'Max', fr: 'Je comprends. Moi aussi, y’a des jours, j’ai qu’une envie : rester au lit.', en: 'I get it. Me too — some days all I want is to stay in bed.' },
        { who: 'B', name: 'Toi', fr: 'Voilà ! Mais bon, ça va aller. Ce week-end, je fais rien, promis.', en: 'Exactly! But hey, it’ll be fine. This weekend I’m doing nothing, promise.' },
        { who: 'A', name: 'Max', fr: 'T’as raison. Repose-toi bien, hein.', en: 'Quite right. Rest up properly, yeah?' },
        { who: 'B', name: 'Toi', fr: 'Merci. Ça fait du bien d’en parler, franchement.', en: 'Thanks. It honestly helps to talk about it.' }
      ],
      notes: [
        'Real answers to <span class="fr">« ça va ? »</span> aren’t always sunny: <span class="fr">chuis crevée</span>, <span class="fr">j’en peux plus</span>, <span class="fr">ça va pas fort</span>. Friends expect the truth.',
        'The comfort toolkit on the other side: <span class="fr">ah mince</span> (oh no), <span class="fr">je comprends</span>, <span class="fr">ça va aller</span> (it’ll be OK), <span class="fr">repose-toi bien</span>.',
        '<span class="fr">« Ça fait du bien »</span> — “it does you good” — works for naps, holidays, rants and swims. A phrase to keep in your pocket.'
      ]
    },

    repair: {
      title: 'Keeping up with Hugo',
      setting: 'Hugo — a fast talker — is telling you about his Saturday.',
      lines: [
        { who: 'A', name: 'Hugo', fr: 'Du coup samedi, on s’est retrouvés à Montmartre, et là, y’avait un monde fou…', en: 'So on Saturday we met up in Montmartre, and honestly, there were insane crowds…' },
        { who: 'B', name: 'Toi', fr: 'Attends, pardon — tu peux parler un peu moins vite ?', en: 'Hang on, sorry — can you speak a bit slower?' },
        { who: 'A', name: 'Hugo', fr: 'Oui, pardon ! Je disais : il y avait plein de monde à Montmartre samedi.', en: 'Yes, sorry! I was saying: there were loads of people in Montmartre on Saturday.' },
        { who: 'B', name: 'Toi', fr: 'Ah, d’accord ! Mais ça veut dire quoi, « un monde fou » ?', en: 'Ah, got it! But what does « un monde fou » mean?' },
        { who: 'A', name: 'Hugo', fr: 'Une foule énorme. Plein de gens, quoi.', en: 'A huge crowd. Loads of people, basically.' },
        { who: 'B', name: 'Toi', fr: 'Je vois ! Et comment on dit… quand y’a trop de gens dans le métro ? « Bondé » ?', en: 'I see! And how do you say it… when the métro has too many people? « Bondé »?' },
        { who: 'A', name: 'Hugo', fr: 'C’est ça, bondé ! Et justement, le métro était bondé.', en: 'That’s it — packed! And as it happens, the métro was packed.' },
        { who: 'B', name: 'Toi', fr: 'Bon, j’ai pas tout compris, mais raconte la suite !', en: 'Right, I didn’t catch all of it — but tell me the rest!' }
      ],
      notes: [
        'Every “repair move” is in here: <span class="fr">tu peux parler moins vite ?</span>, <span class="fr">ça veut dire quoi… ?</span>, <span class="fr">comment on dit… ?</span> — and the conversation never breaks.',
        'Admitting it — <span class="fr">« j’ai pas tout compris »</span> — is charming, not embarrassing. It invites the other person to help rather than switch to English.',
        'Interrupting with <span class="fr">« attends, pardon »</span> is completely acceptable. French conversation is full of friendly interruptions.'
      ]
    },

    out_and_about: {
      title: 'Breakfast on a terrace',
      setting: 'A sunny morning café. The waiter comes over.',
      lines: [
        { who: 'A', name: 'Serveur', fr: 'Bonjour ! Vous avez choisi ?', en: 'Morning! Have you decided?' },
        { who: 'B', name: 'Toi', fr: 'Bonjour ! Oui — pour moi, ce sera un crème et un croissant, s’il vous plaît.', en: 'Morning! Yes — for me it’ll be a white coffee and a croissant, please.' },
        { who: 'A', name: 'Serveur', fr: 'Très bien. Ce sera tout ?', en: 'Very good. Will that be all?' },
        { who: 'B', name: 'Toi', fr: 'Oui, c’est tout, merci.', en: 'Yes, that’s everything, thanks.' },
        { who: 'A', name: 'Serveur', fr: 'Et voilà. Vous êtes en vacances ici ?', en: 'Here you go. Are you on holiday here?' },
        { who: 'B', name: 'Toi', fr: 'Non, j’habite ici depuis peu. J’apprends le français, d’ailleurs.', en: 'No, I’ve just moved here. I’m learning French, actually.' },
        { who: 'A', name: 'Serveur', fr: 'Eh ben, ça s’entend à peine ! Bon courage, hein.', en: 'Well, you can hardly tell! Good luck with it.' },
        { who: 'B', name: 'Toi', fr: 'Merci, c’est gentil ! Et l’addition, quand vous avez un moment.', en: 'Thanks, that’s kind! And the bill, whenever you have a second.' }
      ],
      notes: [
        'With staff it’s <span class="fr">vous</span> and it opens with <span class="fr">bonjour</span> — that part is non-negotiable. But notice it still turns into a real chat.',
        '<span class="fr">« Pour moi, ce sera… »</span> and <span class="fr">« je vais prendre… »</span> are the natural ordering formulas — smoother than firing the bare item name.',
        '<span class="fr">« Quand vous avez un moment »</span> — “whenever you have a second” — is a lovely softener for any request to staff.'
      ]
    },

    pronouns: {
      title: 'The film you have to see',
      setting: 'Léa has seen something great and won’t let it go.',
      lines: [
        { who: 'A', name: 'Léa', fr: 'T’as vu le dernier film de Klapisch ?', en: 'Have you seen the latest Klapisch film?' },
        { who: 'B', name: 'Toi', fr: 'Non, pas encore. Tu l’as vu, toi ?', en: 'No, not yet. Have you seen it?' },
        { who: 'A', name: 'Léa', fr: 'Je l’ai vu hier ! Franchement, faut que t’y ailles.', en: 'I saw it yesterday! Honestly, you have to go.' },
        { who: 'B', name: 'Toi', fr: 'Ah ouais ? T’en penses quoi, sans me spoiler ?', en: 'Oh yeah? What did you make of it — no spoilers?' },
        { who: 'A', name: 'Léa', fr: 'J’y pense encore, c’est bon signe. Et j’en parle à tout le monde, du coup.', en: 'I’m still thinking about it — good sign. And I’m telling everyone about it, obviously.' },
        { who: 'B', name: 'Toi', fr: 'Bon, tu me convaincs. Tu veux y retourner avec moi ?', en: 'Right, you’ve convinced me. Want to go back with me?' },
        { who: 'A', name: 'Léa', fr: 'Carrément ! Et après, on ira boire un verre. Je t’invite !', en: 'Absolutely! And afterwards we’ll go for a drink. My treat!' },
        { who: 'B', name: 'Toi', fr: 'Ça marche. Je t’envoie un message demain pour l’heure.', en: 'Deal. I’ll text you tomorrow about the time.' }
      ],
      notes: [
        'Count the little words: <span class="fr">je l’ai vu</span> (l’ = the film), <span class="fr">faut que t’y ailles</span> (y = there), <span class="fr">j’en parle</span> (en = about it), <span class="fr">je t’invite</span> (t’ = you). Not one repeated noun.',
        'You already own several of these as chunks — <span class="fr">on y va</span>, <span class="fr">j’en peux plus</span>, <span class="fr">t’en penses quoi ?</span> — this lesson just shows you the system behind them.',
        '<span class="fr">« Je t’invite »</span> means “it’s on me” — one of the nicest sentences in the language to hear.'
      ]
    },

    native_touches: {
      title: 'Dinner at Max’s',
      setting: 'Max is cooking; you’ve just arrived.',
      lines: [
        { who: 'A', name: 'Max', fr: 'Tiens, goûte ça. C’est un fromage de chez moi.', en: 'Here, try this. It’s a cheese from where I’m from.' },
        { who: 'B', name: 'Toi', fr: 'Oh là là, c’est trop bon ! C’est quoi ?', en: 'Oh wow, this is so good! What is it?' },
        { who: 'A', name: 'Max', fr: 'Du comté. Mon oncle est fromager. Enfin… il est à la retraite, mais bon.', en: 'Comté. My uncle is a cheesemaker. Well… he’s retired, but still.' },
        { who: 'B', name: 'Toi', fr: 'C’est un vrai métier, ça ! Nous en Angleterre, on a le cheddar, quoi.', en: 'Now that’s a proper job! Us in England — we’ve got cheddar, you know.' },
        { who: 'A', name: 'Max', fr: 'Le cheddar, c’est pas mal aussi, hein. Allez, on passe à table ?', en: 'Cheddar’s not bad either, mind. Right, shall we sit down to eat?' },
        { who: 'B', name: 'Toi', fr: 'Carrément, je meurs de faim. Je peux aider ?', en: 'Definitely — I’m starving. Can I help?' },
        { who: 'A', name: 'Max', fr: 'Non non, laisse, c’est bon. Installe-toi.', en: 'No no, leave it, it’s fine. Make yourself comfortable.' },
        { who: 'B', name: 'Toi', fr: 'Bon, ben merci ! C’est vraiment sympa.', en: 'Well then — thank you! This is really lovely.' }
      ],
      notes: [
        '<span class="fr">C’est</span> everywhere: <span class="fr">c’est trop bon, c’est quoi ?, c’est pas mal, c’est bon</span> (= it’s fine / no need). It’s the most useful two letters + apostrophe in French.',
        '“We” is <span class="fr">on</span> throughout — <span class="fr">on a le cheddar, on passe à table</span>. Keep <span class="fr">nous</span> for emphasis at the front: <span class="fr">« nous, on a le cheddar »</span>.',
        'The softeners are doing quiet work: <span class="fr">quoi</span> and <span class="fr">hein</span> at the end, <span class="fr">bon ben</span> at the start. None are “needed” — all make it sound real.'
      ]
    },

    politeness: {
      title: 'A favour from the neighbour',
      setting: 'You knock on your neighbour’s door — vous territory.',
      lines: [
        { who: 'B', name: 'Toi', fr: 'Excusez-moi de vous déranger… je pourrais vous demander un petit service ?', en: 'Sorry to disturb you… could I ask you a small favour?' },
        { who: 'A', name: 'Voisine', fr: 'Bien sûr ! Dites-moi.', en: 'Of course! Go ahead.' },
        { who: 'B', name: 'Toi', fr: 'Je pars ce week-end — vous pourriez arroser mes plantes ?', en: 'I’m away this weekend — could you water my plants?' },
        { who: 'A', name: 'Voisine', fr: 'Pas de problème. Il faudrait juste me laisser vos clés.', en: 'No problem. You’d just need to leave me your keys.' },
        { who: 'B', name: 'Toi', fr: 'Bien sûr. Je vous les dépose vendredi soir, ça vous va ?', en: 'Of course. I’ll drop them round Friday evening — does that work for you?' },
        { who: 'A', name: 'Voisine', fr: 'Très bien. Et il faut que vous me montriez la plante fragile !', en: 'Perfect. And you must show me which plant is the delicate one!' },
        { who: 'B', name: 'Toi', fr: 'Avec plaisir. Merci beaucoup, c’est vraiment gentil.', en: 'Gladly. Thank you so much — that’s really kind.' },
        { who: 'A', name: 'Voisine', fr: 'Je vous en prie. Bon week-end !', en: 'You’re very welcome. Have a lovely weekend!' }
      ],
      notes: [
        'The conditional carries the whole exchange: <span class="fr">je pourrais…</span>, <span class="fr">vous pourriez…</span>, <span class="fr">il faudrait…</span> — “could / would” instead of “can / must”.',
        '<span class="fr">« Excusez-moi de vous déranger »</span> is the standard polite opener for any unsolicited ask. Learn it whole.',
        'Note the register consistency: <span class="fr">vous</span> all the way through, full forms, no dropped <span class="fr">ne</span>… this is the other gear, and it’s worth having.'
      ]
    }
  }
};
