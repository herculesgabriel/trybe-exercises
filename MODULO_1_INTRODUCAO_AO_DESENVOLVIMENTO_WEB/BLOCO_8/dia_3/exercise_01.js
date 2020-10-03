
const assert = require('assert');

const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];


function flatten() {
  return arrays.reduce((acc, arr) => {
    arr.map(elem => {
      acc.push(elem)
    });
    return acc
  }, []);
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
