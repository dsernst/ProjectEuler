// It turns out that 12 cm is the smallest length of wire that can be bent to form an integer sided right angle triangle in exactly one way, but there are many more examples.

// 12 cm: (3,4,5)
// 24 cm: (6,8,10)
// 30 cm: (5,12,13)
// 36 cm: (9,12,15)
// 40 cm: (8,15,17)
// 48 cm: (12,16,20)

// In contrast, some lengths of wire, like 20 cm, cannot be bent to form an integer sided right angle triangle, and other lengths allow more than one solution to be found; for example, using 120 cm it is possible to form exactly three different integer sided right angle triangles.

// 120 cm: (30,40,50), (20,48,52), (24,45,51)

// Given that L is the length of the wire, for how many values of L ≤ 1,500,000 can exactly one integer sided right angle triangle be formed?

var fs = require('fs');
var _ = require('lodash');

var target = 1500000;

// var triples = require('pythagorean-triples');
// var pythagorianTriples = triples.upToSum(target).filter(triples.isPrimitive);
// fs.writeFileSync('./75 triples-up-to-' + target + '.json', JSON.stringify(pythagorianTriples));
var pythagorianTriples = JSON.parse(fs.readFileSync('./75 triples-up-to-' + target + '.json'));

var pythagorianTripleSums = pythagorianTriples.map(_.sum);

// function isMultipleOfPythagorianTripleSum(number) {
//   return _.some(pythagorianTripleSums, function (sum) {
//     return number % sum === 0;
//   });
// }

// function quickIsMultipleOfPythagorianTripleSum(number) {
//   if (number % 5000 === 0) {
//     console.log(number);
//   }
//   var isMultiple = false;
//   _.each(pythagorianTripleSums, function (sum) {
//     if (number % sum === 0) {
//       isMultiple = true;
//       return false;
//     }
//     if (sum > number) {
//       return false;
//     }
//   });
//   return isMultiple;
// } // [Finished in 732.0s] for target = 1500000;

var sieveOfMultiples = pythagorianTripleSums.reduce(function (sieve, sum) {
  var i;
  for (i = 1; i * sum <= sieve.length; i++) {
    sieve[i * sum] = true;
  }
  return sieve;
}, new Array(target + 2).join(',').split(',') // get values for map to work
  .map(function () { return false; }));

function quickerIsMultipleOfPythagorianTripleSum(number) {
  return sieveOfMultiples[number];
}

console.log([12, 24, 30, 36, 40, 48].map(quickerIsMultipleOfPythagorianTripleSum)); // [true, true, true, true, true, true]
console.log(quickerIsMultipleOfPythagorianTripleSum(20)); // false

console.log(_.range(1, target + 1).filter(quickerIsMultipleOfPythagorianTripleSum).length);
