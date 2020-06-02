const assertArraysEqual = require('./assertArraysEqual');

const exists = function(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (item === array[i])
        return true;
    }
    return false;
}

const without = function(source, itemsToRemove) {
    const newArr = [];

    for (let i = 0; i < source.length; i++) {
        if (!exists(source[i], itemsToRemove))
        newArr.push(source[i]);
    }
    return newArr;
};

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["1", 2, "3"], [1, 2, "3"]), ["1"]);
assertArraysEqual(without(["1", "a", "3"], ["a", "3", 2]), ["1"]);
