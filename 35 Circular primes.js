// The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

// There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

// How many circular primes are there below one million?

var max = 1000000;

var _ = require('lodash');
var rotate = require('rotate-array');
var toDigits = require('to-digits');
// var isPrime = require('isprime'); // using our modified version below, to cache the sieve

var sieve = (function buildSieve(num) {
  num += 2;

  var sieve = new Array(num)
    .join(',').split(',') // get values for map to work
    .map(function () { return true; });

  var i, j;
  for (i = 2; i <= num; i++) {
    if (sieve[i]) {
      for (j = i * i; j < num; j += i) {
        sieve[j] = false;
      }
    }
  }
  return sieve;
}(max));

function isPrime(num) {
  return sieve[num - 2];
}

function isCircularPrime(number) {
  var test = _.every(rotate.all(toDigits(number)).map(function (array) {
    return Number(array.join(''));
  }), isPrime);
  if (test) {
    console.log(number);
  }
  return test;
}
// console.log(isCircularPrime(197)); // true
// console.log(_.range(1, 100).filter(isCircularPrime)); // [ 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97 ]

console.log(_.range(1, max).filter(isCircularPrime).length); // 45 [Finished in 11.5s]

