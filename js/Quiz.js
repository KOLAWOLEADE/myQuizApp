const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById{"answer-buttons"}
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

function selectAnswer(){

}

function nextQuestion (){

}


function showQeustion(){
    questionContainerElement.innerText = question.question

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