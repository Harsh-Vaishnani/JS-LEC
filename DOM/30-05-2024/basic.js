/* 01. Write a program to create Simple Calculator using Operators.*/

// // Define the basic arithmetic functions
// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Division by zero is not allowed.");
//     }
//     return a / b;
// }

// function calculator(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return add(a, b);
//         case '-':
//             return subtract(a, b);
//         case '*':
//             return multiply(a, b);
//         case '/':
//             return divide(a, b);
//         default:
//             throw new Error("Invalid operator. Please use +, -, *, or /.");
//     }
// }

// try {
//     const a = parseFloat(prompt("Enter the first number:"));
//     const b = parseFloat(prompt("Enter the second number:"));
//     const operator = prompt("Enter the operator (+, -, *, /):");

//     const result = calculator(a, b, operator);
//     console.log(`Result: ${a} ${operator} ${b} = ${result}`);
//     alert(`Result: ${a} ${operator} ${b} = ${result}`);
// } catch (error) {
//     console.error(error.message);
//     alert(error.message);
// }

/* 2. JavaScript Program to Swap Two Variables */

let a = 15;
let b = 20;

console.log(`Before swap: a = ${a}, b = ${b}`);

// Swapping using a temporary variable

let temp = a;
a = b;
b = temp;

console.log(`After swap: a = ${a}, b = ${b}`);

/* 3. JavaScript Program to Find the Square */

function square(number) {
  return number * number;
}

// Example usage
let num = 5;
let result = square(num);
console.log(`The square of ${num} is ${result}`);

/* 4.  Find the third angle of a right triangle if two other angles are given. */

// Function to find the third angle of a right triangle
function findThirdAngle(angle1, angle2) {
  // Sum of angles in any triangle is 180 degrees
  const totalAngle = 180;
  // In a right triangle, one angle is always 90 degrees
  const rightAngle = 90;

  // Calculate the third angle
  const thirdAngle = totalAngle - (angle1 + angle2 + rightAngle);

  return thirdAngle;
}

const angle1 = 50;
const angle2 = 60;

const thirdAngle = findThirdAngle(angle1, angle2);
console.log(
  "The third angle of the right triangle is:",
  thirdAngle,
  "degrees."
);
