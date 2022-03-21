const STARSMOOD_CUTE_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: Ce mome est un trésor ❤️",
      "coolio: 🧒🏽 bébé chuchotteur de fantome 😍",
      "kk234: où est-ce que je peux avoir le même ? 😍👼🏼",
      "bibop: go kid!!!",
      "noclue: Ange devrait remplacer Joss, il est trop meugnoooon ❤️",
      "cotcot: ❤️ Ange ❤️",
    ]
  }
]

const STARSMOOD_OMG_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "thelibrarian: J'y crois pas, une gorgone !! 😲",
      "kk234: 🤩 cet endroit est trop ouf <3<3",
      "caty: OMG GORGONE 🐍🐍😍",
    ]
  }
]

const STARSMOOD_SAD_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: quelle fin douce-amère...",
      "coolio: 😿",
    ]
  }
]

const STARSMOOD_ANGRY_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: 😾 Pas Cool !!",
      "thelibrarian: Allez quoi ! Soit gentille avec le petit !",
    ]
  }
]

const STARS_EPILOGUES_FRENCH = [
  {
    id: 1,
    text: "Une autre réussite pour Ghost Whisperer !",
    characterImg: MC_EXCITED,
    popularity: 2,
    suspicion: -1,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
  },
  {
    id: 2,
    text: "Désolée mes chéris, c'est pas mon meilleur jour !",
    characterImg: GORGON_LONELY,
    popularity: -2,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
  },
  {
    id: 3,
    text: "Quelle heureuse coïncidence !",
    characterImg: MC_EXCITED,
    popularity: -1,
    suspicion: 1,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
  },
  {
    id: 4,
    text: "Oupsie ! J'avais peut-être mal entendu la demande de notre fantôme ?",
    characterImg: GORGON_ANGRY,
    popularity: -1,
    suspicion: 2,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
  },
]

const starsDialogue1_french = [
  {
    id: 1,
    text: "Salut les chéris ! Aujourd'hui nous avons reçu l'appel de l'Astronome en Chef de l'Observatoire du Sommet !",
    speakerName: "Moi",
    characterImg: MC_EXCITED,
    chatMoods: [GENERALMOOD_OMG_FRENCH],
    next: 2,
  },
  {
    id: 2,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MC_EXCITED,
    options: [
      {
        text: "Un endroit sacrément classe! Est-ce qu'on va rencontrer le fantôme d'un scientique célèbre ?!",
        popularity: 1,
        nextText: 3,
      },
      {
        text: "J'ai pris rendez-vous de nuit, on va en prendre plein les yeux !",
        popularity: 1,
        nextText: 3,
      },
      {
        text: "Un Ghost Whisperer sous les étoiles... Bande de canards-veinards !",
        popularity: -1,
        suspicion: 1,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Coucou !",
    speakerName: "??",
    characterImg: ANGEL_HAPPY,
    next: 4,
  },
  {
    id: 4,
    text: "Bonjour...",
    speakerName: "Moi",
    characterImg: ANGEL_HAPPY,
    next: 5,
  },
  {
    id: 5,
    text: "Tu n'es pas un peu jeune pour être astronome ?",
    speakerName: "Moi",
    characterImg: ANGEL_HAPPY,
    next: 6,
  },
  {
    id: 6,
    text: "T'es drôle, toi ! Bien sûr que je ne suis pas l'Astronome !",
    speakerName: "??",
    characterImg: ANGEL_LAUGHING,
    chatMoods: [STARSMOOD_CUTE_FRENCH],
    next: 7,
  },
  {
    id: 7,
    text: "Moi c'est Ange ! Tatie Del n'aime pas trop les gens, alors c'est moi qui te fais visiter !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 8,
  },
  {
    id: 8,
    text: "Oh, ravie de te rencontrer, Ange. Moi c'est Joss, de Ghost Whisperer.",
    speakerName: "Moi",
    characterImg: ANGEL_HAPPY,
    next: 9,
  },
  {
    id: 9,
    text: "Oui, je sais !",
    speakerName: "Ange",
    characterImg: ANGEL_LAUGHING,
    next: 10,
  },
  {
    id: 10,
    text: "Est-ce que tu peux me montrer où est votre fantôme ?",
    speakerName: "Moi",
    characterImg: ANGEL_HAPPY,
    next: 11,
  },
  {
    id: 11,
    text: "Elle est dans le coffre là-bas.",
    speakerName: "Angle",
    characterImg: ANGEL_HAPPY,
    chatMoods: [STARSMOOD_OMG_FRENCH, STARSMOOD_OMG_FRENCH],
    next: 12,
  },
  {
    id: 12,
    text: "Elle n'a pas l'air très heureuse... Elle refuse de laisser Tatie Del prendre les livres qui sont dans le coffre.",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 13,
  },
  {
    id: 13,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: ANGEL_SAD,
    options: [
      {
        text: "Merci ! Tu peux y aller, la suite n'est pas pour les enfants...",
        popularity: -1,
        suspicion: 1,
        chatMoods: [STARSMOOD_ANGRY_FRENCH],
        nextText: 14,
      },
      {
        text: "Que dirais-tu de faire équipe pour lui redonner le sourire ?",
        popularity: 2,
        chatMoods: [STARSMOOD_CUTE_FRENCH],
        nextText: 17,
      },
      {
        text: "Je vais faire de mon mieux pour l'aider à passer dans l'au-delà, promis !",
        popularity: 1,
        nextText: 17,
      },
    ],
  },
  {
    id: 14,
    text: "Je ne peux pas te laisser seule dans l'observatoire ! J'ai une mission, moi !",
    speakerName: "Ange",
    characterImg: ANGEL_ANGRY,
    chatMoods: [GENERALMOOD_CUTE_FRENCH],
    next: 15,
  },
  {
    id: 15,
    text: "Et puis, je regarde ton émission tout le temps, je sais que ça ne fait pas peur !",
    speakerName: "Ange",
    characterImg: ANGEL_ANGRY,
    next: 16,
  },
  {
    id: 16,
    text: "Très bien. Si tu es un fan, tu peux rester...",
    speakerName: "Moi",
    characterImg: ANGEL_DETERMINED,
    next: 17,
  },
  {
    id: 17,
    text: "Je peux aider ! Je l'ai regardée longtemps !",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    chatMoods: [STARSMOOD_CUTE_FRENCH],
    next: 18,
  },
  {
    id: 18,
    text: "Enfin, juste les bouts qui dépassent par l'ouverture...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 19,
  },
  {
    id: 19,
    text: "Elle ne sort jamais complètement.",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 20,
  },
  {
    id: 20,
    text: "On y va, alors ?",
    speakerName: "Moi",
    characterImg: ANGEL_DETERMINED,
    next: START_PUZZLE
  },
];

const starsDialogue2_french = [
  {
    id: 1,
    text: "Qu'est-ce qu'elle a dit ?! Qu'est-ce qu'elle a dit ?!",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 2,
  },
  {
    id: 2,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: ANGEL_HAPPY,
    options: [
      {
        text: "Elle veut un ami.",
        setEpilogue: 1,
        chatMoods: [GENERALMOOD_CUTE_FRENCH],
        nextText: 3,
      },
      {
        text: "(Mentir) Elle veut pouvoir rencontrer des gens sans les transformer en pierre.",
        suspicion: 1,
        nextText: 8,
      },
      {
        text: "(Mentir) Elle veut être ressuscitée.",
        popularity: 1,
        suspicion: 1,
        chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
        nextText: 26,
      },
    ],
  },

  // Friend Quest
  {
    id: 3,
    text: "Je peux être son ami !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    chatMoods: [STARSMOOD_CUTE_FRENCH],
    next: 4,
  },
  {
    id: 4,
    text: "Hello Madame Gorgon, moi c'est Ange. On peut être amis si vous voulez !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    chatMoods: [GENERALMOOD_CUTE_FRENCH, GENERALMOOD_CUTE_FRENCH],
    next: 5,
  },
  {
    id: 5,
    text: "J'ai des livres que je peux vous lire, et peut-être que Tatie Del pourrait nous emmener faire un tour.",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 6,
  },
  {
    id: 6,
    text: "On pourrait aller au zoo, pour que vos serpents trouvent des copains avec qui discuter !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 7,
  },
  {
    id: 7,
    text: "Oh, elle a disparu...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    chatMoods: [STARSMOOD_SAD_FRENCH],
    next: FINISHEPISODE
  },

  // Gorgon Quest
  {
    id: 8,
    text: "Oh. Est-ce que c'est à cause des serpents qu'elle a à la place des cheveux ?",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 9,
  },
  {
    id: 9,
    text: "Tatie dit que les serpents montrent que c'est une Gorgone légendaire. Les Gorgones transforment les gens en pierre ?",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 10,
  },
  {
    id: 10,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: ANGEL_DETERMINED,
    options: [
      {
        text: "Oui, si tu rencontres son regard ou celui des serpents, tu seras pétrifié.",
        setEpilogue: 3,
        nextText: 11,
      },
      {
        text: "A peu près, oui. Mais pas les fantômes, et elle est plus fantôme que Gorgone maintenant.",
        setEpilogue: 2,
        nextText: 23,
      },
      {
        text: "Malheureusement, oui. C'est sûrement pour ça qu'elle reste dans le coffre.",
        setEpilogue: 3,
        nextText: 11,
      },
    ],
  },
  // Gorgon Quest lucky
  {
    id: 11,
    text: "Ca fait un peu peur.",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 12
  },
  {
    id: 12,
    text: "Est-ce qu'on peut faire quelque chose pour cette histoire de pierre ?",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 13,
  },
  {
    id: 13,
    text: "J'ai bien peur que non.",
    speakerName: "Moi",
    characterImg: ANGEL_DETERMINED,
    next: 14,
  },
  {
    id: 14,
    text: "Elle va être coincée là-dedans pendant longtemps, alors...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 15,
  },
  {
    id: 15,
    text: "Et Tatie Del dit qu'il n'y a plus aucune Gorgone vivante, elle doit se sentir super seule...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 16,
  },
  {
    id: 16,
    text: "Toute sa famille et ses amis sont morts...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 17,
  },
  {
    id: 17,
    text: "Mais elle t'a toi, pour lui tenir compagnie...",
    speakerName: "Moi",
    characterImg: ANGEL_SAD,
    next: 18,
  },
  {
    id: 18,
    text: "Oh oui! Je vais être son ami ! Elle ne peut pas sortir du coffre mais on peut quand même faire plein de trucs ensemble !",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    chatMoods: [STARSMOOD_CUTE_FRENCH, GENERALMOOD_CUTE_FRENCH],
    next: 19,
  },
  {
    id: 19,
    text: "On peut lire des livres. Et écouter la radio et se moquer des pubs ridicules.",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 20,
  },
  {
    id: 20,
    text: "On peut jouer à 'je vois' and je peux lui raconter tout ce qu'il s'est passé depuis qu'elle a été enfermée dans son coffre.",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 21,
  },
  {
    id: 21,
    text: "Comme la télé ! Et les droits de l'Homme ! Et quand on a marché sur la Lune !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    next: 22,
  },
  {
    id: 22,
    text: "Et le... Oh non ! Où est-ce qu'elle est passée ?",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    chatMoods: [STARSMOOD_SAD_FRENCH],
    next: FINISHEPISODE
  },
  // Gorgon Quest failure
  {
    id: 23,
    text: "Pourquoi c'est ça qu'elle veut alors ?",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 24,
  },
  {
    id: 24,
    text: "Est-ce que les fantômes peuvent être coincés à attendre quelque chose qu'ils ont déjà ? Ca serait nul !",
    speakerName: "Ange",
    characterImg: ANGEL_ANGRY,
    next: 25,
  },
  {
    id: 25,
    text: "Euh...",
    speakerName: "Moi",
    characterImg: ANGEL_ANGRY,
    next: FINISHEPISODE
  },

  // Resurect Quest
  {
    id: 26,
    text: "Qu'est ce que ça veut dire ?",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 27,
  },
  {
    id: 27,
    text: "Ca veut dire qu'elle veut être vivante à nouveau.",
    speakerName: "Moi",
    characterImg: ANGEL_DETERMINED,
    next: 28,
  },
  {
    id: 28,
    text: "Mais c'est impossible, non ?",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 29,
  },
  {
    id: 29,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: ANGEL_SAD,
    options: [
      {
        text: "Qui sait...",
        popularity: 1,
        setEpilogue: 2,
        nextText: 30,
      },
      {
        text: "Bah, personne n'a encore trouvé de moyen pour...",
        popularity: 1,
        setEpilogue: 3,
        nextText: 34,
      },
      {
        text: "Elle est ton fantôme maintenant ! Est-ce que tu vas abandonner aussi facilement ?",
        popularity: -1,
        suspicion: 1,
        setEpilogue: 3,
        chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
        nextText: 34,
      },
    ],
  },
  // Resurect Quest failure
  {
    id: 30,
    text: "Je voudrais pouvoir l'aider...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    chatMoods: [GENERALMOOD_CUTE_FRENCH],
    next: 31
  },
  {
    id: 31,
    text: "Si elle est encore là aussi longtemps après sa mort, son essence devait être super puissante !",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 32,
  },
  {
    id: 32,
    text: "Elle était sûrement tellement cool quand elle était vivante...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 33,
  },
  {
    id: 33,
    text: "*soupir*",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: FINISHEPISODE
  },
  // Resurect Quest mission
  {
    id: 34,
    text: "Je vais trouver un moyen de la rescu-citer !",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    chatMoods: [STARSMOOD_CUTE_FRENCH],
    next: 35,
  },
  {
    id: 35,
    text: "Je vais devenir le meilleur scientique de la Terre et trouver un moment de re-rendre les fantômes vivants !",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 36,
  },
  {
    id: 36,
    text: "Et ensuite, avec la Gorgone, on parcourra le monde et on aidera tous les autres fantômes !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    chatMoods: [STARSMOOD_CUTE_FRENCH],
    next: 37,
  },
  {
    id: 37,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: ANGEL_HAPPY,
    options: [
      {
        text: "Ca m'a l'air d'être un plan d'enfer !",
        nextText: 39,
      },
      {
        text: "Tu pourrais même avoir ton émission où tu aides les fantômes...",
        popularity: 2,
        nextText: 38,
      },
      {
        text: "C'est bien de rêver...",
        popularity: -1,
        chatMoods: [STARSMOOD_ANGRY_FRENCH],
        nextText: 39,
      },
    ],
  },
  {
    id: 38,
    text: "Ca serait trop cool ! Tu pourrais être notre invitée !",
    speakerName: "Ange",
    characterImg: ANGEL_HAPPY,
    chatMoods: [STARSMOOD_CUTE_FRENCH],
    next: 39,
  },
  {
    id: 39,
    text: "Je vais devoir travailler dur, mais c'est fait pour ça les amis, pour s'entraider !",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 40,
  },
  {
    id: 40,
    text: "Tu as bien raison !",
    speakerName: "Moi",
    characterImg: ANGEL_DETERMINED,
    next: 41,
  },
  {
    id: 41,
    text: "...",
    speakerName: "Ange",
    characterImg: ANGEL_DETERMINED,
    next: 42,
  },
  {
    id: 42,
    text: "Joss ?",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    next: 43,
  },
  {
    id: 43,
    text: "Je crois que la Gorgone n'a pas aimé mon plan... Elle est partie...",
    speakerName: "Ange",
    characterImg: ANGEL_SAD,
    chatMoods: [STARSMOOD_SAD_FRENCH],
    next: FINISHEPISODE
  },
]
