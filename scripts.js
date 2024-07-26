// Global Variables
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    let choice = prompt('Rock, Paper, Scissors?');
    if (choice.toLowerCase() !== 'rock' && choice.toLowerCase() !== 'paper' && choice.toLowerCase() !== 'scissors') {
        getHumanChoice();
    }
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice) {
        alert('Tie! Try again!');
        playGame();
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        alert('You win! Rock beats Scissors!');
        humanScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        alert('You lose! Paper beats Rock!');
        computerScore++;
    } else if (humanChoice ==  'scissors' && computerChoice == 'rock') {
        alert('You lose! Rock beats Scissors!');
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
        alert('You win! Scissors beats Paper!');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        alert('You win! Paper beats Rock!');
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        alert('You lose! Scissors beats Paper!');
        computerScore++;
    }

    alert(`Computer Score: ${computerScore}
        Your Score: ${humanScore}`);

}

function playGame() {

    while (computerScore + humanScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (computerScore > humanScore) {
        alert('You lost!');
    } else {
        alert('You won!');
    }
    
}

playGame();