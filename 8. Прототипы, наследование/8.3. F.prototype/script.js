let sudno = {
    classter:'plavun'
}

function Sudno (name){
    this.name = name
}

Sudno.prototype= sudno

let topolek = new Sudno ('Pavel Potiomkin')

console.log(topolek.name)
console.log(topolek.classter)

sudno.classter = '12121221212'
console.log(topolek.classter)


///создание на прототипе конкретного объекта
function Rabbit(name) {
    this.name = name
    console.log(name)
}
let rab1 = new Rabbit('Taras')
let rab2 = new rab1.constructor('Pavlik')