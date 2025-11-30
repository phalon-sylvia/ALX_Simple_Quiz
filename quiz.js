// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    let correctAnswer = "4";

    // Get the selected radio button
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare answers and show feedback
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
