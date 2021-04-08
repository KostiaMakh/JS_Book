String.prototype.repeat = function(n) {return new Array(n+1).join(` ${this}`)}
console.log("Mam".repeat(4))


///////////////////
function f() {
    alert("Hello!");
}
f.deffer = function (ms) {setTimeout(()=>console.log('привет'), ms)}