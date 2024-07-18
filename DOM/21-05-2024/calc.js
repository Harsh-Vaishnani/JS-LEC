let resultInput = document.querySelector(".display")
let buttons = document.querySelectorAll(".numbers")
let operators = document.querySelectorAll(".operators")
// let clearButton = document.querySelector(".clear")
// let calculateBtn = document.querySelector(".calculate")

buttons.forEach((button) => {
    // console.log(button.innerText)
    button.addEventListener("click", () => {
        // resultInput.value=resultInput.value+button.innerText
        resultInput.innerText = +button.innerText + resultInput.innerText;
        console.log(resultInput)
    })
})

operators.forEach((operators) => {
    operators.addEventListener("click", () => {
        resultInput.innerText = operators.innerText + resultInput.innerText;
    })
})
