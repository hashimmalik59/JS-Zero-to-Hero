// Arrow Function

const checkAge = (birthYear) => { // Arrow Function have arrow sign like "=>"
    const myAge = 2025 - birthYear;
    // console.log(myAge);
}
checkAge(2002); // expression

// Arrow Function more shorter way to right it
const calcAge = birthYear => 2025 - birthYear; // implicit return
// console.log(calcAge(2002));

const retirementAge = (myAge) => {
    if (myAge > 59) {
        // console.log("RETIRED!");
    } else {
        // console.log("NOT RETIRED!");
    }
}
retirementAge(59);

const yearsLeftForRetirement = (personAge, firstName) => {
    const retirementAge = 60;
    const yearsLeft = retirementAge - personAge;
    console.log(`${firstName} retire in ${yearsLeft} years`);
}
yearsLeftForRetirement(23, "Hashim");
yearsLeftForRetirement(6, "Abbas");