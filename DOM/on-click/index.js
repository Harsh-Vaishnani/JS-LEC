// Method-1
// let a=document.getElementsByTagName("p")[0];
// function abc(){
//     a.innerText="HARSH VAISHNANI";
// }

// Method-2
// let a=document.getElementsByClassName("btn-2")[0].onclick=abc;
// function abc(){
//     console.log("dhwjdhw");
// }

// Method-3
// let a = document.getElementById("btn");
// a.addEventListener("click", function () {
//     console.log("HARSH VAISHNANI");
// })

// Method-4
let a=document.getElementsByClassName("btn-4")[0];
a.addEventListener("click",abc)
function abc(){
    console.log("hello");
}
