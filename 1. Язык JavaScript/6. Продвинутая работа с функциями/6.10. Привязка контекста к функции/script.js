let user = {
    name: "Pavel",
        sayHi () {
        console.log(`Имя пользователя ${this.name}`)
}
}

function sayHI () {
    console.log(`Имя пользователя ${this.name}`)
}

let user2 = {
    name: 'kiril'
}
let user3 = {
    name: 'Olegh'
}
//потерян this
setTimeout(user.sayHi, 1000)

//Функция обертка
setTimeout(()=>user.sayHi(), 2000)

//переприсваиваем имя и выдаем опять
setTimeout(()=>user.name = 'Mark', 2500)
setTimeout(()=>user.sayHi(), 3000)
let bindFunc = sayHI.bind(user2)
bindFunc()

//bind  вкоторый передается\ метод функции
let bindFunc2 = user.sayHi.bind(user3)
bindFunc2()