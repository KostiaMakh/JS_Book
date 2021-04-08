class animal {
    constructor(name) {
        this.name = name
    }
    run (speed){
        this.speed = speed
        console.log(`${this.name} бежит со скоростью ${this.speed}`)
    }

}

class bird{
    constructor(name) {
        this.name=name
    }
    fly (height){
        this.height = height
        console.log(`Бабочка с именем ${this.name} летит на высоте ${this.height}`)
    }
}

let juke = new animal('Жук')
console.log(juke.name)

juke.run(900)

let butterfly = new bird('Птичка')
console.log(butterfly.name)
butterfly.fly(23)

class but extends bird {
    jump (kolvo) {
        this.kolvo = kolvo
        console.log(`${this.name} прігает ${this.kolvo} раз`)
}
}
let ni = new but('Приська')
ni.jump(2)
ni.fly(34234)