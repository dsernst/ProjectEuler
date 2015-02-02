// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var primes = [2, 3, 5, 7];
var sum = 17;
var perimeter = 2000000;

for (var n = primes[primes.length - 1] + 1; n < perimeter; n++) {
  for (var i = 0; i < primes.length; i++) {
    if (n % primes[i] === 0) {
      break;
    }
  }
  if (i === primes.length) {
    sum += n;
    primes.push(n);
  }
}

console.log(sum);

// Poor solution. It's having trouble finishing for perimeters much greater than 200,000.
