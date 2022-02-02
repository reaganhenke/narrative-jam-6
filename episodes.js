
const HAUNTEDHOUSE_BACKGROUND = "./assets/backgrounds/cathouse.png";
const HAUNTEDHOUSE_MUSIC = "./assets/sounds/music-placeholder.wav";
const HAUNTEDHOUSE_AUDIO = "./assets/sounds/ghost-request-cat-placeholder.mp3";
const HAUNTEDHOUSE_GHOST = "./assets/characters/cathouse_ghost_happy.png";

const PIZZA_BACKGROUND = "./assets/backgrounds/loft.png";
const PIZZA_MUSIC = "./assets/sounds/music-placeholder.wav";
const PIZZA_AUDIO = "./assets/sounds/pizza_music";
const PIZZA_GHOST = "./assets/characters/amal_sad.png";

const STARS_BACKGROUND = "./assets/backgrounds/cathouse_shadow.png";
const STARS_MUSIC = "./assets/sounds/music-placeholder.wav";
const STARS_AUDIO = "./assets/sounds/ghost-request-placeholder.mp3";
const STARS_GHOST = "./assets/characters/gorgon_lonely.png";

const all_episodes = [
  {
    episodeTitle: "The Haunted House",
    backgroundImg: HAUNTEDHOUSE_BACKGROUND,
    episodeMusic: HAUNTEDHOUSE_MUSIC,
    ghostAudio: HAUNTEDHOUSE_AUDIO,
    ghostAudioCaption: "Find a loving owner for my house",
    ghostImg: HAUNTEDHOUSE_GHOST,
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
    ghostImg: PIZZA_GHOST,
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
    ghostImg: STARS_GHOST,
    textNodesBeforeAudio: starsDialogue1,
    textNodesAfterAudio: starsDialogue2,
    possibleEpilogues: STARS_EPILOGUES
  },
];
