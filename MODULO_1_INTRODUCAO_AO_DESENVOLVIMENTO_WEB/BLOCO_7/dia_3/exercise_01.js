const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'The result of 4 plus 5 should be 9');
assert.strictEqual(sum(0, 0), 0, 'The result of 4 plus 5 should be 9');
assert.throws(() => { sum(4, '5') }, /^Error: parameters must be numbers$/);