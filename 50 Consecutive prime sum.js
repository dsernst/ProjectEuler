// The prime 41, can be written as the sum of six consecutive primes:

// 41 = 2 + 3 + 5 + 7 + 11 + 13
// This is the longest sum of consecutive primes that adds to a prime below one-hundred.

// The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

// Which prime, below one-million, can be written as the sum of the most consecutive primes?

var should = require('should');
var _ = require('lodash');
var primes = require('sieve-of-eratosthenes')(1000000);

function longestConsecutivePrimesTerms(number) {
  var longestSequence = 0;
  var sequence = [];
  var curSum = 0;
  _.each(primes, function (prime) {
    if (prime > number) {
      return false;
    }
    if (curSum === number) {
      longestSequence = Math.max(sequence.length, longestSequence);
    }
    // console.log(sequence, curSum, longestSequence);
    curSum += prime;
    sequence.push(prime);
    while (curSum > number) {
      curSum -= sequence.shift();
    }
  });
  return longestSequence;
}
[41, 953].map(longestConsecutivePrimesTerms).should.eql([6, 21]);

primes.reduce(function (max, number) {
  var terms = longestConsecutivePrimesTerms(number);
  if (terms > max) {
    console.log(number, terms); // 997651 543 [Finished in 97.6s]
    return terms;
  }
  return max;
}, 0);

// Congratulations, the answer you gave to problem 50 is correct.

// You are the 37557th person to have solved this problem.
