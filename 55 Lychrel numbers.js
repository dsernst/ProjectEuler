// If we take 47, reverse and add, 47 + 74 = 121, which is palindromic.
//
// Not all numbers produce palindromes so quickly. For example,
//
// 349 + 943 = 1292,
// 1292 + 2921 = 4213
// 4213 + 3124 = 7337
//
// That is, 349 took three iterations to arrive at a palindrome.
//
// Although no one has proved it yet, it is thought that some numbers, like 196, never produce a palindrome. A number that never forms a palindrome through the reverse and add process is called a Lychrel number. Due to the theoretical nature of these numbers, and for the purpose of this problem, we shall assume that a number is Lychrel until proven otherwise. In addition you are given that for every number below ten-thousand, it will either (i) become a palindrome in less than fifty iterations, or, (ii) no one, with all the computing power that exists, has managed so far to map it to a palindrome. In fact, 10677 is the first number to be shown to require over fifty iterations before producing a palindrome: 4668731596684224866951378664 (53 iterations, 28-digits).
//
// Surprisingly, there are palindromic numbers that are themselves Lychrel numbers; the first example is 4994.
//
// How many Lychrel numbers are there below ten-thousand?
//
// NOTE: Wording was modified slightly on 24 April 2007 to emphasise the theoretical nature of Lychrel numbers.

require('should')
var isPalindrome = require('is-palindrome')
var Big = require('big.js')

function reverseAndAdd(number) {
  return Big(number).plus(number.toString().split('').reverse().join('')).toFixed()
}
reverseAndAdd(47).should.eql('121')
isPalindrome(reverseAndAdd(47)).should.eql(true)


function iterationsToBecomePalindrome(number) {
  var n = number
  var iterations = 0
  while (!isPalindrome(n)) {
    n = reverseAndAdd(n)
    iterations++
    // console.log(iterations, n)
    if (iterations === 60) {
      return -1
    }
  }
  return iterations
}
iterationsToBecomePalindrome(349).should.eql(3)
iterationsToBecomePalindrome(196).should.eql(-1)
iterationsToBecomePalindrome(10677).should.eql(53)

function isLychrel(number) {
  if (number < 10000) {
    return iterationsToBecomePalindrome(number) === -1
  }
}
[349, 196, 10677].map(isLychrel).should.eql([false, true, undefined])

var _ = require('lodash')

console.log(_.range(1, 10000).filter(isLychrel).length) // 246

// Sorry, but the answer you gave appears to be incorrect.
