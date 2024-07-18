let a = document.getElementById("one");
let b = document.getElementById("count");
let c = document.getElementById("two");
let ct = 0
a.addEventListener("click", abc);
function abc() {
    ct++;
    b.innerText = ct;
}
c.addEventListener("click", bca);
function bca() {
    if (ct <= 0) {
        b.innerText = 0;
    }
    else {
        ct--;
        b.innerText = ct;
    }
}