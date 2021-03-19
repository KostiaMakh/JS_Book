let arr1 = [10, 20, 30, 40]

let [a1, a2, a3, a4] = arr1

console.log(`a1 = ${a1}`)
console.log(`a2 = ${a2}`)
console.log(`a3 = ${a3}`)
console.log(`a4 = ${a4}`)

let [firstName, LastName] = 'Иван Семенович'.split(' ')
console.log(`Имя = ${firstName}`)
console.log(`Отчество = ${LastName}`)

// Отбрасываем ненужные эллементы массива
let [firstName2, ,familia] = 'Кирили ХХХХХ Григоров'.split(' ')
console.log(`Имя = ${firstName2}`)
console.log(`Фаимилия = ${familia}`)

//Присвоение в объект
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

console.log(user.name);

//Циклы

let workers = new Map()
workers.set('Олег', "Слесарь")
.set("Антон", "Сварщик")
.set('Глеб', "Доктор")
.set("Юнир", "Доставало")

for (let [key, values] of workers){
    console.log(`key = ${key} ============== value = ${values}`)
}

// rest
let [b1, b2, ...allOther] = ['asdgfsdf', 'ersdfsdf', 34234,'erewrew', 'ewrewrew', 23123213123]
console.log(b1 +'   '+ b2)

//Двоеточие
let obj3 = {
    title: 40,
    height: 42324,
    width: 23
}
let {title: t, width:w, height: f4} = obj3
console.log(t + ' ' + w)


//присвоение не всего объекта
let {title:bum, ...rest2} = obj3
console.log(bum)
console.log(`rest2.height = ${rest2.height}`)

//запуск функции с деструктуризацией

let optionsMine = {
    title: 'newWindow',
    size:{
        height: '200px',
        width: '300px'
    }
}
function drawWindow({title, size:{width:w = '3000px', height:h}, status='200'}) {
    console.log(`title = ${title}, height = ${h}, width = ${w}, status = ${status}`)
}
drawWindow(optionsMine)