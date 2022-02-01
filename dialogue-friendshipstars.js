// Replace with characters
// const GREG_ANGRY = "./assets/characters/greg_angry.png"
// const GREG_DISGUSTED = "./assets/characters/greg_disgusted.png"
// const GREG_GRUMPY = "./assets/characters/greg_grumpy.png"

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
