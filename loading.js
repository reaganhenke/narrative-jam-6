/*~~ Declare assets to load behind loading screen ~~*/
imgAud1 = "./assets/audio/audio_bad.gif";
imgAud2 = "./assets/audio/audio_good.gif";
imgAud3 = "./assets/audio/audio_ok.gif";
imgAud4 = "./assets/audio/audio_paused.gif";

imgBg1 = "./assets/backgrounds/cathouse.png";
imgBg2 = "./assets/backgrounds/end_failure.png";
imgBg3 = "./assets/backgrounds/end_famous.png";
imgBg4 = "./assets/backgrounds/end_gameover.png";
imgBg5 = "./assets/backgrounds/end_success.png";
imgBg6 = "./assets/backgrounds/loft.png";
imgBg7 = "./assets/backgrounds/observatory.png";

imgUI1 = "./assets/UI/channellogo.png";
imgUI2 = "./assets/UI/device_ghostbg.png";
imgUI3 = "./assets/UI/devicebody.png";
imgUI4 = "./assets/UI/devicebutton_pressed.png";
imgUI5 = "./assets/UI/devicebutton.png";
imgUI6 = "./assets/UI/deviceslider.png";
imgUI7 = "./assets/UI/dialogbox.png";
imgUI8 = "./assets/UI/epilogue-dialogue.png";
imgUI9 = "./assets/UI/live.png";
imgUI10 = "./assets/UI/livestream.png";
imgUI11 = "./assets/UI/mainmenu.png";
imgUI12 = "./assets/UI/nextarrow.png";
imgUI13 = "./assets/UI/overlay.png";
imgUI14 = "./assets/UI/responsebox.png";
imgUI15 = "./assets/UI/smallbutton.png";
imgUI16 = "./assets/UI/viewers.png";

imgChar1 = "./assets/characters/amal_angry.png";
imgChar2 = "./assets/characters/amal_sad.png";
imgChar3 = "./assets/characters/angel_angry.png";
imgChar4 = "./assets/characters/angel_determined.png";
imgChar5 = "./assets/characters/angel_excited.png";
imgChar6 = "./assets/characters/angel_laughing.png";
imgChar7 = "./assets/characters/angel_sad.png";
imgChar8 = "./assets/characters/cathouse_ghost_angry.png";
imgChar9 = "./assets/characters/cathouse_ghost_happy.png";
imgChar10 = "./assets/characters/cathouse_ghost_sad.png";
imgChar11 = "./assets/characters/gorgon_angry.png";
imgChar12 = "./assets/characters/gorgon_lonely.png";
imgChar13 = "./assets/characters/greg_angry.png";
imgChar14 = "./assets/characters/greg_disgusted.png";
imgChar15 = "./assets/characters/greg_grumpy.png";
imgChar16 = "./assets/characters/maria_angry.png";
imgChar17 = "./assets/characters/maria_confused.png";
imgChar18 = "./assets/characters/maria_cry.png";
imgChar19 = "./assets/characters/maria_happycry.png";
imgChar20 = "./assets/characters/maria_sad.png";
imgChar21 = "./assets/characters/mc_excited.png";
imgChar22 = "./assets/characters/mc_sad.png";

const imageSrcs = [
  imgAud1,
  imgAud2,
  imgAud3,
  imgAud4,
  imgBg1,
  imgBg2,
  imgBg3,
  imgBg4,
  imgBg5,
  imgBg6,
  imgBg7,
  imgUI1,
  imgUI2,
  imgUI3,
  imgUI4,
  imgUI5,
  imgUI6,
  imgUI7,
  imgUI8,
  imgUI9,
  imgUI10,
  imgUI11,
  imgUI12,
  imgUI13,
  imgUI14,
  imgUI15,
  imgUI16,
  imgChar1,
  imgChar2,
  imgChar3,
  imgChar4,
  imgChar5,
  imgChar6,
  imgChar7,
  imgChar8,
  imgChar9,
  imgChar10,
  imgChar11,
  imgChar12,
  imgChar13,
  imgChar14,
  imgChar15,
  imgChar16,
  imgChar17,
  imgChar18,
  imgChar19,
  imgChar20,
  imgChar21,
  imgChar22,
];
imagesLoaded = false;

// sound assets
snd1 = "./assets/sounds/hauntedhouse-ghost.mp3";
snd2 = "./assets/sounds/hauntedhouse-music.mp3";
snd3 = "./assets/sounds/pizza-ghost.mp3";
snd4 = "./assets/sounds/pizza-music.mp3";
snd5 = "./assets/sounds/stars-ghost.mp3";
snd6 = "./assets/sounds/stars-music.mp3";
snd7 = "./assets/sounds/static-1.mp3";
snd8 = "./assets/sounds/static-2.mp3";
const soundSrcs = [snd1, snd2, snd3, snd4, snd5, snd6, snd7, snd8];
soundsLoaded = false;

allAssetsLoaded = false;

/*~~ Preload assets ~~*/
$(window).load(function () {
  window.preloadedImages = [];
  imagesLoaded = 0;
  totalImages = imageSrcs.length;
  imageSrcs.forEach((imgUrl) => {
    var img = new Image();
    img.src = imgUrl;

    img.onload = (e) => {
      imagesLoaded++;
      window.preloadedImages.push(img);
      if (imagesLoaded === totalImages) {
        this.imagesLoaded = true;
        if (this.imagesLoaded && this.soundsLoaded) {
          donePreloading();
        }
      }
    };
  });

  soundsLoaded = 0;
  totalSounds = soundSrcs.length;
  soundSrcs.forEach((filename) => {
    var audio = new Audio(filename);

    audio.addEventListener("canplaythrough", () => {
      soundsLoaded++;
      if (soundsLoaded === totalSounds) {
        this.soundsLoaded = true;
        if (this.imagesLoaded && this.soundsLoaded) {
          donePreloading();
        }
      }
    });
  });
});
