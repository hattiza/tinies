// Problem: add 1 to a big number represented by an array of integers (only positive values, no leading zeros)
// Constraints: do not use built-ins

// Summary: Iterate from last backward. Add 1 to each element. Continue if the new value is 10. 
// When done, if the number starts at 0, add a new 0 at the end of the array and 1 at index 0

function addOne(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    let withOne = array[i] + 1;

    if (withOne !== 10) {
      array[i] = withOne;
      return array;
    } else {
      array[i] = 0;
    }
  }
  // when done // check if array[0] === 0
  // if it is, shift everything to the right
  if (array[0] === 0) {
    // if l(0) === 0, the array is all zeros [0,0,0,0,(...)]
    // add 0 at the back 
    array[array.length] = 0;
    // and 1 in the front
    array[0] = 1;
  }

  return array;
}

// time complexity O(n)
// space complexity O(1)

console.log(addOne([9, 8, 9])); // ==> [9,9,0]
console.log(addOne([9, 9, 9])); // ==> [1,0,0,0]
