// global constants
var clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;
const buttonsCount = 8;

// Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakes = 0;
var muted = false;

// Display the number of mistakes to the user 2 is max
function updateMistakesCount(){
  mistakes ++;
  document.getElementById("mistakes").innerHTML = mistakes;
}

// Mute and unmute sound if need be
function toggleSound(){
  if(muted){
    volume = 0.5;
    muted = false;
    document.getElementById("mute").innerHTML = "Mute";
  }else{
    volume = 0;
    muted = true;
    document.getElementById("mute").innerHTML = "Unmute";
  }
}

function startGame(){
  // initialize game variables
  progress = 0;
  mistakes = 0;
  muted = false;
  gamePlaying = true;
  
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  pattern = generatePattern();
  playClueSequence();
}

function generatePattern(){
  let result = [];
  for(let i=0; i<buttonsCount*2; i++){
    result.push(Math.ceil(Math.random() * 8));
  }
  
  return result;
}

function stopGame(){
  gamePlaying = false;
  
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
}

function winGame(){
  stopGame();
  alert("Gongrats, you won the Game! Yai!");
  document.getElementById("mistakes").innerHTML = 0;
}

function loseGame(){
  stopGame();
  alert("Game Over! You lost the Game! Ohh!");
  document.getElementById("mistakes").innerHTML = 0;
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playClueSequence(){
  guessCounter = 0;
  
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
  clueHoldTime -= 10;
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function guess(btn){
  console.log("user guessed: " + btn);

  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn){
    //Guess was correct!
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        //GAME OVER: WIN!
        winGame();
      }else{
        //Pattern correct. Add next segment
        progress++;
        playClueSequence();
      }
    }else{
      //so far so good... check the next guess
      guessCounter++;
    }
  }else{
    updateMistakesCount();
    //Guess was incorrect
    //GAME OVER: LOSE!
    if(mistakes > 2){
      loseGame(); 
    }
  }
}  

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550,
  6: 600,
  7: 650,
  8: 820
};

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  },len);
}

function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025);
    tonePlaying = true;
  }
}

function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025);
    tonePlaying = false;
}

// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0,context.currentTime);
o.connect(g);
o.start(0);