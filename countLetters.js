const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const countLetters = function (str) {
    const obj = {};
    let noSpace = str.split(' ').join('');

    for (let char of noSpace) {
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }
    return obj;
};

assertArraysEqual(countLetters('lighthouse in the house').l, 1);
assertArraysEqual(countLetters('vancouver').v, 2);
assertArraysEqual(countLetters('hello').e, 1);
