// If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

// {20,48,52}, {24,45,51}, {30,40,50}

// For which value of p ≤ 1000, is the number of solutions maximised?

var triples = require('pythagorean-triples');

var upperBound = 1000;

var allTriples = triples.upToSum(upperBound).filter(triples.isPrimitive);
// console.log(allTriples);

var _ = require('lodash');

var tripleSums = allTriples.map(_.sum);
function countSolutions(perimeter) {
  var count = 0;
  _.each(tripleSums, function (sum) {
    if (perimeter % sum === 0) {
      count++;
    }
    return perimeter >= sum; // exit early
  });
  return {perimeter: perimeter, count: count};
}

var solutions = _.range(1, upperBound).map(countSolutions);

console.log(_.max(solutions, function (value) {return value.count; })); // { perimeter: 840, count: 7 } [Finished in 0.2s]

// Congratulations, the answer you gave to problem 39 is correct.

// You are the 44680th person to have solved this problem.
