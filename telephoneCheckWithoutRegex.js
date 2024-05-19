// REQUIREMENT: DO NOT USE REGEX

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


function telephoneCheck(string) {

  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const goodChars = ["-", "(", ")", " "];
  // count numbers
  // check unapproved characters
  // check for total counts
  let countNums = 0;
  let badChars = 0;
  let totalChars = 0;

  for (let i = 0; i < string.length; i++) {
    totalChars++;
    if (numbers.includes(string[i])) {
      countNums++;
    } else if (!goodChars.includes(string[i])) {
      badChars++;
    }
  }

  // eliminate anything with characters that do not exist in correct formats
  if (badChars > 0) { return false; }
  // total numbers can only be 10 or 11
  if (countNums !== 10 && countNums !== 11) { return false; }
  // only one case of length 10 and correct value: 5555555555
  if (totalChars === 10 && string.length === 10) { return true; }
  // if it has 11 chars, first one has to be 1
  if (countNums === 11 && string[0] !== "1") { return false; }

  // eliminate invalid lengths
  // if total is 14/16, it has to start with a 1
  if ((string.length === 14 || string.length === 16) && string[0] !== "1") { return false; }

  // if it is 12 in length it is only of a format of 555-555-5555
  if (string.length === 12) {
    let check4th = string[3];
    let check8th = string[7];
    if (check4th === "-" && check8th === "-") { return true; }
  }

  // if it is 13 in length it is only of a format of (555)555-5555
  if (string.length === 13) {
    let check1st = string[0];
    let check5th = string[4];
    let check9th = string[8];
    if (check1st === "(" && check5th === ")" && check9th === "-") { return true; }
  }

  // if it is 14 in length it is only one of the 3 versions
  if (string.length === 14) {
    // telephoneCheck("1 555-555-5555") should return true.
    // telephoneCheck("1 555 555 5555") should return true.
    // telephoneCheck("1 456 789 4444") should return true.
    // telephoneCheck("1(555)555-5555") should return true.
    let check2nd = string[1];
    let check6th = string[5];
    let check10th = string[9];

    if (check2nd === " ") {
      if (check6th === " " && check10th === " ") { return true; }
      if (check6th === "-" && check10th === "-") { return true; }
    } else if (check2nd === "(") {
      if (check6th === ")" && check10th === "-") { return true; }
    }
  }

  // if it is 16 in length it is only of a format of 1 (555) 555-5555

  // console.log("1 (555) 555-5555".length); // 16
  if (string.length === 16) {
    let check2nd = string[1];
    if (check2nd !== " ") { return false; }

    let check3rd = string[2];
    if (check3rd !== "(") { return false; }

    let check7th = string[6];
    if (check7th !== ")") { return false; }

    let check8th = string[7];
    if (check8th !== " ") { return false; }


    let check12th = string[11];
    if (check12th !== "-") {
      return false;
    } else {
      return true;
    }
  }

  return false;
}


// CORRECT Number formats
telephoneCheck("1 555-555-5555") === true;
telephoneCheck("1 (555) 555-5555") === true;
telephoneCheck("5555555555") === true;
telephoneCheck("555-555-5555") === true;
telephoneCheck("(555)555-5555") === true;
telephoneCheck("1(555)555-5555") === true;
telephoneCheck("1 555 555 5555") === true;
telephoneCheck("1 456 789 4444") === true;


// Examples of wrong numbers
telephoneCheck("1 555)555-5555") === false;
telephoneCheck("5555555") === false;
telephoneCheck("555-5555") === false;
telephoneCheck("123**&!!asdf#") === false;
telephoneCheck("55555555") === false;
telephoneCheck("(6054756961)") === false;
telephoneCheck("2 (757) 622-7382") === false;
telephoneCheck("0 (757) 622-7382") === false;
telephoneCheck("-1 (757) 622-7382") === false;
telephoneCheck("2 757 622-7382") === false;
telephoneCheck("10 (757) 622-7382") === false;
telephoneCheck("27576227382") === false;
telephoneCheck("(275)76227382") === false;
telephoneCheck("2(757)6227382") === false;
telephoneCheck("2(757)622-7382") === false;
telephoneCheck("555)-555-5555") === false;
telephoneCheck("(555-555-5555") === false;
telephoneCheck("(555)5(55?)-5555") === false;
telephoneCheck("55 55-55-555-5") === false;
telephoneCheck("11 555-555-5555") === false;