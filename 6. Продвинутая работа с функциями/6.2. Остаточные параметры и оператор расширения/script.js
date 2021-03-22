function summ(...args) {
    let sum=0
    for(let arg of args){
        sum += arg
    }
    console.log(`сумма введенных чисел = ${sum}`)
}

summ(1,34, 23 ,43, 234, 11111 ,234)

//перебираем параметры
function perebor (...ar) {
    for (a of arguments){
        console.log(a)
    }
}

perebor('a', 'b', 'c', 'd', 'e', 'f')