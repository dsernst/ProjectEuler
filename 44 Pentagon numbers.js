// Pentagonal numbers are generated by the formula, P[n]=n(3n−1)/2. The first ten pentagonal numbers are:

// 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

// It can be seen that P[4] + P[7] = 22 + 70 = 92 = P[8]. However, their difference, 70 − 22 = 48, is not pentagonal.

// Find the pair of pentagonal numbers, P[j] and P[k], for which their sum and difference are pentagonal and D = |P[k] − P[j]| is minimised; what is the value of D?

var should = require('should');
var _ = require('lodash');

var first10Pentagonals = [1, 5, 12, 22, 35, 51, 70, 92, 117, 145];

function pentagonal(n) {
  return n * (3 * n - 1) / 2;
}
_.range(1, 11).map(pentagonal).should.eql(first10Pentagonals);

function isPentagonal(number) {
  var perfectSquare = (1 + Math.sqrt((24 * number) + 1)) / 6;
  return Math.floor(perfectSquare) === perfectSquare;
}
first10Pentagonals.every(isPentagonal).should.eql(true);
[36, 18, 25, 49].some(isPentagonal).should.eql(false);

var cmb = require('cmb');

cmb(_.range(1, 10000).map(pentagonal), 2, function (combo) {
  var j = combo[0];
  var k = combo[1];
  if (!isPentagonal(j + k)) {
    return;
  }
  var difference = k - j;
  if (isPentagonal(difference)) {
    console.log(difference); // 5482660 [Finished in 29.7s]
  }
});


// Congratulations, the answer you gave to problem 44 is correct.

// You are the 34696th person to have solved this problem.
