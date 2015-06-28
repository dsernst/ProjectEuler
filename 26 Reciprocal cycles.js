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
var upperLimit = 25;

var precision = 150;
var Decimal = require('decimal.js').config({precision: precision});

String.prototype.doesTerminate = function () {
  // Does our decimal representation terminate?
  return this.length < precision;
};


String.prototype.findCycleInString = function () {
  // handle the simple case where the decimal terminates
  if (this.doesTerminate()) {
    return this.toString();
    // return 0;
  }

  var searchSpace = this.slice(2, -1); // ignore before decimal place & rounding errors
  // console.log(searchSpace);
  var cycleStart = 0;
  var cycleEnd = 1;
  searchSpace.split('').some(function (character, index) {
    var re = new RegExp(character, 'g');
    re.test(searchSpace); // let the RegEx find itself first
    if (!re.test(searchSpace)) { // find next occurance of this character
      // we didn't see this character again: we must not be in a cycle yet
      cycleStart++;
      return;
    }
    var found = re.lastIndex - 1;
    var cycleLength = found - index;
    var cycle = searchSpace.slice(index, found);
    var nextCycle = searchSpace.slice(found, found + cycleLength);
    // console.log(index, re, found, cycleLength);
    // console.log(cycle, nextCycle);
    if (cycle === nextCycle) {
      // we found a match!
      cycleEnd = found;
      return true;
    }
    // var next = array.slice(index + 1).indexOf(character);
    // if (next === -1) {
    //   cycleStart++;
    //   return;
    // }
    if (index > 25) {
      return true;
    }

  });
  return '0.' + searchSpace.slice(0, cycleStart) + '(' + searchSpace.slice(cycleStart, cycleEnd) + ')';
  // return cycleStart;
};

var Heap = require('heap');
var maxHeap = new Heap(function largestCycleLength(a, b) {
  return b.cycleLength - a.cycleLength;
});

var _ = require('lodash');

_.range(2, upperLimit).forEach(function (d) {
  var info = {
    d: d,
    decimal: Decimal.ONE.dividedBy(d).toString(),
  };
  info.cycle = info.decimal.findCycleInString();
  // if (!info.decimal.doesTerminate()) {
  console.log(info);
  // }
  maxHeap.push(info);
});

// console.log('');
// console.log(maxHeap.pop());
// console.log(maxHeap.pop());
// console.log(maxHeap.pop());
// console.log(maxHeap.pop());
// console.log(maxHeap.pop());

function testPatternFinder(d) {
  var decimal = Decimal.ONE.dividedBy(d).toString();
  console.log(d, decimal.findCycleInString(precision), decimal);
}

// // cases of reciprocal cycles:
// // 1. decimal terminates
// testPatternFinder(2); // 0.5

// // // 2. simple single digit repeating number
// testPatternFinder(3); // 0.(3)

// // // 3. non-repeating characters before cycle
// testPatternFinder(6); // 0.1(6)

// // // 4. multiple digit cycles
// testPatternFinder(7); // 0.(142857)
// /* the decimal representation of 1/7:
// 14285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285714285
// */

// testPatternFinder(17); // 0.(0588235294117647)
