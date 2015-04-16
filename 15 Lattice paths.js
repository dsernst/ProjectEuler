// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?


var perimeter = 1;

var routes = 1;

var move = function (x, y) {
  if (x < perimeter && y < perimeter) {
    routes += 1;
    move(x + 1, y);
    move(x, y + 1);
  }
}

move(0,0);

// console.log(routes);


/* ----------------------
Grows exponentially, very hard to compute past perimeter > 17.
Time Complexity Viewer was able to get perimeter = 19, which took ~667,000 ms, about 10 minutes.
Hangs for 20.
Trying another approach to analyze the rate of growth...
*/



var pattern = [];

for (var i = 1; i <= 16; i++) {
  routes = 1;
  perimeter = i;
  move(0,0);
  pattern.push([i, routes]);
}

// console.log(pattern)
// Graphed: http://jsfiddle.net/o3wcva93/


// Mike D suggests getting the ratio's of the numbers as they're growing:

var delta = pattern.map(function(tuple, index, list) {
  if (index === 0) {return [0, null]}
  return [index, pattern[index][1] / pattern[index - 1][1]]
});

console.log(delta);
// Graphed: http://jsfiddle.net/2LhmLgme/



// Mixed numbers would be easier to see than decimals. Copying in code from recent Toy Problem convertFractions

var isWhole = function (number) {
  return number % 1 === 0
}
var numDecimalPlaces = function (number) {
  var string = number.toString()
  return string.length - string.indexOf('.') - 1
}
var greatestCommonFactor = function (number1, number2) {
  for (var i = 1; i <= Math.abs(number1); i++) {
    var guess = Math.abs(number1) / i
    if (isWhole(number2/guess)) {
      return guess
    }
  }
  return 1
}
var fixJavascriptFloatErrors = function (number) {
  if (!isWhole(number)) {
    if (number.toString().indexOf('.0000')) {
      return Math.floor(number)
    }
  }
  return number
}

var toFraction = function(number) {
  var numerator = number
  var denominator = 1
  if (!isWhole(numerator)) {
    var multiple = Math.pow(10, numDecimalPlaces(numerator))
    numerator *= multiple
    denominator *= multiple
  }
  while (true) {
    var gcf = greatestCommonFactor(numerator, denominator)
    if (gcf !== 1) {
      numerator /= gcf
      denominator /= gcf
    }
    return fixJavascriptFloatErrors(numerator) + "/" + denominator
  }
};


var deltaMixed = delta.map(function (tuple) {
  return [tuple[0], toFraction(tuple[1])];
})

// console.log(deltaMixed);

