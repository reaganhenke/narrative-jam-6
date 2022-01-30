// referencing https://github.com/WebDevSimplified/JavaScript-Text-Adventure/blob/master/game.js

const EMOJI_DEFAULT = "./assets/emoji/emoji-neutral.png";
const EMOJI_HAPPY = "./assets/emoji/emoji-smiling.png";
const EMOJI_SAD = "./assets/emoji/emoji-sad.png";
const START_PUZZLE = "AUDIOGAME";
const FINISHEPISODE = "FINISHEPISODE";
const EXCITED = [
  "user123: the house moves?? 😅",
  "user123: that's crazy",
  "user123: so special!!"
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

const textNodes1 = [
  {
    id: 1,
    text: "Hello lovelies, today we've got a call from Greg, from Lovely Homes Real Estate!",
    speakerName: "MC",
    characterImg: EMOJI_HAPPY,
    next: 2
  },
  {
    id: 2,
    text: "Greg is trying to sell a very special house, but the previous owner isn't too happy about visitors...",
    speakerName: "MC",
    characterImg: EMOJI_DEFAULT,
    options: [
      {
        text: "Let's go meet that ghost!",
        chatMood: EXCITED,
        nextText: 3,
      },
      {
        text: "A very special house indeed, for it has legs to move around! (Popularity+, SUS-)",
        popularity: 5,
        suspicion: 4,
        nextText: 3,
        chatMood: EXCITED
      },
      {
        text: "How is that house special, you ask me? Well, let's go and see! (Popularity+)",
        chatMood: EXCITED,
        popularity: 1,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Hello Greg, so we're in the famed \"four-leg house\".",
    speakerName: "MC",
    characterImg: EMOJI_DEFAULT,
    next: 4
  },
  {
    id: 4,
    text: "Yes, and it would be a perfect deal if not for that wailing ghost inside.",
    speakerName: "Greg",
    characterImg: EMOJI_SAD,
    next: 5
  },
  {
    id: 5,
    text: "Please convince her to move on...",
    speakerName: "Greg",
    characterImg: EMOJI_DEFAULT,
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

const textNodes2 = [
  {
    id: 1,
    text: "this is after the audio puzzle",
    speakerName: "Greg",
    characterImg: EMOJI_HAPPY,
    next: 2
  },
  {
    id: 2,
    text: "time to pick an epilogue",
    speakerName: "Greg",
    characterImg: EMOJI_DEFAULT,
    options: [
      {
        text: "another success",
        popularity: 5,
        setEpilogue: 1,
        nextText: 3,
      },
      {
        text: "oopsie",
        setEpilogue: 4,
        nextText: 3,
      }
    ],
  },
  {
    id: 3,
    text: "time to read the epilogue",
    speakerName: "Greg",
    characterImg: EMOJI_HAPPY,
    next: FINISHEPISODE
  }
]
