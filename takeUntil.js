/*
The function will return a "slice of the array with elements taken from the beginning."
It should keep going until the callback / predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.
*/

const takeUntil = function (array, callback) {
    const results = [];

    for (let item of array) {
        if (callback(item)) {
            return results;
        }
        results.push(item);
    }

    return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results1 = takeUntil(data1, x => x < 0);

console.log(results1);
console.log('---');
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
