const START_PUZZLE = "AUDIOGAME";
const FINISHEPISODE = "FINISHEPISODE";

const LOWSUS = "LOWSUS";
const MEDSUS = "MEDSUS";
const HIGHSUS = "HIGHSUS";
const ANYSUS = "ANYSUS";

const GENERALMOOD_CUTE = [
  {
    suspicion: ANYSUS,
    segments: [
      "noclue: SO CUTE 😅"
    ]
  }
]

const GENERALMOOD_OMG = [
  {
    suspicion: ANYSUS,
    segments: [
    ]
  }
]

const GENERALMOOD_SAD = [
  {
    suspicion: ANYSUS,
    segments: [
    ]
  }
]

const GENERALMOOD_ANGRY = [
  {
    suspicion: ANYSUS,
    segments: [
    ]
  }
]

const GENERALMOOD_SUSPICION = [
  {
    suspicion: HIGHSUS,
    segments: [
      "anyone: i'm so suspicious!"
    ]
  },
  {
    suspicion: MEDSUS,
    segments: [
      "anyone: i'm kinda suspicious!"
    ]
  },
  {
    suspicion: LOWSUS,
    segments: [
      "anyone: i'm not suspicious!"
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
