const assertEqual = require('./assertEqual');

/*
*  Implement the function findKey which takes in an object and a callback.
*  It should scan the object and return the first key for which the callback returns a truthy value.
*  If no key is found, then it should return undefined.
*/

const findKey = function (object, callback) {
    for (let key in object) {
        let name = key;
        let stars = object[key];

        if (callback(stars)) {
            return name;
        }
    }
    return;
}

let results1 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2)

let results2 = findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 1 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 1 },
    "Akelarre": { stars: 3 }
}, x => x.stars === 2)


assertEqual(results1, 'noma');
assertEqual(results2, undefined);
