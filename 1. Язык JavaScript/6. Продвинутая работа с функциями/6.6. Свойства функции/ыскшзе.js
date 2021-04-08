introduceYourself.counter=0
function introduceYourself(name, age, work) {
    console.log(`Привет! Меня зовут ${name}, мне ${age} лет, я ${work}.`)
    introduceYourself.counter++
}

introduceYourself('Иван', 35, 'шахтер')
console.log(introduceYourself.name)
// Не работает, но попробовт стоило
introduceYourself.name = 'Hello'
introduceYourself('Олег', 25, 'маркетолог')
console.log(`новое имя функции ${introduceYourself.name}`)
//Длдина функции
console.log(introduceYourself.length)
console.log(`Функция была запущена ${introduceYourself.counter} раз.`)

//самовызыва.ющаяся функция

let inroduce = function func(name) {
    if (name){
        console.log(name)
    }
    else {
        func('Заглушка')
    }
}
inroduce("")
inroduce("Ого какая хрень")

let introduce2 = inroduce
introduce2('ghf')