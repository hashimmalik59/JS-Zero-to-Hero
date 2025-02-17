// Let, Const, and Var

let firstName = "Hashim"
console.log(firstName);

const dateOfBirth = "02/07/02";
dateOfBirth = "03/07/02"
console.log(dateOfBirth); // TypeError: Assignment to constant variable. (we cannot change the value of "const")

// const job; // SyntaxError: Missing initializer in const declaration. (we cannot only declare variable with "const")

// Note: Prefer use "const" all the time but if you use "let" so make sure its value can updatable then use it.

var job = "Programmer";
job = "Teacher";
var job = "Customer Relation Officer";

// var: redeclarable and reassignable
// let: not declareable and reassignable
// const: not redeclarables and not reassignable