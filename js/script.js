"use strict";

// providing game's output
var output = document.getElementById("output");
function displayText(text) {
  output.innerHTML = text + "<br>";
}
// providing game's result
var computerWins = 0,
  playerWins = 0,
  result = document.getElementById("result");
var displayResult = function(playerWins, computerWins) {
  result.innerHTML =
    "<strong>" +
    playerWins +
    "</strong> - <strong>" +
    computerWins +
    "</strong>";
};
displayResult(playerWins, computerWins);

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
  var gameResult;
  if (playerMoveChoice === computerMoveChoice) {
    gameResult = "Noone";
  } else if (
    (playerMoveChoice === "paper" && computerMoveChoice === "rock") ||
    (playerMoveChoice === "rock" && computerMoveChoice === "scissors") ||
    (playerMoveChoice === "scissors" && computerMoveChoice === "paper")
  ) {
    gameResult = "You";
    playerWins++;
    displayResult(playerWins, computerWins);
  } else {
    gameResult = "Computer";
    computerWins++;
    displayResult(playerWins, computerWins);
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
