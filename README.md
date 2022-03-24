# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Lacie Covington**

Time spent: **3** hours spent in total

Link to project: [Here](
https://glitch.com/edit/#!/smiling-workable-princess)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](https://cdn.glitch.global/98ef0f48-5cc0-4a31-a409-6246e86907c5/prework1.gif?v=1648073155695)
![](https://cdn.glitch.global/98ef0f48-5cc0-4a31-a409-6246e86907c5/prework2.gif?v=1648073159845)
[![Simon (NOW WITH SOUND)](https://cdn.glitch.global/98ef0f48-5cc0-4a31-a409-6246e86907c5/simon_img.png?v=1648074223480)](https://cdn.glitch.global/98ef0f48-5cc0-4a31-a409-6246e86907c5/prework_gif.mp4?v=1648072413405 "Simon (NOW WITH SOUND)")

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  - Stackoverflow
  - cssreference.io

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  - One challenge I encountered when creating this submission was that I couldn't get the StopGame() function to work no matter what I did. The StartGame() function worked just fine but I couldn't figure out what was wrong with the StopGame() function. At first I thought that since I was typing the code myself and not copying and pasting (copy work is a great way to learn something), I must have just typed up the code wrong so I deleted everything and copy/paste from the pre-work. When that didn't work, I deleted everything from the StopGame() function and only put a console.log() in the function and tried calling the function to see if it would print in the console. When that didn't work, I tried googling my problem, reading through Stackoverflow but I wasn't finding what I needed. After taking a break and coming back to the code, I started carefully reading my whole script.js file line by line to see if there was something I was missing. After reading through my code and matching the curly braces up, I realize the reason why the StopGame() function wasn't working was because it was inside the StartGame() function. After fixing my mistake, I had no more troubles after that.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  - One question I have is is it possible to improve my code even more than what I already have or is it as optimized as it can get? How would someone know when their code is as optimized as it can get? Is there such a thing as 'perfect code' and how would someone be able to produce perfect code? Would my game be better (design and performance wise) if I had used a framework (like Ruby on Rails, Django, Angular, React, etc.) instead of plain HTML/CSS/JavaScript? When is it best to use a framework rather than plain vanilla JavaScript? How can I make my game more accessible to users?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  - One thing I want to do is completely change the theme of the project. While I would keep the required functionalities of the game, I would change the design of the game into something I'm interested in. One idea I had was a hip-hop themed Simon game. The buttons would be different hip hop artists and the sounds when clicked would be one of their songs. If a user guesses wrong, then they lose the game. However, if a user guesses a pattern correctly, they'll get a brand new pattern with brand hip hop artists. They'll have a high score that keeps track of how many patterns they successfully guessed and when they want to stop, their score will appear on a global scoreboard with the scores of everyone else who has ever played the game. Another ideas include a kpop themed Simon game or a stand up comedy themed game.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://cdn.glitch.global/98ef0f48-5cc0-4a31-a409-6246e86907c5/interview_video.mp4?v=1648134816659)


## License

    Copyright Lacie Covington

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
