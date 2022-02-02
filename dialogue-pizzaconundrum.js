const MARIA_ANGRY = "./assets/characters/maria_angry.png"
const MARIA_CONFUSED = "./assets/characters/maria_confused.png"
const MARIA_CRY = "./assets/characters/maria_cry.png"
const MARIA_HAPPYCRY = "./assets/characters/maria_happycry.png"
const MARIA_SAD = "./assets/characters/maria_sad.png"

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
