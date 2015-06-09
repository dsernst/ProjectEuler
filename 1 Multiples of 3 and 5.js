// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

var total = 0;

for (var i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}

console.log(total)

// Congratulations, the answer you gave to problem 1 is correct.

// You are the 432423rd person to have solved this problem.
