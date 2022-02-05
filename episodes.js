
const HAUNTEDHOUSE_BACKGROUND = "./assets/backgrounds/cathouse.png";
const HAUNTEDHOUSE_MUSIC = "./assets/sounds/hauntedhouse-music.mp3";
const HAUNTEDHOUSE_AUDIO = "./assets/sounds/hauntedhouse-ghost.mp3";
const HAUNTEDHOUSE_GHOST = "./assets/characters/cathouse_ghost_happy.png";

const PIZZA_BACKGROUND = "./assets/backgrounds/loft.png";
const PIZZA_MUSIC = "./assets/sounds/pizza-music.mp3";
const PIZZA_AUDIO = "./assets/sounds/pizza-ghost.mp3";
const PIZZA_GHOST = "./assets/characters/amal_sad.png";

const STARS_BACKGROUND = "./assets/backgrounds/observatory.png";
const STARS_MUSIC = "./assets/sounds/stars-music.mp3";
const STARS_AUDIO = "./assets/sounds/stars-ghost.mp3";
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
    ghostAudioCaption: "One last pizza",
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
    ghostAudioCaption: "I want a friend",
    ghostImg: STARS_GHOST,
    textNodesBeforeAudio: starsDialogue1,
    textNodesAfterAudio: starsDialogue2,
    possibleEpilogues: STARS_EPILOGUES
  },
];
