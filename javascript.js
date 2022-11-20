let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3);
    if (i === 0) {return "Rock";}
    else if (i === 1) {return "Paper";}
    else {return "Scissors";}
}

function playRound(playerInput, computerChoice) {

    if (playerInput === computerChoice) {
        return `Tie! Both of you played ${playerInput}`;
    }

    else if (playerInput === "Rock" && computerChoice === "Scissors") {return win(playerInput, computerChoice);}
    else if (playerInput === "Paper" && computerChoice === "Rock") {return win(playerInput, computerChoice);}
    else if (playerInput === "Scissors" && computerChoice === "Paper") {return win(playerInput, computerChoice);}

    else if (playerInput === "Rock" && computerChoice === "Paper") {return lose(playerInput, computerChoice);}
    else if (playerInput === "Paper" && computerChoice === "Scissors") {return lose(playerInput, computerChoice);}
    else if (playerInput === "Scissors" && computerChoice === "Rock") {return lose(playerInput, computerChoice);}

    else {return lose(null, null);}
}

function getPlayerInput() {
    let playerInput = prompt("Rock, Paper, Scissors?");
    playerInput = playerInput[0].toUpperCase() + playerInput.slice(1);

    if (playerInput === "Rock" || playerInput === "Paper" || playerInput === "Scissors") {return playerInput;}
    else {
        console.log("I don't know what that was...")
        return getPlayerInput();
    }
}

function win(player, computer) {
    playerScore++;
    return `You win! ${player} beats ${computer}`;
}

function lose(player, computer) {
    computerScore++;
    return `You lost! ${computer} beats ${player}`;
}

function game() {
    playerScore = 0;
    computerScore = 0;
    while (playerScore < 3 && computerScore < 3) {
        let playerInput = getPlayerInput();
        console.log(playRound(playerInput, getComputerChoice()));
    }
    if (playerScore === 3) {return `ULTIMATE WINNER. You beat the computer ${playerScore} to ${computerScore}`;}
    else  {return `ULTIMATE LOSER. You lost the computer ${playerScore} to ${computerScore}`;}
}
