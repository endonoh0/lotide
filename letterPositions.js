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

const letterPositions = function (sentence) {
    const results = {};
    let noSpace = sentence;

    for (let char of noSpace) {
        results[char] = new Array;

        let index = noSpace.indexOf(char);

        while (index != -1) {
            results[char].push(index);
            index = noSpace.indexOf(char, index + 1);
        }
    }

    delete results[' '];
    return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("lighthouse in the house'").h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('vancouver').v, [0, 6]);
