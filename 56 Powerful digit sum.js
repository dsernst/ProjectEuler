// A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.
//
// Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

var big = require('big.js')
var _ = require('lodash')
require('should')

function digitalSum(numberString) {
  return _.sum(numberString.toString().split('').map(Number))
}
digitalSum('5231').should.eql(11)

var upperBound = 101
var a, b, sum
var max = {a: 1, b: 1, digitalSum: 1}
for (a = 1; a < upperBound; a++) {
  for (b = 1; b < upperBound; b++) {
    sum = digitalSum(big(a).pow(b).toFixed())
    if (sum > max.digitalSum) {
      console.log(a, b, sum) // 99 95 972
      max = {a: a, b: b, digitalSum: sum}
    }
  }
}

// Congratulations, the answer you gave to problem 56 is correct.
//
// You are the 36978th person to have solved this problem.
