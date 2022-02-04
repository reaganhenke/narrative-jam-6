const GREG_ANGRY = "./assets/characters/greg_angry.png";
const GREG_DISGUSTED = "./assets/characters/greg_disgusted.png";
const GREG_GRUMPY = "./assets/characters/greg_grumpy.png";

const CATGRANDMA_SAD = "./assets/characters/cathouse_ghost_sad.png"
const CATGRANDMA_ANGRY = "./assets/characters/cathouse_ghost_angry.png"

const HAUNTEDHOUSEMOOD_CUTE = [
  {
    suspicion: ANYSUS,
    segments: [
      "bibop: i ❤️ cats",
      "coolio: 😻",
      "kk234: that lady's such a sweetheart 👵 🐈 💖"
    ]
  }
]

const HAUNTEDHOUSEMOOD_OMG = [
  {
    suspicion: ANYSUS,
    segments: [
      "thelibrarian: Wandering houses are SO awesome!!",
      "kk234: omg that guy's so grumpy..."
    ]
  }
]

const HAUNTEDHOUSEMOOD_SAD = [
  {
    suspicion: ANYSUS,
    segments: [
      "coolio: NOOOOooooooo 😿",
    ]
  }
]

const HAUNTEDHOUSEMOOD_ANGRY = [
  {
    suspicion: ANYSUS,
    segments: [
      "caty: that guy has no ❤️",
      "freeSprite: Down with capitalism!!☠️🤑☠️",
      "hes: #feedGregToTheCats 👿",
      "coolio: greg rotten egg 🤢",
      "freeSprite: 🤬 I hatz that guy!"
    ]
  }
]

const HAUNTEDHOUSE_EPILOGUES = [
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
    characterImg: CATGRANDMA_SAD,
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
    characterImg: CATGRANDMA_ANGRY,
    popularity: -1,
    suspicion: 2,
    chatMoods: [GENERALMOOD_SUSPICION],
  },
];

const hauntedHouseDialogue1 = [
  {
    id: 1,
    text: "Hello lovelies, today we've got a call from Greg, from Lovely Homes Real Estate!",
    speakerName: "Me",
    characterImg: MC_EXCITED,
    chatMoods: [GENERALMOOD_SUSPICION],
    next: 2
  },
  {
    id: 2,
    text: "Greg is trying to sell a very special house, but the previous owner isn't too happy about visitors...",
    speakerName: "Me",
    characterImg: MC_EXCITED,
    next: 3
  },
  {
    id: 3,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: MC_EXCITED,
    options: [
      {
        text: "Let's go meet that ghost!",
        nextText: 4,
      },
      {
        text: "A very special house indeed, for it has legs to move around!",
        popularity: 1,
        chatMoods: [GENERALMOOD_OMG],
        nextText: 4,
      },
      {
        text: "How is that house special, you ask me? Well, let's go and see!",
        popularity: 1,
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Hello Greg, so we're in the famed \"four-leg house\".",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    next: 5,
  },
  {
    id: 5,
    text: "Yes, and it would be a perfect deal if not for that wailing ghost inside.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 6,
  },
  {
    id: 6,
    text: "Families are lining up for a chance make the only remaining wandering house of the county their own.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [GENERALMOOD_OMG, HAUNTEDHOUSEMOOD_OMG],
    next: 600,
  },
  {
    id: 600,
    text: "But that old hag has been sabotaging all of my visits so far!",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY],
    next: 7,
  },
  {
    id: 7,
    text: "Please convince her to move on...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 8,
  },
  {
    id: 8,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Let's meet her then...",
        nextText: START_PUZZLE,
      },
      {
        text: "A dead hag in a witchy house, I love that!",
        popularity: 1,
        suspicion: 1,
        nextText: START_PUZZLE,
      },
      {
        text: "Now, now, you shouldn't speak bad of the dead!",
        nextText: START_PUZZLE,
      },
    ],
  },
];

const hauntedHouseDialogue2 = [
  {
    id: 1,
    text: "So, what does the lady wants?",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2,
  },
  {
    id: 2,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "She wants you to find loving owners for the house.",
        nextText: 3,
      },
      {
        text: "(Lie) She wants you to find a loving new home for her cats.",
        popularity: 1,
        suspicion: 1,
        chatMoods: [HAUNTEDHOUSEMOOD_CUTE, HAUNTEDHOUSEMOOD_CUTE],
        nextText: 14,
      },
      {
        text: "(Lie) She wants you to find loving owners for the house, that will also adopt her cats.",
        popularity: 2,
        suspicion: 1,
        chatMoods: [GENERALMOOD_CUTE, HAUNTEDHOUSEMOOD_CUTE],
        nextText: 28,
      },
    ],
  },

  // House quest
  {
    id: 3,
    text: "A loving owner?! I'm a real estate agent, not a bleeding-heart volunteer at the dog shelter.",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY],
    next: 4
  },
  {
    id: 4,
    text: "Yes, but you get to pick who you sell to, don't you?",
    speakerName: "Me",
    characterImg: MC_EXCITED,
    next: 5,
  },
  {
    id: 5,
    text: "I'll sell to whoever makes the highest offer and I couldn't care less if they trash the house before the end of the month!",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_ANGRY],
    next: 6,
  },
  {
    id: 6,
    text: "Actually, that would actually be good for me, because then they'd need another house...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 7,
  },
  {
    id: 7,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Surely you can find someone who'll make a good offer AND take care of the place?",
        setEpilogue: 1,
        nextText: 8,
      },
      {
        text: "Come on, she's dead, surely you can make an effort to give her some final peace!",
        setEpilogue: 2,
        nextText: 12,
      },
      {
        text: "You'd be wreck the last local wandering house? Bad for business, that...",
        setEpilogue: 1,
        nextText: 8,
      },
    ],
  },
  // House Quest success
  {
    id: 8,
    text: "Oh, well, I guess you are right. But can you at least convince her to stop wailing so I can do visits and open house days?",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 9,
  },
  {
    id: 9,
    text: "That's not how it works, actually, ghosts don't have the cognitive abilities to be reasoned with...",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    next: 10,
  },
  {
    id: 10,
    text: "But if you promise to fulfil her request, that should be enough for her to move on.",
    speakerName: "Me",
    characterImg: GREG_DISGUSTED,
    next: 1000,
  },
  {
    id: 1000,
    text: "You'll have to mean it though, ghosts can sense that kind of stuff...",
    speakerName: "Me",
    characterImg: GREG_DISGUSTED,
    next: 11,
  },
  {
    id: 11,
    text: "*sigh* Madam, I promise I will only sell this house to people who will appreciate it and care for it properly.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: FINISHEPISODE
  },
  // House Quest failure
  {
    id: 12,
    text: "I knew this would be a waste of time...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 13
  },
  {
    id: 13,
    text: "You interpreter people should stick to helping greiving family members, and leave the serious stuff to exorcists.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 1300,
  },
  {
    id: 1300,
    text: "At least they know not to mix up business and feelings...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY],
    next: FINISHEPISODE,
  },

  // Cat Quest
  {
    id: 14,
    text: "Find a new home for her cats? I'm not coming anywhere near those devilish animals!",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY],
    next: 15,
  },
  {
    id: 15,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_ANGRY,
    options: [
      {
        text: "But, cats... How can you not like cats?",
        popularity: 1,
        setEpilogue: 2,
        nextText: 16,
      },
      {
        text: "Seriously? Are you that much of a coward?",
        setEpilogue: 2,
        nextText: 16,
      },
      {
        text: "It's a simple enough request, considering this sale will bring you a huge bonus...",
        setEpilogue: 4,
        nextText: 20,
      },
    ],
  },
  // Cat Quest failure
  {
    id: 16,
    text: "I'll never understand how people can be that blind when they think something is cute!",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: 1600,
  },
  {
    id: 1600,
    text: "Cats leave hair everywhere, they are arrogant and volatile, and like to slice people to ribbons for fun.",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: 17,
  },
  {
    id: 17,
    text: "That's...",
    speakerName: "Me",
    characterImg: GREG_ANGRY,
    next: 18,
  },
  {
    id: 18,
    text: "The Animal Control Unit are picking them up tomorrow, and that's final.",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [HAUNTEDHOUSEMOOD_SAD, GENERALMOOD_SAD, HAUNTEDHOUSEMOOD_ANGRY],
    next: 19,
  },
  {
    id: 19,
    text: "I guess I should have the exorcist come around too, since there's no getting rid of that banshee in a politically correct way...",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [GENERALMOOD_OMG],
    next: FINISHEPISODE
  },
  // Cat Quest success
  {
    id: 20,
    text: "Humph!",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 21,
  },
  {
    id: 21,
    text: "You're not wrong.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 22,
  },
  {
    id: 22,
    text: "Any ideas?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    next: 23,
  },
  {
    id: 23,
    text: "I do have a cousin who might be interested...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2300,
  },
  {
    id: 2300,
    text: "The trio of siblings he had his heart set on got adopted before he made up his mind. He won't stop monaing about it.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 2301,
  },
  {
    id: 2301,
    text: "He said kittens are too much work, too, so he probably won't mind that those are old.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [HAUNTEDHOUSEMOOD_CUTE],
    next: 24,
  },
  {
    id: 24,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "Fantastic! We'll make a cat lover out of you!",
        nextText: 25,
      },
      {
        text: "Let's tell our lovely ghost that her fluffy love-balls's future is all figured out then!",
        popularity: 1,
        chatMoods: [GENERALMOOD_CUTE],
        nextText: 25,
      },
      {
        text: "Guess that's settled then.",
        nextText: 25,
      },
    ],
  },
  {
    id: 25,
    text: "What you said...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 26,
  },
  {
    id: 26,
    text: "...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [GENERALMOOD_SUSPICION],
    next: 27,
  },
  {
    id: 27,
    text: "Why's that ghost not moving on already??",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: FINISHEPISODE,
  },

  // Full Quest
  {
    id: 28,
    text: "You can't be serious?",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    next: 29,
  },
  {
    id: 29,
    text: "Oh, I never fool around when it comes to ghosts.",
    speakerName: "Me",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_SUSPICION],
    next: 2900,
  },
  {
    id: 2900,
    text: "You wanted to know what it would take for this one here to leave, and that's her demand.",
    speakerName: "Me",
    characterImg: GREG_ANGRY,
    next: 2901,
  },
  {
    id: 2901,
    text: "Find buyers who will take care of both the house and the cats.",
    speakerName: "Me",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_CUTE],
    next: 30,
  },
  {
    id: 30,
    text: "This is utterly ridiculous! You're probably a sham anyway, how do I know that this little gadget of yours is genuine?",
    speakerName: "Greg",
    characterImg: GREG_ANGRY,
    chatMoods: [GENERALMOOD_ANGRY],
    next: 31,
  },
  {
    id: 31,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_ANGRY,
    options: [
      {
        text: "I'm sure you checked my credentials before making the appointment.",
        nextText: 32,
      },
      {
        text: "So I'm guessing you won't do it then?",
        setEpilogue: 2,
        nextText: 42,
      },
      {
        text: "Hey, don't shoot the messenger because you don't like the message!",
        nextText: 32,
      },
    ],
  },
  {
    id: 32,
    text: "Yes, well, maybe you know what you're talking about, but that ghost is so much trouble.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 3200,
  },
  {
    id: 3200,
    text: "I thought it'd want a visit from some long-lost friend or something.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY],
    next: 33,
  },
  {
    id: 33,
    text: "She! She'd want! And how would that be any easier?",
    speakerName: "Me",
    characterImg: GREG_DISGUSTED,
    next: 34,
  },
  {
    id: 34,
    text: "I assumed it would be your job, not mine.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 35,
  },
  {
    id: 35,
    text: "What should I say?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    options: [
      {
        text: "I guess someone could make great haunted wandering museum out of the house...",
        setEpilogue: 2,
        nextText: 36,
      },
      {
        text: "Selling the house is your job, not mine...",
        popularity: -1,
        setEpilogue: 1,
        nextText: 39,
      },
      {
        text: "I'd be happy to find buyers and pocket the commission...",
        setEpilogue: 1,
        popularity: -1,
        suspicion: 1,
        chatMoods: [GENERALMOOD_SUSPICION],
        nextText: 39,
      },
    ],
  },
  // Full Quest museum failure
  {
    id: 36,
    text: "That's actually not a bad idea...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 37,
  },
  {
    id: 37,
    text: "Sorry, what? I was being sarcastic!",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    next: 38,
  },
  {
    id: 38,
    text: "Thank you for coming. I have to call my boss now, but feel free to grab a cat or two on your way out.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    chatMoods: [HAUNTEDHOUSEMOOD_ANGRY],
    next: FINISHEPISODE,
  },
  // Full Quest success
  {
    id: 39,
    text: "I suppose I could just look at it like a particularly tricky sell. It was already unusual, after all...",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 40,
  },
  {
    id: 40,
    text: "So you'll take care of it?",
    speakerName: "Me",
    characterImg: GREG_GRUMPY,
    next: 41,
  },
  {
    id: 41,
    text: "Yes, yes, if only to be free of that terrible noise and the white hairs on my suit.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: FINISHEPISODE,
  },
  // Full Quest abandonned failure
  {
    id: 42,
    text: "Definitively not.",
    speakerName: "Greg",
    characterImg: GREG_GRUMPY,
    next: 43,
  },
  {
    id: 43,
    text: "Thank you for your... service.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    next: 44,
  },
  {
    id: 44,
    text: "If that ghost will not be reasonnable, then I'll have to deal with it like the pest it is, and have it exorcised.",
    speakerName: "Greg",
    characterImg: GREG_DISGUSTED,
    chatMoods: [GENERALMOOD_OMG],
    next: FINISHEPISODE
  },
]
