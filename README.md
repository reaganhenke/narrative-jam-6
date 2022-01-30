# Ghost Interpreter

A ghostly narrative game for [Narrative Driven Jam 6 on itch.io](https://itch.io/jam/narrative-driven-jam-6). It is currently a work in progress.

Created by
- Reagan (IfThenCreate), programmer 
- trout (False Trout) composer
- Emma (LaChapeliere) narrative designer
- Anni (Nightsparrow) graphics artist

# EPISODE WRITING:

<p>There are two files that writing needs to be added to. <p>

[episodes.js](./episodes.js) has an overview of all episodes and their constant information. Example: 

```js
   {
    episodeTitle: "The Haunted House",
    backgroundImg: FIELD_BACKGROUND,
    episodeMusic: CREEPY_MUSIC,
    ghostAudio: PIZZA_AUDIO,
    ghostAudioCaption: "i would like to eat some pizza one last time",
    textNodesBeforeAudio: hauntedHouseDialogue1,
    textNodesAfterAudio: hauntedHouseDialogue2
  }
```
- _episodeTitle_: this is what renders on the Episode Intro screen
- _backgroundImage_: this is what renders as the episode background during dialogue screens. it's represented as aa url to the filename. it should also be added in [loading.js](./loading.js); I'll do that once they're finalized.
- _episodeMusic_: this is what plays as the episode background music. It's represented as a url to the filename. It should also be added to the loading list. 
- _ghostAudio_: this is what plays for the audio puzzle. it's represented as a link to the file name. It should also be added to the loading list. 
- _ghostAudioCaption_: The text being said in the ghostAudio, this is used to populate the caption on the translator screen
- _textNodesBeforeAudio_: This links the text before the audio puzzle. More details on text nodes below. 
- _textNodesAfterAudio_: This links the text after the audio puzzle. More details on text nodes below. 

Each episode has a js file to hold its dialogue, epilogues, and possible chat segments. [dialogue-hauntedhouse.js](./dialogue-hauntedhouse.js) is the file for the Haunted House episode. The file contains the following:

- Constant `GREG_GRUMPY` with the url to the greg grumpy image. There should be one of these for each possible mood/image of the character. 
- Array `HAUNTEDHOUSE_EXCITED`, which is an array to represent chat moods. 
- Array `possible_epilogues`, the possible endings for the episode (currently, just the text to show. This could expand to have a final illustration)
- Array `hauntedHouseDialogue1`, this is the dialogue before the audio puzzle
- Array `hauntedHouseDialogue2`, this is the dialogue after the audio puzzle

The chatMoods array (`HAUNTEDHOUSE_EXCITED`) is just one example, there should be one of these for each possible mood that can trigger. It's separated into sections for LOW suspicion (under 3; we can adjust these thresholds), MED (3-5), and HIGH (over 5). One of these will appear at a time in the chat when triggered. 

For the text nodes, here's an example where there are no options on screen:
```js
  {
    id: 1,
    text: "Hello lovelies, today we've got a call from Greg, from Lovely Homes Real Estate!",
    speakerName: "MC",
    characterImg: GREG_GRUMPY,
    next: 2
  }
```
- _id_: this is the ID of the text node, and how it links to other nodes
- _text_: this is the text displayed in the dialogue box
- _speakerName_: this is the speaker's name displayed above the dialogue box
-_characterImg_: this is the constant that contains the character art to be displayed (ex: GREG_GRUMPY, GREG_NEUTRAL, etc should all be held as constants at the start of the file)
-_next_: this is where the story will go when the player clicks next, it is the ID of the text node you want to go to

NOTE:  If the "nextText" is "FINISHEPISODE" (represented by the `FINISHEPISODE` constant), the episode will proceed to the epilogue after that.

For a text node with options on screen:
```js
{
  id: 2,
  text: "Greg is trying to sell a very special house, but the previous owner isn't too happy about visitors...",
  speakerName: "MC",
  characterImg: GREG_GRUMPY,
  options: [
    {
      text: "Let's go meet that ghost!",
      chatMood: HAUNTEDHOUSE_EXCITED,
      nextText: 3,
    },
    {
      text: "A very special house indeed, for it has legs to move around! (Popularity+, SUS+)",
      popularity: 5,
      suspicion: 3,
      nextText: 3,
      chatMood: HAUNTEDHOUSE_EXCITED
    },
    {
      text: "How is that house special, you ask me? Well, let's go and see! (Popularity+)",
      chatMood: HAUNTEDHOUSE_EXCITED,
      popularity: 1,
      nextText: 3,
      setEpilogue: 4
    }
  ]
}
```
These nodes have an `options` section instead of a `next`. The options array can have the following fields: 

- _text_: the test displayed in the response option box
- _chatMood_ (optional): the chatMood array (defined above) to pull from. If this is present, one chat segment will be selected depending on the suspicion
- _popularity_ (optional): If this is present, the popularity will change by this amount when it's selected. Can be positive or negative. 
- _suspicion_ (optional): If this is present, the suspicion will change by this amount when it's selected. Can be positive or negative. 
- _nextText_: the next text node id, where clicking the response will take you to
- _setEpilogue_ (optional): This will cause the epilogue to be set, refering to an id in the epilogues array. 

NOTE: if the "nextText" is "AUDIOGAME" (represented by the `START_PUZZLE` constant), the audio puzzle will start once that option is selected. 

# art assets 

#### general
- [ ] cover photo (for itch.io page)
- [ ] favicon (for itch.io page)

#### loading screen
![loading](./screenshots/loading.png)
- [ ] logo for loading screen (or decide on animation)
- should also decide on a background color here

#### title screen
![title](./screenshots/title.png)
- [ ] possible background art? this screen is 960x640px
- [ ] possible illustrated title, or just use a font? 
- [ ] start button (either just background, or background plus words and i can add discernible text with an aria label) any size
- also should add content warning here

#### episode intro screen (for each episode)
![episode intro](./screenshots/epintro.png)
- [ ] possible background art, (960x640px) or just pick background color
- [ ] possible illustrated title, or just use a font? 
- [ ] start button (either just background, or background plus words and i can add discernible text with an aria label)

#### dialogue screen (for each episode)
![dialogue](./screenshots/dialogue.png)
- [ ] episode background art (660x640px, could be adjusted if we shrink livestream section)
- [x] "next" button or icon for user to click to progress (any size or shape)
- [ ] character art (including emotion variants) (less than 660px wide and 490px tall, that's the absolute max of the space minus the dialogue space at the bottom)
- [x] livestream overlay background? (300 x 640px, and the inner white chat part can be whatever size, currently 270x576px)
- [x] background for the dialogue box at the bottom 

![dialogue2](./screenshots/dialogue2.png)
- [ ] possibly backgrounds for these response options? Tricky because they may vary in size, or we pick a max and limit them all. 

#### audio puzzle screen
![audiopuzzle](./screenshots/audiopuzzle.png)
- [ ] background art/translator art. this page can look however you want, should fit into the screen size of (960x640px). might vary per episode if we want to show the ghosts?
- [ ] play/pause buttons
- [ ] soundwave art for paused, bad, ok, and good. can be any size, but variants for showing how accurate the sliders are would be helpful.
- [ ] slider design
- [ ] continue button

#### epilogue screens
![epilogue](./screenshots/epilogue.png)
- [ ] I think we'll show a different illustration for each of the 4 episode endings?
- [ ] continue button
- there's also the game over screen for raising too much suspicion, and the final game ending. Unsure what those look like. 

NOTE: for all buttons with custom art, unsure if you want to draw the words on them, or leave the text to be written on top. Let me know.

# TODOs:

### tech
- [x] create loading screen
- [x] create title screen
- [x] create episode intro screen
- [x] create dialogue screen
- [x] add dialogue functionality to progress story by selecting a response
- [x] add dialogue functionality to progress story by clicking next
- [x] add dialogue functionality to progress story with space or click
- [x] add livestream chat functionality to reflect a mood
- [x] reflect livestream popularity in views
- [x] add dialogue functionality to show character with different emotions
- [x] add audio puzzle screen
- [x] add audio puzzle slider functionality
- [x] add audio puzzle caption
- [x] create epilogue screens
- [x] make epilogue screen dynamic
- [x] play background music
- [x] increment chat one at a time, based on mood and suspicion 
- [ ] add audio puzzle dynamic visual feedback
- [ ] fix preloading assets, there's a delay in displaying background images

#### stretch goals
- [ ] make dialogue text appear incrementally
- [ ] add settings menu

### integration
- [x] pick font and sizing to determine max text length
- [ ] finalize what loading screen should look like (add logo or animation)
- [ ] finalize what title screen should look like (add credits and illustrations)
- [ ] add visual assets to dialogue screen
- [ ] add visual aseets to audio puzzle screen
- [ ] add episode content
- [ ] epilogue screens

### audio needed
- [ ] ghost tracks for each episode
- [ ] static 1
- [ ] static 2
- [ ] background music for each episode 
