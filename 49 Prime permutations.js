// The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

// There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

// What 12-digit number do you form by concatenating the three terms in this sequence?

var should = require('should');
function isArithmeticSequence(numbers) {
  numbers.sort();
  return numbers[2] - numbers[1] === numbers[1] - numbers[0];
}
isArithmeticSequence([1487, 4817, 8147]).should.eql(true);

var permute = require('heaps-permute');
Number.prototype.toDigits = require('to-digits').extend;

var _ = require('lodash');

function getPermutations(number) {
  var perms = permute(number.toDigits());
  return _.uniq(perms.map(function (digits) {
    return Number(digits.join(''));
  }));
}
var permutations = getPermutations(1487);
permutations.length.should.eql(24);

var isPrime = require('quick-is-prime');
var primePermutations = permutations.filter(isPrime);
primePermutations.should.eql([ 1487, 8147, 1847, 4817, 7481, 8741, 7841, 4871 ]);

var cmb = require('cmb');

var match = [];

cmb(primePermutations, 3, function (combo) {
  if (isArithmeticSequence(combo)) {
    combo.should.eql([1487, 4817, 8147]);
  }
});

var seen = {};

isPrime(9999);

function everything(number) {
  var permutations = getPermutations(number).sort();
  if (seen[permutations[0]]) {
    return;
  }
  seen[permutations[0]] = true;
  var primes = permutations.filter(isPrime);
  if (primes.length < 3) {
    return;
  }

  cmb(primes, 3, function (combo) {
    if (isArithmeticSequence(combo)) {
      console.log(combo); // [ 2969, 6299, 9629 ] [Finished in 1.6s]
    }
  });
}

var i;
for (i = 1000; i < 9999; i++) {
  everything(i);
}

// Congratulations, the answer you gave to problem 49 is correct.

// You are the 35019th person to have solved this problem.
