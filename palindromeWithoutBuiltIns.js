// Build Palindrome checker without any javascript built-in methods

function findLocation(character, reference) {
  for (let i = 0; i < reference.length; i++) {
    if (reference[i] === character) {
      return i;
    }
  }
}
  
function makeAlphaNumeric(character) {
  let alphaNumbers = "qwertyuiopasdfghjklzxcvbnm0123456789";
  let upperAlphas = "QWERTYUIOPASDFGHJKLZXCVBNM";
  
  for (let i = 0; i < alphaNumbers.length; i++) {
    if (character === alphaNumbers[i]) {
      return character;
    } else if (character === upperAlphas[i]) {
      // find index of character in upper and return the same from lower
      let charLocation = findLocation(character, upperAlphas);
      return alphaNumbers[charLocation];
    }
 }
 return ""; // for non-AlphaNumeic characters;
}

function palindrome(string) {
  // build a new string with only alphanumeric characters
  // and a reverse string at the same time
  let newString = "";
  let reverseString = "";
  for (let i = 0; i < string.length; i++) {
    let alphaNumeric = makeAlphaNumeric(string[i]);
    newString += alphaNumeric;
    reverseString = alphaNumeric + reverseString;
  }

  // return false if all characters were non-alphanumeric and 
  // both strings end up empty, or it was empty to start
  // technically start with empty could be considered palindome
  // so there would be check up top, but that's just specification decision
  if (newString.length === 0) {
    return false
  }

  return newString === reverseString;
}

palindrome("My age is 0, 0 si ega ym.") === true;
palindrome("eye") === true;
palindrome("_eye") === true;
palindrome("race car") === true;
palindrome("not a palindrome") === false;
palindrome("A man, a plan, a canal. Panama") === true;
palindrome("never odd or even") === true;
palindrome("nope") === false;
palindrome("almostomla") === false;
palindrome("My age is 0, 0 si ega ym.") === true;
palindrome("1 eye for of 1 eye.") === false;
palindrome("0_0 (: /-\ :) 0-0") === true;
palindrome("five|\_/|four") === false;
palindrome("/*$&") === false;
