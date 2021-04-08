function mineStr() {
    alert(`Привет всем
    
єто мо первая строка 
    
на очти весь єкран`)
}

function alertEm() {
alert('\u{1F60D}')
}

let a=0

function mineTextGrown() {
    let textA = document.getElementById('mineText').innerText
    if (a===0){
        document.getElementById('mineText').innerText = textA.toUpperCase()
        a=1
    }
    else {
        document.getElementById('mineText').innerText = textA.toLowerCase()
        a=0
    }

}
function poisk() {
    let a =document.getElementById('zapros').value
    let mainText = document.getElementById('pooiskText').innerText
    mainText.includes(a) ? alert('Да тут такое есть') : alert('Тут такой х-ни нет')
}