// The sum of the squares of the first ten natural numbers is,

// 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var n = 100;
for (var i = 1, sumOfSquares = 0; i <= n; i++) {
  sumOfSquares += i * i;
}

var squareOfSums = Math.pow(n * (n + 1) / 2, 2);

console.log(squareOfSums - sumOfSquares);

// Congratulations, the answer you gave to problem 6 is correct.

// You are the 249288th person to have solved this problem.
