// Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
// If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

// For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

// Evaluate the sum of all the amicable numbers under 10000.


function sum(memo, value) {
  memo += value;
  return memo;
}

// var divisorsOf220 = [1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110];

// var dOf220 = divisorsOf220.reduce(sum);

// console.log(dOf220); // === 284, double checking to explore the problem

function properDivisors(n) {
  var divisors = [1];
  var i;
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i, n / i);
      if (i === Math.sqrt(n)) {
        // remove the extra square root, the last step entered it twice
        divisors.pop();
      }
    }
  }
  return divisors.sort(function (a, b) {return a - b; });
}


// console.log(properDivisors(220)); // === divisorsOf220, double checking to test properDivisors()

function dOf(n) {
  return properDivisors(n).reduce(sum);
}

// console.log(dOf(220)); // === 284, testing dOf()
// console.log(dOf(284)); // === 220, still exploring problem

function isAmicableNumber(a) {
  var b = dOf(a);
  if (b === a) {
    return false;
  }
  return dOf(b) === a;
}

// console.log(isAmicableNumber(1)); // === false, testing isAmicableNumber() for case where a = b
// console.log(isAmicableNumber(284)); // === true, testing isAmicableNumber() for given
// console.log(isAmicableNumber(220)); // === true, testing isAmicableNumber() for given

function amicableNumbersUnder(n) {
  var amicableNumbers = [];
  var i;
  for (i = 1; i < n; i++) {
    if (isAmicableNumber(i)) {
      amicableNumbers.push(i);
    }
  }
  return amicableNumbers;
}

var amicableNumbersUnder10000 = amicableNumbersUnder(10000);

console.log(amicableNumbersUnder10000); // [ 220, 284, 1184, 1210, 2620, 2924, 5020, 5564, 6232, 6368 ]

console.log(amicableNumbersUnder10000.reduce(sum)); // 31626

// Congratulations, the answer you gave to problem 21 is correct.

// You are the 84738th person to have solved this problem.
