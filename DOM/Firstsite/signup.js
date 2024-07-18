let a = document.getElementById("name");
let b = document.getElementById("email");
let c = document.getElementById("password");
let btn = document.getElementById("btn");
btn.addEventListener("click", abc);
let arr = [];
function abc(e) {
  e.preventDefault();
  if (a.value == "") {
    alert("Fill the Name");
  } else if (b.value == "") {
    alert("Fill the Email");
  } else if (c.value == "") {
    alert("Fill the Password");
  } else {
    let obj = {
      name: a.value,
      email: b.value,
      password: c.value,
    };
    arr.push(obj);
    localStorage.setItem("one", JSON.stringify(arr));
    window.location.href = "login.html";
  }
}
