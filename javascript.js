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


    else if (playerInput === "Rock" && computerChoice === "Scissors") {playerScore += 1;}
    else if (playerInput === "Paper" && computerChoice === "Rock") {playerScore += 1;}
    else if (playerInput === "Scissors" && computerChoice === "Paper") {playerScore += 1;}

    else if (playerInput === "Rock" && computerChoice === "Paper") {computerScore += 1;}
    else if (playerInput === "Paper" && computerChoice === "Scissors") {computerScore += 1;}
    else if (playerInput === "Scissors" && computerChoice === "Rock") {computerScore += 1;}

}

function startGame() {
    playerScore = 0;
    computerScore = 0;

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => input.addEventListener('click', userInput));
}

function userInput(e) {
    userSelection = this.dataset.key;
    playRound(userSelection, getComputerChoice());
    updateScore();
}

function updateScore() {
    scoreDisplay = document.querySelector('.score');
    scoreDisplay.textContent = `PLAYER: ${playerScore}  COMPUTER: ${computerScore}`;

    if (playerScore >= 5) {endGame("YOU WIN!");}
    else if (computerScore >= 5) {endGame("YOU LOSE")}
}

function endGame(message) {
    scoreDisplay = document.querySelector('.score');
    const node = document.createElement("div");
    const nodeMessage = document.createTextNode(message);
    node.appendChild(nodeMessage);
    scoreDisplay.append(node);

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => input.removeEventListener('click', userInput));
}

startGame()
