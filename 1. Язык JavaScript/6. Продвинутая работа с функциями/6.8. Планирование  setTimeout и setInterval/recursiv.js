let a = 1
let d;

let b = setTimeout(function go() {console.log(++a);d =setTimeout(go, 300)},1000)
let c =setTimeout(()=>clearTimeout(d), 5000)

let delay = (ok, ms) =>setTimeout(ok, ms)

delay(()=>console.log('HELLO'), 6000)
