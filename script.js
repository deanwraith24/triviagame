// script.js

const questions = [
    { question: "What percentage of Earth's surface is covered by water?", answer: 71 },
    { question: "How many percent of the human body is water?", answer: 60 },
    { question: "What is the average human body temperature in Fahrenheit?", answer: 98.6 },
    { question: "What percentage of Earth's atmosphere is nitrogen?", answer: 78 },
    { question: "How much of the human brain is water?", answer: 75 },
    { question: "What is the average global life expectancy?", answer: 72 },
    { question: "How much of Earth’s surface is land?", answer: 29 },
    { question: "Percentage of salt in seawater?", answer: 3.5 },
    { question: "Ideal indoor humidity level?", answer: 45 },
    { question: "Average adult human heart rate?", answer: 72 },
    // Add more questions as needed
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let totalScore = 0;
const maxQuestions = 10;

function shuffleQuestions() {
    // Create a copy of the questions array and shuffle it
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    // Take only the first maxQuestions from the shuffled array
    shuffledQuestions = shuffledQuestions.slice(0, maxQuestions);
}

function displayQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length) {
        document.getElementById('question').innerText = shuffledQuestions[currentQuestionIndex].question;
    } else {
        endGame();
    }
}

function submitGuess() {
    const guessInput = document.getElementById('guess');
    const guess = parseInt(guessInput.value);
    
    // Check if the guess is empty or invalid
    if (isNaN(guess)) {
        alert("Please enter a valid number between 0 and 100.");
        guessInput.focus(); // Set focus back to the input field
        return; // Exit the function if no valid guess was entered
    }

    const correctAnswer = shuffledQuestions[currentQuestionIndex].answer;
    const score = Math.abs(guess - correctAnswer);
    totalScore += score;

    // Update score display
    document.getElementById('score').innerText = `Current Score: ${totalScore}`;

    // Show the correct answer
    const correctAnswerElement = document.getElementById('correct-answer');
    correctAnswerElement.innerText = `The correct answer was: ${correctAnswer}`;
    correctAnswerElement.style.display = "block";

    // Display the "Next Question" or "End Game" button
    const nextButton = document.getElementById('next-btn');
    if (currentQuestionIndex === maxQuestions - 1) {
        nextButton.innerText = "End Game"; // Change button text on the last question
    } else {
        nextButton.innerText = "Next Question"; // Keep "Next Question" for all other questions
    }
    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < maxQuestions && currentQuestionIndex < shuffledQuestions.length) {
        document.getElementById('question-count').innerText = `Question: ${currentQuestionIndex + 1} / 10`;
        document.getElementById('guess').value = '';
        document.getElementById('next-btn').style.display = "none";

        // Hide the correct answer display for the next question
        document.getElementById('correct-answer').style.display = "none";

        displayQuestion();
    } else {
        endGame(); // Automatically end game if the last question is reached
    }
}


function endGame() {
    document.getElementById('question').style.display = "none";
    document.getElementById('guess').style.display = "none";
    document.getElementById('score').style.display = "none";
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('submit-btn').style.display = "none";
    document.getElementById('correct-answer').style.display = "none";
    document.getElementById('question-count').style.display = "none";
    document.getElementById('final-score').style.display = "block";
    document.getElementById('final-score').innerText = `Your Final Score: ${totalScore}`;
    document.getElementById('play-again-btn').style.display = "block";
}

function playAgain() {
    // Reset game variables
    currentQuestionIndex = 0;
    totalScore = 0;

    // Shuffle questions for a new game
    shuffleQuestions();

    // Reset UI elements
    document.getElementById('question').style.display = "block";
    document.getElementById('guess').style.display = "block";
    document.getElementById('score').style.display = "block";
    document.getElementById('score').innerText = `Current Score: 0`;
    document.getElementById('next-btn').style.display = "none";
    document.getElementById('submit-btn').style.display = "block";
    document.getElementById('correct-answer').style.display = "none";
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

// Initialize game with shuffled questions
shuffleQuestions();
displayQuestion();

