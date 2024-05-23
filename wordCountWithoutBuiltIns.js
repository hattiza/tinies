// Count words in a string WITHOUT using built-in functions
// Word could be defined as :
//      ~ as a sequence of non-space characters
//      ~ "things" separated by one or more spaces

// Time complexity: O(n)
// Space complexity: O(1)

// Summary: 

function countWords(string) {
    let words = 0;
    let nonSpace = false;
    let space = false;

    for (let i = 0; i < string.length; i++) {
        let character = string[i];

        // if character is a space, set space to true
        if (character === " ") {
            space = true;
            // if character is not a space, set nonSpace to true
            // and reset space to false
        } else {
            nonSpace = true;
            space = false;
        }

        // if space and nonSpace are both true, you are at the end of a word
        // count the word and set nonSpace to false 
        if (space && nonSpace) {
            words++;
            nonSpace = false;
        }
    }
    // if the string ended with a character it did not get counted
    if (nonSpace) {
        words++;
    }

    return words++;
}

console.log(countWords("this is normal")); // 3
console.log(countWords(" with front space")); // 3
console.log(countWords("with back space ")); // 3
console.log(countWords(" with both spaces ")); // 3
console.log(countWords(" with    multi-repeats    both spaces ")); // 4