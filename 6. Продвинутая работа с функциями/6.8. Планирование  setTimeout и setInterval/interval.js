let k=0
function caunter() {
    k++
    return k
}

let a = setInterval(()=>console.log(caunter()), 500)
setTimeout(()=>clearInterval(a), 8000)
