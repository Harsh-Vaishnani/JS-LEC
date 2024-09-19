let body = document.querySelector(".body");
body.style.textAlign = "center";

let inputData = document.querySelector(".input");
inputData.style.height = "25px";
inputData.style.width = "250px";

let btn = document.querySelector(".btn");
btn.style.height = "25px";

let myEvent = () => {
  if (inputData.value !== "") {
    let h2 = document.createElement("h2");
    h2.innerText = inputData.value;
    body.append(h2);
    inputData.value = "";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    body.append(deleteBtn);
    deleteBtn.addEventListener("click", () => {
      h2.remove();
      deleteBtn.remove();
      editBtn.remove();
    });
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    body.append(editBtn);
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      inputData.value = h2.innerText;
    });
  } else {
    alert("Serch Feild is Empty");
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  myEvent();
});
