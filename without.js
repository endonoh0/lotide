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
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case

// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["1", 2, "3"], [1, 2, "3"])); // => ["1"]
console.log(without(["1", "a", "3"], ["a", "3", 2])); // => ["1"]
