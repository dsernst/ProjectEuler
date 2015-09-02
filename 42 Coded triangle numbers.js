// The nth term of the sequence of triangle numbers is given by, t[n] = n(n+1)/2; so the first ten triangle numbers are:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// By converting each letter in a word to a number corresponding to its alphabetical position and adding these values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t[10]. If the word value is a triangle number then we shall call the word a triangle word.

// Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, how many are triangle words?

var words = require('./42 words.js');
// console.log(words.length); // 1786

function letterToAlphabeticalIndex(letter) {
  return letter.charCodeAt(0) - 64;
}
// console.log('SKY'.split('').map(letterToAlphabeticalIndex)); // [19, 11, 25]

var _ = require('lodash');

function getWordValue(word) {
  return _.sum(word.split('').map(letterToAlphabeticalIndex));
}
// console.log(getWordValue('SKY')); // 55

// var maxWordValue = _.max(words.map(getWordValue)); // 192

function generateTriangularNumbers(upTo) {
  var array = [];
  var value = 0;
  var i;
  for (i = 1; value < upTo; i++) {
    value += i;
    array.push(value);
  }
  return array;
}
// console.log(generateTriangularNumbers(55)); // [ 1, 3, 6, 10, 15, 21, 28, 36, 45, 55 ]

var triangularNumbers = generateTriangularNumbers(192);
function isTriangularWord(word) {
  var wordValue = getWordValue(word);
  return _.indexOf(triangularNumbers, wordValue, true) > -1;
}
console.log(words.filter(isTriangularWord).length); // 162 [Finished in 0.1s]

// Congratulations, the answer you gave to problem 42 is correct.

// You are the 47042nd person to have solved this problem.
