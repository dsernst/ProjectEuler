// It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

// 9 = 7 + 2×1^2
// 15 = 7 + 2×2^2
// 21 = 3 + 2×3^2
// 25 = 7 + 2×3^2
// 27 = 19 + 2×2^2
// 33 = 31 + 2×1^2

// It turns out that the conjecture was false.

// What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

var should = require('should');

function findSquaresLessThanHalf(n) {
  var root = Math.sqrt(n / 2);
  var squaresLessThanN = [];
  var i;
  for (i = Math.floor(root - 0.1); i > 0; i--) {
    squaresLessThanN.unshift(i * i);
  }
  return squaresLessThanN;
}
findSquaresLessThanHalf(9).should.eql([1, 4]);

var isPrime = require('quick-is-prime');

function testConjecture(n) {
  return findSquaresLessThanHalf(n).some(function (square) {
    return isPrime(n - 2 * square);
  });
}
[9, 15, 21, 25, 27, 33].every(testConjecture).should.eql(true);

var i;
for (i = 1; i < 10000; i += 2) {
  if (!isPrime(i)) {
    if (!testConjecture(i)) {
      console.log(i); // 5777 [Finished in 1.0s]
    }
  }
}

// Congratulations, the answer you gave to problem 46 is correct.

// You are the 36900th person to have solved this problem.
