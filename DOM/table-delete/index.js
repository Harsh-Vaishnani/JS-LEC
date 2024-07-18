let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");
  let tb = document.getElementById("tb");
  let arr = [];
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      password: password.value,
    };

    arr.push(obj);
    display(arr);
  });

  function display(a) {
    tb.innerHTML = "";
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerText = a[i].name;

      let td2 = document.createElement("td");
      td2.innerText = a[i].email;

      let td3 = document.createElement("td");
      td3.innerText = a[i].phone;

      let td4 = document.createElement("td");
      td4.innerText = a[i].password;
      let td5=document.createElement("td") ;
      td5.innerText="❌" ;
      td5.style.cursor="pointer" ;
      td5.addEventListener("click",function(e){
       e.target.parentNode.remove() ;
      })
      tr.append(td1, td2, td3, td4 ,td5);
      tb.append(tr);
      
    }
  }