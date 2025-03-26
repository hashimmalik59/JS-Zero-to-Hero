// Function calling other function

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, orange) {
    const piecesOfApple = cutFruitPieces(apple);
    const piecesOfOrange = cutFruitPieces(orange);

    const juice = `Juice with ${piecesOfApple} pieces of apple and ${piecesOfOrange} pieces of orange`;
    return juice;
}
console.log(fruitProcessor(3,2));

// Note: it best for redundency