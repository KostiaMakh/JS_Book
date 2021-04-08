//копирование объектов
let a1 = {}
let b= {}

a1.name= 'Object A1'

console.log(`Значение a.name - ${a1.name}`)

b=a1

console.log(`Значение b.name - ${b.name}`)

//копирование объектов

let user ={
    name: 'Игорь',
    age: 53,
    height: 190,
}
let worker={}

for (let key in user){
    worker[key] = user[key]
}
console.log(`name скопированного объекта worker - ${worker.name}`)

//споособ объединения объектов Object.assign

let param1 = {
    name:'Valentina',
    age: 50,
    weight: 130,
    skills: 'putanna'
}
let param2 = {
    name:'Igor',
    age: 30,
    job:'designer'
}
let param3 = {
    name:'Artem',
    eye:'darkblue'
}

let idealWorker={}
Object.assign(idealWorker,param1, param2, param3)
console.log(`Вот он тот самый идеальный работник:`)
for (let key in idealWorker){
    console.log(`${[key]} - ${idealWorker[key]}`)
}