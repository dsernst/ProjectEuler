// An irrational decimal fraction is created by concatenating the positive integers:

// 0.12345678910*1*112131415161718192021...

// It can be seen that the 12th digit of the fractional part is 1.

// If d[n] represents the nth digit of the fractional part, find the value of the following expression.

// d[1] × d[10] × d[100] × d[1000] × d[10000] × d[100000] × d[1000000]

var bound = 1000000;
var string = '.';
var i;

for (i = 1; string.length <= bound; i++) {
  string += i;
}

// console.log(string[10]); // 1
// console.log(string[11]); // 0
// console.log(string[12]); // 1

console.log([1, 10, 100, 1000, 10000, 100000, 1000000].reduce(function (product, index) {
  return product * Number(string[Number(index)]);
}, 1)); // 210 [Finished in 0.1s]

// Congratulations, the answer you gave to problem 40 is correct.

// You are the 49620th person to have solved this problem.
