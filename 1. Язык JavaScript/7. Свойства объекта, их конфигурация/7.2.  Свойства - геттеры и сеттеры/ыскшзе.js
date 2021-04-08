let user = {
    name: "Mark",
    surname: 'Paulinio',
    age: '53',
    skills: "dance",

    get fullName() {
        return `${this.name} ${this.surname}`
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    }
}

console.log(user.fullName)

user.fullName= 'Борис Игоревич'
console.log(user.fullName)

