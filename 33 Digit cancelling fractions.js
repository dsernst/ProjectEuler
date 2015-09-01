// The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

// We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

// There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

// If the product of these four fractions is given in its lowest common terms, find the value of the denominator.


var toDigits = require('to-digits');

function isCuriouslySimplifiable(numerator, denominator) {
  var numeratorDigits = toDigits(numerator);
  var denominatorDigits = toDigits(denominator);
  if (numeratorDigits[1] === denominatorDigits[0]) {
    return numeratorDigits[0] / denominatorDigits[1] === numerator / denominator;
  }
  return false;
}
// console.log(isCuriouslySimplifiable(49, 98)); // true

var _ = require('lodash');

var min = 10;
var max = 100;

var searchSpace = _.flatten(_.range(min, max).map(function (denominator) {
  return _.range(min, denominator).map(function (numerator) {
    return [numerator, denominator];
  });
}));

var curiouslySimplifiableFractions = searchSpace.filter(function (tuple) {
  return isCuriouslySimplifiable(tuple[0], tuple[1]);
});

console.log(curiouslySimplifiableFractions); // [ [ 16, 64 ], [ 26, 65 ], [ 19, 95 ], [ 49, 98 ] ]

var productOfFractions = curiouslySimplifiableFractions.reduce(function (product, tuple) {
  return product * tuple[0] / tuple[1];
}, 1);

console.log(productOfFractions); // 0.01 [Finished in 0.2s] —— thus denominator is 100

// Congratulations, the answer you gave to problem 33 is correct.

// You are the 44154th person to have solved this problem.
