// Function to check the answer
function checkAnswer() {
    // The correct answer for the quiz
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Check if the user has selected an answer
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Display feedback in green for correct answers
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Display feedback in red for incorrect answers
        }
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange"; // Display warning in orange if no answer is selected
    }
}

// Add an event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
