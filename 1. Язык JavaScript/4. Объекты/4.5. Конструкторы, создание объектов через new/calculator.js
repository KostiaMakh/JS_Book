function Calculator () {
    let a, b
    this.read = function () {
        a = prompt('ввкдите число А = ')
        b = prompt('ввкдите число В = ')
        alert(`${a}  ${b}`)
    }
    this.sum = ()=> {
        alert(`Сумма чисел ${a} и ${b} = ${parseInt(a)+parseInt(b)}`)
    }
    this.sup = ()=> {
        alert(`Разница чисел ${a} и ${b} = ${parseInt(a)-parseInt(b)}`)
    }

}

let newCalc = new Calculator

function getNumb () {
    newCalc.read()
}
function getSum() {
    newCalc.sum()
}
function getSup() {
    newCalc.sup()
}
