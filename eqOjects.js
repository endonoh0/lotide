// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed:  ${actual} !==  ${expected}`);
    }
};

const eqArrays = function (arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            // console.log(arr1[i], arr2[i]);
            return false;
        }
    }
    return true; // assume all array elements are equal
};

const eqObjects = function (object1, object2) {
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);
    // console.log(keys1, keys2)
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (object1[key] !== object2[key]) {
            if (typeof object1[key] === 'object' && typeof object2[key] === 'object') {
                return eqObjects(object1[key], object2[key]);
            }

            if (typeof object2[key] !== 'object') {
                // console.log(object2[key]);
                return false;
            }

            if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
                return eqArrays(object1[key], object2[key]);
            } else {
                // return false // assume keys are both primittive data
                return eqArrays(object1[key], object2[key]);
            }
        }
    }
    return true;
};

/* Primitives As Values (Implementation) */
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
const efg = { a: "1", b: "2", c: "4" };

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
assertEqual(eqObjects(abc, efg), false);

/* Arrays As Values (Tests) */

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const cd3 = { c: "1", d: ["2", 3, 5] };

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(cd2, cd3), false);

/* Objects as values */
assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
