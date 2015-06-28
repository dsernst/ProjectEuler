// A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

// 1/2 =   0.5
// 1/3 =   0.(3)
// 1/4 =   0.25
// 1/5 =   0.2
// 1/6 =   0.1(6)
// 1/7 =   0.(142857)
// 1/8 =   0.125
// 1/9 =   0.(1)
// 1/10  =   0.1
// Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

// Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

var givenDecimalRepresentations = {
  '2': '0.5',
  '3': '0.(3)',
  '4': '0.25',
  '5': '0.2',
  '6': '0.1(6)',
  '7': '0.(142857)',
  '8': '0.125',
  '9': '0.(1)',
  '10': '0.1'
};
var upperLimit = 9;

var precision = 350;
var Decimal = require('decimal.js').config({precision: precision});

var _ = require('lodash');

String.prototype.doesTerminate = function (precision) {
  // This helper function returns a boolean whether our decimal representation terminates
  return this.length < precision;
};

Array.prototype.dropRight = function (n) {
  // This helper function lets us chain _.dropRight() more cleanly
  return _.dropRight(this, n);
};

String.prototype.findPatternInString = function (precision) {
  if (this.doesTerminate(precision)) {
    return this.toString();
  }

  var patternStart = 2;
  var patternLength = 1;
  this.split('').dropRight().forEach(function (character, index, array) {
    if (character !== array[patternStart]) {
      patternStart = index;
      // console.log(patternStart);
    }
  });
  return this.slice(0, patternStart) + '(' + this.slice(patternStart, patternStart + patternLength) + ')';
};

_.range(2, upperLimit).forEach(function (i) {
  var decimal = Decimal.ONE.dividedBy(i).toString();
  if (!decimal.doesTerminate(precision)) {
    console.log(i, decimal.findPatternInString(precision), decimal);
  }
});
