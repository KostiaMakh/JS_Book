let animal ={
    name:"lion",
    weight:"90",
    power:"300",
    food:"Трава"
}
let clone = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal))
console.log(clone.name)