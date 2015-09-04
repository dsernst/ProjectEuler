// The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

// Let d[1] be the 1st digit, d[2] be the 2nd digit, and so on. In this way, we note the following:

// d[2]d[3]d[4]=406 is divisible by 2
// d[3]d[4]d[5]=063 is divisible by 3
// d[4]d[5]d[6]=635 is divisible by 5
// d[5]d[6]d[7]=357 is divisible by 7
// d[6]d[7]d[8]=572 is divisible by 11
// d[7]d[8]d[9]=728 is divisible by 13
// d[8]d[9]d[10]=289 is divisible by 17
// Find the sum of all 0 to 9 pandigital numbers with this property.

var _ = require('lodash');

var primes = [2, 3, 5, 7, 11, 13, 17];
function checkDivisibility(digits) {
  return [6, 5, 4, 3, 2, 1, 0].every(function (i) {
    return Number(digits.slice(i + 1, i + 4).join('')) % primes[i] === 0;
  });
}
// console.log(checkDivisibility(1406357289));

var pandigitals = require('heaps-permute')(_.range(10));

function joinDigits(digits) {
  return Number(digits.join(''));
}

console.log(_.sum(pandigitals.filter(checkDivisibility).map(joinDigits))); // 16695334890 [Finished in 8.0s]


// Congratulations, the answer you gave to problem 43 is correct.

// You are the 35956th person to have solved this problem.
