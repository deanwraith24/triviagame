// script.js

const questions = [
    { question: "What percentage of Earth's surface is covered by water?", answer: 71 },
    { question: "How many percent of the human body is water?", answer: 60 },
    { question: "What is the average human body temperature in Fahrenheit?", answer: 98.6 },
    // Add more questions as needed
];

let currentQuestionIndex = 0;
let totalScore = 0;
const maxQuestions = 10;

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function submitGuess() {
    const guess = parseInt(document.getElementById('guess').value);
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (!isNaN(guess)) {
        const score = Math.abs(guess - correctAnswer);
        totalScore += score;

        document.getElementById('score').innerText = `Current Score: ${totalScore}`;
        document.getElementById('next-btn').style.display = "block";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions && currentQuestionIndex < questions.length) {
        document.getElementById('question-count').innerText = `Question: ${currentQuestionIndex + 1} / 10`;
        document.getElementById('guess').value = '';
        document.getElementById('next-btn').style.display = "none";
        displayQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('question').style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('score').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('submit-btn').style.display = "none";
    document.getElementById('question-count').style.display = "none";
    document.getElementById('final-score').style.display = "block";
    document.getElementById('final-score').innerText = `Your Final Score: ${totalScore}`;
    document.getElementById('play-again-btn').style.display = "block";
}

function playAgain() {
    // Reset game variables
    currentQuestionIndex = 0;
    totalScore = 0;

    // Reset UI elements
    document.getElementById('question').style.display = "block";
    document.getElementById('guess').style.display = "block";
    document.getElementById('score').style.display = "block";
    document.getElementById('score').innerText = `Current Score: 0`;
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('submit-btn').style.display = "block";
    document.getElementById('question-count').style.display = "block";
    document.getElementById('question-count').innerText = `Question: 1 / 10`;
    document.getElementById('final-score').style.display = "none";
    document.getElementById('play-again-btn').style.display = "none";

    // Reset the guess input field to placeholder text
    const guessInput = document.getElementById('guess');
    guessInput.value = "";  // Clear the input value
    guessInput.placeholder = "Enter your guess (0-100)";  // Reset the placeholder text

    // Display the first question
    displayQuestion();
}

// Initialize game
displayQuestion();
