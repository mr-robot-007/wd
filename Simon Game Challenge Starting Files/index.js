var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keypress", function () {
  if (!started) {
    $("h1").text("level " + level);
    nextSequence();
    started = true;
  }
});

function playSound(color) {
  var audio = new Audio("./sounds/" + color + ".mp3");
  audio.play();
}
function nextSequence() {
  userClickedPattern = [];
  level += 1;
  $("#level-title").text("Level " + level);
  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNum];
  gamePattern.push(randomChosenColor);
  $("." + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  //   console.log(randomChosenColor);
}

$(".btn").on("click", function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress();
  checkAns(userClickedPattern.length - 1);
});

function animatePress(currentColor) {
  $(".btn").on("click", function () {
    var self = $(this);
    self.addClass("pressed");
    setTimeout(function () {
      self.removeClass("pressed");
    }, 100);
  });
}

function checkAns(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
