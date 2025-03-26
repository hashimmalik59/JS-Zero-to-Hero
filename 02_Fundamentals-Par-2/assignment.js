// Functions

// Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.

// Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

function describeCountry(country, population, capitalCity) {
    // return `${country} has ${population} people and its capital city is ${capitalCity}`;
}
const dataOfPakistan = describeCountry("Pakistan", 25468469, "Islamabad");
const dataOfIndia = describeCountry("India", 1565468469, "Mumbai");
const dataOfUSA = describeCountry("USA", 1224875446, "Washington DC");

console.log(dataOfPakistan);
console.log(dataOfIndia);
console.log(dataOfUSA);

///////////////////////////////////////

// Function Declarations vs. Expressions

// The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

// To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

// Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

// Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

function percentageOfWorld1(country, population){
    const percentage = (800000000 / population) * 100;
    return `${country} has ${population} and percentage is ${percentage}`
}
console.log(percentageOfWorld1("Pakistan", 24354345));