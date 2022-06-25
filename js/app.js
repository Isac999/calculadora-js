const btn = document.querySelectorAll(".normal-btn")
const btnClear = document.querySelector("#clear")
const btnEqual = document.querySelector("#equal")

for (let button of btn) {
    button.addEventListener('click', () => {
        write(button)
    })
}

btnClear.addEventListener('click', () => {
    const div = document.querySelector("#result")
    div.innerText = ""
})

btnEqual.addEventListener('click', () => {
    const div = document.querySelector("#result")
    let formated = div.innerText.replace('÷', '/').replace('x', '*')
    div.innerText= eval(formated)
})

function write(element) {
    const div = document.querySelector("#result")
    switch(element.innerText) {
        case '+':
            div.innerText = div.innerText + ' ' + element.innerText + ' ' 
            break
        case '-':
            div.innerText = div.innerText + ' ' + element.innerText + ' ' 
            break
        case 'x':
            div.innerText = div.innerText + ' ' + element.innerText + ' ' 
            break
        case '÷':
            div.innerText = div.innerText + ' ' + element.innerText + ' ' 
            break
        default:
            div.innerText = div.innerHTML + element.innerText
            break
    }
}
