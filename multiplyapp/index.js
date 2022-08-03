const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)
const scoreEl = document.getElementById("score")
const correctAnswer = num1 * num2;
const formEl = document.getElementById("form")
const questionEl = document.getElementById("question")
const inputEl = document.getElementById("input")
let score = JSON.parse(localStorage.getItem('score'))
if(!score) {
    score = 0
}

scoreEl.innerText = `score : ${score}`
questionEl.innerText = `What is ${num1} multiply by ${num2}?`
formEl.addEventListener("submit", ()=> {
    const userAnswer = +inputEl.value
    userAnswer === correctAnswer ? score++ : score--
    updateLocalStorage()
})
function updateLocalStorage () {
    localStorage.setItem('score', JSON.stringify(score))
}