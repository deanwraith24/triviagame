// script.js
const questions = [
    { question: "How long is a ladder on a firetruck?", answer: 30 },
    { question: "What year in the 2000's was the first official version of Minecraft released?", answer: 11 },
    { question: "How many sisters does Ariel have in Disney's The Little Mermaid?", answer: 6 },
    { question: "How many chips are normally in a regular tube of Pringles chips (200g)?", answer: 90 },
    { question: "How many horse breeds originally come from Sweden?", answer: 3 },
    { question: "How many colors are there on a classic Rubik's cube, besides red?", answer: 5 },
    { question: "How many years has a couple been married when they celebrate their crystal wedding anniversary?", answer: 15 },
    { question: "How many clavicles does a cat have?", answer: 0 },
    { question: "How many times do you sing the word 'shark' in the whole song Baby Shark?", answer: 20 },
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
}

// Initialize game
displayQuestion();