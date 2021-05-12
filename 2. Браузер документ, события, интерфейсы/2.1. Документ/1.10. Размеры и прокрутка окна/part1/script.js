let a = document.createElement('button')
 document.body.appendChild(a)
a.onclick = ()=>showHeight()
a.innerText='Показать высоту'

let b = document.createElement('button')
document.body.appendChild(b)
b.onclick = ()=>showWidth()
b.innerText='Показать ширину'

let forM = document.createElement('form')
document.body.appendChild(forM)

let butScrollDown = document.createElement('button')
butScrollDown.innerText = 'Прокрутить вниз на 10 рх'
butScrollDown.type = 'button'
butScrollDown.onclick = ()=> {
    window.scrollBy(0, 10)
}
let butScrollUp = document.createElement('button')
butScrollUp.innerText = 'Поднять вверх на 10 рх'
butScrollUp.type = 'button'
butScrollUp.onclick = ()=> {
    window.scrollBy(0, -10)
}

butScrollDown.type='button'
forM.append(butScrollDown)
forM.append(butScrollUp)


function showHeight (){
    alert(document.documentElement.clientHeight)
}

function showWidth (){
    alert(document.documentElement.clientWidth)
}
