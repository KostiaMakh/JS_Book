function pow(x, n) {
    if (n===1){
        return x
    } else {
        return x*pow(x, n-1)
    }
}
console.log(pow(2,87))

//тоже самое но короче
function pow2(x, n) {
    return n===1 ? x : x*pow2(x, n-1)
}
console.log(pow2(2, 2))

//рекурсивный вызов
let company = {
    sales: [
        {name: "Taras", salary: 1000},
        {name: "Andrew", salary: 1500}],
    tecknick: {
        group1: [{name: "Ashley", salary: 3000}, {name: "Uber", salary: 4500}],
        group2: [{name: "Oleh", salary: 2000}, {name: "Peter", salary: 2500}]
    }
}
function countSalay(department) {
    if (Array.isArray(department)){
        return department.reduce((prev, current) =>prev + current.salary, 0)
    }
    else {
        let sum=0
        for (let subGroup of Object.values(department)){
            sum += countSalay(subGroup)
        }
    return sum
    }
}
console.log(countSalay(company))