// Count words in a string WITHOUT using built-in functions
// Word could be defined as :
//      ~ as a sequence of non-space characters
//      ~ "things" separated by one or more spaces

// Time complexity: O(n)
// Space complexity: O(1)

// Summary: 

function countWords(string) {
    let words = 0;
    let wordScanner = false;
    let spaceScanner = false;

    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        // if character is a space, set spaceScanner to true
        if (character === " ") {
            spaceScanner = true;
        // if character is not a space, set wordScanner to true
        // and reset spaceScanner to false (while we are scanning a word it is no longer a space)
        } else {
            wordScanner = true;
            spaceScanner = false;
        }

        // if spaceScanner and wordScanner are both true, you just finished scanning a word and swapped to a space
        // count the finished word and set wordScanner to false (ready for next word)
        if (spaceScanner && wordScanner) {
            words++;
            wordScanner = false;
        }
    }
    // if you reached the end of the string end wordScanner is true, it did not get counted yet
    // as it only gets reset after being counted
    if (wordScanner) {
        words++;
    }

    return words++;
}

console.log(countWords("this is normal")); // 3
console.log(countWords(" with front space")); // 3
console.log(countWords("with back space ")); // 3
console.log(countWords(" with both spaces ")); // 3
console.log(countWords(" with    multi-repeats    both spaces ")); // 4