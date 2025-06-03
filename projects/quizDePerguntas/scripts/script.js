const questions = [
    {
        question: "Qual é o maior planeta do sistema solar?",
        answers: [
            {id: 1, text: "Sol", correct: false},
            {id: 2, text: "Terra", correct: false},
            {id: 3, text: "Saturno", correct: false},
            {id: 4, text: "Jupiter", correct: true}
        ]
    },
    {
        question: "Qual é o melhor professor do mundo?",
        answers: [
            {id: 1, text: "Taffe", correct: false},
            {id: 2, text: "Rodrigo", correct: true},
            {id: 3, text: "Diego", correct: false},
            {id: 4, text: "Cleiton", correct: false}
        ]
    },
    {
        question: "Qual é o melhor grupo da sala?",
        answers: [
            {id: 1, text: "Grupo do Arael", correct: false},
            {id: 2, text: "Grupo das meninas", correct: false},
            {id: 3, text: "O grupo que criou este site ", correct: true},
            {id: 4, text: "todos os grupos :/", correct: false}
        ]
    },
    {
        question: "Quantos anos o Taffe possuí?",
        answers: [
            {id: 1, text: "18 anos", correct: false},
            {id: 2, text: "69 anos", correct: false},
            {id: 3, text: "42 anos", correct: false},
            {id: 4, text: "13,8 bilhões de anos", correct: true}
            
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    } 
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNO = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNO + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) =>{
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else {
        startQuiz();
    }
} )

startQuiz();