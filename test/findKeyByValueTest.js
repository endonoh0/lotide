const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

describe('#findKeyByValue', () => {
    it('it returns "sci_fi" for "The Expanse"', () => {
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
    });

    it('it returns "drama" for "The Wire"', () => {
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    });

    it('it returns "undefined" for "That \'70s Show"', () => {
        assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    });
});
