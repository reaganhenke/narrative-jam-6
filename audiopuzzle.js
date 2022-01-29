// maybe break out the audio controls into a separate js file?

var volumeSweetSpot;
var speedSweetSpot;

ghostAudio = new Audio();
ghostAudio.loop = true;
staticAudio = new Audio("./assets/sounds/radio-static-placeholder.mp3");
staticAudio.loop = true;

function startAudioPuzzle() {
  console.log("startin");
  ghostAudio.src = episodes[state.episode].audio;
  ghostAudio.volume = 0;
  ghostAudio.playbackRate = 4;
  playAudio();
  volumeSweetSpot = Math.random() * 10;
  // volumeSweetSpot = 10;

  speedSweetSpot = Math.random() * 10;
  // speedSweetSpot = 10;
  // console.log('volumeSweetSpot', volumeSweetSpot, 'speedSweetSpot', speedSweetSpot);
}

function pauseAudio() {
  ghostAudio.pause();
  staticAudio.pause();
}

function playAudio() {
  ghostAudio.play();
  staticAudio.play();
}

function updateVolumeSlider(current) {
  console.log("current: ", current, "sweetspot: ", volumeSweetSpot);
  let closenessToSweetSpot = 1;
  if (current != volumeSweetSpot) {
    closenessToSweetSpot =
      current > volumeSweetSpot
        ? 1 - (current - volumeSweetSpot) / (10 - volumeSweetSpot)
        : current / volumeSweetSpot;
  }
  console.log("closenessToSweetSpot: ", closenessToSweetSpot);

  staticAudio.volume = 1 - closenessToSweetSpot;
  ghostAudio.volume = closenessToSweetSpot;
  checkIfSolved();
}

function updateSpeedSlider(current) {
  console.log("current: ", current, "sweetspot: ", speedSweetSpot);
  // can be between 0.1 and 4
  // aiming for 1
  console.log("update playback speed: ", current);
  if (current == speedSweetSpot) {
    ghostAudio.playbackRate = 1;
  } else {
    const closenessToSweetSpot =
      current > speedSweetSpot
        ? ((current - speedSweetSpot) / (10 - speedSweetSpot)) * 3 + 1
        : current / speedSweetSpot;
    console.log("closenessToSweetSpot: ", closenessToSweetSpot);
    ghostAudio.playbackRate = closenessToSweetSpot;
  }

  checkIfSolved();
}

function checkIfSolved() {
  // console.log('volume:', ghostAudio.volume, 'playbackRate: ', ghostAudio.playbackRate);
  const volumeAccuracy = ghostAudio.volume;
  // calculate percentage accuracy by distance from 1, from 0.5 to 3
  const playbackAccuracy =
    ghostAudio.playbackRate > 1
      ? (3 - ghostAudio.playbackRate) / 2
      : ghostAudio.playbackRate / 1;

  // console.log('playbackAccuracy', playbackAccuracy);

  // IF both accuracies are over 50%, show average, else nothing
  const accuracy =
    volumeAccuracy > 0.5 && playbackAccuracy > 0.25
      ? (volumeAccuracy + playbackAccuracy) / 2
      : 0;
  // console.log('accuracy:', accuracy);

  $("#caption").css("opacity", accuracy);
}

//start with volume =0, playback = 4, and static =1
// ok so we have VOLUME ( 0-1), PLAYBACKSPEED (0.5-3), and STATIC(0-1)
// ideally, end with volume = 1, playbackspeed = 1, and static= 0
