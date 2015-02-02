// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var digits = 3;
var cap = Math.pow(10, digits) - 1;
var largestPalindrome = 0;
var isPalindrome;
var product;

for (var m1 = cap; m1 > cap - 100; m1--) {
  isPalindrome = false;
  for (var m2 = cap; !isPalindrome; m2--) {
    product = (m1 * m2).toString();
    isPalindrome = product === product.split('').reverse().join('');
  }
  // console.log(product, m1, m2)
  if (+product > largestPalindrome) {
    largestPalindrome = product;
  }
}

console.log(largestPalindrome);

// Congratulations, the answer you gave to problem 4 is correct.

// You are the 234489th person to have solved this problem.
