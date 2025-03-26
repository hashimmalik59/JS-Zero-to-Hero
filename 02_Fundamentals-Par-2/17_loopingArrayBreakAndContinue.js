// Loopiing Array: Break and Continue

const myData = ["Hashim Malik", "Altaf Ahmad", 2025 - 2002, "Amreena Altaf", "Maryam Altaf", true, "Hamza Altaf",];

let myDataType = [];
for (let i = 0; i < myData.length; i++) {
    // console.log(myData[i], typeof myData[i]);
    myDataType.push(typeof myData[i]);
}
// console.log(myDataType);

const myFamilyBirthYears = [1944, 1975, 2001, 2002, 2007];
const currentYear = 2025;
const myFamilyAllMembersAges = [];
for (let i = 0; i < myFamilyBirthYears.length; i++) {
    myFamilyAllMembersAges.push(currentYear - myFamilyBirthYears[i]);
}
// console.log(myFamilyAllMembersAges);

// Continue and Break
for (let i = 0; i < myData.length; i++) {
    if (typeof myData[i] === "string") continue; // skips the current iteration and move to the next iteration
    console.log(myData[i], typeof myData[i]);
}
for (let i = 0; i < myData.length; i++) {
    if (typeof myData[i] === "number") break; // when a certain condition is met then terminate the loop
    console.log(myData[i], typeof myData[i]);
}