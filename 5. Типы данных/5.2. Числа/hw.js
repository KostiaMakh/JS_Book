function calculator() {
    let a, b
    while (isNaN(parseInt(a)))
        a = prompt('Введите первое число')
    while (isNaN(parseInt(b)))
        b= prompt('Введите второе число')
    return alert(`Сумма чисел ${a} и ${b} = ${parseInt(a) + parseInt(b)}`)
}