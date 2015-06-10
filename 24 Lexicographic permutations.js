// A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

// 012   021   102   120   201   210

// What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var target = 1000000;

function factorial(n) {
  var result = 1;
  var i;
  for (i = n; i >= 1; i--) {
    result *= i;
  }
  return result;
}

// console.log(factorial(digits.length)); // 3628800, number of permutations

function getSpecificLexigraphicPermutation(digits, target) {
  var permutations = factorial(digits.length);
  if (target > permutations) {
    return null;
  }
  if (digits.length === 1) {
    return digits[0].toString();
  }
  var step = permutations / digits.length;
  var remainingDigits = digits; // make a copy so that we don't mutate the array argument
  var digit = Math.floor(target / step);
  if (target % step  === 0) {
    digit--;
  }
  var jump = digit * step;
  var frontDigit = remainingDigits.splice(digit, 1).toString();
  return frontDigit + getSpecificLexigraphicPermutation(remainingDigits, target - jump);
}


// console.log(getSpecificLexigraphicPermutation([0, 1, 3, 4], 3)); // 0314
// console.log(getSpecificLexigraphicPermutation([2, 5], 2)); // 52


// // Trying to manually do the algorithm:

// var step = 3628800 / 10; // 362880
// var firstDigit = Math.floor(target / step); // 2

// var jump1 = firstDigit * step; // 725760

// var remaining = target - jump1; // 274240
// step /= 9; // 40320

// var secondDigit = Math.floor(remaining / step); // 6 , but we lost 2 so we need 7 here

// var jump2 = secondDigit * step; // 241920

// Manually keeping track of our result:
// // 2 7 - - - - - - - -
// // 2 7 0 1 3 4 5 6 8 9

console.log(getSpecificLexigraphicPermutation(digits, target)); // 2783915460

// Congratulations, the answer you gave to problem 24 is correct.

// You are the 67915th person to have solved this problem.
