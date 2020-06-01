const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
