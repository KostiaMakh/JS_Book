//map
let mineMap = new Map()

mineMap.set('rest', 'hello')
mineMap.set(4536, {name:'hello', age:'90'})

console.log(mineMap)
console.log(`возращает значение rest: ${mineMap.get('rest')}`)
console.log(`возвращает длину этого самого Map: ${mineMap.size}`)

let d = mineMap.get(4536)
console.log(`Вот этот объект ${d}, а это значение имени объекта ${d.name}`)

//Попробуем загнеть объект в ключ
let tryObj = {name: 'Tara', age:90, height: 150}
let mineMap2 = new Map()
mineMap2.set(tryObj, 1111111111111111)
console.log(`Вот значения присвоенное объекту tryObj в map tryMap2: ${mineMap2.get(tryObj)}`)

//Перебор параметров объектов map
for (let keys of mineMap.keys()){
    console.log(`Возвращает ключи объекта mineMap: ${keys}`)
}
for (let keys of mineMap.values()){
    console.log(`Возвращает значение ключей объекта mineMap: ${keys}`)
}
for (let keys of mineMap.entries()){
    console.log(`Возвращает ключи со значениями: ${keys}`)
}
//Встроенный forEach
mineMap.forEach((value, key, map) => console.log(`${key}:  ${value}`))

//Преобразование объекта в map
let tryObj2={
    name: 'stev',
    age: 90,
    height: 180,
    skills: "robot"
}
console.log(Object.entries(tryObj2))
//Собираем объект из Map
let obj2 = Object.fromEntries(mineMap)
console.log(`Собираем map в объект ${obj2}`)
console.log(`Обращение к конкретному свойству этого объекта ${obj2.rest}`)

//Set
let mineSet = new Set()
mineSet.add('Taras')
    .add('princh')
    .add('hello')
    .add(344235)
    .add({name: "polina", age:7})
    .add('hello')
console.log(`мой первый сет ${mineSet.size}`)
for (let key of mineSet.values()){
    console.log(key)
}