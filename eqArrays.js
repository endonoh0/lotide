const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
    }
};

const eqArrays = function (arr1, arr2) { // [2, 3], [2,3]
    for (let i = arr1.length; i--;) {
        if (arr1.length !== arr2.length) {
            return false;
        }
        if (arr1[i] !== arr2[i]) {
            // console.log(arr1[i], arr2[i]);
            if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
                return eqArrays(arr1[i], arr2[i]);
            } else {
                return false;
            }
        }
    } return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); // => true
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); // => false
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); // => false
