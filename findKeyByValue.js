const findKeyByValue = function (obj, str) {
    let keys = Object.keys(obj);

    for (let key of keys) {
        if (obj[key] === str) {
            return key;
        }
    }
};

module.exports = findKeyByValue;
