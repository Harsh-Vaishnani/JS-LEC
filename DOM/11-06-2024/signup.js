document.getElementById("signup-form").addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  //Email validation ke liye Regex ka use kiya heyy
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Password validation ke liye Regex ka use kiya heyy

  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  let ConfirmPassword = document.getElementById("confirmpassword").value;
  if (!emailRegex.test(email)) {
    alert("Email Not Valid");
    return;
  }
  if (
    !(
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    )
  ) {
    alert("Password Not Valid");
    return;
  }
  if (password != ConfirmPassword) {
    // console.log("BOTH NOT ARE SAME");
    alert("Both Must be Same ⚠️");
    // function close krne ke liye return likha hey
    return;
  }
  localStorage.setItem(email, password);

  window.location.href = "login.html";
}