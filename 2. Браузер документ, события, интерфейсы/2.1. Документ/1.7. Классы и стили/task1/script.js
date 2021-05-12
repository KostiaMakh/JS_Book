let alertM = document.getElementById('aleR')
let counter = document.getElementById('counter')
counter.dataset.count = 0


function alerBlink(a) {
    alertM.classList.add("alertMine")
    counter.innerText = counter.dataset.count
    counter.dataset.count = parseInt(counter.dataset.count)+1
    alertM.hidden=false
    setTimeout(()=>a(), 1500)
}

function alerHide (a) {
    alertM.hidden=true
}


let a = setInterval(()=>alerBlink(alerHide),2000)
