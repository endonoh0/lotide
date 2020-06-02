const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#letterPositions', () => {
    it('it returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]', () => {
        assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
    });

    it('it returns [1, 2, 3, 4, 5, 6, 7] for [1, [2, 3, 4], [5, 6], [7]]', () => {
        assert.deepEqual(flatten([1, [2, 3, 4], [5, 6], [7]]), [1, 2, 3, 4, 5, 6, 7]);
    });

    it('it returns [10, 9, 8, 7, 6, 5, 4, 3] for [10, [9, 8], [7, 6], 5, 4, [3]])', () => {
        assert.deepEqual(flatten([10, [9, 8], [7, 6], 5, 4, [3]]), [10, 9, 8, 7, 6, 5, 4, 3]);
    });
});
