//мешанина
function partial(func, ...argsB) {
    return function (...args) {
        return func.call(this, ...argsB, ...args)
    }
}
let user1 ={
    firstName: 'Mark',
    sayTime (time, phrase){
        console.log(`|${time}| ${this.firstName}: ${phrase}`)
    }
}
user1.sayNow = partial(user1.sayTime, new Date().getHours() + ':' + new Date().getMinutes())
user1.sayNow('Who are you?')