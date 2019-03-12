"use strict";

var playerMoveChoice;

// providing game's output
var output = document.getElementById("output");
var displayText = function(text) {
  output.insertAdjacentHTML("afterbegin", "result: " + text + "<br>");
};
displayText("Game result is " + playerMoveChoice);

// Computer move
var computerMove = function() {
  var computerMoveRandom = Math.floor(Math.random() * 3) + 1;
  switch (computerMoveRandom) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
};

var playerMove = function(playerMove) {
  var playerMoveChoice = playerMove;
  var computerMoveChoice = computerMove();
  displayText("Computer has played " + computerMoveChoice);
  displayText("You have played " + playerMoveChoice);
};

// Buttons allowing player to chose a move
var playerMoveRock = document.getElementById("playerMove_rock"),
  playerMovePaper = document.getElementById("playerMove_paper"),
  playerMoveScissors = document.getElementById("playerMove_scissors");

playerMoveRock.addEventListener("click", playerMove("rock"));
playerMovePaper.addEventListener("click", playerMove("paper"));
playerMoveScissors.addEventListener("click", playerMove("scissors"));
