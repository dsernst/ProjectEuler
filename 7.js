// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

var primes = [2, 3, 5, 7, 11, 13];

for (var n = primes[primes.length - 1] + 1; primes.length < 10001; n++) {
  for (var i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) {
      break;
    }
  }
  if (i === primes.length) {
    primes.push(n);
  }
}

console.log(primes.pop())

// Congratulations, the answer you gave to problem 7 is correct.

// You are the 213659th person to have solved this problem.
