import assert from 'assert';

describe('Adding numbers', function() {
    it ('should add two numbers', function() {
        let add = function(a, b) {
            return a + b;
        };

        assert.equal(add(2, 3), 5);
    });
});