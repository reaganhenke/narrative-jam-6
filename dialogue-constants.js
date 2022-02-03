const START_PUZZLE = "AUDIOGAME";
const FINISHEPISODE = "FINISHEPISODE";

const LOWSUS = "LOWSUS";
const MEDSUS = "MEDSUS";
const HIGHSUS = "HIGHSUS";
const ANYSUS = "ANYSUS";

const MC_EXCITED = "./assets/characters/greg_grumpy.png" // placeholder
const MC_SAD = "./assets/characters/greg_grumpy.png" // placeholder

const GENERALMOOD_CUTE = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: So cuuuuuuuute 💖",
      "bibop: #cute",
      "caty: this is so cute 😻",
      "hes: Cute alert! 🚨🙈🐶🦝🐥🦦",
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
      "cotcot: ‼️NO WAY‼️",
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

const GAME_EPILOGUES = [
  {
    title: 'Failed Game Ending',
  },
  {
    title: 'Trial Period Game Ending'
  },
  {
    title: 'Sign In Game Ending'
  },
  {
    title: 'Famous Game Ending'
  }
]
