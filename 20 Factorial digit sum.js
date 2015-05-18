// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!


function digitSum(number) {
  // converts number to string
  var string = '' + number;
  // splits string into array
  var array = string.split('');
  // reduces down array into sum
  return array.reduce(function (memo, val) {

    return +val + memo;
  }, 0);
}


// looking for patterns where we might be able to reduce factors, like *10, or 2^4, or 3^4

// var a = [37, 16, 23, 8, 111, 9, 0, 47, 82, 103235252];
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a);
// console.log(a.map(digitSum));

var b = a.map(function (value) {
  return value * 64;
});

// console.log();
// console.log(b);
// console.log(b.map(digitSum));

var cleanData = a.map(function (val) {
  return {
    a: val,
    aSum: digitSum(val),
    b: val * 64,
    bSum: digitSum(val * 64)
  };
});

// console.log();
// console.log();
// console.log();
// console.log();
// console.log(cleanData);


// we estimate it's around 706.5 (15.7 * 45)
  // because the float is 157 digits long & the numbers 0-9 sum up to 45

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  // hard coding in some spots where we can take out extra trailing 0's
  if (n === 20) {
    return 243290200817664000;
  }
  return n * factorial(n - 1);
}


// trying to find a pattern of factorial(n) vs digitalsum(factorial(n))
var factorialDigitSums = {};
var i;
for (i = 1; i <= 24; i++) {
  // factorials[i] = factorial(i);
  factorialDigitSums[i] = digitSum(factorial(i));
  console.log('(' + i + ', ' + digitSum(factorial(i)) + '), ');
}

// console.log(factorials);
console.log(factorialDigitSums);


// // another approach:
// var factorialsThatDidntAffectDigitSum =
//   [4, 7, 8, 10, 13, 15, 17]

console.log(factorial(21));
// before 21! digitSum'd to 63
