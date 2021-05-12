let mDiv = document.createElement('div')
mDiv.classList.add('ItemDiv')
document.body.appendChild(mDiv)

let innerDiv = document.createElement('div')
innerDiv.classList.add('InnerDiv')
innerDiv.id = 'mineBut'

let buttonShow = document.createElement('button')
buttonShow.innerText='Показать весь текст'
buttonShow.type = 'button'
buttonShow.classList.add('but')
buttonShow.onclick = function () {
    document.getElementById('mineBut').style.height = `${document.getElementById('mineBut').scrollHeight}px`
}

innerDiv.innerText= "текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст"

mDiv.appendChild(innerDiv)
mDiv.appendChild(buttonShow)

console.log(`Положение эллемента с синей рамкой. Отступ сверху: ${innerDiv.offsetTop} px., оттуп слева ${innerDiv.offsetLeft} px.`)

console.log(innerDiv.offsetTop)
console.log(innerDiv.offsetWidth)
console.log(`ширина наружного блока = ${mDiv.offsetWidth} px.; ширина внутреннего блока ${innerDiv.offsetWidth} px.`)

console.log(`Высота внутреннего блока по контенту ${mDiv.offsetHeight} px.;`)

console.log(`Рамки. Верхняя рамка = ${innerDiv.clientTop} px., боковая рамка = ${innerDiv.clientLeft} px.`)
console.log(`Ширина клиентской части внутреннего блока ${innerDiv.clientWidth} px.`)


let m = setInterval(()=>document.getElementById('mineBut').scrollTop +=10, 1000)