const ANGEL_ANGRY = "./assets/characters/angel_angry.png"
const ANGEL_DETERMINED = "./assets/characters/angel_determined.png"
const ANGEL_EXCITED = "./assets/characters/angel_excited.png"
const ANGEL_LAUGHING = "./assets/characters/angel_laughing.png"
const ANGEL_SAD = "./assets/characters/angel_sad.png"

// This is just a placeholder example for episode specific moods
const STARMOOD_SPECIFICMOOD = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: star episode",
    ]
  }
]

const STARS_EPILOGUES = []

const starsDialogue1 = [
  {
    id: 1,
    text: "Placeholder",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
    chatMoods: [STARMOOD_SPECIFICMOOD],
    next: START_PUZZLE
  }
];

const starsDialogue2 = []
