let fehn = document.querySelector(".fehn");
let celc = document.querySelector(".celc");
let btn = document.querySelector(".btn");
let main = document.querySelector(".main");


hehnHandler = () => {
    ans = +(fehn.value - 32) * 0.5556;
    celc.value = ans.toFixed(2);
}

celcHandler = () => {
    ans1 = +(celc.value) * 1.8 + 32;
    fehn.value = ans1.toFixed(2);

}
allReset = () => {
    celc.value = "";
    fehn.value = "";
}

btn.addEventListener("click", allReset);
fehn.addEventListener("input", hehnHandler);
celc.addEventListener("input", celcHandler);