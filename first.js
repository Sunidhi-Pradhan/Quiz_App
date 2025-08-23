const question = [
    {
        question: "which is largest animal in the world?",
        answer: [
            { text: "shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false },
            { text: "Africa", correct: false },
        ]
    },
    {
        question: "which is the largest desert in the world?",
        answer: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answer: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true },
            { text: "Antarctica", correct: false },
            { text: "Africa", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){