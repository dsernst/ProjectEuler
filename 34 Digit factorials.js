// 145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Find the sum of all numbers which are equal to the sum of the factorial of their digits.

// Note: as 1! = 1 and 2! = 2 are not sums they are not included.

var factorial = require('factorial');
var toDigits = require('to-digits');
var _ = require('lodash');

function isEqualToFactorialOfDigits(number) {
  return number === _.sum(toDigits(number).map(factorial));
}
// console.log(isEqualToFactorialOfDigits(145)); // true

var min = 10; // must be at 2 digits
var max = 100000; // arbitrary guess on upper bound
var digitFactorials = _.range(min, max).filter(isEqualToFactorialOfDigits);

// console.log(digitFactorials) // [ 145, 40585 ]
console.log(_.sum(digitFactorials)); // 40730 [Finished in 0.3s]

// Congratulations, the answer you gave to problem 34 is correct.

// You are the 58277th person to have solved this problem.
