
let a = new Function('a', 'b','d', 'return a+b+d')
console.log(a(2,4,43))

let квадрат = new Function('a', 'b', 'return a**b')
console.log(квадрат(2,3))

let кубик = new Function(['a', 'b', 'c'], 'return (a+b)**c')
console.log(кубик(1,3 ,4))