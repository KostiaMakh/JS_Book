let ar1 = ["Яюлоки", "Груши", "Бананы", "Персики", "Ананас", "Арбуз"]
let ar2 = [1, 3, 4, 54, 3, 32, 423, 3, 65, 65, 54 ,65, 6,5, 3343356, 43535, 435 ]
let myArrText = []

function firstLoad() {
    reNewAr1()
    reNewAr2(ar2)
    reNewAr3()
    reNewAr4(ar1)
    reNewAr6(ar2)
}
function reNewAr1() {
    document.getElementById('outTab').innerText=''
    let count=1
    for (let a of ar1){
        document.getElementById('outTab').innerText += `${count}. ${a}\n`
        count++
    }
}
function reNewAr3() {
    document.getElementById('outTab3').innerText=''
    let count=1
    for (let a of users){
        document.getElementById('outTab3').innerHTML += `<h3>User №${count}</h3>`
        for (let prop in a){
            document.getElementById('outTab3').innerHTML += `<span>${[prop]}: ${a[prop]}</span>`
        }

        count++
    }
}
function reNewAr2(innerAr) {
    document.getElementById('outTab2').innerText=''
    let count=1
    for (let a of innerAr){
        document.getElementById('outTab2').innerText += `${count}. ${a}\n`
        count++
    }
}

function reNewAr4(masive) {
    document.getElementById('outTab4').innerText=''
    let count=1
    for (let a of masive){
        document.getElementById('outTab4').innerText += `${count}. ${a}\n`
        count++
    }
}
function reNewAr5(masive) {
    document.getElementById('outTab5').innerText=''
    let count=1
    for (let a of masive){
        document.getElementById('outTab5').innerText += `${count}. ${a}\n`
        count++
    }
}
function reNewAr6(masive) {
    document.getElementById('outTab6').innerText=''
    let count=1
    for (let a of masive){
        document.getElementById('outTab6').innerText += `${count}. ${a}\n`
        count++
    }
}
function AddPush() {
    let newEl
    while (true) {
        newEl = prompt('Введите элемент')
        if (!newEl) break
        ar1.push(newEl)
    }
    reNewAr1()
}
function AddUnsh() {
    let newEl
    while (true) {
        newEl = prompt('Введите элемент')
        if (!newEl) break
        ar1.unshift(newEl)
    }
    reNewAr1()
}
function DelPop() {
    ar1.pop()
    reNewAr1()
}
function DelShf() {
    ar1.shift()
    reNewAr1()
}
function DelOpr() {
    let text = `Введите нормер эллемента который необходимо удалить. Доступные для ввода значения от 1 до ${ar1.length}`
    let DelEl = parseInt(prompt(text))-1
    ar1.splice(DelEl, 1)
    reNewAr1()
}

function SubAll() {
    let dec = +prompt('Введите множитель')
    arDec = []
    ar2.forEach((item)=> arDec.push(item*dec))
    ar2=arDec
    reNewAr2(ar2)
}
function UpAll() {
    let dec = +prompt('Введите требуемую степень')
    arDec = []
    ar2.forEach((item)=> arDec.push(item**dec))
    ar2=arDec
    reNewAr2(ar2)

}

// Поиск по объектам масива

let users = [
    {id:1 ,name: "Kiril", age: "38", skill: "FullStack"},
    {id:2 ,name: "Oleg", age: "19", skill: "JS engineer"},
    {id:3, name: "Oleg", age: "24", skill: "C# engineer"},
    {id:4 ,name: "Mark", age: "34", skill: "PHP engineer"},
    {id:1 ,name: "Mark", age: "54", skill: "C++ engineer"},
    ]

function findUser() {
    let userFind = prompt('Введите id пользователя:')
    let userSelect = users.find(item =>item.id==userFind)
    alert(
        `User name: ${userSelect.name}
User age: ${userSelect.age}
User skill: ${userSelect.skill}`)
}

function filterUser() {
    let userFind = prompt('Сколько пользователей до пользователя с ID:')
    let userSelect = users.filter(item =>item.id<userFind)
    alert(`До пользвателя с с id:${userFind} ещё ${userSelect.length} пользователей`)
}

// преобразование масивов map
function returnDlinu() {
    let newMas = []
    newMas=ar1.map((item)=>item.length)
    reNewAr4(newMas)
}
function returnMutation() {
    let newMas = []
    newMas=ar1.map((item)=>{
        if (item.length<6){
            return 'Супер короткое название'
        }
        else return 'ОГО КАКОЙ'
    })
    reNewAr4(newMas)
}
function returnSplit() {
    let text = document.getElementById('outTab5').innerText
    myArrText = text.split(' ')
    document.getElementById('butMap').classList.replace('enab', 'disab')
    document.getElementById('butJoin').classList.replace('disab', 'enab')
    reNewAr5(myArrText)
}
function returnJoin() {
    let myArr =  myArrText.join(' ')
    document.getElementById('outTab5').innerText=myArr
    document.getElementById('butJoin').classList.replace('enab', 'disab')
    document.getElementById('butMap').classList.replace('disab', 'enab')
}
function returnSplit() {
    let newArr = ar2.reduce((sum, curent) => sum+curent,0)
    alert(newArr)
}