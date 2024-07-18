/*Que => 1.   Write a JavaScript program find palindrome  using function */

function checkPalindrome() {
  let input = document.getElementById("inputPalindrome").value;
  let result = document.getElementById("palindromeResult");
  if (input == "") {
    alert("Please fill the Number");
    return;
  }

  if (isPalindrome(input)) {
    result.textContent = `${input} is a palindrome.`;
  } else {
    result.textContent = `${input} is not a palindrome.`;
  }
  result.style.fontSize = "18px";
  result.style.fontFamily = "monospace";
}

function isPalindrome(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/*Que => 2.   Write a JavaScript program to check the last digit same OR not using UDF.(User Input
 Three Integer Numbers). */

function checkLastDigits() {
  let num1 = +document.getElementById("inputLastDigits1").value;
  let num2 = parseInt(document.getElementById("inputLastDigits2").value);
  let num3 = parseInt(document.getElementById("inputLastDigits3").value);
  let result = document.getElementById("lastDigitsResult");

  //isNaN => number ki value jabb NaN hoti heyy tabb iska use hota heyy or yeahh True Return krta heyy
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Enter all numbers");
    return;
  }
  if (lastDigitsSame(num1, num2, num3)) {
    result.textContent = `Last digits of ${num1}, ${num2}, and ${num3} are the same.`;
  } else {
    result.textContent = `Last digits of ${num1}, ${num2}, and ${num3} are different.`;
  }
  result.style.fontSize = "18px";
  result.style.fontFamily = "monospace";
}

function lastDigitsSame(num1, num2, num3) {
  const lastDigit1 = num1 % 10;
  const lastDigit2 = num2 % 10;
  const lastDigit3 = num3 % 10;

  return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
}

/*Que => 3.   Check Armstrong Number of Three Digits Using UDF. */

function checkArmstrong() {
  let num = parseInt(document.getElementById("inputArmstrong").value);
  let result = document.getElementById("armstrongResult");
  if (isNaN(num)) {
    alert("Please fill the Number");
    return;
  }
  if (isArmstrongNumber(num)) {
    result.textContent = `${num} is an Armstrong number.`;
  } else {
    result.textContent = `${num} is not an Armstrong number.`;
  }
  result.style.fontSize = "18px";
  result.style.fontFamily = "monospace";
}

function isArmstrongNumber(num) {
  let numStr = num.toString();
  let numDigits = numStr.length;
  let sum = 0;

  for (let digit of numStr) {
    sum += Math.pow(parseInt(digit), numDigits);
  }

  return sum === num;
}

/*Que => 4. Check Prime Number or Not Using Function. */

function checkPrime() {
  let num = parseInt(document.getElementById("inputPrime").value);
  let result = document.getElementById("primeResult");
  if (isNaN(num)) {
    alert("Please fill the Number");
    return;
  }
  if (isPrime(num)) {
    result.textContent = `${num} is a prime number.`;
  } else {
    result.textContent = `${num} is not a prime number.`;
  }
  result.style.fontSize = "18px";
  result.style.fontFamily = "monospace";
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
