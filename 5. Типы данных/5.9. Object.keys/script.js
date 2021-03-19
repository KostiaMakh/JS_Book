let tryObj = {
    "Апельсин": "10 кг",
    "Мандарин": "5 кг",
    "Помидор": "9 кг",
    "Огурец": "12 кг",
    "Абрикос": "34 кг",
    "Арбуз": "1 кг"
}
console.log(`Значение ключей ${Object.values(tryObj)}`)
console.log(`Перечень ключей объекта ${Object.keys(tryObj)}`)
console.log(`Перечень ключей и их значений ${Object.entries(tryObj)}`)

Object.entries(tryObj).map(([key, value])=>{
   console.log(`${key}    ${value}`)
})
