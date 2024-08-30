// Operators in JS :-

// (1) Arithmetic Operators :-
//+, -, *,  / , Modulus, Exponentiation, Increment, Decrement

let a = 10;
let b = 5;
console.log("a + b = ", a + b); // +
console.log("a - b = ", a - b); // -
console.log("a * b = ", a * b); // *
console.log("a / b = ", a / b); // /
console.log("a % b = ", a % b); // % Modulus
console.log("a ^ b = ", a ** b); // ** Exponentiation (10*10*10*10*10)

// Unary Operator :- Increment , Decrement (Jema ek j variable ni jrur pade teva like c++)

let c = 7;
console.log("c = ", c++); //PostIncrement
console.log("c = ", ++c); //PreIncrement

let d = 10;
console.log("d = ", d--); //PostDecrement
console.log("d = ", --d); //PreDecrement

// (2) Assignment Operators :-
// =   +=  -=  *=  %=  **=

let e = 10;
let f = 11;
let g = 2;
console.log("+= ", (e += 4)); // +=
console.log("-= ", (f -= 3)); // -=
console.log("%= ", (e %= 3)); // %=
console.log("*= ", (g *= 5)); // *=
console.log("**= ", (g **= 3)); // **=

// (3) Comparison Operators :-
// Equal to ==
// Not equal to !=
// Equal to & type ===
// Not equal to & type !==
// >, >=, <, <=

let aa = 10;
let bb = 10;
console.log("a==b ", aa == bb);
console.log("a!=b ", aa != bb);
console.log("a === b ", aa === bb); //Value ni sathe data type pn cheack kre ===
console.log("a !== b ", aa !== bb); //Value ni sathe data type pn cheack kre !==

// (4) Logical Operators :-
// Logical AND &&
// Logical OR ||
// Logical NOT !

// Practice If Else Statement

let nubr = prompt("Enter Any Number");

if (nubr % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// Ternary Operator
let age = 25;
age >= 18 ? console.log("Adult") : console.log("Not Adult"); // Variable ma store kravi ne pn thay

let switchh = 2;
switch (switchh) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
  default:
    console.log("Sorry");
}
