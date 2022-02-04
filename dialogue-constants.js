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
    content: `That's it, you've landed your first sponsorship contract! You're not too sure how 
    effective a marketing strategy it is for a plumbing company to get their logo in your show, 
    but all you have to do is wear their branded cap or tool belt, and drop a referral link with each video.
    Take that, Spectral Self-Help!!`,
    backgroundImg: SIGNON_BACKGROUND
  },
  {
    content: `Oh, dear! Oh, dear! This last month has been absolutely fantastic, with tons 
    of new viewers and so much steaming love… and eighteen new sponsorship offers! 
    Much better offers that the one you received from the plumbing company that had c
    ontacted you a month ago. A sporting gear shop, a big herbal tea brand, a camera manufacturer... 
    You're on the road to international success! You might have sold your soul and the ones 
    of the ghosts you're supposed to help in the process, but really, who cares?`,
    backgroundImg: FAMOUS_BACKGROUND
  },
  {
    content: `Turns out lying about the ghosts's request wasn't such a good idea in the end... 
    Some of your competitors had been gathering proof of your regular dishonesty for months, 
    and your last episode gave them just what they needed to go public with their accusations!
    Your phone is ringing non-stop and a couple of recent guests are considering law suits. 
    This is the end of Ghost Whisperer...`,
    backgroundImg: GAMEOVER_BACKGROUND
  }
]
