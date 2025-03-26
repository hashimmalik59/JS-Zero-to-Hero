// Function Declarations vs Expression

// function declaration
// myBirthYear(2025, 2002);
function myBirthYear(currentYear, birthYear) {
    const myAge = currentYear - birthYear;
    console.log(myAge);
    // return myAge;
}
// const checkMyAge = myBirthYear(2002, 2025);
// console.log(checkMyAge);

// function expression
const myBrotherAge = function (birthYear) {
    const myBrotherAge = 2025 - birthYear;
    console.log(myBrotherAge);
    // return myBrotherAge;
}
myBrotherAge(2007);
// const checkMyBrotherAge = myBrotherAge(2007);
// console.log(checkMyBrotherAge);

// Note: There is a huge difference between function declaration & expression is expression invoking is happening before function but declaration invoking is not happened before function it will shown an error "ReferenceError: Cannot access 'checkMyAge' before initialization" and this mechanism is called Hoisting we discussed about in in future very soon.