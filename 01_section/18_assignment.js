// Values and Variables

// Declare variables called country, continent and population and assign their values according to your own country (population in millions).

// Log their values to the console.

let country = 'Pakistan';
let continent = 'Asia';
let population = 255645645;

// console.log(country);
// console.log(continent);
// console.log(population);

////////////////////////////////////////

// Data Types

// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false;
// const language;

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

/////////////////////////////////////////

// let, const and var

// Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

// Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

// Try to change one of the changed variables now, and observe what happens.

const language = "Urdu";

//////////////////////////////////////////

// Basic Operators

// If your country split in half, and each half would contain half the population, then how many people would live in each half?

// Increase the population of your country by 1 and log the result to the console.

// Finland has a population of 6 million. Does your country have more people than Finland?

// The average population of a country is 33 million people. Does you country have less people than the average country?

// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.

console.log(population / 2);
console.log(population + 1);
let finlandPopulation = 6000000;
console.log(population > finlandPopulation);
console.log(population > finlandPopulation / 1);
console.log(`${country} is in ${continent}, and its ${population} people speak ${language}.`);