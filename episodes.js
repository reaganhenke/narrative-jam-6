
const HAUNTEDHOUSE_BACKGROUND = "./assets/backgrounds/cathouse_shadow.png";
const HAUNTEDHOUSE_MUSIC = "./assets/sounds/music-placeholder.wav";
const HAUNTEDHOUSE_AUDIO = "./assets/sounds/ghost-request-placeholder2.mp3";

const PIZZA_BACKGROUND = "./assets/backgrounds/cathouse_shadow.png";
const PIZZA_MUSIC = "./assets/sounds/music-placeholder.wav";
const PIZZA_AUDIO = "./assets/sounds/ghost-request-placeholder.mp3";

const STARS_BACKGROUND = "./assets/backgrounds/cathouse_shadow.png";
const STARS_MUSIC = "./assets/sounds/music-placeholder.wav";
const STARS_AUDIO = "./assets/sounds/ghost-request-placeholder.mp3";

const all_episodes = [
  {
    episodeTitle: "The Haunted House",
    backgroundImg: HAUNTEDHOUSE_BACKGROUND,
    episodeMusic: HAUNTEDHOUSE_MUSIC,
    ghostAudio: HAUNTEDHOUSE_AUDIO,
    ghostAudioCaption: "Find a loving owner for my house",
    textNodesBeforeAudio: hauntedHouseDialogue1,
    textNodesAfterAudio: hauntedHouseDialogue2,
    possibleEpilogues: HAUNTEDHOUSE_EPILOGUES
  },
  {
    episodeTitle: "The Pizza Conundrum",
    backgroundImg: PIZZA_BACKGROUND,
    episodeMusic: PIZZA_MUSIC,
    ghostAudio: PIZZA_AUDIO,
    ghostAudioCaption: "i would like to eat some pizza one last time",
    textNodesBeforeAudio: pizzaDialogue1,
    textNodesAfterAudio: pizzaDialogue2,
    possibleEpilogues: PIZZA_EPILOGUES
  },
  {
    episodeTitle: "Friendship Under the Stars",
    backgroundImg: STARS_BACKGROUND,
    episodeMusic: STARS_MUSIC,
    ghostAudio: STARS_AUDIO,
    ghostAudioCaption: "??",
    textNodesBeforeAudio: starsDialogue1,
    textNodesAfterAudio: starsDialogue2,
    possibleEpilogues: STARS_EPILOGUES
  },
];
