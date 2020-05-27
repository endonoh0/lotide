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

const flatten = function (arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (!Array.isArray(arr[i])) {
            newArr.push(arr[i]);
        }
        for (let j = 0; j < arr[i].length; j++) {
            if (Array.isArray(arr[i])) {
                newArr.push(arr[i][j]);
            }
        }
    }
    return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, [2, 3, 4], [5, 6], [7]]), [1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(flatten([10, [9, 8], [7, 6], 5, 4, [3]]), [1, 2, 3, 4, 5, 6, 7]);
