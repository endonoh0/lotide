const countOnly = function (arr, obj) {
    const results = {};

    for (const item of arr) {
        if (obj[item]) {
            if (results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
            }
        }
    }
    return results;
};

module.exports = countOnly;
