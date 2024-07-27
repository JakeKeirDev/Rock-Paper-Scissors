document.addEventListener("DOMContentLoaded", () => {
    // Create and append the main container div
    const mainContainer = document.createElement("div");
    mainContainer.style.display = "flex";
    mainContainer.style.flexDirection = "column";
    mainContainer.style.justifyContent = "center";
    mainContainer.style.alignItems = "center";
    mainContainer.style.height = "100vh";
    mainContainer.style.backgroundColor = "#f0f0f0";
    document.body.appendChild(mainContainer);

    // Create and append the button container div
    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.justifyContent = "center";
    buttonContainer.style.alignItems = "center";
    buttonContainer.style.marginBottom = "20px";
    mainContainer.appendChild(buttonContainer);

    // Game variables
    let playerScore = 0;
    let computerScore = 0;

    // Function to get computer's choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to play a round of Rock, Paper, Scissors
    function playRound(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            playerScore++;
            return "Player wins!";
        } else {
            computerScore++;
            return "Computer wins!";
        }
    }

    // Function to update the score
    function updateScore() {
        return `Score: ${playerScore} - ${computerScore}`;
    }

    // Function to create a button
    function createButton(text) {
        const button = document.createElement("button");
        button.textContent = text;
        button.style.padding = "10px 20px";
        button.style.fontSize = "16px";
        button.style.margin = "0 10px";
        button.style.backgroundColor = "#007BFF";
        button.style.color = "white";
        button.style.border = "none";
        button.style.borderRadius = "5px";
        button.style.cursor = "pointer";
        button.style.transition = "background-color 0.3s";

        button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "#0056b3";
        });
        button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#007BFF";
        });

        return button;
    }

    // Create and append the Rock button
    const rock = createButton("Rock");
    rock.addEventListener("click", () => { 
        results.textContent = playRound("rock", getComputerChoice());
        scores.textContent = updateScore();
    });
    buttonContainer.appendChild(rock);

    // Create and append the Paper button
    const paper = createButton("Paper");
    paper.addEventListener("click", () => {
        results.textContent = playRound("paper", getComputerChoice());
        scores.textContent = updateScore();
    });
    buttonContainer.appendChild(paper);

    // Create and append the Scissors button
    const scissors = createButton("Scissors");
    scissors.addEventListener("click", () => {
        results.textContent = playRound("scissors", getComputerChoice());
        scores.textContent = updateScore();
    });
    buttonContainer.appendChild(scissors);

    // Create and append the results div
    const results = document.createElement("div");
    results.className = "results";
    results.style.fontSize = "18px";
    results.style.textAlign = "center";
    results.textContent = "Result will appear here";
    mainContainer.appendChild(results);

    // Create and append the scores div
    const scores = document.createElement("div");
    scores.className = "scores";
    scores.style.fontSize = "18px";
    scores.style.textAlign = "center";
    scores.textContent = "Score: 0 - 0";
    mainContainer.appendChild(scores);
});
