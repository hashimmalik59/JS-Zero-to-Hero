// Onjects Method

// Note: Any function is attached with object is called Method

// const myData = {
//     firstName: "Hashim",
//     lastName: "Malik",
//     birthYear: 2002,
//     age: undefined,
//     hasDriversLicense: false,
//     myProfession: "teacher",
//     // myAge: function (birthYear) {
//     //     return 2025 - birthYear;
//     // },
//     myAge: function () {
//         // console.log(this);
//         const myFullAge = 2025 - this.birthYear;
//         return myFullAge; // "this" keyword is refering key of this "myData" object
//         // return 2025 - myData.birthYear; // its not best practice
//     },
//     job1: "Teacher Asisstant",
//     job2: "Customer Relation Officer",
//     friend: ["Abdullah", "Ali", "Khan"],
//     friendName: "Abdullah",
//     getSummary: function () {
//         return `${this.firstName} is a ${this.myAge()}-years old ${this.myProfession}, and he has ${this.hasDriversLicense ? "a" : "no"}`
//     }
// }

// console.log(myData.myAge(2002)); // Dot Notation
// console.log(myData["myAge"](2001)); // Bracket Notation

// console.log(myData["myAge"]()); // Bracket Notation

// Note: We can only use function Expression in Objects

// Challenge
// "Hashim" is a 23-years old teacher, and he has a/no driver license

const myData = {
    firstName: "Hashim",
    lastName: "Malik",
    birthYear: 2002,
    age: undefined,
    hasDriversLicense: false,
    myProfession: "teacher",
    // myAge: function (birthYear) {
    //     return 2025 - birthYear;
    // },
    myAge: function () {
        // console.log(this);
        const myFullAge = 2025 - this.birthYear;
        return myFullAge; // "this" keyword is refering key of this "myData" object
        // return 2025 - myData.birthYear; // its not best practice
    },
    job1: "Teacher Asisstant",
    job2: "Customer Relation Officer",
    friend: ["Abdullah", "Ali", "Khan"],
    friendName: "Abdullah",
    getSummary: function () {
        return `${this.firstName} is a ${this.myAge()}-years old ${this.myProfession}, and he has ${this.hasDriversLicense ? "a" : "no"} driver license`
    }
}
console.log(myData);
console.log(myData.getSummary());


// if (this.hasDriversLicense === true) {
//     console.log(`${myData.firstName} is a ${myData["myAge"]()}-years old ${myData.myProfession}, and he has a driver license`);
// } else {
//     console.log(`${myData.firstName} is a ${myData["myAge"]()}-years old ${myData.myProfession}, and he has no driver license`);
// }
