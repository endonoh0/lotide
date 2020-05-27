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
        console.log("char", char);
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }

    return obj;
};

assertArraysEqual(countLetters('lighthouse in the house'), {
    l: 1,
    i: 2,
    g: 1,
    h: 4,
    t: 2,
    o: 2,
    u: 2,
    s: 2,
    e: 3,
    n: 1
});
