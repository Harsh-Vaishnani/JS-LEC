let body = document.querySelector(".body");
let data = document.querySelector("#inputData");
let btn = document.querySelector(".btn");

let ToDoFunction = () => {
  console.log(data.value);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  ToDoFunction();

  let newEle = document.createElement("h2");
  newEle.innerText = data.value;
  data.value = "";
  body.append(newEle);

  let btn2 = document.createElement("button");
  btn2.innerText = "Delete";
  console.log(btn2);
  body.append(btn2);

  btn2.addEventListener("click", (e) => {
    e.preventDefault();
    newEle.remove();
    btn2.remove();
  });


});