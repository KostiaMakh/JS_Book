let arr1 = new WeakMap

let a={name: 'igor', age:'38'}
let b={name: 'mark', age:'19'}

arr1.set(a, '43')
    .set(b, '23')

console.log(arr1.get(a))
