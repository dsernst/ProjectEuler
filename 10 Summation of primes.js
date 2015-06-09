// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

var primes = [];
var sum = 0;
var perimeter = 2000000;

for (var i = 0; i < perimeter; i++) {
  primes.push(true);
}

for (var i = 2; i < Math.sqrt(perimeter); i++) {
  if (primes[i]) {
    for (var j = i * i; j < primes.length; j += i) {
      primes[j] = false;
    }
  }
}

for (var i = 2; i < primes.length; i++) {
  if (primes[i]) {
    sum += i;
  }
}

console.log(sum);

// Congratulations, the answer you gave to problem 10 is correct.

// You are the 170473rd person to have solved this problem.

// You have earned 1 new award:

// Decathlete: Solve ten consecutive problems
