/* eslint-disable no-unused-vars */

let gamePattern = []
let userClickedPattern = []

let buttonColours = ["red", "blue", "green", "yellow"]
let level = 0


function nextSequence(){ 
    
    $("h1").text(level)
    // level ++
    // started = true
    let randomNumber = Math.round(Math.random()*3)
    let randomChosenColour = buttonColours[randomNumber]
    $(`#${randomChosenColour}`).css("visibility", "hidden");
    setTimeout(function () {
      $(`#${randomChosenColour}`).css("visibility", "visible");
    }, 200);
    playSound(randomChosenColour)

    
    gamePattern.push(randomChosenColour)
}




$(".btn").click(userClicked);


// nextSequence()
function userClicked (event){
    let userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour); 
    playSound(userChosenColour)
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.at(-1))
}
// function (event){
//     let userChosenColour = event.target.id;
//     return userChosenColour
// }

// userClickedPattern.push(userClicked())
// console.log(userClickedPattern)
// $(".red").click(redClicked);
// $(".yellow").click(yellowCLicked);
let Output = ["Wrong Color!","Sequence Broken!","Pattern Lost!","Memory Failed!", 
"Follow the Lights!","Can You Remember?", "Start Again", "New Sequence Loading...", 
"Back to Level 1,","404: Memory Not Found,","Fatal Sequence Error,","Input Mismatch,",
"Pattern.exe", "Stopped Working","Cognitive Overflow","RAM Insufficient",
"Button Not Recognized,", "Human Error Detected,", "Sequence Validation Failed,",
"Unexpected User Behavior,", "Debug Your Brain"]

function playSound(name){
    new Audio(`sounds/${name}.mp3`).play()
    
}

function animatePress(currentColor){
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
      $(".btn").removeClass("pressed");
    }, 100);
}

$(document).keypress( function(event){ if (event.key === "Enter"){nextSequence();  }})


function checkAnswer(currentLevel){
  // for (let i=0; i<=gamePattern.length-1; i++){
  //   // if (gamePattern[i] !== userClickedPattern[i] && JSON.stringify(userClickedPattern) !== JSON.stringify(gamePattern) && userClickedPattern.length === gamePattern.length){
  //   //   console.log("please i ber work")
  //   // }
  // }
 if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)){
    level ++
    $("h1").text(level)
    setTimeout(nextSequence, 1000)
    userClickedPattern = []
  }
  // else if (JSON.stringify(userClickedPattern) !== JSON.stringify(gamePattern) && userClickedPattern.length === gamePattern.length){
  //   console.log("i hope it works")
  // }
  else {
    for (let i=0; i<=gamePattern.length-1; i++){
      if (gamePattern[i] !== userClickedPattern[i] && userClickedPattern.length-1 === i){
        playSound("wrong")
        $("body").addClass("game-over")
        setTimeout(function(){$("body").removeClass("game-over"), 3000000000000000000})
        let randomOutput = Math.round(Math.random()*(Output.length-1))

        $("h1").text(`${Output[randomOutput]} 
          press enter to restart.`)
        startOver()
      }
    } 
  }
  // else if (JSON.stringify(userClickedPattern) !== JSON.stringify(gamePattern) && userClickedPattern.length === gamePattern.length){
  //   console.log("pls work")
  // }

  
}

function startOver(){
  
  level = 0
  userClickedPattern = []
  gamePattern = []
}


