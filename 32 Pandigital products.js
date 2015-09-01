// We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

// The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

// Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

// HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

var _ = require('lodash');

function isPandigitalIdentity(multiplicand, multiplier, product) {
  var allDigits = _([multiplicand, multiplier, product])
    .map(function toDigits(number) {
      return String(number).split('').map(Number);
    })
    .flatten().value();

  if (allDigits.length !== 9) {
    return false;
  }

  // does allDigits include every number 1 - 9?
  return _.every(_.range(1, 10), _.curry(_.includes)(allDigits));
}
// console.log(isPandigitalIdentity(39, 186, 7254)); // true

function hasPandigitalIdentity(product) {
  var multiplicand, multiplier;
  for (multiplicand = 2; multiplicand <= Math.sqrt(product); multiplicand++) {
    multiplier = product / multiplicand;
    if (Math.floor(multiplier) === multiplier) {
      if (isPandigitalIdentity(multiplicand, multiplier, product)) {
        // console.log(multiplicand, multiplier, product);
        return true;
      }
    }
  }

  return false;
}
// console.log(hasPandigitalIdentity(7254)); // true
// console.log(hasPandigitalIdentity(7253)); // false

var min = 1;
var max = 15000; // arbitrary upper bound on search space

var productsWithPandigitalIdentity = _.range(min, max).filter(hasPandigitalIdentity);

// console.log(productsWithPandigitalIdentity.length); // 7
console.log(_.sum(productsWithPandigitalIdentity)); // 45228 [Finished in 0.8s]

// Congratulations, the answer you gave to problem 32 is correct.

// You are the 43150th person to have solved this problem.
