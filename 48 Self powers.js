// The series, 11 + 22 + 33 + ... + 1010 = 10405071317.

// Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.

var Big = require('big.js')

var sum = 0
var i

for (i = 1; i <= 1000; i++) {
  sum += Number(Big(i).pow(i).toFixed().slice(-10))
}
console.log(sum) // 4629110846700 but we only need 10 digits

// Congratulations, the answer you gave to problem 48 is correct.

// You are the 73995th person to have solved this problem.

// Nice work, dsernst, you've just advanced to Level 2 .
// 34423 members (6.49%) have made it this far.
