let a = document.getElementById("one");
let b = document.getElementById("btn");
b.addEventListener("click", abc);
function abc(e) {
    e.preventDefault();
    console.log(a.value);
}