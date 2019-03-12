'use strict';

var playerMoveChoice;
var computerMoveChoice;

// providing game's output
var output = document.getElementById('output');
var displayText = function(text){
    output.insertAdjacentHTML('afterbegin', 'result: ' + text + '<br>');
}
displayText('Game result is ' +playerMoveChoice);

// Computer move
var computerMove = function(){
    var computerMoveRandom = Math.floor(Math.random() * 3) + 1;
    switch(computerMoveRandom) {
        case 1:
            computerMoveChoice = 'rock';
            return computerMoveChoice; 
        case 2:
            computerMoveChoice = 'paper';
            return computerMoveChoice;
        case 3:
            computerMoveChoice = 'scissors';
            return computerMoveChoice;
    }
}

// Buttons allowing player to chose a move
var playerMoveRock = document.getElementById('playerMove_rock'),
playerMovePaper = document.getElementById('playerMove_paper'),
playerMoveScissors = document.getElementById('playerMove_scissors');

playerMoveRock.addEventListener('click', function() {
    playerMoveChoice = 'rock';
    computerMove();
    displayText('Computer has played ' + computerMoveChoice);
    displayText('You have played ' + playerMoveChoice);
});
playerMovePaper.addEventListener('click', function() {
    playerMoveChoice = 'paper'; 
    computerMove();
    displayText('Computer has played ' + computerMoveChoice);
    displayText('You have played ' + playerMoveChoice);
});
playerMoveScissors.addEventListener('click', function() {
    playerMoveChoice = 'scissors';
    computerMove();
    displayText('Computer has played ' + computerMoveChoice);
    displayText('You have played ' + playerMoveChoice);
});



