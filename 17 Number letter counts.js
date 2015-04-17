// Number letter counts
// Problem 17
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.


var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
};

Number.prototype.toEnglish = function () {
  var thisString = this.toString();
  if (thisString === '1') {
    return 'one';
  }
  var english = '';
  var places = Math.ceil(Math.log(this) / Math.LN10);
  var place, i;
  for (i = 0; i < places; i++) {
    place = places - i - 1;
    if (thisString[i] !== '0') {
      if (place !== 1) {
        english += numbersToWords[thisString[i]]; // print single digit word
      } else {
        if (thisString[i] !== '1') {
          english += numbersToWords[10 * thisString[i]]; // print irregular words 20-99
          if (thisString[i + 1] !== '0') {
            english += ''; // removed hyphon for this problem
          }
        } else {
          english += numbersToWords[thisString[i] + thisString[i + 1]]; // print irregular words 10-19
          i++;
        }
      }
    }
    if (place === 2 && thisString[i] !== '0') {
      english += 'hundredand'; // print 'hundred'
    }
  }
  return english;
};

// Examples:
console.log((1).toEnglish()); // > "one" --- Why did this need to be hardcoded in? Why was it broken?
console.log((7).toEnglish()); // > "seven"
console.log((575).toEnglish()); // > "fivehundredandseventyfive"
console.log((262).toEnglish()); // > "twohundredandsixtytwo"
console.log((101).toEnglish()); // > "onehundredandone"
// NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.
// console.log((342).toEnglish().length); // 23
// console.log((115).toEnglish().length); // 20



var charSum = 0;
var i;
for (i = 1; i <= 999; i++) {
  charSum += i.toEnglish().length;
}
// console.log(charSum + 'onethousand'.length);


// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
charSum = 0;
for (i = 1; i <= 5; i++) {
  charSum += i.toEnglish().length;
  console.log(charSum);
}

