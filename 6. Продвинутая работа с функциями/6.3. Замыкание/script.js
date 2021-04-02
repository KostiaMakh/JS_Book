let name = "John";

function sayHi() {
   console.log("Hi, " + name);
}

name = "Pete";

sayHi();

//
function makeWorker() {
    let name2 = "Pete";

    return function() {
        console.log(name2);
    };
}

let name2 = "John";

// create a function
let work = makeWorker();

// call it
work(); //

// Мой счетчик
let counter = 0
function mineCounter(){
    counter++
    console.log(counter)
}
mineCounter()
mineCounter()
mineCounter()
mineCounter()

//Счетчик пао учебнику
function counter2() {
    let count=0
    return function ()  {
        return  count++
    }
}
let ar = counter2()
console.log(`Функция счктчика по учебнику`)
console.log(ar())
console.log(ar())
console.log(ar())
