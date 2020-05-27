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

const middle = function(arr) {
    let newArr = [];

    if (arr.length < 3) {
        return newArr;
    }

    if (arr.length % 2 !== 0) {
        let mid = Math.floor(arr.length / 2);
        newArr.push(arr[mid]);
    } else {
        let mid1 = Math.floor((arr.length - 1) / 2);
        let mid2 = Math.floor(arr.length / 2);
        newArr.push(arr[mid1]);
        newArr.push(arr[mid2]);
    }

    return newArr;
}


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
