const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButtonsElement = document.getElementById{"answer-buttons"}

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
   currentQuestionIndex++
   setNextQuestion() 
})

function startGame(){
    startButton.classList.add("hide")
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
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

function selectAnswer (e) {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button =>{
    setStatusClass(button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide")
}else{
    startButton.innerText = "Restart"
    startButton.classList.remove("hide")
}
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct")
    }else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

// const question = [
//     {
//         question: "What year did Nigeria gain independence?", Answers: [
//             { text: "1960", correct: true}
//             { text: "1906", correct: false}
//             { text: "1958", correct: false}
//             { text: "1963", correct: false}
//         ]
//     }
// ]