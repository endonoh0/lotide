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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([14, -2, 3], [14, -2, 3]);
assertArraysEqual([1, 2, 4], [1, 2, 3]);
assertArraysEqual([-1, 2, 4], [1, 2, 3]);
