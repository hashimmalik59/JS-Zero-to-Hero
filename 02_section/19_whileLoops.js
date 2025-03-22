// The while loop

let reps = 1;
while (reps <= 5) {
    // console.log(`I completed my 1st set with ${reps} reps`);s
    reps++;
}

let dice = Math.ceil(Math.random() * 6);
while (dice !== 6){
    console.log(dice);
    dice++;
    // if (dice === 6) {
    //     console.log(`${dice}`);
    // }
    // else {
    //     console.log(`No six it's ${dice}`);
    // }
}