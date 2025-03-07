// Coding Exercise 5: Challenge #1

//  Write your code below. Good luck! 🙂

const calcAverage = (match1, match2, match3) => {
    const averageScore = (match1 + match2 + match3) / 3;
    return averageScore;
}
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`no team wins!...`);
    }
}
checkWinner(scoreDolphins, scoreKoalas);