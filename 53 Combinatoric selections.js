// There are exactly ten ways of selecting three from five, 12345:

// 123, 124, 125, 134, 135, 145, 234, 235, 245, and 345

// In combinatorics, we use the notation, 5[C]3 = 10.

// In general,

// n[C]r = n! / r!(n−r)!,
// where r ≤ n, n! = n×(n−1)×...×3×2×1, and 0! = 1.
// It is not until n = 23, that a value exceeds one-million: 23[C]10 = 1144066.

// How many, not necessarily distinct, values of  n[C]r, for 1 ≤ n ≤ 100, are greater than one-million?

var fact = require('big-factorial');
var should = require('should');

function nCr(n, r) {
  return fact(n).divide(fact(r).times(fact(n - r)));
}
nCr(5, 3).valueOf().should.eql(10);
nCr(23, 10).valueOf().should.eql(1144066);

function isComboAboveOneMillion(n, r) {
  return nCr(n, r).greater(1000000);
}
isComboAboveOneMillion(5, 3).should.eql(false);
isComboAboveOneMillion(23, 10).should.eql(true);

var count = 0;
var n, r;
for (n = 1; n <= 100; n++) {
  console.log('checking n=' + n);
  for (r = 1; r <= n; r++) {
    if (isComboAboveOneMillion(n, r)) {
      // console.log(n + ' C ' + r + ' > 1 million');
      count++;
    }
  }
}

console.log(count); // 4075 [Finished in 80.2s]

// Congratulations, the answer you gave to problem 53 is correct.

// You are the 37499th person to have solved this problem.
