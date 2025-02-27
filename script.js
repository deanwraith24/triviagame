// script.js

const questions = [
    { question: "How many minutes are in an hour?", answer: 60 },
    { question: "How many continents are there on Earth?", answer: 7 },
    { question: "What is the number of planets in our solar system?", answer: 8 },
    { question: "How many colors are there in a rainbow?", answer: 7 },
    { question: "How much of the human brain is water?", answer: 75 },
    { question: "How many stars are on the flag of the United States?", answer: 50 },
    { question: "What is the number of Harry Potter books in the main series?", answer: 7 },
    { question: "Percentage of salt in seawater?", answer: 4 },
    { question: "How many hours are in a day?", answer: 24 },
    { question: "How many days are in a year (non-leap year) over 300?", answer: 65 },
    { question: "What percentage of Earth's surface is covered by water?", answer: 71 },
    { question: "How many sides does a hexagon have?", answer: 6 },
    { question: "How many planets in our solar system are larger than Earth?", answer: 4 },
    { question: "How many months are in a year?", answer: 12 },
    { question: "How many continents have no native human population?", answer: 1 },
    { question: "How many players are there in a soccer team?", answer: 11 },
    { question: "How many strings are on a standard guitar?", answer: 6 },
    { question: "How many elements are in the periodic table as of 2024 over 100?", answer: 18 },
    { question: "How many yards are in a football field?", answer: 100 },
    { question: "What is the number of keys on a standard piano?", answer: 88 },
    { question: "How many states border the state of Missouri?", answer: 8 },
    { question: "How many months have 31 days?", answer: 7 },
    { question: "How many bones are in the human hand?", answer: 27 },
    { question: "How many sides does a triangle have?", answer: 3 },
    { question: "How many countries are there in Africa?", answer: 54 },
    { question: "How many multiples of 100 equal the total pounds in a ton (US)?", answer: 20 },
    { question: "What is the highest number on a standard die?", answer: 6 },
    { question: "How many years does it take for the Earth to orbit the Sun?", answer: 1 },
    { question: "How many sides does a square have?", answer: 4 },
    { question: "How many teeth does an adult human typically have?", answer: 32 },
    { question: "How many keys, over 100, are on a standard computer keyboard?", answer: 4 },
    { question: "What is the number of squares on a chessboard?", answer: 64 },
    { question: "How many countries are in North America?", answer: 23 },
    { question: "How many stripes are on the American flag?", answer: 13 },
    { question: "How many countries are there in Europe?", answer: 44 },
    { question: "How many Great Lakes are there in North America?", answer: 5 },
    { question: "How many players are there in a basketball team?", answer: 5 },
    { question: "How many colors are on the flag of the United Kingdom?", answer: 3 },
    { question: "What is the number of years in a decade?", answer: 10 },
    { question: "How many US presidents have been impeached?", answer: 3 },
    { question: "How many planets in the solar system have rings?", answer: 4 },
    { question: "How many sides does an octagon have?", answer: 8 },
    { question: "How many films are in the Lord of the Rings series?", answer: 3 },
    { question: "How many bones are in the human ear?", answer: 3 },
    { question: "How many degrees are in a circle over 300?", answer: 60 },
    { question: "How many more days are in a leap year compared to a normal year?", answer: 1 },
    { question: "How many US states have a coastline?", answer: 23 },
    { question: "How many weeks are in a year?", answer: 52 },
    { question: "How many inches are in a foot?", answer: 12 },
    { question: "How many sides does a dodecagon have?", answer: 12 },
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

// Set up input validation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const guessInput = document.getElementById('guess');
    
    // Remove the stepper arrows
    guessInput.setAttribute('type', 'text');
    
    // Add event listener to ensure only numbers are entered
    guessInput.addEventListener('input', function(e) {
        // Remove any non-numeric characters
        this.value = this.value.replace(/[^0-9]/g, '');
    });
    
    // Prevent non-numeric key presses
    guessInput.addEventListener('keypress', function(e) {
        const keyCode = e.which || e.keyCode;
        const keyValue = String.fromCharCode(keyCode);
        
        // Allow only numeric input
        if (!/^[0-9]+$/.test(keyValue)) {
            e.preventDefault();
        }
    });
});

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

    // Create a feedback message
    let feedbackMessage = "";
    if (guess === correctAnswer) {
        feedbackMessage = "<span style='color: green; font-weight: bold;'>Correct!</span>";
    } else {
        feedbackMessage = "<span style='color: red; font-weight: bold;'>Incorrect.</span>";
    }
    
    // Update score display
    document.getElementById('score').innerText = `Current Score: ${totalScore}`;

    // Show the correct answer with feedback
    const correctAnswerElement = document.getElementById('correct-answer');
    correctAnswerElement.innerHTML = `${feedbackMessage} The correct answer was: ${correctAnswer}`;
    correctAnswerElement.style.display = "block";

    // Display the "Next Question" or "End Game" button
    const nextButton = document.getElementById('next-btn');
    if (currentQuestionIndex === maxQuestions - 1) {
        nextButton.innerText = "End Game"; // Change button text on the last question
    } else {
        nextButton.innerText = "Next Question"; // Keep "Next Question" for all other questions
    }
    nextButton.style.display = "block";

    // Hide the Submit Guess button
    const submitButton = document.getElementById('submit-btn');
    submitButton.style.display = "none";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < maxQuestions && currentQuestionIndex < shuffledQuestions.length) {
        document.getElementById('question-count').innerText = `Question: ${currentQuestionIndex + 1} / 10`;
        document.getElementById('guess').value = '';
        document.getElementById('next-btn').style.display = "none";
        document.getElementById('correct-answer').style.display = "none";
        
        // Show the Submit Guess button for the next question
        document.getElementById('submit-btn').style.display = "block";
        
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

