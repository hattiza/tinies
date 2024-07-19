function twoNumberSum(array, targetSum) {
  // Time O(n2) n = array.length
  // Space: O(1)
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i+1; j <array.length; j++) {
      let sum = array[i] + array[j]
      if (sum === targetSum) { 
        return [array[i], array[j]];
      }
    }
  }
  return [];    
}



function twoNumberSum(array, targetSum) {
  // Time O(n) 
  // Space: O(n)
  // n = array.length

  hashXplusY = {}


  for (let i = 0; i < array.length - 1; i++) {

    x = array[i];
    y = targetSum - x;

    if (hashXplusY[x] === y) {
      return [x, y]
    }

    hashXplusY[x] = y;
  }
  return [];    
}


