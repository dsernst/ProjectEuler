// You are given the following information, but you may prefer to do some research for yourself.

// - 1 Jan 1900 was a Monday.
// - Thirty days has September,
  // April, June and November.
  // All the rest have thirty-one,
  // Saving February alone,
  // Which has twenty-eight, rain or shine.
  // And on leap years, twenty-nine.
// - A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

// How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?


var daysInNormalYear = 365;
var numberOfDaysFrom1901to2000 = daysInNormalYear * 100;
console.log(numberOfDaysFrom1901to2000); // 36500

// with leap days it will be 36525
var numberOfDaysFrom1901to2000withLeapDays = numberOfDaysFrom1901to2000 + 25;

var numberOfSundays = numberOfDaysFrom1901to2000withLeapDays / 7;

console.log(numberOfSundays); // 5217

var numberOfFirstOfMonth = 12 * 100;
console.log(numberOfFirstOfMonth); // 1200

var percentFirstOfMonth = numberOfFirstOfMonth / numberOfDaysFrom1901to2000withLeapDays;
console.log('percent 1st of Month:', percentFirstOfMonth * 100); // 3.285...

var percentSundays = numberOfSundays / numberOfDaysFrom1901to2000withLeapDays;
console.log('percent Sundays:', percentSundays * 100); // 14.285...

var percentSundaysFirstOfMonth = percentSundays * percentFirstOfMonth;
console.log('percent Sundays & 1st of Month:', percentSundaysFirstOfMonth * 100); // 0.469...

var estSundaysFirstOfMonth = percentSundaysFirstOfMonth * numberOfDaysFrom1901to2000withLeapDays;
console.log('Estimate of Sundays First of Month:', estSundaysFirstOfMonth); // 171...

// ------------------------------------------

// Precise algorithm to find Number of Sundays First of Month

// NOTE: January 1st 1901 was a Tuesday

// check the 1200 1st of month dates
  // is it sunday?


var monthsLengths = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31
};

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }

  if (year % 100 === 0) {
    return false;
  }

  if (year % 4 === 0) {
    return true;
  }

  return false;
}



var curYear, curMonth, curMonthLength;
// keep track of current day of the week
var curDay = 2;
// keep track of Sundays seen so var
var sundaysCount = 0;

// loop over all the years & keep track of what year we're in
for (curYear = 1901; curYear < 2001; curYear++) {

  // loop over all the months & keep track of what month we're in
  for (curMonth = 1; curMonth <= 12; curMonth++) {

    // Check if we're on Sunday
    if (curDay === 0) {
      sundaysCount++;
    }

    // update day for next Month:

    // check length of month we're in
    curMonthLength = monthsLengths[curMonth];

    // are we in a leap month?
    if (isLeapYear(curYear) && curMonth === 2) {
      curMonthLength = 29;
    }

    // find remainder modulo 7 from month length and add to our curDay
    curDay += curMonthLength % 7;
    if (curDay > 6) {
      curDay -= 7;
    }

  }
}

console.log();
console.log('Precise Sundays Count:', sundaysCount); // 171


// Congratulations, the answer you gave to problem 19 is correct.

// You are the 78164th person to have solved this problem.
