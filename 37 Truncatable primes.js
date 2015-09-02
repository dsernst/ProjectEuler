// The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

// Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

// NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

var _ = require('lodash');

function truncatedNumbers(number) {
  var numberString = String(number);
  var length = numberString.length;

  var numbers = [number];
  _.range(1, length).forEach(function (offset) {
    numbers.push(Number(numberString.slice(offset)));
  });
  _.range(1, length).forEach(function (offset) {
    numbers.push(Number(numberString.slice(0, -offset)));
  });

  return numbers;
}
// console.log(truncatedNumbers(3797)); // [3797, 797, 97, 7, 379, 37, 3]

var isPrime = require('quick-is-prime');

function isTruncatablePrime(number) {
  return truncatedNumbers(number).every(isPrime);
}
// console.log(isTruncatablePrime(3797)); // true

var upperBound = 740000; // guess and check until we find that 11th one

console.log(_.sum(_.range(upperBound, 10, -1).filter(isTruncatablePrime))); // 748317 [Finished in 2.6s]

// Congratulations, the answer you gave to problem 37 is correct.

// You are the 45347th person to have solved this problem.
