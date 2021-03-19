let a = new Date(50*12*30*24* 3600*1000)

console.log(a)

let b= a.getTime()
console.log(b)
console.log(`${a.getFullYear()}.${a.getMonth()}.${a.getDate()}  ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`)

let ab = new Date()


console.log(`${ab.getHours()}:${ab.getMinutes()}:${ab.getSeconds()}`)

let dec = Date.now()
let bas = Date(dec)
console.log(Date.parse(bas))
