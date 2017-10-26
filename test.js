// let greeting = "Hello this is a greeting where we will swap two words.";
// greeting = greeting.split(" ");

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

// let firstRandomIndex = getRandomInt(0, greeting.length);
// let secondRandomIndex = getRandomInt(0, greeting.length);

// let newWord = []

for (let i in greeting) {
    if (i == firstRandomIndex) {
    newWord.push(greeting[secondRandomIndex]);
    } else if (i == secondRandomIndex) {
    newWord.push(greeting[firstRandomIndex]);
    } else {
    newWord.push(greeting[i]);
    }
}

[newArray[3], newArray[0]] = [newArray[0], newArray[3]] //another way to swap - unpacking; python doesn't need brackets in left of =


// let candy = new Map();

// candy.set('orange', 'orange');
// candy.set('purple', 'eggplant');
// candy.set('pink', 'rose');
// candy.set('yellow', 'butter');
// candy.set('green', 'avocado');

// for (let word of candy) {
//     console.log(`The ${word[1]} is colored ${word[0]}.`);
// }

function checkColor(color, map) {
    if (map.has(color)) {
        console.log(map.get(color));
    } else {
        console.log(`Sorry, that color does not have a flavor.`);
    }
}

let newArray = []

function checkArrayColors(lst, map) {
    for (let color of lst) {
        if (map.has(color)) {
            newArray.push(map.get(color));
        } else {
            newArray.push(null);
        }
    }
}

