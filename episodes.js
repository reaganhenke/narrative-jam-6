
const HOUSE_BACKGROUND = "./assets/backgrounds/cathouse_shadow.png";
const CREEPY_MUSIC = "./assets/sounds/music-placeholder.wav";
const PIZZA_AUDIO = "./assets/sounds/ghost-request-placeholder.mp3";

const all_episodes = [
  {
    episodeTitle: "The Haunted House",
    backgroundImg: HOUSE_BACKGROUND,
    episodeMusic: CREEPY_MUSIC,
    ghostAudio: PIZZA_AUDIO,
    ghostAudioCaption: "i would like to eat some pizza one last time",
    textNodesBeforeAudio: hauntedHouseDialogue1,
    textNodesAfterAudio: hauntedHouseDialogue2
  }
];
