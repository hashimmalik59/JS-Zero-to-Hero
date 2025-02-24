// Activating Strict Mode
"use strict"; // it will secure your code and treat as newer version of JS

age = 23; // ReferenceError: age is not defined
console.log(age);

const interface = 123; // SyntaxError: Unexpected strict mode reserved word
console.log(interface); // in future this keyword will be using in JS, so thats why

const if = "else"; // SyntaxError: Unexpected token 'if'
console.log(if);
