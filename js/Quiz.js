const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById{"answer-buttons"}

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame(){
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQeustion(shuffledQuestions[currentQuestionIndex])
}

function showQeustion(){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement,appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer () {

}

const question = [
    {
        question: "What year did Nigeria gain independence?", Answers: [
            { text: "1960", correct: true}
            { text: "1906", correct: false}
            { text: "1958", correct: false}
            { text: "1963", correct: false}
        ]
    }
]