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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    const results = [];

    for (let item of array) {
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(words, word => Math.floor(Math.sqrt(word.length)));

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [2, 2, 1, 2, 1]);
