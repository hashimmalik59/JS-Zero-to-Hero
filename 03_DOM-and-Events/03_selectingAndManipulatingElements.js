// Selecting and Manipuating Elements

console.log(document.querySelector(".message")); // Selecting an element
console.log(document.querySelector(".message").textContent); // Selecting the text of an element
console.log((document.querySelector(".message").textContent = "Correct Number!")); // Selecting the text and Manipulating an element

document.querySelector(".guess").value = 10;
console.log(document.querySelector(".guess").value); //Getting value from input field we use "value" keyword