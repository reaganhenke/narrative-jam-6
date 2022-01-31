const START_PUZZLE = "AUDIOGAME";
const FINISHEPISODE = "FINISHEPISODE";
const LOW = "LOW";
const MED = "MED";
const HIGH = "HIGH";

const GREG_GRUMPY = "./assets/characters/greg_grumpy.png"

const HAUNTEDHOUSE_EXCITED = [
  {
    suspicion: LOW,
    segments: [
      "noclue: i'm so excited 😅",
      "user123: that's crazy",
      "user123: so special!!"
    ]
  },
  {
    suspicion: MED,
    segments: [
      "curious: huh... alright if you say so! ",
      "user123: that's kinda crazy, if you're telling the truth🤔 ",
      "start2doubt: if you say so"
    ]
  },
  {
    suspicion: HIGH,
    segments: [
      "hateu: u r such a liar 🤬 ",
      "user123: stop lying! ",
      "overit: this show sucks"
    ]
  }
]

const possible_epilogues = [
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
    text: "Hello <b>lovelies</b>, today we've got a call from Greg, from Lovely Homes Real Estate!",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
    next: 2
  },
  {
    id: 2,
    text: "Greg is trying to sell a very special house, but the previous owner isn't too happy about visitors...",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Let's go meet that ghost!",
        chatMood: HAUNTEDHOUSE_EXCITED,
        nextText: 3,
      },
      {
        text: "A very special house indeed, for it has legs to move around! (Popularity+, SUS+)",
        popularity: 5,
        suspicion: 3,
        nextText: 3,
        chatMood: HAUNTEDHOUSE_EXCITED
      },
      {
        text: "How is that house special, you ask me? Well, let's go and see! (Popularity+)",
        chatMood: HAUNTEDHOUSE_EXCITED,
        popularity: 1,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Hello Greg, so we're in the famed \"four-leg house\".",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
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
