const MARIA_ANGRY = "./assets/characters/maria_angry.png"
const MARIA_CONFUSED = "./assets/characters/maria_confused.png"
const MARIA_CRYING = "./assets/characters/maria_cry.png"
const MARIA_BITTERSWEET = "./assets/characters/maria_happycry.png"
const MARIA_SAD = "./assets/characters/maria_sad.png"

const AMAL_SAD = "./assets/characters/amal_sad.png"
const AMAL_ANGRY = "./assets/characters/amal_angry.png"


const PIZZAMOOD_CUTE = [
  {
    suspicion: ANYSUS,
    segments: [
      "kk234: such a cute couple 💞",
      "darkling: couple after my heart 💘 ❤️🧡💛💚💙💜",
      "bibop: ❤️love❤️",
    ]
  }
]

const PIZZAMOOD_OMG = [
  {
    suspicion: ANYSUS,
    segments: [
      "coolio: 🍍🍕 🤮",
      "77gus77: pizza toppings a bid deal! 🧐",
      "bibop: 🍍 or not 🍍 that is the ❔",
    ]
  }
]

const PIZZAMOOD_SAD = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: #GiveMAriaAHug 🫂❤️",
      "bibop: sad story... 😿",
      "thelibrarian: No pizza for the brave ☹️",
      "hes: Poor Maria 🌧️☹️☁️",
      "coolio: till death do us part... and beyond 😢",
    ]
  }
]

const PIZZAMOOD_ANGRY = [
  {
    suspicion: ANYSUS,
    segments: [
      "hes: That's harsh ☹️",
      "caty: 😾 Not Nice!!",
      "77gus77: #heartless 🖤",
      "noclue: Can't believe she said this... 😡",
    ]
  }
]

const PIZZA_EPILOGUES = [
  {
    id: 1,
    text: "Another great success for Ghost Whisperer!",
    characterImg: MC_EXCITED,
    popularity: 2,
    suspicion: -1,
    chatMoods: [GENERALMOOD_SUSPICION],
  },
  {
    id: 2,
    text: "Sorry lovelies, not my best day!",
    characterImg: AMAL_SAD,
    popularity: -2,
    chatMoods: [GENERALMOOD_SUSPICION],
  },
  {
    id: 3,
    text: "What a lucky coincidence!",
    characterImg: MC_EXCITED,
    popularity: -1,
    suspicion: 1,
    chatMoods: [GENERALMOOD_SUSPICION],
  },
  {
    id: 4,
    text: "Oopsie! Maybe I didn't hear our ghost's request right?",
    characterImg: AMAL_ANGRY,
    popularity: -1,
    suspicion: 2,
    chatMoods: [GENERALMOOD_SUSPICION],
  },
]

const pizzaDialogue1 = [
  {
    id: 1,
    text: "Hello lovelies, today we're off to help Maria and her recently deceased partner Amal.",
    speakerName: "Me",
    characterImg: MC_SAD,
    next: 2,
  },
  {
    id: 2,
    text: "It's always a heartbreak when your loved one cannot move on, and you cannot understand what tethers them to our living world.",
    speakerName: "Me",
    characterImg: MC_SAD,
    chatMoods: [GENERALMOOD_SAD],
    next: 3,
  },
  {
    id: 3,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MC_SAD,
    options: [
      {
        text: "Ghost Whisperer wraps up all unfinished business and mends those broken hearts!",
        popularity: 1,
        suspicion: 1,
        chatMoods: [GENERALMOOD_SUSPICION],
        nextText: 4,
      },
      {
        text: "I don't think I could stand my dead partner hanging around. If I had a partner, that is...",
        nextText: 4,
      },
      {
        text: "I hope we can help both Amal and Maria find peace today.",
        popularity: 1,
        chatMoods: [PIZZAMOOD_SAD],
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Thank you for coming.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 5,
  },
  {
    id: 5,
    text: "Don't worry about it, that's what I do. Why don't you tell me a little bit about the situation before I go meet with Amal.",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 6,
  },
  {
    id: 6,
    text: "Yes. Well, Amal... died, two weeks ago. And they... I don't know why they're still there.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 7,
  },
  {
    id: 7,
    text: "I can't, I can't deal with them being gone but not really. So I called you. Please, I need them to move on.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [PIZZAMOOD_SAD, PIZZAMOOD_ANGRY],
    next: 8,
  },
  {
    id: 8,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MARIA_CRYING,
    options: [
      {
        text: "I'll do my best.",
        nextText: START_PUZZLE,
      },
      {
        text: "My dear, it's awful that you have to live through that! But I'm here for you now.",
        popularity: 1,
        nextText: START_PUZZLE,
      },
      {
        text: "I love a good challenge!",
        popularity: -1,
        chatMoods: [GENERALMOOD_ANGRY, GENERALMOOD_ANGRY],
        nextText: START_PUZZLE,
      },
    ],
  },
]

const pizzaDialogue2 = [
  {
    id: 1,
    text: "Did they tell you what they want?",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 2,
  },
  {
    id: 2,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    options: [
      {
        text: "They just want one last pizza.",
        chatMoods: [GENERALMOOD_SAD],
        nextText: 3,
      },
      {
        text: "(Lie) They just want one last pizza. A pineapple one.",
        popularity: 1,
        suspicion: 1,
        chatMoods: [PIZZAMOOD_OMG],
        nextText: 15,
      },
      {
        text: "(Lie) They want you to swear you'll never eat pizza again.",
        popularity: 2,
        suspicion: 1,
        chatMoods: [GENERALMOOD_OMG],
        nextText: 35,
      },
    ],
  },

  // Simple Pizza Quest
  {
    id: 3,
    text: "A pizza?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 4,
  },
  {
    id: 4,
    text: "Their unfinished business is a pizza??",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 5,
  },
  {
    id: 5,
    text: "I can't believe it! They won't even be able to eat it, they're all... incorporeal and stuff!",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 6,
  },
  {
    id: 6,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    options: [
      {
        text: "Even ghosts have unrealistic desires sometimes.",
        setEpilogue: 2,
        nextText: 11,
      },
      {
        text: "Maybe the pizza has some special significance for them?",
        setEpilogue: 1,
        nextText: 7,
      },
      {
        text: "They'll probably be satisfied just being offered a pizza.",
        setEpilogue: 1,
        nextText: 7,
      },
    ],
  },
  // Simple Pizza Quest success
  {
    id: 7,
    text: "You're right. It was kind of our ritual, our Friday pizza night to unwind after the week.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [PIZZAMOOD_CUTE],
    next: 8,
  },
  {
    id: 8,
    text: "I guess the symbol is important enough even if Amal can't actually eat anything this time.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 9,
  },
  {
    id: 9,
    text: "And it's Friday, perfect day for a pizza, aren't we lucky.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    chatMoods: [GENERALMOOD_SAD, PIZZAMOOD_SAD],
    next: 10,
  },
  {
    id: 10,
    text: "*wet chuckle*",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: FINISHEPISODE
  },
  // Simple Pizza Quest failure
  {
    id: 11,
    text: "Does this... means I'm going to have to live with their ghost until all of Amal's essence has been exhausted?",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SAD],
    next: 12,
  },
  {
    id: 12,
    text: "...",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 13,
  },
  {
    id: 13,
    text: "I guess you could move to a new place?",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 1300,
  },
  {
    id: 1300,
    text: "Ghosts are usually tied up to a relatively small location, they wouldn't be able to follow you.",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SUSPICION],
    next: 14,
  },
  {
    id: 14,
    text: "This is a nightmare...",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: FINISHEPISODE
  },

  // Pineapple Pizza Quest
  {
    id: 15,
    text: "Pineapple... They up and died, left me all alone with a macabre shade of themselves...",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_ANGRY],
    next: 16
  },
  {
    id: 16,
    text: "...and now they are fucking trolling me about pineapple pizza?!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_OMG, PIZZAMOOD_OMG],
    next: 17,
  },
  {
    id: 17,
    text: "Err...",
    speakerName: "Me",
    characterImg: MARIA_ANGRY,
    next: 18,
  },
  {
    id: 18,
    text: "I can't, I just can't! Get them out. Now!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 19,
  },
  {
    id: 19,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MARIA_ANGRY,
    options: [
      {
        text: "Don't you think you're being a bit dramatic here? Pineapple pizza isn't that disgusting...",
        popularity: -1,
        setEpilogue: 2,
        chatMoods: [GENERALMOOD_ANGRY, PIZZAMOOD_OMG],
        nextText: 32,
      },
      {
        text: "I feel like there's a story there?",
        setEpilogue: 1,
        nextText: 20,
      },
      {
        text: "I can order the pizza, but I feel like you might regret not doing it yourself, later.",
        setEpilogue: 1,
        nextText: 20,
      },
    ],
  },
  // Pineapple Pizza Quest success
  {
    id: 20,
    text: "I probably sound ridiculous, loosing it over a pizza topping. But...",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 21,
  },
  {
    id: 21,
    text: "That's how we met, Amal and I. Bickering over whether pineapple was an acceptable pizza topping.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    chatMoods: [PIZZAMOOD_CUTE, PIZZAMOOD_SAD, GENERALMOOD_CUTE],
    next: 22,
  },
  {
    id: 22,
    text: "And then it took a lot of time for us to get together, to find what was right for us.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 2200,
  },
  {
    id: 2200,
    text: "Because we didn't feel like a couple, but not like friends either.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 23,
  },
  {
    id: 23,
    text: "But all that time, all those years before we learnt about queerplatonic relationships...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 2300,
  },
  {
    id: 2300,
    text: "... before we felt like what we had was valid... In all that time we never missed Friday pizza night.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [GENERALMOOD_CUTE],
    next: 24
  },
  {
    id: 24,
    text: "*sob*",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 25,
  },
  {
    id: 25,
    text: "I don't... I don't want to be alone... I don't want to give Amal's ghost a pineapple pizza.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 26,
  },
  {
    id: 26,
    text: "Not when they can't rib me about it, can't try to convince me to try it. And they won't do that ever again.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [GENERALMOOD_SAD],
    next: 27
  },
  {
    id: 27,
    text: "I guess they won't do that ever again no matter what I do.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 28,
  },
  {
    id: 28,
    text: "Might as well help them move on.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 29,
  },
  {
    id: 29,
    text: "I don't want to live with a ghost, especially not the ghost of someone I love.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 30,
  },
  {
    id: 30,
    text: "And I don't want to be the reason why they have unfinished business. They deserve peace.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 31,
  },
  {
    id: 31,
    text: "SO let's get them some bloody pineapple pizza peace.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: FINISHEPISODE
  },
  // Pineapple Pizza Quest failure
  {
    id: 32,
    text: "You don't know anything!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 33,
  },
  {
    id: 33,
    text: "They are dead, and I don't want to see one of their bloody pineapple pizza abominations ever again!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_ANGRY],
    next: 34,
  },
  {
    id: 34,
    text: "Get out! OUT!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: FINISHEPISODE
  },

  // No Pizza Quest
  {
    id: 35,
    text: "That doesn't sound like Amal at all...",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    chatMoods: [GENERALMOOD_SUSPICION],
    next: 36,
  },
  {
    id: 36,
    text: "Did they really say that?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 37,
  },
  {
    id: 37,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    options: [
      {
        text: "Yes. To be precise, they said \"I don't want Maria to eat pizza anymore.\"",
        nextText: 38,
      },
      {
        text: "That's what it sounded like... The reception can be a bit scrambled sometimes.",
        popularity: -1,
        suspicion: 1,
        setEpilogue: 2,
        chatMoods: [GENERALMOOD_SUSPICION],
        nextText: 70,
      },
      {
        text: "There's probably some symbolic meaning hidden in there... Any idea?",
        nextText: 38,
      },
    ],
  },
  {
    id: 38,
    text: "I really don't see why they would want that...",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 39,
  },
  {
    id: 39,
    text: "Are ghosts sometimes very different from the person they were? Like, more possessive or vindicative?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: 40,
  },
  {
    id: 40,
    text: "I wouldn't say that. Ghosts don't really have a personnality...",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    next: 41,
  },
  {
    id: 41,
    text: "They're more like, that niggling thought you buried, something you forgot to do or regret not having done, embodied into a spectre.",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    next: 42,
  },
  {
    id: 42,
    text: "Well, maybe \"embodied\" isn't the right word...",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    next: 43,
  },
  {
    id: 43,
    text: "So their demand can sound petty or out-of-character.",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    next: 44,
  },
  {
    id: 44,
    text: "But it's always something that would have made sense and been important to their alive self. Even if the never dared to act on it.",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    next: 45,
  },
  {
    id: 45,
    text: "Well, pizza night was a pretty important part of our relationship, but I still don't see...",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    chatMoods: [PIZZAMOOD_SAD],
    next: 46,
  },
  {
    id: 46,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MARIA_CONFUSED,
    options: [
      {
        text: "Maybe it's so important to them, they don't want you to share it with anyone else?",
        setEpilogue: 4,
        nextText: 47,
      },
      {
        text: "Do it matter though? If you have a choice between pizza or a ghost-free life...",
        setEpilogue: 4,
        chatMoods: [PIZZAMOOD_ANGRY],
        nextText: 59,
      },
      {
        text: "Seriously, stop dithering! It sounds like you don't actually want them to move on!",
        setEpilogue: 2,
        chatMoods: [GENERALMOOD_ANGRY],
        nextText: 79,
      },
    ],
  },
  // No Pizza Quest success 1
  {
    id: 47,
    text: "As ridiculous as it sounds... We kind of had an agreement to keep pizza nights our thing.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    chatMoods: [PIZZAMOOD_CUTE, GENERALMOOD_CUTE],
    next: 48,
  },
  {
    id: 48,
    text: "Maybe it makes more sense than I thought. I wish they'd just told me when they were alive though.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 49,
  },
  {
    id: 49,
    text: "They probably felt like it was too much of an imposition.",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SAD],
    next: 50,
  },
  {
    id: 50,
    text: "They wanted you to live freely and not feel tied up to them once they were not around anymore.",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 51,
  },
  {
    id: 51,
    text: "Sometimes we lie to ourselves about what's really important, because of what we believe is socially acceptable...",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 52,
  },
  {
    id: 52,
    text: "You know what, I actually feel better about this whole thing.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 53,
  },
  {
    id: 53,
    text: "I was really worried I would be their unfinished business, that I might have failed them somehow.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 54,
  },
  {
    id: 54,
    text: "But this is something I would gladly do for them.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 55,
  },
  {
    id: 55,
    text: "And while I'm sad they didn't fell like they could tell me in person, I'm glad they got the chance as a ghost.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 56,
  },
  {
    id: 56,
    text: "So I swear I won't eat another pizza ever again. That was Amal and I's thing.",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 57,
  },
  {
    id: 57,
    text: "...",
    speakerName: "Maria",
    characterImg: MARIA_BITTERSWEET,
    next: 58,
  },
  {
    id: 58,
    text: "How come they're not dispering? Aren't ghost supposed to disappear when their request is fulfilled?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: FINISHEPISODE
  },
  // No Pizza Quest success 2
  {
    id: 59,
    text: "That's pretty heartless of you! Of course it matters!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 60,
  },
  {
    id: 60,
    text: "I want Amal's ghost gone, but I love, loved them!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 61,
  },
  {
    id: 61,
    text: "If something was so important to them that they'd refuse to move on, I want to understand!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    chatMoods: [PIZZAMOOD_CUTE],
    next: 62,
  },
  {
    id: 62,
    text: "Of course, that's not what I meant!",
    speakerName: "Me",
    characterImg: MARIA_ANGRY,
    next: 63,
  },
  {
    id: 63,
    text: "But I'm really not the best person to help you figure it out, am I? And it's not like their ghost can contribute either...",
    speakerName: "Me",
    characterImg: MARIA_ANGRY,
    next: 64,
  },
  {
    id: 64,
    text: "So I was thinking you might want to make the promise now? And leave the puzzling out motives for later...",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 65,
  },
  {
    id: 65,
    text: "It would probably be easier with friends to support you and no whispering ghost hovering in your living room...",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    next: 66,
  },
  {
    id: 66,
    text: "Oh, right...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 67,
  },
  {
    id: 67,
    text: "Well, in that case, I swear I won't eat another pizza ever again. There!",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SAD],
    next: 68,
  },
  {
    id: 68,
    text: "...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 69,
  },
  {
    id: 69,
    text: "How come they're not dispering? Aren't ghost supposed to disappear when their request is fulfilled?",
    speakerName: "Maria",
    characterImg: MARIA_CONFUSED,
    next: FINISHEPISODE
  },
  // No Pizza Quest failure confused
  {
    id: 70,
    text: "So they could have just as well said that they wanted me to wear my pizza shirt again...",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 71,
  },
  {
    id: 71,
    text: "Or that I should swear to take care of their jazz records collection.",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 72,
  },
  {
    id: 72,
    text: "I'm pretty sure they said...",
    speakerName: "Me",
    characterImg: MARIA_SAD,
    chatMoods: [GENERALMOOD_SUSPICION],
    next: 73,
  },
  {
    id: 73,
    text: "Doesn't matter. I wouldn't swear it anyway.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    chatMoods: [PIZZAMOOD_ANGRY],
    next: 74,
  },
  {
    id: 74,
    text: "I don't know how much of a person remains in their ghost, but I made a promise to Amal, when... Before they... At the end...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 75,
  },
  {
    id: 75,
    text: "I promised I would live life to its fullest and never use their death as an excuse to hide away from something good.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 76,
  },
  {
    id: 76,
    text: "That's what they asked of me, their dying wish.",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [PIZZAMOOD_SAD],
    next: 77,
  },
  {
    id: 77,
    text: "So there can't be much of who they were in that ghost, if it's going to make that kind of requests.",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 78,
  },
  {
    id: 78,
    text: "I guess I'll just have to get used to it floating around, knowing it looks like them but isn't them...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: FINISHEPISODE
  },
  // No Pizza Quest failure change-of-mind
  {
    id: 79,
    text: "That's pretty heartless of you!",
    speakerName: "Maria",
    characterImg: MARIA_ANGRY,
    next: 80,
  },
  {
    id: 80,
    text: "But maybe not completely untrue...",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 81,
  },
  {
    id: 81,
    text: "I don't know, this is all just so awful!",
    speakerName: "Maria",
    characterImg: MARIA_SAD,
    next: 82,
  },
  {
    id: 82,
    text: "Why did they had to avoid the doctor for so long that their liver ended up beyond help?",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    next: 83,
  },
  {
    id: 83,
    text: "Please go. I'll... I know what I need to do when I'm ready. If I'm ever ready...",
    speakerName: "Maria",
    characterImg: MARIA_CRYING,
    chatMoods: [GENERALMOOD_SAD],
    next: FINISHEPISODE
  },
]
