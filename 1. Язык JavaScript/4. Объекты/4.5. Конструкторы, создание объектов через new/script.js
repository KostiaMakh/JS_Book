function  User (name, age) {
    this.name = name;
    this.age = age;
    this.skills = 'dance';
}

let ivan = new User('Ivan', 28)
console.log(ivan.name )
console.log(ivan.age)
console.log(ivan.skills)

function admin() {
    this.name = 'anna'
    this.status = 'admin'
}

let admin1 = new admin
console.log(admin1)

//методі
function Worker(name) {
    this.name = name
    this.age = 32
    this.sayHi = () =>console.log(this.name)
}

let taras = new Worker('Taras')
taras.sayHi()