// Type Conversion and Coercion

// type conversion
let ageInString = "23"; // original value type is still same
console.log(typeof ageInString); // string
console.log(typeof Number(ageInString), typeof ageInString); // built-in function(converts value into "number") // number

console.log(Number("Hashim")); // NaN(Not a number)
console.log(typeof NaN); // number

console.log(String(23), 23);

// type coercion
console.log("My age is" + " " + 23); // it will convert number to string bacause of concate
console.log("23" - "10" - 3); // 10

// Note: -, *, /, % all working in string but + is not adding its concatenating a number with others

// Guess the number

let n = "1" + 1; // it will converts to string
console.log(n);
n = n - 1;
console.log(n); // it will minus with string, bacause its possible in JS

// Note: string will converts others to string when "+" operator is used and then other operator used like "-", "*", "/", and "%" then it will converts string into number