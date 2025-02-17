// Datatypes of JS
// Primitive and Non-Primitive Datatypes

// JS is dynamically type language(we cannot define its type before creating it variable)

let JSIsFun = true;
console.log(JSIsFun);
console.log(typeof JSIsFun); // boolean

JSIsFun = "YES!"; // we easly change its type
console.log(JSIsFun);
console.log(typeof JSIsFun); // string

// console.log(typeof "Hashim"); // typeof is a built-in function which can check the datatype of a variable
// console.log(typeof 23);
// console.log(typeof false);

// "Hashim' 
// 'Hashim" 
// Syntax error Hashim is not defined 
"Hashim" // right way to declare a string

let isYear; // when ever we declare a variable and cannot assign it to value its value is "undifined"
console.log(isYear);
console.log(typeof isYear); // undefined

isYear = 2025; // now it change dynamically chage its type, first undefined and now number
console.log(isYear);
console.log(typeof isYear);

console.log(typeof null); // object (error in JS)