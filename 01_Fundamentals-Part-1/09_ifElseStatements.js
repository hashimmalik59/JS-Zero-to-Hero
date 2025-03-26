// Taking Deisions If / Else Statements

// Note: Condition is always return true or false

let myAge = 15;
// on this place we put condition
if (myAge >= 18) {
    console.log(`You can driver because your age is ${myAge}`); // "if" condition is true then if code is executes
} else {
    console.log(`You can not driver because your age is ${myAge}`); // "else" condition is true then else code is executes
    // else condtion is optional
}

let myBirthYear = 2002;
let century;
if (myBirthYear >= 2000) {
    century = 21;
    console.log("21st Gen");
} else {
    century = 20;
    console.log("20th Gen");
}
console.log(century);