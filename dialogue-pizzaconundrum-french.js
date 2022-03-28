const PIZZAMOOD_CUTE_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "kk234: couple trop mignon 💞",
      "darkling: un couple comme je les aime 💘 ❤️🧡💛💚💙💜",
      "bibop: ❤️love❤️",
    ]
  }
]

const PIZZAMOOD_OMG_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "coolio: 🍍🍕 🤮",
      "77gus77:  les ingrédients de pizza c'est important ! 🧐",
      "bibop: 🍍 ou pas 🍍, là est la ❓",
    ]
  }
]

const PIZZAMOOD_SAD_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: #GiveMAriaAHug ❤️",
      "bibop: triste histoire... 😿",
      "thelibrarian: Pas de pizza pour les braves 🙁",
      "hes: Pauvre Maria 🌧️🙁☁️",
      "coolio: jusqu'à ce que la mort nous sépare... et après 😢",
    ]
  }
]

const PIZZAMOOD_ANGRY_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: C'est dur 🙁",
      "caty: 😾 Pas Cool !!",
      "77gus77: #sanscoeur 🖤",
      "noclue: J'peux pas croire qu'elle ait dit ça... 😡",
    ]
  }
]

const PIZZA_EPILOGUES_FRENCH = [
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
    characterImg: AMAL_SAD,
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
    characterImg: AMAL_ANGRY,
    popularity: -1,
    suspicion: 2,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
  },
]

const pizzaDialogue1_french = [
  {
    id: 1,
    text: "Salut les chéris, aujourd'hui nous allons aider Maria et saon partenaire récemment décédé Amal.",
    speakerName: "Moi",
    characterImg: MC_SAD,
    next: 2,
  },
  {
    id: 2,
    text: "C'est toujours un crève-coeur quand une personne que vous aimez n'arrive pas à passer dans l'au-delà...",
    speakerName: "Moi",
    characterImg: MC_SAD,
    chatMoods: [GENERALMOOD_SAD_FRENCH],
    next: 3,
  },
  {
    id: 3,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MC_SAD,
    options: [
      {
        text: "Ghost Whisperer clôt ces histoires inachevées et répare vos coeurs brisés !",
        popularity: 1,
        suspicion: 1,
        chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
        nextText: 4,
      },
      {
        text: "Je ne pourrais pas supporter ça... Enfin, si j'avais un ou une partenaire...",
        nextText: 4,
      },
      {
        text: "J'espère que nous pourrons aider Maria et Amal à tous deux trouver la paix.",
        popularity: 1,
        chatMoods: [PIZZAMOOD_SAD_FRENCH],
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Merci d'être venue.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 5,
  },
  {
    id: 5,
    text: "Pas de souci, c'est le principe. Pourrais-tu m'en dire un peu plus sur la situation avant que j'aille rencontrer Amal ?",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 6,
  },
  {
    id: 6,
    text: "Oui. Alors, Amal est... morte, il y a deux semaines. Et iel... Je ne sais pas pourquoi iel est encore là.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 7,
  },
  {
    id: 7,
    text: "Je, je ne peux pas supporter qu'iel soit parti mais pas vraiment. C'est pour ça que je t'ai appelée. Je t'en prie, aide nous.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [PIZZAMOOD_SAD_FRENCH, PIZZAMOOD_ANGRY_FRENCH],
    next: 8,
  },
  {
    id: 8,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MARIA_CRYING,
    options: [
      {
        text: "Je vais faire de mon mieux.",
        nextText: START_PUZZLE,
      },
      {
        text: "Ma chérie, c'est horrible que tu aies à vivre ça ! Mais je suis là pour t'aider maintenant.",
        popularity: 1,
        nextText: START_PUZZLE,
      },
      {
        text: "J'adore les défis !",
        popularity: -1,
        chatMoods: [GENERALMOOD_ANGRY_FRENCH, GENERALMOOD_ANGRY_FRENCH],
        nextText: START_PUZZLE,
      },
    ],
  },
]

const pizzaDialogue2_french = [
  {
    id: 1,
    text: "Est-ce qu'iel t'a dit que qu'iel veut ?",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 2,
  },
  {
    id: 2,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    options: [
      {
        text: "Iel veut juste une dernière pizza.",
        chatMoods: [GENERALMOOD_SAD_FRENCH],
        nextText: 3,
      },
      {
        text: "(Mentir) Iel veut juste une dernière pizza. Une pizza à l'ananas.",
        popularity: 1,
        suspicion: 1,
        chatMoods: [PIZZAMOOD_OMG_FRENCH],
        nextText: 15,
      },
      {
        text: "(Mentir) Iel veut que tu promettes de ne plus jamais manger de pizza.",
        popularity: 2,
        suspicion: 1,
        chatMoods: [GENERALMOOD_OMG_FRENCH],
        nextText: 35,
      },
    ],
  },

  // Simple Pizza Quest
  {
    id: 3,
    text: "Une pizza ?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 4,
  },
  {
    id: 4,
    text: "La chose inachevée qui lae retient sur Terre, c'est une pizza ??",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 5,
  },
  {
    id: 5,
    text: "J'y crois pas ! Iel ne pourra même pas la manger, iel est... incorporel, et tout !",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 6,
  },
  {
    id: 6,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    options: [
      {
        text: "Même les fantômes peuvent vouloir des choses irréalistes.",
        setEpilogue: 2,
        nextText: 11,
      },
      {
        text: "Peut-être que cette pizza a une signification particulière pour iel ?",
        setEpilogue: 1,
        nextText: 7,
      },
      {
        text: "Iel sera probablement satisfaite qu'on lui montre simplement la pizza.",
        setEpilogue: 1,
        nextText: 7,
      },
    ],
  },
  // Simple Pizza Quest success
  {
    id: 7,
    text: "Tu as raison. C'était notre rituel, en quelque sorte, notre soirée pizza du vendredi, pour se détendre à la fin de la semaine.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [PIZZAMOOD_CUTE_FRENCH],
    next: 8,
  },
  {
    id: 8,
    text: "Je suppose que le symbôle est assez important, même si Amal ne peut pas réellement manger cette fois-ci.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 9,
  },
  {
    id: 9,
    text: "Et on est vendredi, le meilleur jour pour les pizzas, si c'est pas chanceux ça..",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    chatMoods: [GENERALMOOD_SAD_FRENCH, PIZZAMOOD_SAD_FRENCH],
    next: 10,
  },
  {
    id: 10,
    text: "*rire étranglé*",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: FINISHEPISODE
  },
  // Simple Pizza Quest failure
  {
    id: 11,
    text: "Est-ce que... ça veut dire que je vais devoir vivre avec son fantôme jusqu'à ce que toute l'essence d'Amal ait été consommée ?",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SAD_FRENCH],
    next: 12,
  },
  {
    id: 12,
    text: "...",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 13,
  },
  {
    id: 13,
    text: "Je suppose que tu pourrais déménager ?",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 1300,
  },
  {
    id: 1300,
    text: "Les fantômes sont généralement liés à une zone plutôt petite, iel ne pourra pas te suivre.",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 14,
  },
  {
    id: 14,
    text: "Quel cauchemar...",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: FINISHEPISODE
  },

  // Pineapple Pizza Quest
  {
    id: 15,
    text: "A l'ananas... Iel meurt sans prévenir, me laisse toute seule avec une ombre macabre d'iel-même,...",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_ANGRY_FRENCH],
    next: 16
  },
  {
    id: 16,
    text: "... et maintenant iel me troll à propos d'une putain de pizza à l'ananas ?!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_OMG_FRENCH, PIZZAMOOD_OMG_FRENCH],
    next: 17,
  },
  {
    id: 17,
    text: "Euh...",
    speakerName: "Moi",
    characterImg: MARIA_ANGRY,
    next: 18,
  },
  {
    id: 18,
    text: "Je n'en peux pas, je ne peux juste plus ! Fais le partir. Maintenant !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 19,
  },
  {
    id: 19,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MARIA_ANGRY,
    options: [
      {
        text: "Tu ne penses pas que tu es un peu dramatique là ?",
        popularity: -1,
        setEpilogue: 2,
        chatMoods: [GENERALMOOD_ANGRY_FRENCH, PIZZAMOOD_OMG_FRENCH],
        nextText: 32,
      },
      {
        text: "J'ai l'impression qu'il y a une histoire derrière tout ça ?",
        setEpilogue: 1,
        nextText: 20,
      },
      {
        text: "Je peux passer commande, mais tu pourrais regretter de ne pas l'avoir fait, après.",
        setEpilogue: 1,
        nextText: 20,
      },
    ],
  },
  // Pineapple Pizza Quest success
  {
    id: 20,
    text: "J'ai probablement l'air ridicule, à perdre mes moyens pour un parfum de pizza. Mais...",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 21,
  },
  {
    id: 21,
    text: "C'est comme ça qu'on s'est rencontrées, Amal et moi. En se disputant pour savoir si l'ananas avait sa place sur une pizza.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    chatMoods: [PIZZAMOOD_CUTE_FRENCH, PIZZAMOOD_SAD_FRENCH, GENERALMOOD_CUTE_FRENCH],
    next: 22,
  },
  {
    id: 22,
    text: "Et après, il a fallu du temps avant qu'on se mette ensemble, avant qu'on trouve ce qui nous convenait.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 2200,
  },
  {
    id: 2200,
    text: "Parce qu'on ne se sentait pas comme un couple, mais pas comme des amies non plus.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 23,
  },
  {
    id: 23,
    text: "Mais tout ce temps, toutes ces années avant qu'on ne découvre les relations queerplatoniques...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 2300,
  },
  {
    id: 2300,
    text: "... avant qu'on n'ait l'impression que nos sentiments étaient valides... Tout ce temps, on n'a jamais zappé notre pizza du vendredi.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [GENERALMOOD_CUTE_FRENCH],
    next: 24
  },
  {
    id: 24,
    text: "*sanglot*",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 25,
  },
  {
    id: 25,
    text: "Je ne... Je ne veux pas être seule... Je ne veux pas donner cette pizza à l'ananas au fantôme d'Amal.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 26,
  },
  {
    id: 26,
    text: "Pas quand iel ne peut pas me chambrer là dessus, ne peux pas essayer de me convaincre d'y goûter. Et iel ne le fera plus jamais.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [GENERALMOOD_SAD_FRENCH],
    next: 27
  },
  {
    id: 27,
    text: "Je suppose qu'iel ne le fera plus jamais, quoique je fasse.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 28,
  },
  {
    id: 28,
    text: "Autant l'aider à passer dans l'au-delà...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 29,
  },
  {
    id: 29,
    text: "Je ne veux pas vivre avec un fantôme, encore moins le fantôme de quelqu'un que j'aime.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 30,
  },
  {
    id: 30,
    text: "Et je ne veux pas être la raison pour laquelle iel ne peut pas passer à autre chose. Iel mérite d'être en paix.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 31,
  },
  {
    id: 31,
    text: "Alors donnons lui sa foutu pizza à l'ananas de la paix.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: FINISHEPISODE
  },
  // Pineapple Pizza Quest failure
  {
    id: 32,
    text: "Tu ne comprends rien !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 33,
  },
  {
    id: 33,
    text: "Iel est mort, et je ne veux plus jamais voir une de ses putains d'abomination de pizza à l'ananas, plus jamais !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_ANGRY_FRENCH],
    next: 34,
  },
  {
    id: 34,
    text: "Sors ! DEHORS !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: FINISHEPISODE
  },

  // No Pizza Quest
  {
    id: 35,
    text: "Ca ne ressemble pas à Amal du tout...",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 36,
  },
  {
    id: 36,
    text: "Est-ce qu'iel a vraiment dit ça ?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 37,
  },
  {
    id: 37,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    options: [
      {
        text: "Oui. Pour être précise, iel a dit \"Je ne veux plus que Maria ne mange de pizza.\"",
        nextText: 38,
      },
      {
        text: "C'est ce que j'ai compris... Le signal est un peu brouillé parfois.",
        popularity: -1,
        suspicion: 1,
        setEpilogue: 2,
        chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
        nextText: 70,
      },
      {
        text: "Sa demande a probablement une valeur symbolique... Une idée ?",
        nextText: 38,
      },
    ],
  },
  {
    id: 38,
    text: "Je ne vois vraiment pas pourquoi iel voudrait ça...",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 39,
  },
  {
    id: 39,
    text: "Un fantôme peut-il être très différent de la personne qu'il était ? Plus possessif, ou vindicatif ?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 40,
  },
  {
    id: 40,
    text: "Je ne dirais pas ça. Les fantômes n'ont pas vraiment de personnalité...",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    next: 41,
  },
  {
    id: 41,
    text: "Ils sont cette idée tenace que tu as évitée, cette chose que tu regrette de ne pas avoir faite, auquel on aurait donner corps.",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    next: 42,
  },
  {
    id: 42,
    text: "Enfin, peut-être que \"corps\" n'est pas le mot juste...",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    next: 43,
  },
  {
    id: 43,
    text: "Donc leur requête peut sembler mesquine ou ne pas leur ressembler.",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    next: 44,
  },
  {
    id: 44,
    text: "Mais c'est toujours quelque chose qui aura été important pour eux vivants. Même s'ils n'ont jamais osé en faire quelque chose.",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    next: 45,
  },
  {
    id: 45,
    text: "Les soirées pizza étaient bien une partie importante de notre relations, mais je ne vois toujours pas...",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    chatMoods: [PIZZAMOOD_SAD_FRENCH],
    next: 46,
  },
  {
    id: 46,
    text: "Que dire ?",
    speakerName: "Moi",
    characterImg: MARIA_CONFUSED,
    options: [
      {
        text: "Et si c'était si important qu'iel ne veut pas que tu le partages avec quelqu'un d'autre ?",
        setEpilogue: 4,
        nextText: 47,
      },
      {
        text: "Est-ce que ça a une importance ?",
        setEpilogue: 4,
        chatMoods: [PIZZAMOOD_ANGRY_FRENCH],
        nextText: 59,
      },
      {
        text: "Sérieusement, décide toi ! On dirait que tu ne veux pas qu'iel passe dans l'au-delà !",
        setEpilogue: 2,
        chatMoods: [GENERALMOOD_ANGRY_FRENCH],
        nextText: 79,
      },
    ],
  },
  // No Pizza Quest success 1
  {
    id: 47,
    text: "Aussi ridicule que ça puisse paraître, on était d'accord pour que les soirées pizza soient notre truc à nous.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    chatMoods: [PIZZAMOOD_CUTE_FRENCH, GENERALMOOD_CUTE_FRENCH],
    next: 48,
  },
  {
    id: 48,
    text: "Peut-être que c'est plus logique que ce que je pensais. J'aurais juste voulu qu'iel me le dise quand iel était encore vivante.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 49,
  },
  {
    id: 49,
    text: "Iel pensait probablement que c'était trop te demander.",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SAD_FRENCH],
    next: 50,
  },
  {
    id: 50,
    text: "Iel voulait que tu vives librement et ne te sentes pas retenue par leur absence une fois qu'iel ne serait plus là.",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 51,
  },
  {
    id: 51,
    text: "Parfois on se ment à nous-même sur ce qui est vraiment important, à cause de ce qu'on pense socialement acceptable ou non...",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 52,
  },
  {
    id: 52,
    text: "Tu sais quoi, je me sens mieux à propos de tout ça maintenant.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 53,
  },
  {
    id: 53,
    text: "J'étais vraiment inquiète d'être la chose qui lae retenait sur Terre, que j'ai pu lui faire du mal.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 54,
  },
  {
    id: 54,
    text: "Mais ça, c'est quelque chose que je fais volontier si ça peut lui apporter un peu de paix.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 55,
  },
  {
    id: 55,
    text: "Et autant je suis triste qu'iel n'ai pas eu l'impression de pouvoir m'en parler en personne, ...",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 5500,
  },
  {
    id: 5500,
    text: "Autant je suis soulagée qu'iel ait eu cette opportunité comme fantôme.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 56,
  },
  {
    id: 56,
    text: "Je jure de ne plus jamais manger de pizza. C'était notre truc, à Amal et moi.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 57,
  },
  {
    id: 57,
    text: "...",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 58,
  },
  {
    id: 58,
    text: "Pourquoi est-ce qu'iel ne s'évapore pas ? Les fantômes sont censés disparaitre quand on répond à leur requête, non ?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: FINISHEPISODE
  },
  // No Pizza Quest success 2
  {
    id: 59,
    text: "C'est cruel de ta part de dire ça ! Bien sûr que ça a une importance !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 60,
  },
  {
    id: 60,
    text: "Je veux que le fantôme d'Amal s'en aille, mais je l'aime, l'aimais !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 61,
  },
  {
    id: 61,
    text: "Si quelque chose est si important pour ellui qu'iel refuse de passer dans l'au-delà, je veux comprendre !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_CUTE_FRENCH],
    next: 62,
  },
  {
    id: 62,
    text: "Bien sûr, ce n'est pas ça que je voulais dire !",
    speakerName: "Moi",
    characterImg: MARIA_ANGRY,
    next: 63,
  },
  {
    id: 63,
    text: "Mais je ne suis pas la meilleure personne pour t'aider à comprendre, si ? Et son fantôme ne peut pas vraiment aider...",
    speakerName: "Moi",
    characterImg: MARIA_ANGRY,
    next: 64,
  },
  {
    id: 64,
    text: "Alors je me disais que tu pouvais faire la promesse dès maintenant, et garder le pourquoi pour plus tard ?",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 65,
  },
  {
    id: 65,
    text: "Ca serait probablement plus simple avec des amis pour te soutenir et sans chuchotements de fantôme à ton oreille...",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    next: 66,
  },
  {
    id: 66,
    text: "Oh, d'accord...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 67,
  },
  {
    id: 67,
    text: "Oui, dans ce cas, je jure de ne plus jamais manger de pizza de ma vie. Voilà !",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SAD_FRENCH],
    next: 68,
  },
  {
    id: 68,
    text: "...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 69,
  },
  {
    id: 69,
    text: "Pourquoi est-ce qu'iel ne s'évapore pas ? Les fantômes sont censés disparaitre quand on répond à leur requête, non ?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: FINISHEPISODE
  },
  // No Pizza Quest failure confused
  {
    id: 70,
    text: "Iel aurait aussi bien pu dire qu'iel voulait me voir porter mon t-shirt avec le dessin de pizza, alors...",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 71,
  },
  {
    id: 71,
    text: "Ou que je devrais jurer de prendre soin de sa collection de disques de jazz.",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 72,
  },
  {
    id: 72,
    text: "Je suis à peu près sûre qu'iel a dit...",
    speakerName: "Moi",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SUSPICION_FRENCH],
    next: 73,
  },
  {
    id: 73,
    text: "Ca n'a pas d'importance, je ne le promettrai pas de toute façon.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [PIZZAMOOD_ANGRY_FRENCH],
    next: 74,
  },
  {
    id: 74,
    text: "Je ne sais pas ce qu'il reste vraiment d'une personne dans un fantôme, mais j'ai promis à Amal, quand... Avant... A la fin...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 75,
  },
  {
    id: 75,
    text: "Je lui ai promis que je vivrais pleinement et que je n'utiliserais jamais sa mort comme excuse pour éviter quleque chose de positif.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 76,
  },
  {
    id: 76,
    text: "C'est ce qu'iel m'a demandé, son dernier souhait.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [PIZZAMOOD_SAD_FRENCH],
    next: 77,
  },
  {
    id: 77,
    text: "Donc il ne peut pas y avoir beaucoup d'Amal dans ce fantôme, s'il demande ce genre de choses.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 78,
  },
  {
    id: 78,
    text: "Je suppose que je n'ai plus qu'à m'habituer à le voir flotter chez moi, en sachant qu'il lui ressemble mais qu'il n'est pas vraiment Amal...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: FINISHEPISODE
  },
  // No Pizza Quest failure change-of-mind
  {
    id: 79,
    text: "C'est tellement cruel de ta part !",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 80,
  },
  {
    id: 80,
    text: "Mais peut-être pas complètement faux...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 81,
  },
  {
    id: 81,
    text: "Je ne sais plus, tout ça est tellement horrible !",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 82,
  },
  {
    id: 82,
    text: "Pourquoi refuser de consulter tellement longtemps que son foie est devenu irrecupérable ?",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 83,
  },
  {
    id: 83,
    text: "Pars, s'il-te-plaît. Je... Je sais quoi faire quand je serai prête. Si je suis prête un jour...",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [GENERALMOOD_SAD_FRENCH],
    next: FINISHEPISODE
  },
]
