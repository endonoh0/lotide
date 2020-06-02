/*
The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback / predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.
*/
const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function (array, callback) {
    const results = [];

    for (let item of array) {
        if (callback(item)) {
            return results;
        }
        results.push(item);
    }
    return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);
