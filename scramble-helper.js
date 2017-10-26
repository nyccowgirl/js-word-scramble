// Create a function that reverses a word

function reverseWord(word) {
    let wordList = word.split("");
    let reversedList = [];
    for (let i = wordList.length -1 ; i >= 0; i -= 1) {
        reversedList.push(wordList[i]);
    }
    let reversedWord = reversedList.join("");
    return reversedWord;
}

// Create a function that takes an array of words and returns a new array of the
 // words with each word reversed.

function reverseArray(array) {
    let reversedArray = []
    for (let word of array) {
       reversedArray.push(reverseWord(word));
    }
    return reversedArray;
}

// Create a function that returns a random word from an array

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getRndWord(array) {
    let randomWord = array[getRndInteger(0, array.length)];
    return randomWord
}

// Create an array of words and save it to a variable. Using your functions create
// a second array of reversed words.

let wordsArray = ['Balloonicorn', 'is', 'a', 'graduate', 'of', 'Hackbright', 'Academy'];

let reverseWordsArray = reverseArray(reverseWord, wordsArray);

// We could use the two arrays we've created to select a random word to show the user
// and check their guess. How could we do that? Is there a better way?

let randomInt = getRndInteger(0, wordsArray.length);

console.log(reverseWordsArray[randomInt]);

console.log(wordsArray[randomInt]);

// ////////////////////////////////////////////////////////////////////////////

// Create a function that takes an array of words and returns a map with the keys
// as the reversed word and the values as the original word.

function makeReverseWordDict(array) {
    reverseWordDict = new Map()
    for (let word of array) {
        reverseWordDict.set(reverseWord(word), word);
    }
    return reverseWordDict
}

// Create a function that takes two strings, `guess` and `word` and a map, like
// the one you created above. If the first string is in the map, return the word
// if not, console log "Sorry, incorrect. The word was ..." and include word.

function checkWord(guess, word, map) {
    if (guess === map.get(word)) {
        return word;
    } else {
        console.log(`Sorry, incorrect. The word was ${map.get(word)}.`)
    }
}

// ////////////////////////////////////////////////////////////////////////////
// FURTHER STUDY

// Create a function that scrambles a word. Use whatever method you like to
// rearrange the letters.



// Create a function that takes an array of words and returns a map with the
// scrambled words as the keys and the original word as the values.
