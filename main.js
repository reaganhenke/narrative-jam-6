/*~~ Set up game logic ~~*/
const LOADING = 0;
const TITLE = 1;
const EPISODE_INTRO = 2;
const DIALOGUE = 3;
const AUDIO = 4;
const EPILOGUE = 5;

state = {
  gameStage: LOADING,
  currentEpisode: 0,
  isLoading: true,
  popularity: 0,
  suspicion: 0,
  finishedAudioPuzzle: false,
  episode_ending: null
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
  state.gameStage = DIALOGUE;
  showGameStage();
  showTextNode(1);
  updateViews();
  $(".dialogue-main").css(
    "background-image",
    "url(" + all_episodes[state.currentEpisode].backgroundImg + ")"
  );
}

function showTextNode(textNodeIndex) {
  document.body.onkeyup = {}; // clear keyup listener in case it was set previously
  $("#progress-dialogue").off("click");

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
        if (textNode.next == "FINISHEPISODE") {
          showEpilogue();
        } else {
          showTextNode(textNode.next);
        }
      }
    };
    $("#progress-dialogue").click(function() {
      if (textNode.next == "FINISHEPISODE") {
        showEpilogue();
      } else {
        showTextNode(textNode.next);
      }
    });
  }
}

function selectOption(option) {
  if (option.popularity) {
    state.popularity += option.popularity;
  }
  if (option.suspicion) {
    state.suspicion += option.suspicion;
    if (state.suspicion > 5) { // TODO: determine actual threshold
      gameOver();
      return;
    }
  }
  if (option.setEpilogue) {
    state.episode_ending = option.setEpilogue
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
  $("#episode-epilogue").addClass("hidden");
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
    case EPILOGUE:
      $("#episode-epilogue").removeClass("hidden");
      break;
  }
}

function showEpilogue() {
  state.gameStage = EPILOGUE;
  showGameStage();
  // NOTE: there's currently no error handling here. If an epilogue isn't set, there will be a blank screen.
  $("#epilogue-result").text(possible_epilogues.find((epilogue) => epilogue.id === state.episode_ending).text);
}

function nextEpisode() {
  if (state.currentEpisode == all_episodes.length - 1) {
    $("#epilogue-result").text('game over'); // TODO: customize final ending based on suspicion and popularity
    $("#next-episode").addClass("hidden");
  } else {
    state.finishedAudioPuzzle = false;
    state.currentEpisode++;
    startGame();
  }
}

function gameOver() {
  state.gameStage = EPILOGUE;
  showGameStage();
  $("#epilogue-result").text("You raised suspicion too much! You lose!");
  $("#next-episode").addClass("hidden");
}
