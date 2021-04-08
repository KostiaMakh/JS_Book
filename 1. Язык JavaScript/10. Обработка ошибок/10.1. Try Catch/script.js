let a =1
/*let b=1*/
try{
    console.log(`b = ${b}`)
}
catch (err) {
    console.log(`А вот и ошибка ${err}`)
}

let js = '{"age":28}'
try {
    let m= JSON.parse(js)
    if (!m.name){
        throw new SyntaxError('Всё писец пропало')
    }
    console.log(m)
} catch (err) {
    console.log(err.message)
}