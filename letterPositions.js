const letterPositions = function (str) {
    const results = {};
    let noSpace = str;

    for (let char of noSpace) {
        results[char] = new Array;

        let index = noSpace.indexOf(char);

        while (index != -1) {
            results[char].push(index);
            index = noSpace.indexOf(char, index + 1);
        }
    }

    delete results[' '];
    return results;
};

module.exports = letterPositions;
