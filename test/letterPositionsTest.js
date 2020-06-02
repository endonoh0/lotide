const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
    it('it returns index [1] for the letter "e" in "hello"', () => {
        assert.deepEqual(letterPositions("hello").e, [1]);
    });

    it('it returns indices [3, 5, 15, 18] for the letter "h" in "lighthouse in the house"', () => {
        assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
    });

    it('it returns indices [0, 6] for the letter "v" in "vancouver"', () => {
        assert.deepEqual(letterPositions("vancouver").v, [0, 6]);
    });
});
