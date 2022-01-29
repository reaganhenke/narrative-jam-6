/*~~ Declare assets to load behind loading screen ~~*/

// image assets
img1 = "./assets/emoji/emoji-neutral.png";
img2 = "./assets/emoji/emoji-sad.png";
img3 = "./assets/emoji/emoji-smiling.png";
img4 = "./assets/emoji/emoji-tongue.png";
img5 = "./assets/backgrounds/placeholder.jpg";
const imageSrcs = [img1, img2, img3, img4, img5];
imagesLoaded = false;

// sound assets
snd1 = "./assets/sounds/ghost-request-placeholder.mp3";
snd2 = "./assets/sounds/radio-static-placeholder.mp3";
snd3 = "./assets/sounds/music-placeholder.wav";
const soundSrcs = [snd1, snd2, snd3];
soundsLoaded = false;

allAssetsLoaded = false;

/*~~ Preload assets ~~*/
$(window).load(function () {
  window.preloadedImages = [];
  imagesLoaded = 0;
  totalImages = imageSrcs.length;
  imageSrcs.forEach((imgUrl) => {
    console.log("loading img: ", imgUrl);
    var img = new Image();
    img.src = imgUrl;

    img.onload = (e) => {
      console.log("loaded image: ", img, "e:", e);
      imagesLoaded++;
      window.preloadedImages.push(img);

      console.log("imagesLoaded: ", imagesLoaded);
      console.log("totalImages: ", totalImages);
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
    console.log("loading sound: ", filename);
    var audio = new Audio(filename);

    audio.addEventListener("canplaythrough", () => {
      console.log("loaded audio: ", audio);
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
