function isMiddlable(array) {
  // if it is length 1 return false explicitly,
  // to prevent false positive on [0] (all else would be false anyway)
  if (array.length === 1) return false;

  let sumAll = 0;
  for (let i = 0; i < array.length; i++) {
    sumAll += array[i];
  }

  let isHalvable = sumAll % 2 === 0;

  if (isHalvable) {
    //  find the index of the sum of the first half of the array
    let halve = sumAll / 2;
    let sumFirstHalf = 0;

    for (let i = 0; i < array.length; i++) {
      sumFirstHalf += array[i];
      if (sumFirstHalf === halve) {
        return true;
      }
    }
  }
  return false;
}

console.log(isMiddlable([1, 1, 2])); // => true
console.log(isMiddlable([0])); // ==> false
console.log(isMiddlable([1, 1, 2, -2, 2])); // ==> true
console.log(isMiddlable([2, -2])); // ==> true [] and [-2, 2]