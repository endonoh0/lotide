const assert = require('chai').assert;
const tail = require('../tail')

describe('#tail', () => {
    it('returns ["Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
        assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Labs']);
    });

    it('returns ["Bob"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
        assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs", "Town", "Bob"]), ['Bob']);
    });
});
