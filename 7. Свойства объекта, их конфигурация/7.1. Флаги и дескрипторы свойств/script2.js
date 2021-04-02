let user = {
    name: 'Pavel',
    age:'43'
}

for (let a in user){
    console.log(`${a}: ${user[a]}`)
}

//делаем одно свойство не нумерумым
Object.defineProperty(user, 'age', {
    enumerable:false
})
for (let a in user){
    console.log(`После блокировки свойства ${a}: ${user[a]}`)
}
