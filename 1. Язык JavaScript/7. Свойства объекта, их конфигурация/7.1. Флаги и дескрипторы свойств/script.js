

let user = {
    name: 'Alex'
}

console.log(Object.getOwnPropertyDescriptor(user, 'name'))

//создаем новые свойства

let user2={}
Object.defineProperty(user2, 'name', {
    value: "Mark"
})
console.log(user2.name)
console.log(Object.getOwnPropertyDescriptor(user2, 'name'))

//Делаем имя доступно  только для чтения
Object.defineProperty(user, 'name', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(user, 'name'))

user.name = 'Olegh'
console.log(user.name)