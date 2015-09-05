// By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

// By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

// Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

var _ = require('lodash');
var isPrime = require('quick-is-prime');
var should = require('should');

function countPrimes(n) {
  return _.range(10).filter(function (x) {
    if (x === 0 && n[0] === '*') {
      return false;
    }
    return isPrime(Number(n.replace(/\*/g, x)));
  }).length;
}
countPrimes('*3').should.eql(6);
countPrimes('56**3').should.eql(7);

function getWildcardOptions(length) {
  if (length === 1) {
    return ['*', 'd'];
  }
  return getWildcardOptions(length - 1).reduce(function (newArray, option) {
    return newArray.concat('*' + option, 'd' + option);
  }, []);
}
getWildcardOptions(1).should.eql(['*', 'd']);
getWildcardOptions(2).should.eql(['**', 'd*', '*d', 'dd']);
_.difference(getWildcardOptions(3), ['***', 'd**', '*d*', '**d', '*dd', 'dd*', 'd*d', 'ddd']).should.eql([]);

function convertWildcardOptions(option) {
  return _.flatten(option.split('').map(function (digit) {
    if (digit === '*') {
      return '*';
    }
    return _.range(10).map(String);
  }));
}

convertWildcardOptions('*').should.eql(['*']);
convertWildcardOptions('d').should.eql(_.range(10).map(String));
// _.difference(['0*', '1*', '2*', '3*'], convertWildcardOptions('d*')).should.eql([]);

console.log(convertWildcardOptions('d*'))
