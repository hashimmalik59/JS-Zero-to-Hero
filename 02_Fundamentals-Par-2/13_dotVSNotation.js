// Dots vs Notation

const myData = {
    firstName: "Hashim",
    lastName: "Malik",
    fullName: function () {
        console.log(myData.firstName + " " + myData.lastName);
        console.log(this.firstName + " " + this.lastName); // "this" keyword is refering key of this "myData" object
    },
    age: 2025 - 2002,
    job1: "Teacher Asisstant",
    job2: "Customer Relation Officer",
    friend: ["Abdullah", "Ali", "Khan"],
    friendName: "Abdullah"
}
console.log(myData);
// console.log(myData.fullName());

const goodNameKey = "Name";
console.log(myData["first" + goodNameKey]);
console.log(myData["friend" + goodNameKey]); // we can also use bracket notation

myData.country = "Pakistan";
myData.city = "Peshawar";
console.log(myData);

// Challenge
// "Hashim" has 3 friends, and his best friend is called Abdullah

// const howMuchFriend = `${myData["firstName"]} has 3 friends,`
// const bestFriend = `and his best friend is called ${myData.friend[0]}`

// console.log(howMuchFriend + bestFriend);
// console.log(howMuchFriend + " " + bestFriend);

console.log(`${myData["firstName"]} has ${myData.friend.length} friends, and his best friend is called ${myData.friend[0]}`);
