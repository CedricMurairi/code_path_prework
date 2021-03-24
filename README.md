# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Cedric Murairi**

Time spent: **4** hours spent in total

Link to project: [https://glitch.com/edit/#!/jelly-outrageous-tarascosaurus?path=index.html%3A23%3A55](https://glitch.com/edit/#!/jelly-outrageous-tarascosaurus?path=index.html%3A23%3A55)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked. 
- [x] Game buttons each light up and play a sound when clicked. 
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
[**https://youtu.be/LD8UEr4-CdI**](https://youtu.be/LD8UEr4-CdI)
![Walkthrough -- GIF](https://cdn.glitch.com/80f9b1ac-0ffc-4b95-9934-83ac14f76964%2FPeek%202021-03-24%2014-08.gif?v=1616587761751)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- [w3schools.com](https://www.w3schools.com/)
- [developer.mozilla](https://developer.mozilla.org/)
- [stack overflow](https://stackoverflow.com/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

I encounter some issues along the way, and the common one was related to typos in my code; I had errors, and to fix them, I needed to use console.log to clarify which specific part of the program is executed, and which one isn't.
I tried to include the timer on the screen for the user, but it gave me a hard time; it was displaying but not the way I wanted, so I decided to get rid of it and let the user play at their own pace.  Another issue was into making the sound custom, and I chose to go with animal sounds, but the recordings I found on the internet were quite long to make it enjoyable when someone is playing, so I ended up with the typical sounds from JS to keep it short and less confusing.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

This submission played a critical role in getting me passionate about web development again. From playing with JS's sound and seeing how one can build amazing stuff, I started thinking about some ideas I would want to implement for my user in the browser.
I was wondering if there is a way (which I believe there is) to make a web interface for an application that plays an essential role in my daily routine and be getting notifications about what is happening with sound playing in the background. I want to build a small timer and countdown app for the user when I need to.
I have realized that the web is mighty, and I want to be part of that. With just some code and few concepts, we could build such an excellent interface and all the functionalities; I can tell the future is full of surprises and great things.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

If I had few more hours to work on this project, I would make sure I refactor and clean the code to avoid repetitions. I would implement new features and functionalities such as an input box where users enter the number of sound buttons they want to play with, the minimum being four. The program would go and generate the interface accordingly. Another feature would be to add a slider (volume) to adjust the sound level as you play; I implement "mute" & "unmute."
I would implement a history where users can see how they performed in the past and compare that to their future guesses.




## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.