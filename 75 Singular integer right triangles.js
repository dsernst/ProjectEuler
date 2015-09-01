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

var allPythagorianTriples = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [9, 40, 41],
  [11, 60, 61],
  [12, 35, 37],
  [13, 84, 85],
  [15, 112, 113],
  [16, 63, 65],
  [17, 144, 145],
  [19, 180, 181],
  [20, 21, 29],
  [20, 99, 101],
  [21, 220, 221],
  [24, 143, 145],
  [28, 45, 53],
  [28, 195, 197],
  [32, 255, 257],
  [33, 56, 65],
  [36, 77, 85],
  [39, 80, 89],
  [44, 117, 125],
  [48, 55, 73],
  [51, 140, 149],
  [52, 165, 173],
  [57, 176, 185],
  [60, 91, 109],
  [60, 221, 229],
  [65, 72, 97],
  [84, 187, 205],
  [85, 132, 157],
  [88, 105, 137],
  [95, 168, 193],
  [96, 247, 265],
  [104, 153, 185],
  [105, 208, 233],
  [115, 252, 277],
  [119, 120, 169],
  [120, 209, 241],
  [133, 156, 205],
  [140, 171, 221],
  [160, 231, 281],
  [161, 240, 289],
  [204, 253, 325],
  [207, 224, 305],
];

var _ = require('lodash');

var sumOfTriples = allPythagorianTriples.map(_.sum);

function isMultipleOfPythagorianTripleSum(number) {
  return _.some(sumOfTriples, function (sum) {
    return number % sum === 0;
  });
}
// console.log([12, 24, 30, 36, 40, 48].map(isMultipleOfPythagorianTripleSum)); // [true, true, true, true, true, true]
// console.log(isMultipleOfPythagorianTripleSum(20)); // false

console.log(_.range(1, 1500001).filter(isMultipleOfPythagorianTripleSum).length); // 246337 [Finished in 1.7s]
