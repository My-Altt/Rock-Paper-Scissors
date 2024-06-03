for (let i = 0; i < 10000; i++) {
    let answer = prompt("Rock, Paper, or Scissors?");

    // Validate the input to ensure it's either Rock, Paper, or Scissors (case insensitive)
    if (
        answer !== "Rock" && answer !== "Paper" && answer !== "Scissors" &&
        answer !== "rock" && answer !== "paper" && answer !== "scissors"
    ) {
        alert("Please input a correct answer");
        i--; // decrement i to retry the prompt for a valid input
        continue; // continue the loop to prompt the user again
    }

    // Generate computer choice: 0 for Rock, 1 for Paper, 2 for Scissors
    let computer = Math.floor(Math.random() * 3);
    if (i < 4) {
        if (computer === 0) {
            if (answer === "Rock" || answer === "rock") {
                alert("Computer chose rock, you tie!");
            } else if (answer === "Paper" || answer === "paper") {
                alert("Computer chose rock, you win!");
            } else if (answer === "Scissors" || answer === "scissors") {
                alert("Computer chose rock, you lose!");
            }
        } else if (computer === 1) {
            if (answer === "Rock" || answer === "rock") {
                alert("Computer chose paper, you lose!");
            } else if (answer === "Paper" || answer === "paper") {
                alert("Computer chose paper, you tie!");
            } else if (answer === "Scissors" || answer === "scissors") {
                alert("Computer chose paper, you win!");
            }
        } else if (computer === 2) {
            if (answer === "Rock" || answer === "rock") {
                alert("Computer chose scissors, you win!");
            } else if (answer === "Paper" || answer === "paper") {
                alert("Computer chose scissors, you lose!");
            } else if (answer === "Scissors" || answer === "scissors") {
                alert("Computer chose scissors, you tie!");
            }
        }
    }

    if (i > 3) {
        // Make the player only lose after the initual 3 rounds
        if (answer === "Rock" || answer === "rock") {
            alert("Computer chose paper, you lose!");
        } else if (answer === "Paper" || answer === "paper") {
            alert("Computer chose scissors, you lose!");
        } else if (answer === "Scissors" || answer === "scissors") {
            alert("Computer chose rock, you lose!");
        }
    }
}    
