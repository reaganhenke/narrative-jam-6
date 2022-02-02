const GREG_ANGRY = "./assets/characters/greg_angry.png"
const GREG_DISGUSTED = "./assets/characters/greg_disgusted.png"
const GREG_GRUMPY = "./assets/characters/greg_grumpy.png"

const HAUNTEDHOUSE_EXCITED = [
  {
    suspicion: LOWSUS,
    segments: [
      "noclue: i'm so excited 😅",
      "user123: that's crazy",
      "user123: so special!!"
    ]
  },
  {
    suspicion: MEDSUS,
    segments: [
      "curious: huh... alright if you say so! ",
      "user123: that's kinda crazy, if you're telling the truth🤔 ",
      "start2doubt: if you say so"
    ]
  },
  {
    suspicion: HIGHSUS,
    segments: [
      "hateu: u r such a liar 🤬 ",
      "user123: stop lying! ",
      "overit: this show sucks"
    ]
  }
]

const HAUNTEDHOUSE_EPILOGUES = [
  {
    id: 1,
    text: "Another great success!"
  },
  {
    id: 2,
    text: "Not your best..."
  },
  {
    id: 3,
    text: "What a lucky coincidence!"
  },
  {
    id: 4,
    text: "Oopsie!"
  },
]

const hauntedHouseDialogue1 = [
  {
    id: 1,
    text: "Hello lovelies, today we've got a call from Greg, from Lovely Homes Real Estate!",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
    chatMoods: [HAUNTEDHOUSE_EXCITED, GENERALMOOD_CUTE, GENERALMOOD_CUTE, GENERALMOOD_CUTE, GENERALMOOD_CUTE, HAUNTEDHOUSE_EXCITED,HAUNTEDHOUSE_EXCITED],
    next: 2
  },
  {
    id: 2,
    text: "Greg is trying to sell a very special house, but the previous owner isn't too happy about visitors...",
    speakerName: "MC",
    characterImg: GREG_ANGRY,
    options: [
      {
        text: "Let's go meet that ghost!",
        chatMoods: [HAUNTEDHOUSE_EXCITED],
        nextText: START_PUZZLE,
      },
      {
        text: "A very special house indeed, for it has legs to move around! (Popularity+, SUS+)",
        popularity: 5,
        suspicion: 3,
        nextText: 3,
        chatMoods: [HAUNTEDHOUSE_EXCITED, GENERALMOOD_CUTE, GENERALMOOD_CUTE, GENERALMOOD_CUTE, GENERALMOOD_CUTE, GENERALMOOD_CUTE, GENERALMOOD_CUTE]
      },
      {
        text: "How is that house special, you ask me? Well, let's go and see! (Popularity+)",
        chatMoods: [HAUNTEDHOUSE_EXCITED],
        popularity: 1,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Hello Greg, so we're in the famed \"four-leg house\".",
    speakerName: "MC",
    characterImg: GREG_DISGUSTED,
    next: 4
  },
  {
    id: 4,
    text: "Yes, and it would be a perfect deal if not for that wailing ghost inside.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 5
  },
  {
    id: 5,
    text: "Please convince her to move on...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Let's meet her then...",
        nextText: START_PUZZLE,
      },
      {
        text: "A dead hag in a witchy house, I love that!(Popularity+ Suspicion+)",
        popularity: 1,
        suspicion: 2,
        nextText: START_PUZZLE,
      },
      {
        text: "Now, now, you shouldn't speak bad of the dead!",
        nextText: START_PUZZLE,
      },
    ],
  }
];

const hauntedHouseDialogue2 = [
  {
    id: 1,
    text: "this is after the audio puzzle",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2
  },
  {
    id: 2,
    text: "time to pick an epilogue",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "another success",
        popularity: 5,
        setEpilogue: 1,
        nextText: 3,
      },
      {
        text: "oopsie",
        popularity: 1,
        suspicion: -10,
        setEpilogue: 4,
        nextText: 3,
      }
    ],
  },
  {
    id: 3,
    text: "time to read the epilogue",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: FINISHEPISODE
  }
]
