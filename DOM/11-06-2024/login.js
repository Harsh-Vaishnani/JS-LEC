document.getElementById("login-form").addEventListener("submit", onsubmit);
function onsubmit(e) {

    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let validpassword = localStorage.getItem(email);
    // console.log(validpassword);
    if (validpassword != password) {
        alert("Enter correct password");
        return
    }
    alert("Login successfuly")

    window.location.href = ("index.html");

}