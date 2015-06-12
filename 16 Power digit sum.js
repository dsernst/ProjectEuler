// 2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2^1000?

var Big = require('big.js');

function digitSum(number) {
  // converts number to string
  var string = "" + number;
  // splits string into array
  var array = string.split('');
  // reduces down array into sum
  return array.reduce(function (memo, val) {

    return +val + memo;
  }, 0);
}

var twoToThe1000 = new Big(2).pow(1000);
console.log(twoToThe1000.toString()); // 1.0715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376e+301
console.log(digitSum(twoToThe1000.toFixed())); // 1366

// Congratulations, the answer you gave to problem 16 is correct.

// You are the 132599th person to have solved this problem.

