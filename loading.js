/*~~ Declare assets to load behind loading screen ~~*/

// image assets
img1 = "./assets/UI/dialogbox.png"
img2 = "./assets/UI/livestream.png"
img3 = "./assets/UI/nextbutton.png"
img4 = "./assets/characters/greg_grumpy.png"
img5 = "./assets/backgrounds/placeholder.jpg";
img6 = "./assets/soundwave.gif";
const imageSrcs = [img1, img2, img3, img4, img5, img6];
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
