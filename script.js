const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuessInput = document.getElementById("userGuess");
    const messageElement = document.getElementById("message");

    const userGuess = parseInt(userGuessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageElement.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        messageElement.textContent = `Congratulations! You guessed the number ${secretNumber} in ${attempts} attempts.`;
        disableInputAndButton();
    } else if (userGuess < secretNumber) {
        messageElement.textContent = "Too low. Try again.";
    } else {
        messageElement.textContent = "Too high. Try again.";
    }
}

function disableInputAndButton() {
    document.getElementById("userGuess").disabled = true;
    document.querySelector("button").disabled = true;
}
