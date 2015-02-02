// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

var primeFactors = [];
var number = 600851475143;
var tryFactor = 2;

while (number > 1) {
  if (number % tryFactor === 0) {
    primeFactors.push(tryFactor);
    number /= tryFactor;
  } else {
    tryFactor++;
  }
}

console.log(Math.max.apply(null, primeFactors));

// Congratulations, the answer you gave to problem 3 is correct.

// You are the 258885th person to have solved this problem.

// You have earned 1 new award:

// Baby Steps: Solve three problems
