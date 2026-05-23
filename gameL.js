/* eslint-disable no-unused-vars */

let gamePattern = [];
let userClickedPattern = [];

let buttonColours = ["red", "blue", "green", "yellow"];
let level = 0;


function nextSequence() {

  $("h1").text(level);

  let randomNumber = Math.round(Math.random() * 3);
  let randomChosenColour = buttonColours[randomNumber];
  $(`#${randomChosenColour}`).css("visibility", "hidden");
  setTimeout(function () {
    $(`#${randomChosenColour}`).css("visibility", "visible");
  }, 200);
  playSound(randomChosenColour);

  gamePattern.push(randomChosenColour);
}

$(".btn").click(userClicked);

function userClicked(event) {
  if (event.target.id ==="level-title"){
    nextSequence()
  }
  else if (gamePattern.length !== 0){
  let userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.at(-1));
}
else{gameOver("Click ME")}



}

let Output = [
  "Wrong Color!",
  "Sequence Broken!",
  "Pattern Lost!",
  "Memory Failed!",
  "Follow the Lights!",
  "Dude, Can't You Remember?",
  "Start Again",
  "New Sequence Loading...",
  "oops,",
  "404: Memory Not Found,",
  "Fatal Sequence Error,",
  "Input Mismatch,",
  "Pattern.exe",
  "Stopped Working",
  "Cognitive Overflow",
  "RAM Insufficient",
  "Button Not Recognized,",
  "Human Error Detected,",
  "Sequence Validation Failed,",
  "Unexpected User Behavior,",
  "Debug Your Brain",
];

function playSound(name) {
  new Audio(`sounds/${name}.mp3`).play();
}

function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 100);
}

$("h1").click(function(ev) {
  nextSequence()
})

$(document).keypress(function (event) {
  if(event.key === "Enter"){
        nextSequence();

  }
});

function checkAnswer(currentLevel) {
  if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
    level++;
    $("h1").text(level);
    setTimeout(nextSequence, 1000);
    userClickedPattern = [];
  } else {
    for (let i = 0; i <= gamePattern.length - 1; i++) {
      if (
        gamePattern[i] !== userClickedPattern[i] &&
        userClickedPattern.length - 1 === i
      ) {gameOver(Output[Math.round(Math.random() * (Output.length - 1))])
      }
    }
  }
}

function startOver() {
  level = 0;
  userClickedPattern = [];
  gamePattern = [];
}

function gameOver(deathScreen) {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function () {
    ($("body").removeClass("game-over"), 300);
  });

  $("h1").text(deathScreen);
  startOver();
}

// const screenWidth = screen.width;
// const screenHeight = screen.height;

// if (screenWidth < 800){

// }