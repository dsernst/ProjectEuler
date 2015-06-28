// Euler discovered the remarkable quadratic formula:

// n² + n + 41

// It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. However, when n = 40, 40² + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

// The incredible formula  n² − 79n + 1601 was discovered, which produces 80 primes for the consecutive values n = 0 to 79. The product of the coefficients, −79 and 1601, is −126479.

// Considering quadratics of the form:

// n² + an + b, where |a| < 1000 and |b| < 1000

// where |n| is the modulus/absolute value of n
// e.g. |11| = 11 and |−4| = 4
// Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n = 0.


// -----------------------------------------------------

// Read http://math.stackexchange.com/questions/289338/is-the-notorious-n2-n-41-prime-generator-the-last-of-its-type
// which suggests there are no larger quadratics of this type because of the limit of Heegner numbers

// tried n² − 79n + 1601, where a * b = −126479, incorrect.
// tried n² + n + 41, where a * b = 41, incorrect.
// tried n² - n + 41, where a * b = -41, incorrect.

// and read http://mathworld.wolfram.com/Prime-GeneratingPolynomial.html which had a much more information on context to this problem.

// Specifically it showed how n² − 79n + 1601 = (n - 40)² + (n - 40) + 41 — a simple substitution — and suggests there are more of this type.

// The problem specificied we are only looking within n² + an + b, where |a| < 1000 and |b| < 1000, thus our substitution must be less than:
console.log(Math.sqrt(1000)); // 31.622776...

// According to http://www.wolframalpha.com/input/?i=+%28n+-+31%29%C2%B2+%2B+%28n+-+31%29+%2B+41
// (n - 31)² + (n - 31) + 41 = n² - 61n + 971, which meets |a| < 1000 and |b| < 1000,
// and for values 0 <= n <= 15:

// n | (n-31)^2+n+10
// 1 | 911
// 2 | 853
// 3 | 797
// 4 | 743
// 5 | 691
// 6 | 641
// 7 | 593
// 8 | 547
// 9 | 503
// 10 | 461
// 11 | 421
// 12 | 383
// 13 | 347
// 14 | 313
// 15 | 281

// and 0 | 971

var first16valuesForMinus31Substitution = {
  0: 971,
  1: 911,
  2: 853,
  3: 797,
  4: 743,
  5: 691,
  6: 641,
  7: 593,
  8: 547,
  9: 503,
  10: 461,
  11: 421,
  12: 383,
  13: 347,
  14: 313,
  15: 281
};

var isPrime = require('isprime');

for (var n in first16valuesForMinus31Substitution) {
  console.log(n, isPrime(first16valuesForMinus31Substitution[n])); // all true
}

// n² - 61n + 971 has the coefficients a = -61 and b = 971, thus a * b =
console.log(-61 * 971); // -59231


// Congratulations, the answer you gave to problem 27 is correct.

// You are the 51731st person to have solved this problem.

// Nice work, dsernst, you've just advanced to Level 1 .
// 73073 members (14.61%) have made it this far.

// You have earned 2 new awards:

// The Journey Begins: Progress to Level 1 by solving twenty-five problems
// Easy Prey: Solve twenty-five of the fifty easiest problems
