let user1 = {name:'Paulo',
    age:'52',
    callPaulo() {
    console.log('112')
}}
let user2 = {skills:'Скалолаз', status:'RESOLVED'}
user2.__proto__=user1
console.log(user2.name)
user2.callPaulo()

//Чуть прикольнее
let animal = {
    jump(){
        console.log('Зверушка пригает')
    }
}
let goose = {
    __proto__:animal
}
goose.jump()

goose.jump = () =>{
    console.log('А теперь она БЕГАЕТ')
}
goose.jump()
animal.jump()

// Ещё веселе с get и set
let userNew = {
    name:'Mark',
    surname:'Paulinio',
    set fullName (value){
        [this.name, this.surname] = value.split(' ')
    },
    get fullName () {
       return `${this.name} ${this.surname}`
    }
}
console.log(userNew.fullName)
userNew.fullName = 'Mark Tween'
console.log(userNew.fullName)
console.log(userNew.name)

let userSuperNew = {
    __proto__:userNew
}
console.log(`Запускаем всё тоже на прототипе:`)
console.log(userSuperNew.fullName)
userSuperNew.fullName = 'Кирил Семенихин'
console.log(userSuperNew.fullName)

//Очень прикольная х-ня
let zvreshka = {
    whoAreYou(){
        if (!this.isSleep){
            console.log('Баран')
        }
        else console.log('Свинья')
    },
    sleep(){
        this.isSleep = true
    }
}
zvreshka.whoAreYou()
zvreshka.sleep()
zvreshka.whoAreYou()
