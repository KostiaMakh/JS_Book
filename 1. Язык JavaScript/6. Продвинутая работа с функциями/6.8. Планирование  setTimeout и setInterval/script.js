/*let timerID = setTimeout(()=>console.log('hello late'), 3000)
timerID*/

function introduce(name, surname) {
    return setTimeout(()=> {
        console.log(`hello! My name is ${name}`)
        setTimeout(()=>console.log(`hello! My surname is ${surname}`),1000)
    },2000)


}
introduce('Mikhail', 'Yesin')

//внешний таймаут
function yourAge(age) {
    console.log(`Мне ${age} лет`)
}
setTimeout(yourAge,5000, 35)

//clear time
function restTime() {
    console.log('Srabotalo')
}
let timer = setTimeout(restTime, 6000)
a=19
if (a<20){
    clearTimeout(timer)
    console.log('Сбили таймекр')
}


