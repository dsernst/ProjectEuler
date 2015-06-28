// Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

// 21 22 23 24 25
// 20  7  8  9 10
// 19  6  1  2 11
// 18  5  4  3 12
// 17 16 15 14 13

// It can be verified that the sum of the numbers on the diagonals is 101.

// What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

function knownSpiral(n) {
  if (n === 1) {
    return [[1]];
  }

  if (n === 3) {
    return [[7, 8, 9],
            [6, 1, 2],
            [5, 4, 3]];
  }

  if (n === 5) {
    return [[21, 22, 23, 24, 25],
            [20,  7,  8,  9, 10],
            [19,  6,  1,  2, 11],
            [18,  5,  4,  3, 12],
            [17, 16, 15, 14, 13]];
  }
}

var _ = require('lodash');

function generateNextSpiral(spiral) {
  var lastValue = _(spiral[0]).last();

  // Add right column
  spiral = spiral.map(function (row) {
    return row.concat(++lastValue);
  });

  // Add bottom row
  spiral.push(spiral[0].reduce(function (bottomRow) {
    return [++lastValue].concat(bottomRow);
  }, []));

  // Add left column
  spiral = spiral.reverse().map(function (row) {
    return [++lastValue].concat(row);
  }).reverse();

  // Add top row
  spiral.unshift(spiral[0].reduce(function (topRow) {
    return topRow.concat(++lastValue);
  }, []));

  return spiral;
}

function generateSpiral(size) {
  if (size === 1) {
    return knownSpiral(1);
  }
  return generateNextSpiral(generateSpiral(size - 2));
}

// // Test generateSpiral()
// var i;
// for (i = 1; i <= 5; i += 2) {
//   console.log(JSON.stringify(generateSpiral(i)) === JSON.stringify(knownSpiral(i))); // all true
// }

// console.log(generateSpiral(1001)); // works, took 10.2s to compute

function sumDiagonals(memo, row, index) {
  var centerValue = 1;
  var firstDiagonal = row[index];
  if (firstDiagonal === centerValue) { // Don't count centerValue twice
    return memo + centerValue;
  }
  var secondDiagonal = row[row.length - 1 - index];
  // console.log(firstDiagonal, secondDiagonal);
  return memo + firstDiagonal + secondDiagonal;
}

// Test sumDiagonals()
// console.log(knownSpiral(5).reduce(sumDiagonals, 0)); // 101
// console.log(knownSpiral(1).reduce(sumDiagonals, 0)); // 1
// console.log(knownSpiral(3).reduce(sumDiagonals, 0)); // 25

console.log(generateSpiral(1001).reduce(sumDiagonals, 0)); // 669171001, [Finished in 6.6s]

// Congratulations, the answer you gave to problem 28 is correct.

// You are the 67130th person to have solved this problem.
