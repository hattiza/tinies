/* TODO: fill in the task

time complexity: O(n)
space complexity: 
*/


/* helper functions */
function isLetter(char) {
  // Check if the character is a letter by checking its Unicode value
  const charCode = char.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) || // Uppercase letters A-Z
    (charCode >= 97 && charCode <= 122)
  ); // Lowercase letters a-z
}

function isUpperCaseLetter(char) {
  // Check if the character is an uppercase letter by checking its Unicode value
  const charCode = char.charCodeAt(0);
  return charCode >= 65 && charCode <= 90;
}

function validSentence(string) {
  let previousChar = null;

  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];

    // if previous char is null
    // we must have a letter now (any case)
    if (previousChar === null) {
      if (!isLetter(currentChar)) {
        return false;
      } else {
        previousChar = currentChar;
      }
    // if it is not null, it is a middle of a word
    } else {
      // end previous word if it is space
      if (currentChar === " ") {
        previousChar = null;
      // upper case letters are not allowed in the middle of the word
      } else if (isUpperCaseLetter(currentChar)) {
        return false;
      // if it is not a letter, it is not a valid sentence
      } else if (!isLetter(currentChar)) {
        return false;
      } else {
        previousChar = currentChar;
      }
    }
  }

  // if you get to the end and currentChar is null
  // the string was either empty, or ended on a space
  if (previousChar === null) {
    return false;
  }

  // we exhausted all cases when it is not valid sentence
  return true;
}

console.log(validSentence(" A d  dh") === false);
console.log(validSentence("A d dh ") === false);
console.log(validSentence("A d dh") === true);
console.log(validSentence("A d  dh") === false);
console.log(validSentence("A d  Adh ") === false);
console.log(validSentence("A d dSh") === false);
console.log(validSentence(" A Addh") === false);
