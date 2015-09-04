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

var toDigits = require('to-digits');
Number.prototype.toDigits = toDigits.extend;

function divideIntoSubstrings(number) {
  return number.toDigits().reduce(function (memo, digit, index) {
    index++;
    if (index === 1) {
      return memo;
    }
    if (index <= 8) {
      memo.push([digit]);
    }
    if (3 <= index && index <= 9) {
      memo[index - 3].push(digit);
    }
    if (4 <= index) {
      memo[index - 4].push(digit);
    }
    return memo;
  }, []).map(function (subarray) {
    return Number(subarray.join(''));
  });
}
var substrings = divideIntoSubstrings(1406357289);
// console.log(substrings); // [ 406, 63, 635, 357, 572, 728, 289 ]

var primes = [2, 3, 5, 7, 11, 13, 17];
function hasWeirdPrimeDivisibility(number) {
  return divideIntoSubstrings(number).every(function (value, index) {
    return value % primes[index] === 0;
  });
}
// console.log(hasWeirdPrimeDivisibility(substrings)); // true


var isPandigital = require('is-pandigital');

function joinAndTest(digits, start, end, primeIndex) {
  return Number(digits.slice(start, end + 1).join('')) % primes[primeIndex] !== 0;
}

function quickHasWeirdDivisibility(number) {
  var digits = toDigits(number);
  var i;
  for (i = 6; i >= 0; i--) {
    if (joinAndTest(digits, 2 + i, 4 + i, i)) {
      return false;
    }
  }
  return true;
}

var sum = 0;
var i;
for (i = 123456789; i <= 9876543210; i++) {
  if (i % 150000 === 0) {
    console.log(i);
  }
  if (isPandigital(i)) {
    // console.log(i, 'isPandigital');
    if (quickHasWeirdDivisibility(i)) {
      sum += i;
      console.log(i, 'hasWeirdPrimeDivisibility. new sum:', sum);
    }
  }
}

console.log(sum);
