module.exports = function generateCupcakeName() {
    const MAX = 10;

    const cupcakeNameFlavor = [
        "Lemon",
        "Strawberry",
        "Chocolate",
        "Vanilla",
        "Blueberry",
        "Banana",
        "Peanut Butter",
        "Orange",
        "Grape",
        "Berry" 
    ]

    const cupcakeNameNoun = [
        "Surprise",
        "Shocker",
        "Party",
        "Delight",
        "Punch",
        "Supreme",
        "Swirl",
        "Ultimate",
        "Express",
        "Train"
    ]


    let index = Math.floor(Math.random() * MAX);

    let cupcakeName = cupcakeNameFlavor[index] + " " + cupcakeNameNoun[index];

    return cupcakeName;
}

