// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

var target = 1000;

for (var a = 1; a < target / 3; a++) {
  var sum = 0;
  for (var b = a + 1; sum <= target; b++) {
    var c = Math.sqrt((a * a) + (b * b));
    sum = a + b + c;
    if (sum === target) {
      console.log(a * b * c);
      break;
    }
  }
}

// Congratulations, the answer you gave to problem 9 is correct.

// You are the 185793rd person to have solved this problem.
