const START_PUZZLE = "AUDIOGAME";
const FINISHEPISODE = "FINISHEPISODE";

const LOWSUS = "LOWSUS";
const MEDSUS = "MEDSUS";
const HIGHSUS = "HIGHSUS";
const ANYSUS = "ANYSUS";

const MC_EXCITED = "./assets/characters/mc_excited.png";
const MC_SAD = "./assets/characters/mc_sad.png";

const GENERALMOOD_CUTE = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: So cuuuuuuuute 💖",
      "bibop: #cute",
      "caty: this is so cute 😻",
      "hes: Cute alert! 🚨🙈🐶🦝🐥",
      "kk234: omg im gonna die this is so cute",
      "coolio: 🤗",
    ]
  }
]

const GENERALMOOD_OMG = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: OMG is this real 😲 ?!?!?",
      "noclue: This is so WILD! 🥴",
      "coolio: 😮 can't beleive they did that",
      "cotcot: !!NO WAY!!",
      "thelibrarian: ✨ We get to see the most terrific places on the show 💖",
    ]
  }
]

const GENERALMOOD_SAD = [
  {
    suspicion: ANYSUS,
    segments: [
      "tddsl: 😢 im crying 😭",
      "hes: can you hear my heart break? 💔",
      "bibop: noooooooooo 😭😭😭",
      "coolio: 😿",
      "coolio: owwww 😢",
      "Madster: #lifesucks 🌧️"
    ]
  }
]

const GENERALMOOD_ANGRY = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: can't believe they said that 😡",
      "hes: 🤬 What a jerk!",
      "noclue: You cant say that 😱💀",
      "noclue: Some people have no heart 🖤"
    ]
  }
]

const GENERALMOOD_SUSPICION = [
  {
    suspicion: LOWSUS,
    segments: [
      "tddsk: ❤️ love the show ❤️",
      "caty: #jossRocks #ghostWhisperer",
      "debydeb: cool show!",
      "hes: 😎 Ghost Whisperer",
      "carrotcake: sick show!",
      "nn: love the ghosts!! 👻",
      "thebestboy: Thanks for the show, having a lot of fun. Rob from Newland",
    ]
  },
  {
    suspicion: MEDSUS,
    segments: [
      "noclue: 😕 Some stuff here make no sense",
      "lab33: not sure that's how it works 🤨",
      "thelibrarian: Unusual...",
      "luve4you: err... weird?",
      "coolio: 🤔",
      "fyi999: not what I expected 😬",
      "poplar: Don't you need a diploma or something to work with dead people?",
    ]
  },
  {
    suspicion: HIGHSUS,
    segments: [
      "luve4you: this show is so sus 😡",
      "lab33: 📻 that interpreter even genuine❓",
      "noclue: And in the next episode, how joss made friend with alien necromancers using a kitchen peeler... 😒",
      "tiktok: liars'll get what's coming ⏳💣",
      "Madster: this is fiction show?",
      "fiy999: becoming more ridiculous as it goes...",
      "brrrr: 🤥",
    ]
  },
]

const GENERALMOOD_CUTE_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: Troooop mignon 💖",
      "bibop: #cute",
      "caty: c'est trop mignon 😻",
      "hes: Cute alert! 🚨🙈🐶🦝🐥",
      "kk234: omg j vais dcd telment c mignon",
      "coolio: 🤗",
    ]
  }
]

const GENERALMOOD_OMG_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: OMG ils sont pour de vrai 😲 ?!?!?",
      "noclue: C'est trop OUF ! 🥴",
      "coolio: 😮 jpeux pas croire quils ai fait ça",
      "cotcot: !! IMPOSSIBLE !!",
      "thelibrarian: ✨ On voit vraiment les endroits les plus géniaux dans cette émission 💖",
    ]
  }
]

const GENERALMOOD_SAD_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "tddsl: 😢 je pleure 😭",
      "hes: vous entendez mon coeur se briser ? 💔",
      "bibop: nooooooonnnn 😭😭😭",
      "coolio: 😿",
      "coolio: owwww 😢",
      "Madster: #lifesucks 🌧️"
    ]
  }
]

const GENERALMOOD_ANGRY_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: je peux pas croire qu'ils aient dit ça 😡",
      "hes: 🤬 Quel minable!",
      "noclue: Tu peux pas dire ça 😱💀",
      "noclue: Ya des gens qui ont pas de coeur 🖤"
    ]
  }
]

const GENERALMOOD_SUSPICION_FRENCH = [
  {
    suspicion: LOWSUS,
    segments: [
      "tddsk: ❤️ j'adore l'émission ❤️",
      "caty: #jossDéchire #ghostWhisperer",
      "debydeb: coll l'émission !",
      "hes: 😎 Ghost Whisperer",
      "carrotcake: ça déchire !",
      "nn: j'adore les fantomes !! 👻",
      "thebestboy: Merci pour l'émission, c'est très drôle. Bob de Neufville",
    ]
  },
  {
    suspicion: MEDSUS,
    segments: [
      "noclue: 😕 Y a des trucs ici qui sont pas logiques...",
      "lab33: pas sure que ce soit comme ça que ça fonctionne 🤨",
      "thelibrarian: Peu commun...",
      "luve4you: euh... Bizarre ?",
      "coolio: 🤔",
      "fyi999: je m'attendais pas à ça 😬",
      "poplar: Faut pas un diplome ou qqch pour travailler avec des gens morts ?",
    ]
  },
  {
    suspicion: HIGHSUS,
    segments: [
      "luve4you: c't'émission est trop chelou 😡",
      "lab33: 📻 l'intépreteur est authentique au moins ❓",
      "noclue: Et dans le prochain épisode, comme joss est devenue amie avec des aliens nécromants grace à un épluche légumes... 😒",
      "tiktok: les menteurs finissent tous par se faire avoir... ⏳💣",
      "Madster: c'est émission de fiction",
      "fiy999: de plus en plus ridicule...",
      "brrrr: 🤥",
    ]
  },
]

const FAILED_BACKGROUND = "./assets/backgrounds/end_failure.png";
const TRIAL_BACKGROUND = "./assets/backgrounds/end_success.png";
const SIGNON_BACKGROUND = "./assets/backgrounds/end_success.png";
const FAMOUS_BACKGROUND = "./assets/backgrounds/end_famous.png";
const GAMEOVER_BACKGROUND = "./assets/backgrounds/end_gameover.png";

const GAME_EPILOGUES = [
  {
    content: `Your popularity has taken something of a dive in the last month.
    While you'll probably be able to right the ship, given enough time, it does mean
    that your sponsorship opportunity went out the window. Times are tough for amateur streamers...`,
    backgroundImg: FAILED_BACKGROUND
  },
  {
    content: `The results for your last month are not what you hoped for, but you've salvaged
    the sponsorship deal by negotiating a trial period. You'll have to wear branded product
    in all of your episodes for the next six months, and if enough viewers use your referral
    link, you'll land a more permanent contract. This means you'll have to work your ass off,
    but the regular income is very appreciated after years of funding your show with Patreon subscriptions...`,
    backgroundImg: TRIAL_BACKGROUND
  },
  {
    content: `You've done it! You've landed your first sponsorship contract! You're not too sure how
    effective a marketing strategy it is for a plumbing company to get their logo in your show,
    but all you have to do is wear their branded cap or tool belt and drop a referral link with each video.
    Take that, Spectral Self-Help!!`,
    backgroundImg: SIGNON_BACKGROUND
  },
  {
    content: `Oh, wow! This last month has been absolutely fantastic, with tons
    of new viewers and subscribers… and, better yet, eighteen new sponsorship offers
    much better than the one you received from that plumbing company! A sporting gear shop,
    a big herbal tea brand, a camera manufacturer... You're on the road to international success!
    You might have sold your soul and those of the ghosts you're supposed to help
    in the process, but really, who cares?`,
    backgroundImg: FAMOUS_BACKGROUND
  },
  {
    content: `Turns out lying about the ghosts's requests wasn't such a good idea after all...
    Some of your competitors had been gathering proof of your regular dishonesty for months,
    and your last episode gave them just what they needed to go public with their accusations.
    Your phone is ringing non-stop and a couple of recent guests are considering suing you.
    This is the end of Ghost Whisperer...`,
    backgroundImg: GAMEOVER_BACKGROUND
  }
]

const GAME_EPILOGUES_FRENCH = [

  {
    content: `Ta popularité a un peu piqué du nez ce dernier mois. Tu réussiras
    probablement à redresser la barre, avec assez de temps, mais ton sponsor
    potentiel est parti voir ailleurs. Les temps sont durs pour les streamers amateurs...`,
    backgroundImg: FAILED_BACKGROUND
  },
  {
    content: `Tes résultats ce mois-ci sont très moyens, mais tu as sauvé ton
    contrat de sponsoring moyennant une période d'essai. Tu vas devoir casé leurs
    produits partout dans tes épisodes pour les six prochains mois, et si assez
    de gens utilisent ton code de parrainage, tu décrocheras un contrat plus permanent.
    Il va falloir que tu bosses comme une brute, mais les revenus réguliers sont
    bienvenus après des années à financer ton émission grâce à des abonnements Patreon...`,
    backgroundImg: TRIAL_BACKGROUND
  },
  {
    content: `Tu as réussi ! Tu as décroché ton premier sponsoring ! Tu ne comprends
    pas trop en quoi avoir leur logo dans ton émission va booster le marketing
    d'une boîte de plomberie, mais tout ce que tu as à faire c'est de porter une
    casquette à leur nom et diffuser un lien de parrainage avec chaque vidéo.
    Prends ça dans la tronche, Spectral Self-Help !!`,
    backgroundImg: SIGNON_BACKGROUND
  },
  {
    content: `Oh, wow! Ce dernier mois a été absolument fantastique, avec des
    tonnes de nouveaux viewers et abonnés... Et, encore mieux, DIX-HUIT nouvelles
    offres de sponsors, bien meilleures que celle que tu avais reçue à la base.
    Un magasin de sport, une grosse marque de tisanes bio, un fabricant d'appareil
    photo... Tu es en route pour un succès international ! Tu as peut-être vendu
    ton âme et celles des fantômes que tu es censée aider au passage, mais vraiment, qui te
    le reprocherait ?`,
    backgroundImg: FAMOUS_BACKGROUND
  },
  {
    content: `Apparement, mentir à propos des demandes des fantômes n'était pas
    une si bonne idée que ça. Des concurrents à toi ont passé les derniers mois à
    collecter des preuves de ta malhonnêteté, et ton dernier épisode leur a donné
    juste ce qu'il leur manquait pour rendre publiques leurs accusations. Ton
    téléphone n'arrête pas de sonner et quelques invités récents envisagent de te
    coller un procès. C'est la fin de Ghost Whisperer...`,
    backgroundImg: GAMEOVER_BACKGROUND
  }
]
