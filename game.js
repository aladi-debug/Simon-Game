// alert("working")

// when user makes the same amount of clicks stored in random array, give the command to add another
// check user's click's against should'Ve been clicked
// return error when the user gets one wrong
/* eslint-disable no-unused-vars */

class PlayGame {
  constructor() {
    this.greenAudio = new Audio("sounds/green.mp3");
    this.redAudio = new Audio("sounds/red.mp3");
    this.yellowAudio = new Audio("sounds/yellow.mp3");
    this.blueAudio = new Audio("sounds/blue.mp3");
  }

  playGreen() {
    return this.greenAudio.play();
  }
  playRed() {
    return this.redAudio.play();
  }
  playYellow() {
    return this.yellowAudio.play();
  }
  playBlue() {
    return this.blueAudio.play();
  }
  clickedAnimate(key) {
    $(key).addClass("pressed");
    setTimeout(function () {
      $(".btn").removeClass("pressed");
    }, 100);
  }

  animateNext(C) {
    $(`.${C}`).css("visibility", "hidden");
    setTimeout(function () {
      $(`.${C}`).css("visibility", "visible");
    }, 200);
    new Audio(`sounds/${C}.mp3`).play();
  }
}

const myAudio = new PlayGame(); // ✅ create an instance

function greenCliked(event) {
  myAudio.playGreen();
  console.log(event);
  myAudio.clickedAnimate(this);
  
}

function redClicked(event) {
  myAudio.playRed();
  console.log(event);
  myAudio.clickedAnimate(this);
  
}

function yellowCLicked(event) {
  myAudio.playYellow();
  console.log(event);
  myAudio.clickedAnimate(this);
  
}

function blueClicked(event) {
  myAudio.playBlue();
  console.log(event);
  myAudio.clickedAnimate(this);
  
}

function BtnPressed (){
  if ($(".green").is(":active")) {
    return 1;
    }
  else if($(".red").is(":active")){
    return 2
  }
  else if ($(".yellow").is(":active")) {
  return 3;
}
  else if ($(".blue").is(":active")) {
  return 4;
}
}


$(".green").click(greenCliked);
$(".red").click(redClicked);
$(".yellow").click(yellowCLicked);
$(".blue").click(blueClicked);

let storedRandom = [];
let userChoice = [];
function GameLogic() {
  let random = Math.floor(Math.random() * 4 + 1);
  // random = 1;
  switch (random) {
    case 1:
      myAudio.animateNext("green");
      break;
    case 2:
      myAudio.animateNext("red");
      break;
    case 3:
      myAudio.animateNext("yellow");
      break;
    case 4:
      myAudio.animateNext("blue");
      break;

    default:
      console.log("something wrong happen in game logic");
      break;
  }
  storedRandom.push(random);
  userChoice.push(BtnPressed())
  // for (let i=0;i<storedRandom.length(); i++){
    
  // }
  
}

// $(document).keypress(GameLogic());

$(document).keypress(function(event) {myAudio.animateNext("blue"); console.log(event)})  
// myAudio.animateNext("blue");

while ()