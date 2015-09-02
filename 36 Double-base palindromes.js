// The decimal number, 585 = 1001001001<sub>2</sub> (binary), is palindromic in both bases.

// Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

// (Please note that the palindromic number, in either base, may not include leading zeros.)

var isPalindrome = require('is-palindrome');
// console.log(isPalindrome(585)); // true
// console.log(isPalindrome(1001001001)); // true

function toBinary(decimalNumber) {
  return decimalNumber.toString(2);
}
// console.log(toBinary(585)); // 1001001001

function isPalindromeInBothBases(decimalNumber) {
  return [decimalNumber, toBinary(decimalNumber)].every(isPalindrome);
}
// console.log(isPalindromeInBothBases(585)); // true
// console.log(isPalindromeInBothBases(595)); // false

var _ = require('lodash');

console.log(_.sum(_.range(1, 1000000).filter(isPalindromeInBothBases))); // 872187 [Finished in 1.2s]

// Congratulations, the answer you gave to problem 36 is correct.

// You are the 56168th person to have solved this problem.
