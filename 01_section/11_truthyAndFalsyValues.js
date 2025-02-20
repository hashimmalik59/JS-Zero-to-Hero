// Truthy and Falsy values

// 5 Falsy values: 0, "", undefined, null, NaN

// Truthy values: Other values except the above(falsy values) is truthy values

console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("Hashim")); // true
console.log(Boolean(1)); // true
console.log(Boolean({})); // true

// Note: Conversion to Boolean is always implicit coercion, automatically

const myBalance = 0;
if (myBalance) { // So we know 0 is falsy and if condition runs on true
    console.log("You are Poor!");
} else {
    console.log("You need to earn Money!");
}

let myHeight;
if (myHeight) { // because its have "undefined" it is falsy value
    console.log("Your height is not given yet")
} else {
    console.log("You are taller");
}