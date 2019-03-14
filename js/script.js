"use strict";
var roundsNumber;
var roundsPlayed = 0;
var gameActive = "true";

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
// Checking the number of rounds
function countingRounds(roundsNumber) {
  if (Number.isInteger(roundsNumber) && roundsNumber > 0) {
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
  roundsPlayed++;
  countingRounds(roundsNumber);
  displayText(
    "Round " +
      roundsPlayed +
      ": <strong>" +
      gameResult +
      "</strong> won. You played <strong>" +
      playerMoveChoice +
      "</strong>, computer played <strong>" +
      computerMoveChoice +
      "</strong>"
  );
}
// new game button starting a game consisting of a number of game provided by player
var newGame = document.getElementById("newGame"),
  rounds = document.getElementById("rounds");

newGame.addEventListener("click", function() {
  playerWins = 0;
  computerWins = 0;
  var userInput = window.prompt("How many rounds do you want to play?");
  if (userInput === null || userInput === "") {
    rounds.innerHTML = "You didn't provide a value";
  } else if (isNaN(userInput)) {
    rounds.innerHTML = "The value you provided is not a number";
  } else if (parseInt(userInput) <= 0) {
    rounds.innerHTML =
      "The value you provided is not a possible number of rounds";
  } else {
    roundsNumber = parseInt(userInput);
    rounds.innerHTML =
      "The game will end after <strong>" + roundsNumber + "</strong> rounds";
  }
});
