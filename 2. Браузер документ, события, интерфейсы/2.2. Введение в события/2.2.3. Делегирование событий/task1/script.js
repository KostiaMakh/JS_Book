
// простая версия обработчика
let selectedTd

function changeColor() {
    let target = event.target
    console.log(target.tagName)
    if (target.tagName !="TD") return

    highLight(target)
}

function highLight(td) {
    if(selectedTd){
        selectedTd.classList.remove('light')
    }
    selectedTd = td
    selectedTd.classList.add('light')
}

// продвинутая версия

function changeColor2(event) {
    let td = event.target.closest('td')
    if (!td) return
    highLight(td)
}