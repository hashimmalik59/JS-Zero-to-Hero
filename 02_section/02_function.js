// Function

// Function is the piece code that we can use over and over again in our code

function name() { // first function keyword and then function name
    console.log("Hashim"); // statement
}
// name(); // invoking / calling / running a function
// name();
// name(); // reusing the code over and over again

// name(): "("firstName", "lastName")" these are "parameters" it is like a variable

function fullName(firstName, lastName) { // user defined function
    const myFullName = `My full name is ${firstName} ${lastName}`
    return myFullName; // "return" keyword is for returning a given a value
}
// fullName("Hashim", "Malik"); // in invoking "("Hashim", "Malik")" it is called "arguments" "Hashim" for firstName and "Malik" for lastName

// Note: If we want to use the value of "return" then we use it in a variable like that;
let checkReturn = fullName("Hashim", "Malik");
console.log(checkReturn);


// console.log() // this is built-in function
// Nummber() // this is built-in function

// Note: We cannot use any code after "return" keyword
// Why we use:
// 1) Exits a Function: When "return" is used inside a function, it stops the execution of the function and exits it immediately.
// 2) Returns a Value: You can use "return" to send a value back to the user of the function.