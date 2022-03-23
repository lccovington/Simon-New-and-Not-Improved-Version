// Global constants

const cluePauseTime = 333; // how long to pause in between clues
const clueHoldTime = 1000; // how long to hold each clue's light/sound
const nextClueWaitTime = 1000; // how long to wait before playing sequence

// Global variables

var pattern = [2, 2, 4, 1, 3]
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;

function startGame() {
  
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  
 // Hides Start button and displays Stop button
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  playClueSequence();
}

function stopGame() {
    
  gamePlaying = false;
  
  // Hides Stop button and displays Start button
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
}

function loseGame() {
  stopGame();
  alert("Game Over. Better luck next time :(");
}

function winGame() {
  stopGame();
  alert("Game Over. You won! :)");
}

function lightButton(btn) {  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
  
}

function playClueSequence() {
  
  guessCounter = 0;
  
  context.resume()
  let delay = nextClueWaitTime; // set delay to initial wait time
  
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + 'ms')
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  
}

function guess(btn) {
  
  if (!gamePlaying) {
    return;
  }
  
  if (pattern[guessCounter] == btn) {
    // Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        // THEY WON
        winGame();
      } else {
        // Pattern was correct. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      // Check the next guess
      guessCounter++;
    }
  } else {
    //Guess was incorrect THEY LOSE
    loseGame();
  }
} 

// Sound Synthesis Functions
const frequentMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2
}

function playTone(btn, len) {
  
  o.frequency.value = frequentMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  
  setTimeout(function() {
    stopTone()
  }, len)
  
}

function startTone(btn) {
  
  if (!tonePlaying) {
    context.resume()
    o.frequency.value = frequentMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
  
}

function stopTone() {
  
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
  
}

// Page Initialization
// Init Sound Synthesizer

var AudioContext = window.AudioContext || window.webkitAudioContext
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)