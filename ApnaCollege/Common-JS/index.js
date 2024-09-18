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

// function sum(a, b) {
//   return a + b;
// }
// let ans = sum(10, 20);
// console.log(ans)

// 🐦‍🔥    🐦‍🔥    🐦‍🔥    🐦‍🔥

// function sum(a, b) {
//   return a + b;
// }
// let ans = sum(10, 20);
// console.log(ans);

// function factorial(a){
//   for(let i=1; i<=a; i++){

//   }
// }
// factorial(8)

// function factorial(a) {
//   let result = 1;
//   for(let i=1; i<=a ; i++){
//     result = result * i;
//   }
//   return result
// }
// console.log(factorial(10))

// let fname="Harsh";
// let lname="Patel";
// let fullName=`${fname} ${lname}`
// console.log(fullName);

// let age=21;
// console.log("I am ",age,"Years Old");
// console.log(`I am ${age} Years Old`);

// let myFunction = function (a,b) {
//   return a+b;
// }
// console.log(myFunction(5,10));

// let fun = (a, b) => {
//   return (`Both Number ${a} and ${b} Sum is = ${a+b}`);
// };
// console.log(fun(51, 21));

// let calc = (n1,n2,ope) => {
//   if(ope === '+'){
//     return n1+n2;
//   }
//   else if(ope === '-'){
//     return n1-n2;
//   }
//   else if(ope === '/'){
//     return n1/n2;
//   }
// }
// console.log(calc (10,20,'+'));
// console.log(calc (10,20,'-'));
// console.log(calc (10,20,'/'));

// let ans = 0;
// let fun = (a) => {
//   for (i = a.length - 1; i >= 0; i--) {
//     let ans = a[i];
//   console.log(a[i])
//   }
// };
// fun([1, 2, 3, 4, 5]);

// let arr = [1, 2, 3, 4, 5];
// for (i=arr.length-1 ; i>=0 ; i--) {
//   console.log(arr[i]);
// }

// let reveseString = (str) => {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse = reverse + str[i];
//   }
//   return reverse
// };
// console.log(reveseString("Hay Harsh"));

//Palindrome

// let fun = (str) => {
//   let ans = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     ans += str[i];
//   }
//   // if (str === ans) {
//   //   console.log("True");
//   // } else {
//   //   console.log("False");
//   // }
//   let Ternaryy = (str === ans) ? "True" : "False"
//   console.log(Ternaryy)
// };
// fun("radar");

// let arr =["mango","Grapes","watermelon","banana","lichi","orange"];
// for (const ele of arr) {
//     console.log( ele);
// }

// let arr =["mango","Grapes","watermelon","banana","lichi","orange"];
// for (const ele in arr) {
//     console.log(ele)
// }

// let arr =["mango","Grapes","watermelon","banana","lichi","orange"];
// arr.forEach((ele,ind,arr)=>{
//     console.log(ele)
//     console.log(ind)
//     console.log(arr)
// })

// let arr = ["mango", "Grapes", "watermelon", "banana", "lichi", "orange"];
// arr.map((ele, ind, arr) => {
//   console.log(`${ele} ${ind}`);
// });

// const num = [1,2,3,4,5];
// const ans = num.map((ele,ind,num) => {
//     return ele*2
// })
// console.log(ans)

// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.pop();
// arr.push(11)
// arr.shift()
// arr.unshift(0)
// arr.splice(1,3)
// console.log(arr)

// let months=["Jan","march","April","June"];
// months.push("December");
// months.splice(months, 2,"Marchh")
// console.log(months.splice());
// console.log(months)

// let months=["Jan","march","April","June"];
// let ans = months.indexOf("march");
// months.splice(ans ,1, "Marchhh");
// console.log(months);

//  let months=["Jan","march","April","June"];
//  months.pop();
//  console.log(months)

// Add

// let arr=["One","Two","three","Five","Six"];
// arr.push("Seven");
// console.log(arr);

// arr.splice(0,1);
// arr.pop()
// console.log(arr)

// arr.findIndex(("three"));
// console.log(arr)

// let months = ["Jan", "December", "march", "April", "June"];
// let ans = months.indexOf("march");

// months.splice(ans,1,"March");
// console.log(months);

// let ans = months.indexOf("April");
// months.splice(ans,1)
// console.log(months)

// let arr = [1, 2, 3, 4, 5, 4, 6, 7, 6, 8, 9, 2, 10];
// let ans=arr.find((ele,ind,arr)=> {
//     return ele>5;
// })
// console.log(ans)

// let ans = arr.findIndex((ele,ind,arr)=>{
//     return ele>7;
// })
// console.log(ans)

// let ans = arr.filter((ele, ind, arr) => {
//   if ( ele>5 && ele % 2 === 0) {
//     return ele;
//   }
// });
// console.log(ans);

// let num = 6;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 6, 9, 10];
// let ans = arr.filter((ele, ind, arr) => {
//  return ele !== num
// });
// console.log(ans);

// const products = [
//   { name: "Laptop", price: "1200" },
//   { name: "Phone", price: "800" },
//   { name: "Tablet", price: "300" },
//   { name: "Watch", price: "150" },
// ];

// let ans = products.filter((ele, ind, products) => {
//   return ele.price <=500
// });
// console.log(ans)

// let number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 2, 9, 10];
// let ans = number.filter((ele, ind, num) => {

// });
// console.log(ans)

// let number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 2, 9, 10];
// number.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;
// })
// console.log(number)

// let num = [4, 7, 2, 9, 1, 6, 8, 3];
// num.sort((a, b) => {
//   if (a > b) return -1;
//   if (b > a) return 1;
// });

// let ans = num.map((ele) => {
//   return ele * ele;
// });
// console.log(ans);

// let words=["apple","banana","cherry","date"];
// let ans = words.map((ele)=>{
//     return ele.toUpperCase ();
// })
// console.log(ans)

// let numbers = [1, 2, 3, 4, 5];
// let ans = numbers
//   .map((ele) => {
//     if (ele % 2 === 0) {
//       return ele * ele;
//     }
//   })
//   .filter((ele) => {
//     return ele !== undefined;
//   });
// console.log(ans);

// let names =["one","two","three"];
// let ans = names.map((ele)=>{
//     return `Mr. ${ele}`;
// })
// console.log(ans)

// let numbers = [133, 242, 3645, 4467, 543];
// let ans = numbers.reduce((accu,ele,ind,num)=>{
//     return accu+ele;
// },0)
// console.log(ans)

// let str="Harsh Vaishnani";
// let ans = str.indexOf("V");
// console.log(ans)

// let arr  = Array.from(str);
// console.log(arr);

// let ans = arr.map((ele,ind)=>{
//     return (`${ele} ${ind}`)
// })
// console.log(ans)


// let str="Harsh Vaishnani";
// let ans =  str.includes("i");
// console.log(ans)

// let arr=["1","2","3","4"];
// console.log(arr.includes("5"));


// let myName="Harsh Vaishnani";
// let ans = myName.slice(2,8);
// console.log(ans)


// let alpha = "The quick brown fox jumps ove the lazy dog";

