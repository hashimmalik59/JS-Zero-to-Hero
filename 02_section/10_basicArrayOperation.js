// Basic array operations(Methods)

const friends = ["ali", "khan", "usman"];
console.log(friends);

// Adding Element
friends.push("umar"); // "push" method adds an element at the last of an array
friends.unshift("muhammad"); // "unshift" method adds an element at the start of an array
console.log(friends);

// Removing Element
friends.pop(); // "pop" method removes an element at the last of an array
friends.shift(); // "shift" method removes an element at the start of an array
console.log(friends);

console.log(friends.indexOf("ali")); // the require element is on which index, on index 0
console.log(friends.indexOf("hashim")); // if required element is not in an array then iyt will give you -1

console.log(friends.includes("ali")); // the require element is available or not, available then true otherwise false
console.log(friends.includes("hashim"));

if(friends.includes("khan")){
    console.log("Khan is there!");
}