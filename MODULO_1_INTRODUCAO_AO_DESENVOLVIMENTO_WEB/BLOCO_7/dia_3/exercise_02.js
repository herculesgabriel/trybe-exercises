const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const actual = [1, 2, 3, 4];

let expected = [1, 2, 4];
assert.deepStrictEqual(myRemove(actual, 3), expected);

expected = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(actual, 5), expected);
assert.notDeepStrictEqual(myRemove(actual, 3), expected);

assert.deepStrictEqual(actual, (() => {
  myRemove(actual, 3);
  return actual;
}));
