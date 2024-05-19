/* 
Convert the given number into a roman numeral

Roman numerals	Arabic numerals
M               1000
CM              900
D               500
CD              400
C               100
XC              90
L               50
XL              40
XIII            13
X               10
IX              9
VI              6
V               5
IV              4
I               1

All roman numerals should be provided in upper-case

*/

function convertToRoman(num) {
  const conversion = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  // Get keys and sort them
  // turn the keys to integers
  // Get keys and sort them
  const sortedDecimals = Object.keys(conversion)
    .map(Number)
    .sort(function (a, b) {
      return b - a;
    });

  let leftNum = num;
  let romanChar = "";

  for (let i = 0; i < sortedDecimals.length; i++) {
    let currentDecimal = sortedDecimals[i];
    let currentRomanChar = conversion[currentDecimal];
    let newRoman = leftNum - (leftNum % currentDecimal);
    leftNum = leftNum - newRoman;

    while (newRoman > 0) {
      newRoman = newRoman - currentDecimal;
      romanChar += currentRomanChar;
    }
  }

  return romanChar;
}

convertToRoman(2) === "II";
convertToRoman(3) === "III";
convertToRoman(4) === "IV";
convertToRoman(5) === "V";
convertToRoman(9) === "IX";
convertToRoman(12) === "XII";
convertToRoman(16) === "XVI";
convertToRoman(29) === "XXIX";
convertToRoman(44) === "XLIV";
convertToRoman(45) === "XLV";
convertToRoman(68) === "LXVIII";
convertToRoman(83) === "LXXXIII";
convertToRoman(97) === "XCVII";
convertToRoman(99) === "XCIX";
convertToRoman(400) === "CD";
convertToRoman(500) === "D";
convertToRoman(501) === "DI";
convertToRoman(649) === "DCXLIX";
convertToRoman(798) === "DCCXCVIII";
convertToRoman(891) === "DCCCXCI";
convertToRoman(1000) === "M";
convertToRoman(1004) === "MIV";
convertToRoman(1006) === "MVI";
convertToRoman(1023) === "MXXIII";
convertToRoman(2014) === "MMXIV";
convertToRoman(3999) === "MMMCMXCIX";
