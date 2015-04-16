// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

var i;
var result;
var digitsSum;
var resultString;

var sumString = function (memo, num) {
  return memo + parseInt(num, 10);
};

for (i = 0; i < 100; i++) {
  result = Math.pow(2, i);
  digitsSum = result.toString().split('').reduce(sumString, 0);

  if (i % 5 === 0) {
    console.log(i, digitsSum);
  }
}
