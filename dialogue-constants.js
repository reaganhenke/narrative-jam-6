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
      "noclue: So cuuuuuuuute ๐",
      "bibop: #cute",
      "caty: this is so cute ๐ป",
      "hes: Cute alert! ๐จ๐๐ถ๐ฆ๐ฅ",
      "kk234: omg im gonna die this is so cute",
      "coolio: ๐ค",
    ]
  }
]

const GENERALMOOD_OMG = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: OMG is this real ๐ฒ ?!?!?",
      "noclue: This is so WILD! ๐ฅด",
      "coolio: ๐ฎ can't beleive they did that",
      "cotcot: !!NO WAY!!",
      "thelibrarian: โจ We get to see the most terrific places on the show ๐",
    ]
  }
]

const GENERALMOOD_SAD = [
  {
    suspicion: ANYSUS,
    segments: [
      "tddsl: ๐ข im crying ๐ญ",
      "hes: can you hear my heart break? ๐",
      "bibop: noooooooooo ๐ญ๐ญ๐ญ",
      "coolio: ๐ฟ",
      "coolio: owwww ๐ข",
      "Madster: #lifesucks ๐ง๏ธ"
    ]
  }
]

const GENERALMOOD_ANGRY = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: can't believe they said that ๐ก",
      "hes: ๐คฌ What a jerk!",
      "noclue: You cant say that ๐ฑ๐",
      "noclue: Some people have no heart ๐ค"
    ]
  }
]

const GENERALMOOD_SUSPICION = [
  {
    suspicion: LOWSUS,
    segments: [
      "tddsk: โค๏ธ love the show โค๏ธ",
      "caty: #jossRocks #ghostWhisperer",
      "debydeb: cool show!",
      "hes: ๐ Ghost Whisperer",
      "carrotcake: sick show!",
      "nn: love the ghosts!! ๐ป",
      "thebestboy: Thanks for the show, having a lot of fun. Rob from Newland",
    ]
  },
  {
    suspicion: MEDSUS,
    segments: [
      "noclue: ๐ Some stuff here make no sense",
      "lab33: not sure that's how it works ๐คจ",
      "thelibrarian: Unusual...",
      "luve4you: err... weird?",
      "coolio: ๐ค",
      "fyi999: not what I expected ๐ฌ",
      "poplar: Don't you need a diploma or something to work with dead people?",
    ]
  },
  {
    suspicion: HIGHSUS,
    segments: [
      "luve4you: this show is so sus ๐ก",
      "lab33: ๐ป that interpreter even genuineโ",
      "noclue: And in the next episode, how joss made friend with alien necromancers using a kitchen peeler... ๐",
      "tiktok: liars'll get what's coming โณ๐ฃ",
      "Madster: this is fiction show?",
      "fiy999: becoming more ridiculous as it goes...",
      "brrrr: ๐คฅ",
    ]
  },
]

const GENERALMOOD_CUTE_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: Troooop mignon ๐",
      "bibop: #cute",
      "caty: c'est trop mignon ๐ป",
      "hes: Cute alert! ๐จ๐๐ถ๐ฆ๐ฅ",
      "kk234: omg j vais dcd telment c mignon",
      "coolio: ๐ค",
    ]
  }
]

const GENERALMOOD_OMG_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: OMG ils sont pour de vrai ๐ฒ ?!?!?",
      "noclue: C'est trop OUF ! ๐ฅด",
      "coolio: ๐ฎ jpeux pas croire quils ai fait รงa",
      "cotcot: !! IMPOSSIBLE !!",
      "thelibrarian: โจ On voit vraiment les endroits les plus gรฉniaux dans cette รฉmission ๐",
    ]
  }
]

const GENERALMOOD_SAD_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "tddsl: ๐ข je pleure ๐ญ",
      "hes: vous entendez mon coeur se briser ? ๐",
      "bibop: nooooooonnnn ๐ญ๐ญ๐ญ",
      "coolio: ๐ฟ",
      "coolio: owwww ๐ข",
      "Madster: #lifesucks ๐ง๏ธ"
    ]
  }
]

const GENERALMOOD_ANGRY_FRENCH = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: je peux pas croire qu'ils aient dit รงa ๐ก",
      "hes: ๐คฌ Quel minable!",
      "noclue: Tu peux pas dire รงa ๐ฑ๐",
      "noclue: Ya des gens qui ont pas de coeur ๐ค"
    ]
  }
]

const GENERALMOOD_SUSPICION_FRENCH = [
  {
    suspicion: LOWSUS,
    segments: [
      "tddsk: โค๏ธ j'adore l'รฉmission โค๏ธ",
      "caty: #jossDรฉchire #ghostWhisperer",
      "debydeb: coll l'รฉmission !",
      "hes: ๐ Ghost Whisperer",
      "carrotcake: รงa dรฉchire !",
      "nn: j'adore les fantomes !! ๐ป",
      "thebestboy: Merci pour l'รฉmission, c'est trรจs drรดle. Bob de Neufville",
    ]
  },
  {
    suspicion: MEDSUS,
    segments: [
      "noclue: ๐ Y a des trucs ici qui sont pas logiques...",
      "lab33: pas sure que ce soit comme รงa que รงa fonctionne ๐คจ",
      "thelibrarian: Peu commun...",
      "luve4you: euh... Bizarre ?",
      "coolio: ๐ค",
      "fyi999: je m'attendais pas ร? รงa ๐ฌ",
      "poplar: Faut pas un diplome ou qqch pour travailler avec des gens morts ?",
    ]
  },
  {
    suspicion: HIGHSUS,
    segments: [
      "luve4you: c't'รฉmission est trop chelou ๐ก",
      "lab33: ๐ป l'intรฉpreteur est authentique au moins โ",
      "noclue: Et dans le prochain รฉpisode, comme joss est devenue amie avec des aliens nรฉcromants grace ร? un รฉpluche lรฉgumes... ๐",
      "tiktok: les menteurs finissent tous par se faire avoir... โณ๐ฃ",
      "Madster: c'est รฉmission de fiction",
      "fiy999: de plus en plus ridicule...",
      "brrrr: ๐คฅ",
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
    of new viewers and subscribersโฆ and, better yet, eighteen new sponsorship offers
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
    content: `Ta popularitรฉ a un peu piquรฉ du nez ce dernier mois. Tu rรฉussiras
    probablement ร? redresser la barre, avec assez de temps, mais ton sponsor
    potentiel est parti voir ailleurs. Les temps sont durs pour les streamers amateurs...`,
    backgroundImg: FAILED_BACKGROUND
  },
  {
    content: `Tes rรฉsultats ce mois-ci sont trรจs moyens, mais tu as sauvรฉ ton
    contrat de sponsoring moyennant une pรฉriode d'essai. Tu vas devoir casรฉ leurs
    produits partout dans tes รฉpisodes pour les six prochains mois, et si assez
    de gens utilisent ton code de parrainage, tu dรฉcrocheras un contrat plus permanent.
    Il va falloir que tu bosses comme une brute, mais les revenus rรฉguliers sont
    bienvenus aprรจs des annรฉes ร? financer ton รฉmission grรขce ร? des abonnements Patreon...`,
    backgroundImg: TRIAL_BACKGROUND
  },
  {
    content: `Tu as rรฉussi ! Tu as dรฉcrochรฉ ton premier sponsoring ! Tu ne comprends
    pas trop en quoi avoir leur logo dans ton รฉmission va booster le marketing
    d'une boรฎte de plomberie, mais tout ce que tu as ร? faire c'est de porter une
    casquette ร? leur nom et diffuser un lien de parrainage avec chaque vidรฉo.
    Prends รงa dans la tronche, Spectral Self-Help !!`,
    backgroundImg: SIGNON_BACKGROUND
  },
  {
    content: `Oh, wow! Ce dernier mois a รฉtรฉ absolument fantastique, avec des
    tonnes de nouveaux viewers et abonnรฉs... Et, encore mieux, DIX-HUIT nouvelles
    offres de sponsors, bien meilleures que celle que tu avais reรงue ร? la base.
    Un magasin de sport, une grosse marque de tisanes bio, un fabricant d'appareil
    photo... Tu es en route pour un succรจs international ! Tu as peut-รชtre vendu
    ton รขme et celles des fantรดmes que tu es censรฉe aider au passage, mais vraiment, qui te
    le reprocherait ?`,
    backgroundImg: FAMOUS_BACKGROUND
  },
  {
    content: `Apparement, mentir ร? propos des demandes des fantรดmes n'รฉtait pas
    une si bonne idรฉe que รงa. Des concurrents ร? toi ont passรฉ les derniers mois ร?
    collecter des preuves de ta malhonnรชtetรฉ, et ton dernier รฉpisode leur a donnรฉ
    juste ce qu'il leur manquait pour rendre publiques leurs accusations. Ton
    tรฉlรฉphone n'arrรชte pas de sonner et quelques invitรฉs rรฉcents envisagent de te
    coller un procรจs. C'est la fin de Ghost Whisperer...`,
    backgroundImg: GAMEOVER_BACKGROUND
  }
]
