let userScore = 0;
let systemScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");  // fixed typo
const systemScorePara = document.querySelector("#system-score");  // fixed typo

// Function to generate a random choice for the system
const gensystemChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);  // fixed random index generation
    return options[randIdx];
}

// Function to handle a draw
const drawGame = () => {
    msg.innerText = "Game was a draw";
    msg.style.backgroundColor = "#081b31";
}

// Function to show the winner and update the score
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;  // Update the user score in the UI
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
        systemScore++;
        systemScorePara.innerText = systemScore;  // Update the system score in the UI
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
    }
}

// Function to play the game based on user choice
const playGame = (userChoice) => {
    console.log("User choice =", userChoice);

    // Generate system's random choice
    const systemChoice = gensystemChoice();
    console.log("System choice = ", systemChoice);

    // If the choices are the same, it's a draw
    if (userChoice === systemChoice) {
        drawGame();
    } else {
        // Determine the winner
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = systemChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = systemChoice === "scissors" ? false : true;
        } else {
            userWin = systemChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

// Add event listeners for each choice (rock, paper, scissors)
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");  // Get the clicked choice's id
        playGame(choiceId);  // Pass the choiceId to playGame
    });
});
