const ANGEL_ANGRY = "./assets/characters/angel_angry.png"
const ANGEL_DETERMINED = "./assets/characters/angel_determined.png"
const ANGEL_HAPPY = "./assets/characters/angel_excited.png"
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

const STARS_EPILOGUES = [
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

const starsDialogue1 = [
  {
    id: 1,
    text: "Hello lovelies! Tonight we've been called by the Astronomer In Residence at the Acme Observatory!",
    speakerName: "Me",
    characterImg: MC_EXCITED,
    next: 2,
  },
  {
    id: 2,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MC_EXCITED,
    options: [
      {
        text: "Pretty fancy place, right? Are we going to meet the ghost of a famous scientist?!",
        popularity: 1,
        nextText: 3,
      },
      {
        text: "I've made a night appointement, so we're in for a pretty light show!",
        popularity: 1,
        nextText: 3,
      },
      {
        text: "A Ghost Whisperer under the stars... Aren't you lucky duckies?",
        popularity: -1,
        suspicion: 1,
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Hi!",
    speakerName: "??",
    characterImg: ANGEL_HAPPY,
    next: 4,
  },
  {
    id: 4,
    text: "Hello...",
    speakerName: "Me",
    characterImg: ANGEL_HAPPY,
    next: 5,
  },
  {
    id: 5,
    text: "Aren't you a bit young for an astronomer?",
    speakerName: "Me",
    characterImg: ANGEL_HAPPY,
    next: 6,
  },
  {
    id: 6,
    text: "You're silly! Of course I'm not the Astronomer!",
    speakerName: "??",
    characterImg: ANGEL_LAUGHING,
    next: 7,
  },
  {
    id: 7,
    text: "I'm Angel! Aunty Del really doesn't like people, so I get to show you around!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 8,
  },
  {
    id: 8,
    text: "Oh, nice to meet you Angel. I'm Joss, from Ghost Whisperer.",
    speakerName: "Me",
    characterImg: ANGEL_HAPPY,
    next: 9,
  },
  {
    id: 9,
    text: "Yeah, I know!",
    speakerName: "Angel",
    characterImg: ANGEL_LAUGHING,
    next: 10,
  },
  {
    id: 10,
    text: "Can you show me where your ghost is?",
    speakerName: "Me",
    characterImg: ANGEL_HAPPY,
    next: 11,
  },
  {
    id: 11,
    text: "She's in the trunk over there.",
    speakerName: "Angle",
    characterImg: ANGEL_HAPPY,
    next: 12,
  },
  {
    id: 12,
    text: "She seems pretty unhappy... She won't let Aunty Del take the books from the trunk.",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 13,
  },
  {
    id: 13,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: ANGEL_SAD,
    options: [
      {
        text: "Thanks! I think you should go now, ghost-interpreting isn't for little kids...",
        popularity: -1,
        suspicion: 1,
        nextText: 14,
      },
      {
        text: "What do you say we team up to make her happy again?",
        popularity: 2,
        nextText: 17,
      },
      {
        text: "I'll do my best to help her move on, I promise!",
        popularity: 1,
        nextText: 17,
      },
    ],
  },
  {
    id: 14,
    text: "I'm not leaving you alone in the observatory! I have a mission!",
    speakerName: "Angel",
    characterImg: ANGEL_ANGRY,
    next: 15,
  },
  {
    id: 15,
    text: "Plus, I watch your show all the time, I know it's not scary!",
    speakerName: "Angel",
    characterImg: ANGEL_ANGRY,
    next: 16,
  },
  {
    id: 16,
    text: "Very well. Since you're a fan of mine, you can stay...",
    speakerName: "Me",
    characterImg: ANGEL_DETERMINED,
    next: 2000
  },
  {
    id: 17,
    text: "I can help! I've watched her a lot!",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 18,
  },
  {
    id: 18,
    text: "Well, just the bits that snake out through the opening...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 19,
  },
  {
    id: 19,
    text: "She never comes out completely.",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 20,
  },
  {
    id: 20,
    text: "Shall we, then?",
    speakerName: "Me",
    characterImg: ANGEL_DETERMINED,
    next: START_PUZZLE
  },
];

const starsDialogue2 = [
  {
    id: 1,
    text: "What did she say?! What did she say?!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 2,
  },
  {
    id: 2,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: ANGEL_HAPPY,
    options: [
      {
        text: "She wants a friend.",
        popularity: 1,
        setEpilogue: 1,
        nextText: 3,
      },
      {
        text: "She wants to be able to meet people without turning them into stone.",
        suspicion: 1,
        nextText: 8,
      },
      {
        text: "She wants to be resurrected.",
        popularity: 2,
        suspicion: 1,
        nextText: 26,
      },
    ],
  },

  // Friend Quest
  {
    id: 3,
    text: "I can be her friend!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 4,
  },
  {
    id: 4,
    text: "Hi Ma'am Gorgon, I'm Angel. We can be friends if you want!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 5,
  },
  {
    id: 5,
    text: "I've got books I can read to you, and maybe Autie Del can take us on a trip.",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 6,
  },
  {
    id: 6,
    text: "We could go to the zoo, so your snakes can find pals to talk to!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 7,
  },
  {
    id: 7,
    text: "Oh, she's disappeared...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: FINISHEPISODE
  },

  // Gorgon Quest
  {
    id: 8,
    text: "Oh. Is that because she has snakes for hair?",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 9,
  },
  {
    id: 9,
    text: "Auntie said the snakes meant she was a mythical Gorgon. Do Gorgons turn people to stone?",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 10,
  },
  {
    id: 10,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: ANGEL_DETERMINED,
    options: [
      {
        text: "Yes, if you meet her gaze or any of the snakes's, you'll turn to stone.",
        setEpilogue: 3,
        nextText: 11,
      },
      {
        text: "Pretty much, yes. But ghosts don't, and she's more ghost than Gorgon right now.",
        setEpilogue: 2,
        nextText: 23,
      },
      {
        text: "Sadly, yes. That's probably why she won't come out of the trunk.",
        setEpilogue: 3,
        nextText: 11,
      },
    ],
  },
  // Gorgon Quest lucky
  {
    id: 11,
    text: "That's a bit scary.",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 12
  },
  {
    id: 12,
    text: "Can we do something about the stone thing?",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 13,
  },
  {
    id: 13,
    text: "I'm afraid not.",
    speakerName: "Me",
    characterImg: ANGEL_DETERMINED,
    next: 14,
  },
  {
    id: 14,
    text: "She's going to be stuck here for a long time, then...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 15,
  },
  {
    id: 15,
    text: "And Auntie Del said there's no Gorgon left alive, so she must be feeling extra lonely.",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 16,
  },
  {
    id: 16,
    text: "All her family and friends are dead...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 17,
  },
  {
    id: 17,
    text: "She's got you to keep her company...",
    speakerName: "Me",
    characterImg: ANGEL_SAD,
    next: 18,
  },
  {
    id: 18,
    text: "Oh yes! I'll be her friend! She can't come out of the trunk but we can still do a lot of stuff!",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 19,
  },
  {
    id: 19,
    text: "We can read books. And listen to the radio and joke about the silly commercials.",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 20,
  },
  {
    id: 20,
    text: "We can play 'I spy' and I can tell her all about the new stuff that's been happening since she got locked up in the trunk.",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 21,
  },
  {
    id: 21,
    text: "Like the telly! And the human rights! And going to the moon!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 22,
  },
  {
    id: 22,
    text: "And the... Oh no! Where has she gone?",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: FINISHEPISODE
  },
  // Gorfon Quest failure
  {
    id: 23,
    text: "How come that's what she wants, then?",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 24,
  },
  {
    id: 24,
    text: "Can ghosts be stuck wanting something they already have? That would suck!",
    speakerName: "Angel",
    characterImg: ANGEL_ANGRY,
    next: 25,
  },
  {
    id: 25,
    text: "Err...",
    speakerName: "Me",
    characterImg: ANGEL_ANGRY,
    next: FINISHEPISODE
  },

  // Resurect Quest
  {
    id: 26,
    text: "What does it mean?",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 27,
  },
  {
    id: 27,
    text: "It means she want to be alive again.",
    speakerName: "Me",
    characterImg: ANGEL_DETERMINED,
    next: 28,
  },
  {
    id: 28,
    text: "But that's impossible, isn't it?",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 29,
  },
  {
    id: 29,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: ANGEL_SAD,
    options: [
      {
        text: "Who knows...",
        popularity: 1,
        setEpilogue: 2,
        nextText: 30,
      },
      {
        text: "Well, no one has found a way yet...",
        popularity: 1,
        setEpilogue: 3,
        nextText: 34,
      },
      {
        text: "She's your ghost now, your responsability! Are you going to give up so easily?",
        popularity: -1,
        suspicion: 1,
        setEpilogue: 3,
        nextText: 34,
      },
    ],
  },
  // Resurect Quest failure
  {
    id: 30,
    text: "I wish I could help her...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 31
  },
  {
    id: 31,
    text: "If she's still around so much time after her death, her essence must have been super strong!",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 32,
  },
  {
    id: 32,
    text: "She probably was such a cool person when she was alive...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 33,
  },
  {
    id: 33,
    text: "*sigh*",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: FINISHEPISODE
  },
  // Resurect Quest mission
  {
    id: 34,
    text: "I'll find a way to rescue-rect her!",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 35,
  },
  {
    id: 35,
    text: "I'll become the smartest scientist around and find a way to make ghosts alive again!",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 36,
  },
  {
    id: 36,
    text: "And then the Gorgon and I will travel the world and help all the other ghosts!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 37,
  },
  {
    id: 37,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: ANGEL_HAPPY,
    options: [
      {
        text: "That sounds like an awesome plan!",
        nextText: 39,
      },
      {
        text: "Maybe you could even have your own show where you help the ghosts...",
        popularity: 2,
        nextText: 38,
      },
      {
        text: "It's nice to have dreams...",
        popularity: -1,
        nextText: 39,
      },
    ],
  },
  {
    id: 38,
    text: "That would be so cool! You could be our guest!",
    speakerName: "Angel",
    characterImg: ANGEL_HAPPY,
    next: 39,
  },
  {
    id: 39,
    text: "It's going to be a lot of work, but that's what friends do! They help each other!",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 40,
  },
  {
    id: 40,
    text: "Sure they do!",
    speakerName: "Me",
    characterImg: ANGEL_DETERMINED,
    next: 41,
  },
  {
    id: 41,
    text: "...",
    speakerName: "Angel",
    characterImg: ANGEL_DETERMINED,
    next: 42,
  },
  {
    id: 42,
    text: "Joss?",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: 43,
  },
  {
    id: 43,
    text: "I think the Gorgon didn't like my plan... She's gone...",
    speakerName: "Angel",
    characterImg: ANGEL_SAD,
    next: FINISHEPISODE
  },
]
