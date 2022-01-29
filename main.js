/*~~ Set up game logic ~~*/
const LOADING = 0;
const TITLE = 1;
const EPISODE_INTRO = 2;
const DIALOGUE = 3;
const AUDIO = 4;

state = {
  gameStage: LOADING,
  currentEpisode: 0,
  isLoading: true,
  popularity: 0,
  suspicion: 0,
};

ghostAudio = new Audio();
ghostAudio.loop = true;
staticAudio = new Audio("./assets/sounds/radio-static-placeholder.mp3");
staticAudio.loop = true;

function donePreloading() {
  if (state.isLoading) {
    state.isLoading = false;
    state.gameStage = TITLE;
    // setTimeout(showGameStage, 1000); // This is just for testing purposes, to fake a loading time
    showGameStage();
  }
}

function startGame() {
  state.gameStage = EPISODE_INTRO;
  showGameStage();
  $("#episode-title").text(all_episodes[state.currentEpisode].title);
}

function startEpisode() {
  state.gameStage = DIALOGUE;
  showGameStage();
  showTextNode(1);
  console.log(
    "all_episodes[state.currentEpisode].backgroundImg: ",
    all_episodes[state.currentEpisode].backgroundImg
  );
  $(".dialogue-main").css(
    "background-image",
    "url(" + all_episodes[state.currentEpisode].backgroundImg + ")"
  );
}

function showTextNode(textNodeIndex) {
  document.body.onkeyup = {}; // clear keyup listener in case it was set previously
  const dialogue = all_episodes[state.currentEpisode].textNodes;
  const textNode = dialogue.find((textNode) => textNode.id === textNodeIndex);
  $("#character-portrait").css(
    "background-image",
    "url(" + textNode.characterImg + ")"
  );
  $("#character-dialogue").text(textNode.text);
  $("#speaker-name").text(textNode.speakerName);
  $("#responses").empty();
  if (textNode.options) {
    $("#progress-dialogue").addClass("hidden");
    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () =>
        selectOption(option.nextText, option.popularity, option.suspicion)
      );
      $("#responses").append(button);
    });
  } else {
    $("#progress-dialogue").removeClass("hidden");
    // Allow player to increment the story by pressing 'enter' or 'space'
    document.body.onkeyup = function (e) {
      if (e.code == "Space" || e.code == "Enter") {
        showTextNode(textNode.next);
      }
    };
    $("#progress-dialogue").click(() => showTextNode(textNode.next));
  }
}

function selectOption(optionIndex, popularity, suspicion) {
  if (popularity) {
    state.popularity += popularity;
  }
  if (suspicion) {
    state.suspicion += suspicion;
  }
  // TODO: update views based on the updated popularity

  if (optionIndex == START_PUZZLE) {
    // state.gameStage = AUDIO;
    // showGameStage();
    // startAudioPuzzle();
    showTextNode(1); // THIS IS JUST FOR TESTING, LOOP UNTIL DIALOGUE DEV IS FINISHED
  } else {
    showTextNode(optionIndex);
  }
}

function showGameStage() {
  $("#loading").addClass("hidden");
  $("#titlescreen").addClass("hidden");
  $("#episode-intro").addClass("hidden");
  $("#dialogue-container").addClass("hidden");
  $("#audio-container").addClass("hidden");
  switch (state.gameStage) {
    case LOADING:
      $("#loading").removeClass("hidden");
      break;
    case TITLE:
      $("#titlescreen").removeClass("hidden");
      break;
    case EPISODE_INTRO:
      $("#episode-intro").removeClass("hidden");
      break;
    case DIALOGUE:
      $("#dialogue-container").removeClass("hidden");
      break;
    case AUDIO:
      $("#audio-container").removeClass("hidden");
      break;
  }
  console.log("showing stage: ", state.gameStage);
}
