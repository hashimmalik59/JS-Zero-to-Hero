// Looping Backwards and Loops in Loops

const myData = ["Hashim", "Malik", 2025 - 2002, true, "teacher", ["Papa", "Mama", "Sister", "Brother"]];

// 0, 1, 2, 3,  ...6
// 6, 5, 4, 3,  ...0(Backward Loop)

for (let i = myData.length; i >= 0; i--) {
    console.log(i, myData[i]);
}

// Creating Loop in a Loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`Starting exercise ${exercise}`);

    for (let repitition = 1; repitition < 6; repitition++) {
        console.log(`Exercise ${exercise} Come on ${repitition} 🦾`);
    }
}