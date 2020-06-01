const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([14, -2, 3], [14, -2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 4], [1, 2, 3]), false);
assertArraysEqual(eqArrays([-1, 2, 4], [1, 2, 3]), false);
