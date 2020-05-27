const eqArrays = function (arr1, arr2) {
    for (let i = arr1.length; i--;) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    } return true;
};

const assertArraysEqual = function (first, second) {
    if (eqArrays(first, second)) {
        console.log(`✅✅✅ Assertion Passed: ${first} === ${second}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${first} !==  ${second}`);
    }
};


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
