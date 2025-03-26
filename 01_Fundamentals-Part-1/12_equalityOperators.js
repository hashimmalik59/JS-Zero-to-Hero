// Equality Operators

// Strict Equality Operator "===" compare value with type conversion
// Loose Equality Operator "==" compare value and type both

let myAge = 18;
if (myAge === 18) {
    console.log("You are 18+" + "Strict");
}
if (myAge == 18) {
    console.log("You are 18+" + "Loose");
}

let favoriteNumber = Number(prompt("Enter your Lucky Number"))// value by default is number
console.log(favoriteNumber);

if (favoriteNumber === 23) console.log("23 is good number");
else if (favoriteNumber === 4) console.log("4 is my Lucky number");
else console.log("This is not 23 or 7");

// Strict not !== "compare with strict value and type are not equal"
if (favoriteNumber !== 3) console.log("not equal to 3")

// Strict not != "compare with value are not equal"
if (favoriteNumber != 5) console.log("not equal to 5");