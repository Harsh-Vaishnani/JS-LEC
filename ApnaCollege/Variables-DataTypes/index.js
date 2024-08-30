// let, const & var :-
// Console.log is used to log (print) a message to the console


// var : Variable can be re-declared & updated. A global scope variable.
var a = 9;
var a=10;
console.log(a);

// let : Variable cannot be re-declared but can be updated. A block scope variable.
let b = 10;
b = 20;
console.log(b);

// const : Variable cannot be re-declared or updated. A block scope variable.
const c=30;
console.log(c)



// Data Types in JS :-
// Primitive Types: Number, String, Boolean, Undefined, Null, BigInt, Symbol(Fixed Data)
// Non-Primitive Types: Objects, Array 

let num=5;
console.log(typeof num);    //Number TypeOf is Number

let str="Harsh";
console.log(typeof str);    //String TypeOf is String

let bolen=true;
console.log(typeof bolen);  //Boolean TypeOf is Boolean

let und=undefined;
console.log(typeof und);    //Undefined TypeOf is Undefined

let nulll=null;
console.log(typeof nulll);  //null TypeOf is Object

let symb=Symbol;
console.log(typeof symb)    //Symbol TypeOf is Function

let bgint=BigInt;
console.log( typeof bgint); //BigInt TypeOf is Function




// Variable Rules :- 
// Variable names are case sensitive “a” & “A” is different.
// Only letters, digits, underscore( _ ) and $ is allowed. (not even space).
// Only a letter, underscore( _ ) or $ should be 1st character.
// Reserved words cannot be variable names.