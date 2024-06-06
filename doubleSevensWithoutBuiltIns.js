// Duplicate each occurence of 7 in an array. E.g: [1,2,7,8] ===> [1,2,7,7,8] 
// no BuiltIn methods
// time complexity : O(n)
// space complexity: O(n)

function doubleSevens(array) {
  let sevensToDo = 0;
  // count 7s
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) sevensToDo++;
  }

  if (sevensToDo > 0) {
    // move numbers from last current index
    let workingIndex = array.length - 1;
    // extend array
    array.length = array.length + sevensToDo;

    // start from last existing index,
    // loop as long as you have 7s to fill in the extended spots
    while (sevensToDo > 0) {
      // shift every number by the number of places we have left to fill
      array[workingIndex + sevensToDo] = array[workingIndex];

      // if it is a seven, put one in front of the one moved
      // decrease sevens to move
      if (array[workingIndex + sevensToDo] === 7) {
        array[workingIndex + sevensToDo - 1] = 7;
        sevensToDo--;
      }
      workingIndex--;
    }
  }
}

array = [1, 7, 2, 7, 8];
console.log(array);
doubleSevens(array);
console.log(array);

