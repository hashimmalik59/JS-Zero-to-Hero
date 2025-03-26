// Reviewing Function

function addTwoNumbers(a, b) {  // Function Declaration
    // That can be used before it's decalaration 
    console.log(a + b);
}
addTwoNumbers(3, 4)

const addTwoNumbers = function (a, b) { // Function Expression
    // Essentially a function value stored in a variable
    console.log(a + b);

}
addTwoNumbers(4, 5)

const sumTwoNumbers = (a, b) => { // Arrow Function
    // Great for quick one-line functions.
    // Has no "this" keyword (more later...).
    console.log(a + b);
}
sumTwoNumbers(6, 7)

// Note: Three different way of writing functions, but they all work in a similar way: recieve input data, transform data, and then poutput data.