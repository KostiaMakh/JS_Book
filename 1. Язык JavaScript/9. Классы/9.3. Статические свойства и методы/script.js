class a {
    constructor(name, age) {
        this.name=name
        this.age=age
    }
    static createA (name, age) {
        return new this(name, age)
}
}

let b = a.createA('Max', '30')
console.log(b.name)

let c =a.createA('Igor', 90)
console.log(c.name + ' '+ c.age)