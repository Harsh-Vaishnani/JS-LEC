let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");
let btn = document.querySelector(".btn");

incre = () => {
    let ans = num.innerText++;
    console.log(ans)
}

decre = () => {
    if (num.innerText > 0) {
        let ans = num.innerText--;
        console.log(ans)
    }
}
reSet = () => {
    num.innerText = "0";
}

plus.addEventListener("click", incre);
minus.addEventListener("click", decre);
btn.addEventListener("click", reSet);