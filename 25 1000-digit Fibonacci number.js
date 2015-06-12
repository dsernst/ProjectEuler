// The Fibonacci sequence is defined by the recurrence relation:

// Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
// Hence the first 12 terms will be:

// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// The 12th term, F12, is the first term to contain three digits.

// What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

var Big = require('big.js');

var fib = (function () {
  var memo = {};

  function f(n) {
    var value;
    if (memo.hasOwnProperty(n)) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) {
        value = new Big(n);
      } else {
        value = f(n - 1).plus(f(n - 2));
      }
      memo[n] = value;
    }
    return value;
  }

  return f;
}());

console.log(fib(9).toString()); // 34, it works!


// Demonstrating phi as n approaches infinity
// var fib200 = fib(200);
// var fib201 = fib(201);
// console.log(fib200, fib201);
// console.log(fib201 / fib200);

var PHI = 1.618033988749895;

// console.log('estimate: ', Math.log(Math.pow(10, 1000)) / Math.log(PHI));  // Infinity

// console.log(fib(476)); // 1.3447196675861514e+99, lowest 100 digit fibonacci number
// console.log(Math.log(fib(476)) / Math.log(10)); // 99

// console.log(fib(1475)); // 8.077637632156222e+307, highest number before Infinity
console.log(fib(1476).toString()); // 1.3069892237633987e+308, highest number before Infinity (before using BigNumber)

console.log(fib(4782).e); // 999, had to manually guess and check to find the lowest number with e 999

// Congratulations, the answer you gave to problem 25 is correct.

// You are the 92090th person to have solved this problem.
