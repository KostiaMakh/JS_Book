let ab = 'FLY'


let student = {
    name: 'Oleg',
    age: '18',
    institute:'KHPI',
    year:'1993',
    marks:{
        math: 5,
        chemistry: 4,
        geography: 5,
        history: 3,
        language: 4
    },
    skills: ['strong', 'clever', 'helthy', 'goodlooking', ab]
}

let jsonStudent = JSON.stringify(student, null, 1)

console.log(`Объъкт student: ${student}`)
console.log(`JSON полученный из student ${jsonStudent}`)
console.log(`Тип переменной jsonStudent: ${typeof jsonStudent}`)
console.log(`Прототип переменной jsonStudent: ${jsonStudent.__proto__}`)

let reverseJson = JSON.parse(jsonStudent)
console.log(`Обратное пробразование выдает ${reverseJson}`)
console.log(`Тип полученного результата: ${typeof reverseJson}`)
console.log(`Теперь можем образаться к свойствам объекта: имя ${reverseJson.name}, возраст ${reverseJson.age}`)
