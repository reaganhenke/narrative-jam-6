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
  finishedAudioPuzzle: false // remember to unset this
};

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
  state.gameStage = AUDIO;
  showGameStage();
  startAudioPuzzle();// TEMPORARY, FOR TESTING. REPLACE WITH BELOW. 

  // state.gameStage = DIALOGUE;
  // showGameStage();
  // showTextNode(1);
  // updateViews();
  // $(".dialogue-main").css(
  //   "background-image",
  //   "url(" + all_episodes[state.currentEpisode].backgroundImg + ")"
  // );
}

function showTextNode(textNodeIndex) {
  document.body.onkeyup = {}; // clear keyup listener in case it was set previously
  console.log("state.finishedAudioPuzzle:", state.finishedAudioPuzzle);
  console.log('all_episodes[state.currentEpisode]', all_episodes[state.currentEpisode]);

  const dialogue = state.finishedAudioPuzzle ? all_episodes[state.currentEpisode].textNodesAfterAudio: all_episodes[state.currentEpisode].textNodesBeforeAudio;
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
        selectOption(option)
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

function selectOption(option) {
  if (option.popularity) {
    state.popularity += option.popularity;
  }
  if (option.suspicion) {
    state.suspicion += option.suspicion;
  }
  updateViews();
  if (option.chatMood) {
   $("#livestream-chat").empty();
    // TODO: update this to be a random selection. How many show each time? Add incrementally?
    option.chatMood.forEach((chatText) => {
      const chatSegment = document.createElement("p");
      chatSegment.innerText = chatText;
      $("#livestream-chat").append(chatSegment);
    });
  
  }

  if (option.nextText == START_PUZZLE) {
    state.gameStage = AUDIO;
    showGameStage();
    startAudioPuzzle();
  } else {
    showTextNode(option.nextText);
  }
}

function updateViews() {
  // TODO: finalize how this updates. 
  const newViews = 1000 + (state.popularity * 100);
  $("#view-number").text(newViews);
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
