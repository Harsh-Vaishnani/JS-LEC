// let a=prompt("Enter Value of A ");
// let b=prompt("Enter Value of B ");
// let c=prompt("Enter Value of C ");

// if(a>b && a>c){
//     console.log("A is Big.")
// }
// else if(a===b){
//     console.log("A and B Value Both are Same = ",a)
// }
// else if(a===c){
//     console.log("A and C Value are Same = ",a)
// }
// else if(b===c){
//     console.log("B and C Value Both are Same = ",b)
// }
// else if(b>a && b>c){
//     console.log("B is Big.")
// }
// else{
//     console.log("C is Big.")
// }

// let month = 6;
// switch (month) {
//   case 1:
//     console.log("January");
//     break;
//   case 2:
//     console.log("Feb");
//     break;
//   case 3:
//     console.log("March");
//     break;
//   case 4:
//     console.log("April");
//     break;
//   case 5:
//     console.log("May");
//     break;
//   case 6:
//     console.log("June");
//     break;
//   case 7:
//     console.log("July");
//     break;
//   case 8:
//     console.log("Auguest");
//     break;
//   case 9:
//     console.log("Sptember");
//     break;
//   case 10:
//     console.log("October");
//     break;
//   case 11:
//     console.log("November");
//     break;
//   case 12:
//     console.log("December");
//     break;
//   default:
//     console.log("Invalid Month Number");
// }

// let mark=34;

// if(mark>=35){
//     if(mark<=60 && mark>=35){
//         console.log("You got C+ Grade");
//     }
//     else if(mark>60 && mark<=80){
//         console.log("You got B+ Garde")
//     }
//     else if(mark>80 && mark<=100){
//         console.log("You Got A+ Grade")
//     }
// }
// else{
//     console.log("Fail")
// }

// let arr = [1, 2, 3, 4, 5];
// arr[6]=44;
// console.log(arr)

// let arr = [1,2,3,4];
// arr.push(5);  // pachd add thay
// console.log(arr.length)

// let arr = [1, 2, 3, 4, 5, 56, 6, 7, 8, 8, 9, 987, 6, 65, 5, 44];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log("Length of Array is => ", arr.length);

// let number = [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
// ];
// let sum = 0;

// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 5; j++) {
//     sum += number[i][j];
//   }
// }
// console.log(sum);

// let arr = [20,40,10,30,-50];
// let min = Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log(min)

// let arr = [20, 40, 41, 30, -50];
// let max = -Infinity;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max)

// let arr=Math.min (1,2,-3,4);
// console.log(arr)

// let arr=Math.max(1,2,33,4,5);
// console.log(arr)

// let arr=[1,2,3,4,5];
// for(let i=arr.length-1; i>=0; i--){
//     console.log(arr[i])
// }

// let arr = [[1, 2, -33, 4, 5],[6, 7, -8, 9, 10]];
// let min = Infinity;
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 5; j++) {
//     if (arr[i][j] < min) {
//       min = arr[i][j];
//     }
//   }
// }
// console.log(min);

// let arr = [[1, 2, -33, 400, 5],[6, 7, -8, 9, 10]];
// let max= -Infinity;
// for(let i=0; i<2; i++){
//     for (let j=0; j<5; j++){
//         if(arr[i][j]>max){
//             max = arr[i][j];
//         }
//     }
// }
// console.log(max)

// let a = 10;
// let b = 20;
// a = a + b;
// // console.log("First a", a);
// b = a - b;
// // console.log("Second b",b);
// a = a - b;
// // console.log("Third a", a);
// console.log("A => ", a);
// console.log("B => ", b);

// let a=10;
// let b=20;
// let c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);

// let a=10;
// let b=3;
// console.log(Math.floor(a/b));
// console.log(Math.ceil(a/b));
// console.log(Math.round(a/b));

// let obj = {
//   name: "Harsh",
//   lastname: "vaishnani",
//   age: "21",
//   gender: "male",
//   state:{
//     state:"Junagadh",
//     final:"Ahmdabad",
//   }
// };
// console.log(obj.state.final)

// let obj={
//     name:"Harsh",
//     lastname:"vaishnani",
//     age:21
// }
// for(let key in obj){
//     console.log(obj[key])
// }

// let obj2={
//     name:"Rahul",
//     age:'21',
//     gender:"Female"
// }
// for(let key in obj2){
//     console.log(obj2)
// }
// console.log(obj2)

// function fun(a, b) {
//   return (sum = a + b);
// }
// fun(1, 2);
// console.log(sum);

// let fun = (a, b) => {
//   sum = a + b;
//   return sum;
// };
// fun(7, 8);
// console.log(sum);

// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,20)

// function greet (name){
//     console.log("Hello",name,"Welcome to my Laptop")
// }
// greet ("Vinod")
// greet ("Ram")

// let result = function sum(a,b){
//     console.log(a+b)
// }
// result(10,20)

function sum(a, b) {
  return a + b;
}
let ans = sum(10, 20);
console.log(ans)
