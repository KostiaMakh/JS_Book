function sayHi() {
console.log(this.name)
}

let user = {name: "Mark"}
let admin = {name: 'Marat'}

sayHi.call(user)

setTimeout(()=>sayHi.call(admin), 1000)

//проба с ппередачей параметра

function introduce(phrase, skills) {
    console.log(`привет, меня зовут ${this.name}. Мне ${this.age} годиков. Я очень люблю ${phrase}, а умею я ${skills}`)
}

let makar={name: 'Макар', age:"40"}

setTimeout(()=>introduce.call(makar, 'вышивать крестиком', "бегать за мячём"), 3000)