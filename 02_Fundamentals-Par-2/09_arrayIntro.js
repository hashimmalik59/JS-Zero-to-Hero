// Introduction to Array

const friend1 = "Muhammad";
const friend2 = "Ali";
const friend3 = "Khan";

const friends = ["Muhammad", "Ali", "Khan"]; // array
console.log(friends);

const arr = new Array(3234, 4546, 78678, 78786);
console.log(arr); // array with "new" keyword

console.log(friends[0]); // array is starting from zero
console.log(friends[2]);

console.log(friends.length);
//                       expression
console.log(friends[friends.length - 1]); // Khan

friends[2] = "Umar";
console.log(friends);

const firstName = "Hashim";
const hashim = [firstName, "Malik", 2025 - 2002, true, friends]; // we can store different types in an array
console.log(hashim);

// Exercise
const ages = [1975, 2000, 2001, 2002, 2007];

function myAge(myBirthYear) {
    return 2025 - myBirthYear;
}
const calculateAge = myAge(myAge(ages[0]));
console.log(calculateAge);