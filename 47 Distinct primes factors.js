// The first two consecutive numbers to have two distinct prime factors are:

// 14 = 2 × 7
// 15 = 3 × 5

// The first three consecutive numbers to have three distinct prime factors are:

// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.

// Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?

var should = require('should');

var pf = require('primefactors');
pf(14).should.eql([2, 7]);
pf(15).should.eql([3, 5]);

var _ = require('lodash');

function hasNDistinctPrimeFactors(n, number) {
  return _.uniq(pf(number), true).length === n;
}
[14, 15].every(hasNDistinctPrimeFactors.bind(null, 2)).should.eql(true);
[2, 3, 4, 5, 7, 8, 9, 11, 13].some(hasNDistinctPrimeFactors.bind(null, 2)).should.eql(false);
[644, 645, 646].every(hasNDistinctPrimeFactors.bind(null, 3)).should.eql(true);

var i;
var counter = 0;

for (i = 1; i < 10000; i++) {
  if (hasNDistinctPrimeFactors(4, i)) {
    counter++;
    console.log(counter + ':', i);
  } else {
    counter = 0;
  }
  if (counter === 4) {
    console.log(i - 3, ' ftw');
  }
}
