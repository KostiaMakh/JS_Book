class prostoUser {
    constructor(name, age, skills, tall) {
        this.name = name
        this.age = age
        this.skills = skills
        this.tall = tall
    }
    whatIsYourName(){
        console.log(`Hello my name is ${this.name}. I am ${this.age} years old`)
    }
    whoAreYou(){
        console.log(`I am ${this.name}. I can ${this.skills}`)
    }
}

let userOleh = new prostoUser("Olegh", 38, 'reporter', 190)

userOleh.whatIsYourName()

let userMark = new prostoUser("Mark", 19, 'FullStack', 160)
userMark.whoAreYou()