////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("*Please choose either 'rock', 'paper', or 'scissors'.*")
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getPlayerMove(move) {
    // working // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // working  // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    // working  // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;
    if (playerMove === "rock") {
        if (computerMove === "rock") {
            winner = "tie";
        } else if (computerMove === "paper") {
            winner = "computer";
        } else {
            winner = "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            winner = "player";
        } else if (computerMove === "paper") {
            winner = "tie";
        } else {
            winner = "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            winner = "computer";
        } else if (computerMove === "paper") {
            winner = "player";
        } else {
            winner = "tie";
        } 
    } else {
        console.log ("Please provide either rock, paper, or scissors");
    }
    console.log("Player played " + playerMove +". Computer played " + computerMove + ". ");
    return winner;
}

function playToX(x) {
    // working // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    console.log("**Let's play Rock, Paper, Scissors! We're playing to " + x + "!**");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        var winner = getWinner (getPlayerMove(),getComputerMove());
        if (winner === "player") {
            playerWins = playerWins + 1;
            console.log("Player wins this round!");
        } else if (winner === "computer") {
            computerWins = computerWins + 1;
            console.log("Computer wins this round!");
        } else {
            console.log("This round ends in a tie!");
        }
        console.log ("The score is Player: " + playerWins + ", Computer: " + computerWins);        
    }
    if (playerWins === x) {
        console.log ("Player wins it all!");
    } else {
        console.log ("Computer wins it all!");
    }
}
