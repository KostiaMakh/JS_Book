function colorSect() {
    let section = document.getElementById('secAr')
    if (section.dataset.cursPot==="true"){
        section.classList.add('sect1')
        section.classList.remove('sect2')
        section.dataset.cursPot= "false"
    }
    else{
        section.classList.remove('sect1')
        section.classList.add('sect2')
        section.dataset.cursPot="true"
    }

}


function addMarginTop() {
    let marginTop = getComputedStyle(document.getElementById('secAr'))
    alert(marginTop.marginTop)
}

let a = setInterval(()=>addMarginTop(),2000)