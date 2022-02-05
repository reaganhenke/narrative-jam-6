var volumeSweetSpot;
var speedSweetSpot;
var staticSweetSpot;

ghostAudio = new Audio();
ghostAudio.loop = true;
staticAudio = new Audio("./assets/sounds/static-1.mp3");
staticAudio.loop = true;
staticAudio2 = new Audio("./assets/sounds/static-2.mp3");
staticAudio2.loop = true;

paused = true;

function startAudioPuzzle() {
  $("input").val(5);

  state.episode_music.volume = 0.1; // Turn down episode music in the background
  $("#caption").text(all_episodes[state.currentEpisode].ghostAudioCaption);
  $("#ghost-portrait").css(
    "background-image",
    "url(" + all_episodes[state.currentEpisode].ghostImg + ")"
  );
  $("#audio-container").css(
    "background-image",
    "url(" + all_episodes[state.currentEpisode].backgroundImg + ")"
  );
  ghostAudio.src = all_episodes[state.currentEpisode].ghostAudio;
  ghostAudio.volume = 0;
  ghostAudio.playbackRate = 4;
  pauseAudio();
  volumeSweetSpot = Math.random() * 10;
  staticSweetSpot = Math.random() * 10;
  speedSweetSpot = Math.random() * 10;
}

function pauseAudio() {
  paused = true;
  ghostAudio.pause();
  staticAudio.pause();
  staticAudio2.pause();
  $("#play-button").removeClass("pressed");
  $("#pause-button").addClass("pressed");
  $("#audio-screen").css("background-image", "url(assets/audio/audio_paused.gif)");
  $("#caption").css("opacity", 0);
}

function playAudio() {
  paused = false;
  ghostAudio.play();
  staticAudio.play();
  staticAudio2.play();
  $("#play-button").addClass("pressed");
  $("#pause-button").removeClass("pressed");
  checkIfSolved();
}

function updateVolumeSlider(current) {
  let closenessToSweetSpot = 1;
  if (current != volumeSweetSpot) {
    closenessToSweetSpot =
      current > volumeSweetSpot
        ? 1 - (current - volumeSweetSpot) / (10 - volumeSweetSpot)
        : current / volumeSweetSpot;
  }
  staticAudio.volume = 1 - closenessToSweetSpot;
  ghostAudio.volume = closenessToSweetSpot;
  checkIfSolved();
}

function updateSpeedSlider(current) {
  // can be between 0.1 and 4, aiming for 1
  if (current == speedSweetSpot) {
    ghostAudio.playbackRate = 1;
  } else {
    var closenessToSweetSpot =
      current > speedSweetSpot
        ? ((current - speedSweetSpot) / (10 - speedSweetSpot)) * 3 + 1
        : current / speedSweetSpot;
    if (closenessToSweetSpot < 0.1) {
      closenessToSweetSpot = 0.1;
    }
    ghostAudio.playbackRate = closenessToSweetSpot;
  }
  checkIfSolved();
}

function updateStaticSlider(current) {
  let closenessToSweetSpot = 1;
  if (current != staticSweetSpot) {
    closenessToSweetSpot =
      current > staticSweetSpot
        ? 1 - (current - staticSweetSpot) / (10 - staticSweetSpot)
        : current / staticSweetSpot;
  }
  staticAudio2.volume = 1 - closenessToSweetSpot;
  checkIfSolved();
}

function checkIfSolved() {
  if (!paused) {
    const volumeAccuracy = ghostAudio.volume;
    const staticAccuracy = 1 - staticAudio2.volume;
    const playbackAccuracy =
      ghostAudio.playbackRate > 1
        ? (3 - ghostAudio.playbackRate) / 2
        : ghostAudio.playbackRate / 1;

    // If accuracies meet minimum limits, show average, else nothing
    const accuracy =
      volumeAccuracy > 0.5 && playbackAccuracy > 0.25 && staticAccuracy > 0.55
        ? (volumeAccuracy + playbackAccuracy + staticAccuracy) / 3
        : 0;

    if (accuracy < 0.25) {
      $("#audio-screen").css("background-image", "url(assets/audio/audio_bad.gif)");
    } else if (accuracy >= 0.25 && accuracy < 0.75) {
      $("#audio-screen").css("background-image", "url(assets/audio/audio_ok.gif)");
    } else {
      $("#audio-screen").css("background-image", "url(assets/audio/audio_good.gif)");
    }

    $("#caption").css("opacity", accuracy);      
  }
}

function finishAudioPuzzle() {
  state.episode_music.volume = 1;
  pauseAudio();
  state.gameStage = DIALOGUE;
  state.finishedAudioPuzzle = true;
  showGameStage();
  showTextNode(1);
}
