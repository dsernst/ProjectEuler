// It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

// Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

var should = require('should');
var toDigits = require('to-digits');
var _ = require('lodash');

function sameDigits(num1, num2) {
  var digits = [num1, num2].map(toDigits);
  return digits[0].length === digits[1].length
    && _.difference(digits[0], digits[1]).length === 0;
}
var sample = [125874, 251748];
sameDigits(sample[0], sample[1]).should.eql(true);
sameDigits(123, 321).should.eql(true);
sameDigits(765, 456).should.eql(false);

var i;
for (i = 1; i < 1000000; i++) {
  if ([2, 3, 4, 5, 6].every(function (multiple) {
      return sameDigits(i, i * multiple);
    })
  ) {
    console.log(i); // 142857 [Finished in 0.7s]
    break;
  }
}

// Congratulations, the answer you gave to problem 52 is correct.

// You are the 41295th person to have solved this problem.
