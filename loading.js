/*~~ Declare assets to load behind loading screen ~~*/

// image assets
img1 = "./assets/UI/device_ghostbg.png";
img2 = "./assets/UI/devicebody.png";
img3 = "./assets/UI/devicebutton_pressed.png";
img4 = "./assets/UI/devicebutton.png";
img5 = "./assets/UI/deviceslider.png";
img6 = "./assets/UI/dialogbox.png";
img7 = "./assets/UI/livestream.png";
img8 = "./assets/UI/nextarrow.png";
img9 = "./assets/UI/smallbutton.png";
img10 = "./assets/UI/viewers.png";

img11 = "./assets/characters/amal_sad.png";
img12 = "./assets/characters/angel_angry.png";
img13 = "./assets/characters/angel_determined.png";
img14 = "./assets/characters/angel_excited.png";
img15 = "./assets/characters/angel_laughing.png";
img16 = "./assets/characters/angel_sad.png";
img17 = "./assets/characters/cathouse_ghost_happy.png";
img18 = "./assets/characters/gorgon_lonely.png";
img19 = "./assets/characters/greg_angry.png";
img20 = "./assets/characters/greg_disgusted.png";
img21 = "./assets/characters/greg_grumpy.png";
img22 = "./assets/characters/maria_angry.png";
img23 = "./assets/characters/maria_confused.png";
img24 = "./assets/characters/maria_cry.png";
img25 = "./assets/characters/maria_happycry.png";
img26 = "./assets/characters/maria_sad.png";

img27 = "./assets/backgrounds/cathouse.png";
img28 = "./assets/backgrounds/loft.png";
img29 = "./assets/backgrounds/placeholder.jpg";

img30 = "./assets/soundwave.gif";
const imageSrcs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
];
imagesLoaded = false;

// sound assets
snd1 = "./assets/sounds/ghost-request-placeholder.mp3";
snd2 = "./assets/sounds/radio-static-placeholder.mp3";
snd3 = "./assets/sounds/radio-static-placeholder-two.wav";
snd4 = "./assets/sounds/music-placeholder.wav";
const soundSrcs = [snd1, snd2, snd3, snd4];
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
