const HAUNTEDHOUSEMOOD_CUTE_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "bibop: j'❤️ les chats",
      "coolio: 😻",
      "kk234: cette dame est un amour 👵 🐈 💖"
    ]
  }
]

const HAUNTEDHOUSEMOOD_OMG_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "thelibrarian: Les maisons ambulantes sont tellement GENIALES !!",
      "kk234: omg ce gars est tellement mal luné..."
    ]
  }
]

const HAUNTEDHOUSEMOOD_SAD_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "coolio: NOOOooonnn 😿",
    ]
  }
]

const HAUNTEDHOUSEMOOD_ANGRY_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: ce mec n'a pas de ❤️",
      "freeSprite: Mort au capitalisme !!☠️🤑☠️",
      "hes: #feedGregToTheCats 👿",
      "coolio: greg tout moisi 🤢",
      "freeSprite: 🤬 je deteste se mec !"
    ]
  }
]

const HAUNTEDHOUSE_EPILOGUES_FRENCH = [
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
    characterImg: CATGRANDMA_SAD,
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
    characterImg: CATGRANDMA_ANGRY,
    popularity: -1,
    suspicion: 2,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
  },
];

const hauntedHouseDialogue1_french = [
  {
    id: 1,
    text: "Salut les chéris ! Aujourd'hui on a reçu un appel de Greg, de l'agence immobilière Belles Maisons !",
    speakerName: "Moi",
    characterImg: MC_EXCITED,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 2
  },
  {
    id: 2,
    text: "Greg a une maison plutôt spéciale en vente, mais l'ancienne propriétaire n'apprécie pas les visiteurs...",
    speakerName: "Moi",
    characterImg: MC_EXCITED,
    next: 3
  },
  {
    id: 3,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MC_EXCITED,
    options: [
      {
        text: "Allons voir ce fantôme !",
        nextText: 4,
      },
      {
        text: "Une maison vraiment très spéciale, car elle a des jambes pour se promener !",
        popularity: 1,
        chatMoods: [GENERALMOOD_OMG_FRENCH],
        nextText: 4,
      },
      {
        text: "Qu'est-ce qui rend cette maison spéciale ? Je vous emmène voir !",
        popularity: 1,
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Hello, Greg ! Alors, nous sommes dans la célèbre \"maison-aux-quatre-jambes\".",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    next: 5,
  },
  {
    id: 5,
    text: "Oui, et ça serait une super affaire, si ce n'est le fantôme qui gémit sans arrêt à l'intérieur.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 6,
  },
  {
    id: 6,
    text: "J'ai une liste d'attente de familles qui veulent s'installer dans la seule maison ambulante qui reste dans la région.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [GENERALMOOD_OMG_FRENCH, HAUNTEDHOUSEMOOD_OMG_FRENCH],
    next: 600,
  },
  {
    id: 600,
    text: "Mais cette vieille peau s'obstine à saboter toutes mes visites !",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: 7,
  },
  {
    id: 7,
    text: "Je vous en prie, débarassez-moi d'elle...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 8,
  },
  {
    id: 8,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Tu nous la présentes ?",
        nextText: START_PUZZLE,
      },
      {
        text: "Une vieille sorcière dans une maison magique ? J'adore !",
        popularity: 1,
        suspicion: 1,
        nextText: START_PUZZLE,
      },
      {
        text: "Oh, tu ne devrais pas dire du mal des morts.",
        nextText: START_PUZZLE,
      },
    ],
  },
];

const hauntedHouseDialogue2_french = [
  {
    id: 1,
    text: "Alors, qu'est-ce qu'elle veut ?",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2,
  },
  {
    id: 2,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Elle veut que tu trouves des proprios aimants pour la maison.",
        nextText: 3,
      },
      {
        text: "(Mentir) Elle veut que tu trouves une famille aimante pour ses chats.",
        popularity: 1,
        suspicion: 1,
        chatMoods: [HAUNTEDHOUSEMOOD_CUTE_FRENCH, HAUNTEDHOUSEMOOD_CUTE_FRENCH],
        nextText: 14,
      },
      {
        text: "(Mentir) Elle veut qu'une famille aimante achète la maison et adopte les chats.",
        popularity: 2,
        suspicion: 1,
        chatMoods: [GENERALMOOD_CUTE_FRENCH, HAUNTEDHOUSEMOOD_CUTE_FRENCH],
        nextText: 28,
      },
    ],
  },

  // House quest
  {
    id: 3,
    text: "Des propriétaires aimants ?! Je suis un agent immobilier, pas un bon samaritain.",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: 4
  },
  {
    id: 4,
    text: "Mais c'est bien toi qui choisis à qui tu vends la maison, non ?",
    speakerName: "Moi",
    characterImg: MC_EXCITED,
    next: 5,
  },
  {
    id: 5,
    text: "La meilleure offre l'emportera... Je me fiche totalement s'ils démolissent tout avant la fin du mois !",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_ANGRY_FRENCH],
    next: 6,
  },
  {
    id: 6,
    text: "Même, ça m'arrangerait, étant donné qu'ils auraient besoin de racheter une autre maison...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 7,
  },
  {
    id: 7,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Tu peux trouver quelqu'un qui fasse une bonne offre ET qui prenne soin de la maison ?",
        setEpilogue: 1,
        nextText: 8,
      },
      {
        text: "Allez, elle est morte, tu pourrais faire un effort pour l'aider à reposer en paix !",
        setEpilogue: 2,
        nextText: 12,
      },
      {
        text: "Mauvais pour le business, ça, détruire la dernière maison ambulante du coin...",
        setEpilogue: 1,
        nextText: 8,
      },
    ],
  },
  // House Quest success
  {
    id: 8,
    text: "Bon, oui, vous avez raison. Mais au moins vous pourriez la convaincre d'arrêter de gémir pour que je puisse faire des visites ?",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 9,
  },
  {
    id: 9,
    text: "C'est pas comme ça que ça fonctionne, en fait. Les fantômes n'ont pas les capacités cognitives pour qu'on négocie avec...",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    next: 10,
  },
  {
    id: 10,
    text: "Mais si tu promets de satisfaire sa demande, ça devrait suffire pour qu'elle passe dans l'au-delà.",
    speakerName: "Moi",
    characterImg: GREG_DISGUSTED,
    next: 1000,
  },
  {
    id: 1000,
    text: "Faut que tu sois sincère, par contre. Les fantômes sentent ce genre de choses.",
    speakerName: "Moi",
    characterImg: GREG_DISGUSTED,
    next: 11,
  },
  {
    id: 11,
    text: "*soupire* Madame, je promets que je vendrais cette maison à des personnes qui l'apprécieront et en prendront soin.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: FINISHEPISODE
  },
  // House Quest failure
  {
    id: 12,
    text: "Je savais que ce serait une perte de temps...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 13
  },
  {
    id: 13,
    text: "Les interprètes comme vous devriez vous contenter d'aider les familles en deuil. Laissez les choses sérieuses aux exorcistes !",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 1300,
  },
  {
    id: 1300,
    text: "Au moins ils savent qu'on ne mélange pas le business et les émotions, eux...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: FINISHEPISODE,
  },

  // Cat Quest
  {
    id: 14,
    text: "Une famille pour ses chats ? Hors de question que je m'approche de ces créatures démoniaques !",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: 15,
  },
  {
    id: 15,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_ANGRY,
    options: [
      {
        text: "Mais, les chats...  Comment est-ce que tu peux ne pas aimer les chats ?",
        popularity: 1,
        setEpilogue: 2,
        nextText: 16,
      },
      {
        text: "Sérieusement ? T'es lâche à ce point ?",
        setEpilogue: 2,
        nextText: 16,
      },
      {
        text: "C'est une demande plutôt simple, vu l'énorme commission que tu recevras...",
        setEpilogue: 4,
        nextText: 20,
      },
    ],
  },
  // Cat Quest failure
  {
    id: 16,
    text: "Je ne comprendrais jamais à quel point les gens peuvent être aveugles quand ils trouvent quelque chose mignon !",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: 1600,
  },
  {
    id: 1600,
    text: "Les chats laissent des poils partout, ils sont arrogants et lunatiques, et découpent les gens en lambeaux pour le plaisir.",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: 17,
  },
  {
    id: 17,
    text: "C'est...",
    speakerName: "Moi",
    characterImg: GREG_ANGRY,
    next: 18,
  },
  {
    id: 18,
    text: "La SPA doit passer les récupérer demain, fin de la discussion.",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [HAUNTEDHOUSEMOOD_SAD_FRENCH, GENERALMOOD_SAD_FRENCH, HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: 19,
  },
  {
    id: 19,
    text: "Je suppose que je devrais faire venir l'exorciste en même temps...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 1900,
  },
  {
    id: 1900,
    text: "Puisqu'il n'y a pas moyen de se débarasser de cette sorcière de manière politiquement correcte...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [GENERALMOOD_OMG_FRENCH],
    next: FINISHEPISODE,
  },
  // Cat Quest success
  {
    id: 20,
    text: "Humph !",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 21,
  },
  {
    id: 21,
    text: "Vous n'avez pas tort.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 22,
  },
  {
    id: 22,
    text: "Des idées ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    next: 23,
  },
  {
    id: 23,
    text: "J'ai bien un cousin qui pourrait être intéressé...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2300,
  },
  {
    id: 2300,
    text: "Les trois soeurs sur lesquelles il avait jeté son dévolu ont été adopté avant qu'il ne se décide. Il n'arrête pas de s'en plaindre.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2301,
  },
  {
    id: 2301,
    text: "Il dit qu'avoir un chaton c'est trop de travail, donc ça ne devrait pas le déranger que ces chats soient plutôt vieux.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [HAUNTEDHOUSEMOOD_CUTE_FRENCH],
    next: 24,
  },
  {
    id: 24,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Fantastique ! On arrivera à faire de toi un amoureux des chats !",
        nextText: 25,
      },
      {
        text: "Allons lui dire que ses boules de poils adorées auront une chouette famille, alors !",
        popularity: 1,
        chatMoods: [GENERALMOOD_CUTE_FRENCH],
        nextText: 25,
      },
      {
        text: "Tout est arrangé, alors.",
        nextText: 25,
      },
    ],
  },
  {
    id: 25,
    text: "C'est ça...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 26,
  },
  {
    id: 26,
    text: "...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 27,
  },
  {
    id: 27,
    text: "Qu'est-ce qu'elle fait encore là ?!",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: FINISHEPISODE,
  },

  // Full Quest
  {
    id: 28,
    text: "Vous n'êtes pas sérieuse ?",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: 29,
  },
  {
    id: 29,
    text: "Oh, je ne plaisante jamais quand il s'agit de fantômes.",
    speakerName: "Moi",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 2900,
  },
  {
    id: 2900,
    text: "Tu voulais savoir quoi faire pour qu'elle passe à autre chose, et c'est ce qu'elle veut.",
    speakerName: "Moi",
    characterImg: GREG_ANGRY,
    next: 2901,
  },
  {
    id: 2901,
    text: "Trouve des acheteurs qui proendront soit de la maison ET des chats.",
    speakerName: "Moi",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_CUTE_FRENCH],
    next: 30,
  },
  {
    id: 30,
    text: "C'est complètement ridicule ! Vous êtes probablement une charlatan de toute façon ! Est-ce que votre machine fonctionne, déjà ?!",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_ANGRY_FRENCH],
    next: 31,
  },
  {
    id: 31,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_ANGRY,
    options: [
      {
        text: "Je suis sûre que tu as vérifié mes références avec de prendre le rendez-vous.",
        nextText: 32,
      },
      {
        text: "Je suppose que tu ne vas pas t'en occuper, alors ?",
        setEpilogue: 2,
        nextText: 42,
      },
      {
        text: "He, ne tire pas sur la messagère parce que le message n'est pas à ton goût !",
        nextText: 32,
      },
    ],
  },
  {
    id: 32,
    text: "Oui, bon, peut-être que vous savez de quoi vous parlez, mais ce fantôme est un désastre.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 3200,
  },
  {
    id: 3200,
    text: "Je pensais qu'elle voudrait juste une visite d'une vieille amie ou quelque chose comme ça.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: 33,
  },
  {
    id: 33,
    text: "En quoi est-ce que ça aurait été plus facile ?",
    speakerName: "Moi",
    characterImg: GREG_DISGUSTED,
    next: 34,
  },
  {
    id: 34,
    text: "J'ai supposé que vous vous débrouilleriez avec, pas que ça me retomberait dessus.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 35,
  },
  {
    id: 35,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Quelqu'un pourrait sûrement faire de la maison un super musée ambulant hanté...",
        setEpilogue: 2,
        nextText: 36,
      },
      {
        text: "Vendre cette maison, c'est ton boulot, pas le mien...",
        popularity: -1,
        setEpilogue: 1,
        nextText: 39,
      },
      {
        text: "Je me ferais un plaisir de trouver des acheteurs et empocher la commission...",
        setEpilogue: 1,
        popularity: -1,
        suspicion: 1,
        chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
        nextText: 39,
      },
    ],
  },
  // Full Quest museum failure
  {
    id: 36,
    text: "Ce n'est pas une mauvaise idée...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 37,
  },
  {
    id: 37,
    text: "Hein, quoi ? C'était du sacarsme !",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    next: 38,
  },
  {
    id: 38,
    text: "Merci d'être venue, je dois aller parler à ma chef, prennez donc un chat ou deux en partant...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY_FRENCH],
    next: FINISHEPISODE,
  },
  // Full Quest success
  {
    id: 39,
    text: "J'imagine que je pourrais voir la chose comme une vente particulièrement délicate. L'affaire était déjà inhabituelle, après tout...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 40,
  },
  {
    id: 40,
    text: "Tu vas t'en occuper alors ?",
    speakerName: "Moi",
    characterImg: GREG_GRUMPY,
    next: 41,
  },
  {
    id: 41,
    text: "Oui, oui, ne serait-ce que pour être débarassé de ce bruit abominable et des poils blancs sur mon costume.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: FINISHEPISODE,
  },
  // Full Quest abandonned failure
  {
    id: 42,
    text: "Certainement pas.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 43,
  },
  {
    id: 43,
    text: "Merci pour votre... contribution.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 44,
  },
  {
    id: 44,
    text: "Si ce fantôme refuse d'être raisonnable, je n'ai plus que le traiter comme le nuisible qu'il est, et le faire exorciser.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [GENERALMOOD_OMG_FRENCH],
    next: FINISHEPISODE
  },
]
