// Take the number 192 and multiply it by each of 1, 2, and 3:

// 192 × 1 = 192
// 192 × 2 = 384
// 192 × 3 = 576
// By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

// The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

// What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

var isPandigital = require('is-pandigital');
// console.log(isPandigital(192384576)); // true;

var _ = require('lodash');
function concatenatedProduct(number, range) {
  return _.range(1, range + 1).map(function (multiplier) {
    return number * multiplier;
  }).reduce(function (concatProduct, product) {
    concatProduct += String(product);
    return Number(concatProduct);
  }, '');
}
// console.log(concatenatedProduct(192, 3)); // 192384576
// console.log(concatenatedProduct(9, 5)); // 918273645

var largestPandigital = 918273645;
var multiplicand, concatProduct;

_.each(_.range(2, 9), function (n) {
  for (multiplicand = 1; multiplicand <= 987654321; multiplicand++) {
    concatProduct = concatenatedProduct(multiplicand, n);
    if (isPandigital(concatProduct)) {
      console.log(concatProduct, multiplicand, n);
      largestPandigital = Math.max(largestPandigital, concatProduct);
    }
    if (String(concatProduct).length > 9) {
      console.log('length > 9: ', concatProduct, multiplicand, n);
      break;
    }
  }
});

console.log(largestPandigital); // 932718654 [Finished in 0.5s]

// Congratulations, the answer you gave to problem 38 is correct.

// You are the 38591st person to have solved this problem.
