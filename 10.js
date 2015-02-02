// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var primes = [];
var sum = 0;
var perimeter = 2000000;

for (var i = 2; i < perimeter; i++) {
  primes.push(i);
}

for (var i = 0; i < primes.length; i++) {
  for (var j = i + 1; j < primes.length; j++) {
    if (primes[j] % primes[i] === 0) {
      primes.splice(j, 1);
    }
  }
}

for (var i = 0; i < primes.length; i++) {
  sum += primes[i];
}

console.log(sum);

// Trying to build a list of primes with Sieve of Eratosthenes, but this one's having trouble running for even 200,000 entries.
