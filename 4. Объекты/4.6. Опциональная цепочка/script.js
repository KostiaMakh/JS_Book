let user1= {
    name: 'vadik',
    age: '52',
    sayHi(){
        console.log('say hi ' + user1.name)
    }
}

let user2 = {}

user1.sayHi?.()
user2.sayHi?.()
