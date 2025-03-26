// Operator Precendence

// Note: "Precendence" means priority & all maths happening from left to right

// Link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

let birthYear = 2002;
let currentYear = 2025;
let myAge = currentYear - birthYear;
console.log(myAge >= currentYear - birthYear); // first it can do "BODMAS" rule our old school traditional math

console.log(3 + 4 + 6); // it will start from left to right

// Note: All Math operators are happen before comparison operator

let x, y;
x = y = 20 - 15 - 10; // x = y = -5 // it will start from lef to right
console.log(x, y);


let bortherBirthYear = 2007;
let currentYearForBorther = 2025;
let brotherAge = currentYearForBorther - bortherBirthYear;
console.log(brotherAge);

let averageAge = (myAge + brotherAge) / 2; // BODMAS rule, Bracket Open precedence
console.log(averageAge);