let plus = document.querySelector(".plus");
plus.addEventListener("click", abc);
function abc() {
    let first = +document.querySelector(".first").value;
    let ans = document.querySelector(".btn");
    let show = document.querySelector(".show");
    ans.addEventListener("click", add);
    function add() {
        let second = +document.querySelector(".second").value;
        let anss = first + second;
        console.log(anss);
        show.innerText = anss;
    }
}

let minus = document.querySelector(".minus");
minus.addEventListener("click", min);
function min() {
    let first = +document.querySelector(".first").value;
    let show = document.querySelector(".show");
    let ans = document.querySelector(".btn");
    ans.addEventListener("click", add);
    function add() {
        let second = +document.querySelector(".second").value;
        let anss = first - second;
        console.log(anss);
        show.innerText = anss;
    }
}

let multi = document.querySelector(".multi");
multi.addEventListener("click", milt);
function milt() {
    let first = +document.querySelector(".first").value;
    let ans = document.querySelector(".btn");
    let show = document.querySelector(".show");
    ans.addEventListener("click", add);
    function add() {
        let second = +document.querySelector(".second").value;
        let anss = first * second;
        console.log(anss);
        show.innerText = anss;
    }
}

let divide = document.querySelector(".divide");
divide.addEventListener("click", divv);
function divv() {
    let first = +document.querySelector(".first").value;
    let show = document.querySelector(".show");
    let ans = document.querySelector(".btn");
    ans.addEventListener("click", add);
    function add() {
        let second = +document.querySelector(".second").value;
        let anss = first / second;
        console.log(anss);
        show.innerText = anss;
    }
}