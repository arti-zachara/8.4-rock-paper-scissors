"use strict";

var gameResult;

// providing game's output
var output = document.getElementById("output");
var displayText = function(text) {
  output.insertAdjacentHTML("afterbegin", text + "<br>");
};

// Buttons allowing player to chose a move
var playerMoveRock = document.getElementById("playerMove_rock"),
  playerMovePaper = document.getElementById("playerMove_paper"),
  playerMoveScissors = document.getElementById("playerMove_scissors");

// invoking playerMove function with a payer's choice parameter
playerMoveRock.addEventListener("click", function() {
  playerMove("rock");
});
playerMovePaper.addEventListener("click", function() {
  playerMove("paper");
});
playerMoveScissors.addEventListener("click", function() {
  playerMove("scissors");
});

// Computer move function randomizing the move
function computerMove() {
  var computerMoveRandom = Math.floor(Math.random() * 3) + 1;
  switch (computerMoveRandom) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

// game mechanics invoked after player's choice
function playerMove(playerMoveChosen) {
  var playerMoveChoice = playerMoveChosen;
  var computerMoveChoice = computerMove();
  if (playerMoveChoice === computerMoveChoice) {
    gameResult = "Noone";
  } else if (
    (playerMoveChoice === "paper" && computerMoveChoice === "rock") ||
    (playerMoveChoice === "rock" && computerMoveChoice === "scissor") ||
    (playerMoveChoice === "scissor" && computerMoveChoice === "paper")
  ) {
    gameResult = "You";
  } else {
    gameResult = "Computer";
  }
  displayText(
    "<strong>" +
      gameResult +
      "</strong> won. You played <strong>" +
      playerMoveChoice +
      "</strong>, computer played <strong>" +
      computerMoveChoice +
      "</strong>"
  );
}
