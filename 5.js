// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var n = 2520;

while (true) {
  for (var i = 2; i < 20; i++) {
    if (n % i) {
      break;
    }
  }
  if (i < 20) {
    n++;
  } else {
    break;
  }
}

console.log(n);

// Congratulations, the answer you gave to problem 5 is correct.

// You are the 247469th person to have solved this problem
