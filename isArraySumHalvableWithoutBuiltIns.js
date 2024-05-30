function isHalvable(array) {
  // if it is length 1 return false explicitly,
  // to prevent false positive on [0] (all else would be false anyway)
  if (array.length === 1) return false;

  let sumAll = 0;
  for (let i = 0; i < array.length; i++) {
    sumAll += array[i];
  }

  let hasHalves = sumAll % 2 === 0;

  if (hasHalves) {
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

console.log(isHalvable([1, 1, 2])); // => true
console.log(isHalvable([0])); // ==> false
console.log(isHalvable([1, 1, 2, -2, 2])); // ==> true
console.log(isHalvable([2, -2])); // ==> true [] and [-2, 2]
