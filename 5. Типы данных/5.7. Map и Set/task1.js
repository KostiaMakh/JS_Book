function unique(arr) {
    /* ваш код */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let mineMap = new Set()
values.forEach((a)=>{
    mineMap.add(a)
})
console.log(mineMap)