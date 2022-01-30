var volumeSweetSpot;
var speedSweetSpot;
var staticSweetSpot;

ghostAudio = new Audio();
ghostAudio.loop = true;
staticAudio = new Audio("./assets/sounds/radio-static-placeholder.mp3");
staticAudio.loop = true;
staticAudio2 = new Audio("./assets/sounds/radio-static-placeholder-two.wav");
staticAudio2.loop = true;

function startAudioPuzzle() {
  state.episode_music.volume = 0.25; // Turn down episode music in the background
  $("#caption").text(all_episodes[state.currentEpisode].ghostAudioCaption);
  ghostAudio.src = all_episodes[state.currentEpisode].ghostAudio;
  ghostAudio.volume = 0;
  ghostAudio.playbackRate = 4;
  playAudio();
  volumeSweetSpot = Math.random() * 10;
  staticSweetSpot = Math.random() * 10;
  speedSweetSpot = Math.random() * 10;
}

function pauseAudio() {
  ghostAudio.pause();
  staticAudio.pause();
  staticAudio2.pause();
}

function playAudio() {
  ghostAudio.play();
  staticAudio.play();
  staticAudio2.play();
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
    const closenessToSweetSpot =
      current > speedSweetSpot
        ? ((current - speedSweetSpot) / (10 - speedSweetSpot)) * 3 + 1
        : current / speedSweetSpot;
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
  $("#caption").css("opacity", accuracy);
}

function finishAudioPuzzle() {
  state.episode_music.volume = 1;
  pauseAudio();
  state.gameStage = DIALOGUE;
  state.finishedAudioPuzzle = true;
  showGameStage();
  showTextNode(1);
}
