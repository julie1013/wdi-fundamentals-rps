////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
   return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === "rock" && computerMove === "scissors") 
        || (playerMove === "scissors" && computerMove === "paper") 
        || (playerMove ==="paper" && computerMove === "rock")) 
        winner = "player";
    
    else if ((playerMove === "rock" && computerMove === "paper") 
        || (playerMove === "scissors" && computerMove === "rock") 
        || (playerMove === "paper" && computerMove === "scissors")) 
        winner = "computer";
    else { 
        winner = "tie";
    }
        
    
    return winner;

}
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
        var playerMove = getPlayerMove(getInput());
        var computerMove = getComputerMove(randomPlay());
        var winner = getWinner(playerMove, computerMove);
        console.log("You played " + playerMove + " and I played " + computerMove + "!");
        if (winner === 'player') {
            console.log("You won that round!");
            playerWins += 1;
    } else if (winner === 'computer') {
            console.log("I won that round! HA HA!");
            computerWins += 1;
        } else {
            console.log("That round was a tie! We're both losers! :(");
        }
    
    console.log("The score is You: " + playerWins + " to Me: " + computerWins + "!");
    }
    return [playerWins, computerWins];
}

playToFive();