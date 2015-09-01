// Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

// 1634 = 1^4 + 6^4 + 3^4 + 4^4
// 8208 = 8^4 + 2^4 + 0^4 + 8^4
// 9474 = 9^4 + 4^4 + 7^4 + 4^4
// As 1 = 1^4 is not a sum it is not included.

// The sum of these numbers is 1634 + 8208 + 9474 = 19316.

// Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

function splitNumToDigits(number) {
  return String(number)
    .split('')
    .map(function (d) {
      return Number(d);
    });
}
// console.log(splitNumToDigits(9474)); // [ 9, 4, 7, 4 ]

var min = 10; // needs two digits to make a sum
var max = 3000000; // arbitrary guess on upper bound
var power = 5;
function sumDigitsToPower(sum, digit) {
  return sum + Math.pow(digit, power);
}

var n;
var acceptableNumbers = [];

for (n = min; n <= max; n++) {
  if (n === splitNumToDigits(n).reduce(sumDigitsToPower, 0)) {
    acceptableNumbers.push(n);
  }
}

var _ = require('lodash');

// console.log(_.sum(acceptableNumbers)); // 19316, when power = 4
console.log(_.sum(acceptableNumbers)); // 443839, when power = 5

// Congratulations, the answer you gave to problem 30 is correct.

// You are the 67189th person to have solved this problem.
