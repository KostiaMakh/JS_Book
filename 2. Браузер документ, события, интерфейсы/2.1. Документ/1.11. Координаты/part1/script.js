function fir() {
    let el = document.getElementById('firstEl')
    let a = document.getElementById('firstEl').getBoundingClientRect()

    el.style.left = a.left +20 + "px"

    printThis (el.style.left, a.top)

}
function printThis(a, b) {
    let pText = document.createElement('p')
    pText.innerText = `Отступ эллемента слева: ${a}\n\ Отступ эллемента сверху: ${b} px`
    document.body.appendChild(pText)

}