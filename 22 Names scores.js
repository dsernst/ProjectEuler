// Using names.txt (right click and 'Save Link/Target As...'), a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

// For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

// What is the total of all the name scores in the file?

var names = require('./p022_names.js'); // adjusted .txt file to a module.export'd js array
// console.log(names); // array of names is correctly read in

var sortedNames = names.sort();
// console.log(sortedNames); // list of names has been correctly sorted

function getAlphabeticalValue(string) {
  return string.split('').reduce(function (memo, letter) {
    memo += letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    return memo;
  }, 0);
}

// console.log(getAlphabeticalValue('COLIN')); // === 53, matches given example

var totalNameScore = sortedNames.reduce(function sumNameScore(memo, name, index) {
  memo += getAlphabeticalValue(name) * (index + 1);
  return memo;
}, 0);

console.log(totalNameScore); // 871198282

// Congratulations, the answer you gave to problem 22 is correct.

// You are the 78949th person to have solved this problem.
