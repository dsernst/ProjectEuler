// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

// What is the largest n-digit pandigital prime that exists?

var isPandigital = require('is-pandigital');
var isPrime = require('quick-is-prime');

function isPandigitalAndPrime(number) {
  var length = String(number).length;
  return isPandigital(number, length) && isPrime(number);
}
// console.log(isPandigitalAndPrime(2143)); // true
// console.log(isPandigitalAndPrime(2134)); // false


var i;
var upperBound = 987654321;
isPrime(10000000); // pre-cache the primes
for (i = 1; i <= upperBound; i += 2) {
  if (isPandigitalAndPrime(i)) {
    console.log(i); // 7652413 [Finished in 41.9s with exit code -15]
  }
}

// Congratulations, the answer you gave to problem 41 is correct.

// You are the 41682nd person to have solved this problem.
