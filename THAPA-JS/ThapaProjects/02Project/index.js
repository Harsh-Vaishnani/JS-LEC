let body = document.querySelector(".body");
body.style.textAlign = "center";

let inputData = document.querySelector(".input");
inputData.style.height = "25px";
inputData.style.width = "250px";
inputData.style.marginBottom = "3%";

let btn = document.querySelector(".btn");
btn.style.height = "25px";

let sort = document.querySelector(".sort");

let sortArr = [];

let myEvent = () => {
  if (inputData.value !== "") {
    //Create Parent Div 👇
    let parentDiv = document.createElement("div");
    body.append(parentDiv);
    parentDiv.style.display = "flex";
    parentDiv.style.marginTop = "15px";
    parentDiv.style.justifyContent = "center";

    //Create h2 Element 👇
    let h2 = document.createElement("h2");
    h2.style.margin = "0px";
    h2.style.width = "30%";
    h2.innerText = inputData.value.toLowerCase();
    parentDiv.append(h2);
    body.append(parentDiv);
    inputData.value = "";

    //Create Delete Button 👇
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginInline = "20px";
    parentDiv.append(deleteBtn);
    body.append(parentDiv);
    deleteBtn.addEventListener("click", () => {
      h2.remove();
      deleteBtn.remove();
      editBtn.remove();
      parentDiv.remove();
    });

    //Create Edit Button 👇
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    parentDiv.append(editBtn);
    body.append(parentDiv);
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      inputData.value = h2.innerText;
      h2.remove();
      deleteBtn.remove();
      editBtn.remove();
      parentDiv.remove();
    });

    //Sort Button 👇

    sort.addEventListener("click", (e) => {
      e.preventDefault();
      sortArr.push(h2.innerHTML);
      sortArr.sort((a, b) =>
        a.toLocaleLowerCase().localeCompare(b.toLowerCase())
      );
      // let lastSubArr = sortArr[sortArr.length-1];
      // let lastEle = lastSubArr[lastSubArr.length-1];
      // console.log(lastEle)
      parentDiv.append(sortArr);
      body.append(parentDiv);
      console.log([sortArr]);
    });
  } else {
    alert("Serch Feild is Empty");
  }
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  myEvent();
});
