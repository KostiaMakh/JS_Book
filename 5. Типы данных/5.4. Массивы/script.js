let arr1 =[1, 3, 4]

function addPos() {
    let propAr
    while (true){
        propAr = prompt('Введите новый эллемент массива: ')
        if(!propAr) break
        arr1.push(propAr)
    }
    alert(arr1)
}
function print() {
    document.getElementById('masiv').innerText =''
    for (let a in arr1){
        document.getElementById('masiv').innerText += ` ${arr1[a]} |`
    }
}
function printOpt() {
    document.getElementById('selector').innerHTML =''
    for (let a in arr1){
        document.getElementById('selector').innerHTML += `<option>${arr1[a]}</option>`
    }
}