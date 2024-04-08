let num = prompt("Enter the Number");
// num = +"num";
if (num > 9 && num < 100) {
    console.log(num, "=> Two Digit Number")
}
else if (num == 0) {
    console.log("Invalid Number 😏");
}
else if (num < -9 && num > -100) {
    console.log(num, "=> Two Digit Number");
}
else {
    console.log(num, "=> Single Digit Number");
}

