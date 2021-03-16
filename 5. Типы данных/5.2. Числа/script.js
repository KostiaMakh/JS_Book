//Округление
let a1 = 2.43424234
let a2 = 2.9767424234

console.log(a1)
console.log(a2)
console.log('Math round')
console.log(Math.round(a1))
console.log(Math.round(a2))

console.log('Math floor')
console.log(Math.floor(a1))
console.log(Math.floor(a2))

console.log('Math ceil')
console.log(Math.ceil(a1))
console.log(Math.ceil(a2))

console.log('Math trunk')
console.log(Math.trunc(a1))
console.log(Math.trunc(a2))

console.log('округление до заданой точности')
console.log(a1.toFixed(2))
//возвращает стринг
console.log(a1.toFixed(2)+2)
//через отдельную функцию
function roundTop(a, b) {
    // a- число которое окркгляем
    // b- количество знаков после запятой
    return Math.trunc(a*(10**b))/(10**b)
}
console.log(roundTop(a1,5))

//тоже самое с унарным операторо
console.log('предыдущее но проще')
console.log(+a1.toFixed(3)+2)

//работа  с NaN
let b = 'hello world'
let c
console.log(isNaN(a1))
console.log(isNaN(b))
console.log(isNaN(c))

//parse int $ parse Float
let d='100px'
let e='  100 px  '
let f='4 жирафа'
console.log(parseInt(d))
console.log(parseInt(e))
console.log(parseInt(f))

//прочие полезности
console.log((Math.random()*10000).toFixed(0))

//возращает число в степени n
let g=2
console.log(Math.pow(g,3))
//кубический корень
console.log(Math.cbrt(8))
//возвращве знак числа
console.log(Math.sign(100))