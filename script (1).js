// ==============================
// ENGLISH BUDDY - SCRIPT.JS
// ==============================

// Word of the Day Data
const words = [
    {
        word: "Perseverance",
        meaning: "Continued effort despite difficulties."
    },
    {
        word: "Confident",
        meaning: "Feeling sure about yourself."
    },
    {
        word: "Opportunity",
        meaning: "A chance to do something."
    },
    {
        word: "Achievement",
        meaning: "Something accomplished successfully."
    },
    {
        word: "Determination",
        meaning: "Firm decision to achieve a goal."
    },
    {
        word: "Inspire",
        meaning: "To motivate someone."
    }
];

// ==============================
// WORD OF THE DAY
// ==============================

const wordElement = document.getElementById("word");
const meaningElement = document.getElementById("meaning");

function updateWordOfTheDay() {
    const today = new Date().getDate();
    const selectedWord = words[today % words.length];

    if (wordElement && meaningElement) {
        wordElement.textContent = selectedWord.word;
        meaningElement.textContent = selectedWord.meaning;
    }
}

updateWordOfTheDay();


// ==============================
// DAILY STREAK
// ==============================

const streakElement = document.getElementById("streak");

function updateStreak() {
    let streak = localStorage.getItem("streak");

    if (!streak) {
        streak = 1;
        localStorage.setItem("streak", streak);
    }

    if (streakElement) {
        streakElement.textContent = streak;
    }
}

updateStreak();


// ==============================
// CHALLENGE COMPLETION
// ==============================

const completeBtn = document.getElementById("completeBtn");

if (completeBtn) {
    completeBtn.addEventListener("click", () => {

        alert("🎉 Great Job! Challenge Completed!");

        let completed =
            Number(localStorage.getItem("completedChallenges")) || 0;

        completed++;

        localStorage.setItem(
            "completedChallenges",
            completed
        );

        completeBtn.textContent = "Completed ✅";
        completeBtn.disabled = true;

        increaseProgress();
    });
}


// ==============================
// PROGRESS TRACKER
// ==============================

const wordsLearned = document.getElementById("wordsLearned");
const quizScore = document.getElementById("quizScore");

function loadProgress() {

    let learned =
        localStorage.getItem("wordsLearned") || 120;

    let score =
        localStorage.getItem("quizScore") || "85%";

    if (wordsLearned)
        wordsLearned.textContent = learned;

    if (quizScore)
        quizScore.textContent = score;
}

loadProgress();

function increaseProgress() {

    let learned =
        Number(localStorage.getItem("wordsLearned")) || 120;

    learned += 5;

    localStorage.setItem(
        "wordsLearned",
        learned
    );

    if (wordsLearned)
        wordsLearned.textContent = learned;
}


// ==============================
// START LEARNING BUTTON
// ==============================

const startBtn = document.getElementById("startBtn");

if (startBtn) {

    startBtn.addEventListener("click", () => {

        document
            .querySelector(".features")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


// ==============================
// GREETING MESSAGE
// ==============================

function greetingMessage() {

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour < 18) {
        greeting = "Good Afternoon 🌤️";
    } else {
        greeting = "Good Evening 🌙";
    }

    console.log(greeting);
}

greetingMessage();


// ==============================
// VOCABULARY CARD EFFECT
// ==============================

const vocabCards =
    document.querySelectorAll(".vocab-card");

vocabCards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform =
            "scale(1.05)";

        setTimeout(() => {

            card.style.transform =
                "scale(1)";

        }, 300);

    });

});


// ==============================
// SAVE VISIT COUNT
// ==============================

function trackVisits() {

    let visits =
        Number(localStorage.getItem("visits")) || 0;

    visits++;

    localStorage.setItem(
        "visits",
        visits
    );

    console.log(
        "Total Visits:",
        visits
    );
}

trackVisits();


// ==============================
// RANDOM MOTIVATIONAL QUOTE
// ==============================

const quotes = [

    "Practice makes perfect.",
    "Never stop learning.",
    "Small progress is still progress.",
    "Confidence comes from practice.",
    "Every day is a chance to improve.",
    "Learning English opens opportunities."

];

function showQuote() {

    const randomIndex =
        Math.floor(Math.random() * quotes.length);

    console.log(
        "Motivation:",
        quotes[randomIndex]
    );
}

showQuote();


// ==============================
// PAGE LOADED MESSAGE
// ==============================

window.addEventListener("load", () => {

    console.log(
        "English Buddy Loaded Successfully 🚀"
    );

});