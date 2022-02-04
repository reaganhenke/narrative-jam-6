/*~~ Set up game logic ~~*/
const LOADING = 0;
const TITLE = 1;
const EPISODE_INTRO = 2;
const DIALOGUE = 3;
const AUDIO = 4;
const GAMEEPILOGUE = 5;

state = {
  gameStage: LOADING,
  currentEpisode: 0,
  isLoading: true,
  popularity: 10,
  suspicion: 0,
  finishedAudioPuzzle: false,
  episode_ending: null,
  episode_music: new Audio(),
};

function donePreloading() {
  if (state.isLoading) {
    state.isLoading = false;
    state.gameStage = TITLE;
    // setTimeout(showGameStage, 5000); // This is just for testing purposes, to fake a loading time
    showGameStage();
  }
}

function startGame() {
  state.gameStage = EPISODE_INTRO;
  showGameStage();
  $("#episode-title").text(all_episodes[state.currentEpisode].episodeTitle);
  $("#episode-intro").css(
    "background-image",
    "url(" + all_episodes[state.currentEpisode].backgroundImg + ")"
  );
}

function startEpisode() {
  state.gameStage = DIALOGUE;
  state.episode_music.src = all_episodes[state.currentEpisode].episodeMusic;
  state.episode_music.loop = true;
  state.episode_music.play();
  showGameStage();
  showTextNode(1);
  updateViews();
  $("#dialogue-container").css(
    "background-image",
    "url(" + all_episodes[state.currentEpisode].backgroundImg + ")"
  );
}

function showTextNode(textNodeIndex) {
  document.body.onkeyup = {}; // clear keyup listener in case it was set previously
  $("#progress-dialogue").off("click");
  $(".dialogue-wrapper").off("click");

  const dialogue = state.finishedAudioPuzzle
    ? all_episodes[state.currentEpisode].textNodesAfterAudio
    : all_episodes[state.currentEpisode].textNodesBeforeAudio;
  const textNode = dialogue.find((textNode) => textNode.id === textNodeIndex);

  $("#character-portrait").css(
    "background-image",
    "url(" + textNode.characterImg + ")"
  );
  $("#character-dialogue").html(textNode.text);
  $("#speaker-name").text(textNode.speakerName);
  $("#responses").empty();
  if (textNode.options) {
    $("#progress-dialogue").addClass("hidden");
    textNode.options.forEach((option) => {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => selectOption(option));
      $("#responses").append(button);
    });
  } else {
    $("#progress-dialogue").removeClass("hidden");
    textNode.chatMoods?.forEach((chatMood) => {
      showChat(chatMood);
    });
    // Allow player to increment the story by pressing 'enter' or 'space'
    document.body.onkeyup = function (e) {
      if (e.code == "Space" || e.code == "Enter") {
        advance(textNode);
      }
    };
    $("#progress-dialogue").click(function (event) {
      event.stopPropagation();
      advance(textNode);
    });
    $(".dialogue-wrapper").click(function () {
      advance(textNode);
    });
  }
}

function advance(textNode) {
  handlePopularityAndSuspicion(textNode.popularity, textNode.suspicion);
  if (textNode.next == FINISHEPISODE) {
    showEpilogue();
  } else if (textNode.next == START_PUZZLE) {
    state.gameStage = AUDIO;
    showGameStage();
    startAudioPuzzle();
  } else {
    showTextNode(textNode.next);
  }
}

function handlePopularityAndSuspicion(
  popularityAdjustment,
  suspicionAdjustment
) {
  if (popularityAdjustment) {
    const newPopularity = state.popularity + popularityAdjustment;
    state.popularity = newPopularity >= 0 ? newPopularity : 0;
  }
  if (suspicionAdjustment) {
    const newSuspicion = state.suspicion + suspicionAdjustment;
    state.suspicion = newSuspicion >= 0 ? newSuspicion : 0;
  }
}

function selectOption(option) {
  handlePopularityAndSuspicion(option.popularity, option.suspicion);
  if (option.setEpilogue) {
    state.episode_ending = option.setEpilogue;
  }
  updateViews();
  option.chatMoods?.forEach((chatMood) => {
    showChat(chatMood);
  });
  if (option.nextText == START_PUZZLE && state.gameStage == DIALOGUE) {
    state.gameStage = AUDIO;
    showGameStage();
    startAudioPuzzle();
  } else {
    showTextNode(option.nextText);
  }
}

function showChat(chatMood) {
  var chatOptions = [];
  if (chatMood[0].suspicion == ANYSUS) {
    chatOptions = chatMood[0];
  } else {
    if (state.suspicion < 3) {
      // TODO: adjust thresholds for suspicion
      chatOptions = chatMood.find((segments) => segments.suspicion == LOWSUS);
    } else if (state.suspicion >= 3 && state.suspicion < 5) {
      chatOptions = chatMood.find((segments) => segments.suspicion == MEDSUS);
    } else if (state.suspicion >= 5) {
      chatOptions = chatMood.find((segments) => segments.suspicion == HIGHSUS);
    }
  }

  const newSegmentText =
    chatOptions.segments[
      Math.floor(Math.random() * chatOptions.segments.length)
    ];
  const chatSegment = document.createElement("p");
  chatSegment.innerText = newSegmentText;
  $("#livestream-chat").append(chatSegment);
}

function updateViews() {
  const newViews = state.popularity * 100;
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
    case GAMEEPILOGUE:
      $("#episode-epilogue").removeClass("hidden");
      break;
  }
}

function showEpilogue() {
  const epilogueObject = all_episodes[
    state.currentEpisode
  ].possibleEpilogues.find(
    (epilogue) => epilogue.id === state.episode_ending
  );
  document.body.onkeyup = {}; // Else pressing Space/Enter will modify the pop/sus variables again
  handlePopularityAndSuspicion(epilogueObject.popularity, epilogueObject.suspicion);
  updateViews(); // Display the Popularity change
  $(".dialogue-wrapper").addClass("hidden");
  $(".epilogue-wrapper").removeClass("hidden");
  $("#next-episode").removeClass("hidden");
  $("#character-portrait").css(
    "background-image",
    "url(" + epilogueObject.characterImg + ")"
  );
  // NOTE: there's no error handling here. If an epilogue isn't set, there will be a blank screen.
  $("#episode-epilogue-result").text(epilogueObject.text);

  if (state.suspicion > 6) {
    gameOverSus();
  }
}

function nextEpisode() {
  state.episode_music.pause();

  $(".dialogue-wrapper").removeClass("hidden");
  $(".epilogue-wrapper").addClass("hidden");
  $("#next-episode").addClass("hidden");
  $("#livestream-chat").empty();

  if (state.currentEpisode == all_episodes.length - 1) {
    gameEpilogue();
  } else {
    state.finishedAudioPuzzle = false;
    state.currentEpisode++;
    startGame();
  }
}

function gameOverSus() {
  state.gameStage = GAMEEPILOGUE;
  showGameStage();
  $("#epilogue-result").text(GAME_EPILOGUES[4].content);
  $("#episode-epilogue").css("background-image", "url(" + GAME_EPILOGUES[4].backgroundImg + ")");
  $("#next-episode").addClass("hidden");
}

function gameEpilogue() {
  state.gameStage = GAMEEPILOGUE;
  showGameStage();

  var gameEpilogueId = 0;
  if (state.popularity >= 8 && state.popularity < 13) {
    gameEpilogueId = 1;
  } else if (state.popularity >= 13 && state.popularity < 20) {
    gameEpilogueId = 2;
  } else if (state.popularity >= 20) {
    gameEpilogueId = 3;
  }

  $("#epilogue-result").text(GAME_EPILOGUES[gameEpilogueId].content);
  $("#episode-epilogue").css("background-image", "url(" + GAME_EPILOGUES[gameEpilogueId].backgroundImg + ")");
}
