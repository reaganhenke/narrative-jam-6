// Replace with characters
// const GREG_ANGRY = "./assets/characters/greg_angry.png"
// const GREG_DISGUSTED = "./assets/characters/greg_disgusted.png"
// const GREG_GRUMPY = "./assets/characters/greg_grumpy.png"

// This is just a placeholder example for episode specific moods
const PIZZAMOOD_SPECIFICMOOD = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: pizza episode",
    ]
  }
]

const PIZZA_EPILOGUES = []

const pizzaDialogue1 = [
  {
    id: 1,
    text: "Placeholder",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
    chatMood: [PIZZAMOOD_SPECIFICMOOD, GENERALMOOD_CUTE],
    next: START_PUZZLE
  }
];

const pizzaDialogue2 = []
