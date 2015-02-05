// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

// NOTE: Once the chain starts the terms are allowed to go above one million.

var perimeter = 1000000;

function hasAnOddPrecursor (value) {
  var oddPrecursor = (value - 1) / 3;
  return oddPrecursor === Math.floor(oddPrecursor);
};

function hasAnEvenPrecursor (value) {
  return value % 2 === 0;
};

// console.log(hasAnOddPrecursor(16));
// console.log(hasAnOddPrecursor(26));
// console.log(hasAnOddPrecursor(266));
// console.log(hasAnOddPrecursor(112));

// Thought to build a tree in reverse starting from 1, but don't know where to identify the base case for recursion. Starting over...






function countSequence (number) {
  function recursiveCount (value, count) {
    if (value === 1) {
      return count;
    } else if (value % 2 === 0) {
      return recursiveCount(value/2, count + 1);
    } else {
      return recursiveCount((value * 3) + 1, count + 1);
    }
  }
  return recursiveCount(number, 1);
}

// var highest = {number: 1, length: 1};
// for (var i = 1; i < perimeter; i++) {
//   var iCount = countSequence(i);
//   if (iCount > highest.length) {
//     highest = {number: i, length: iCount};
//   }
// }

// console.log(highest)

// Congratulations, the answer you gave to problem 14 is correct.

// You are the 120579th person to have solved this problem.



// Now to build a graph of startingNum vs. sequenceLength for curiosity...

// var counts = [];
// for (var i = 1; i < 10000; i += 1) {
//   var count = countSequence(i);
//   counts.push([i, count]);
// }

// console.log(counts);

// Here's a visualization:

