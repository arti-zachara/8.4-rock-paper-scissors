'use strict';

var playerMoveChoice;

// providing game's output
var output = document.getElementById('output');
var displayText = function(text){
    output.insertAdjacentHTML('afterbegin', 'result: ' + text + '<br>');
}
displayText('Game result is ' +playerMoveChoice);


// Buttons allowing player to chose a move
var playerMoveRock = document.getElementById('playerMove_rock'),
playerMovePaper = document.getElementById('playerMove_paper'),
playerMoveScissors = document.getElementById('playerMove_scissors');

playerMoveRock.addEventListener('click', function() {
    playerMoveChoice = 'rock';
    displayText('You have played ' + playerMoveChoice);
});
playerMovePaper.addEventListener('click', function() {
    playerMoveChoice = 'paper'; 
    displayText('You have played ' + playerMoveChoice);
    
});
playerMoveScissors.addEventListener('click', function() {
    playerMoveChoice = 'scissors';
    displayText('You have played ' + playerMoveChoice);
});

