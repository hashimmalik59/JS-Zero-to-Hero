// Logical Operator

const isDriverLicense = false;
const isGoodVision = true;
console.log(isDriverLicense && isGoodVision); // AND operator are true when all conditions are true
console.log(isDriverLicense || isGoodVision); // OR operator are true when only one conditions are true

const isLight = false; // it will return true to false and false to true always opposite
console.log(!isLight); // assume, we have a light button so we are pressing it for on/off like true false

if (isDriverLicense && isGoodVision) { // because all consitions are not true 
    console.log("Hashim, You are able to drive!");
} else {
    console.log("Hashim, You are not able to drive!"); // so else is executes
}