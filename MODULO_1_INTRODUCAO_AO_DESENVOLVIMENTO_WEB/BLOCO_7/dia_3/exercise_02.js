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

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
const actual = [1, 2, 3, 4];
let expected = [1, 2, 4];
assert.deepStrictEqual(myRemove(actual, 3), expected);

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
expected = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(actual, 5), expected);

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.notDeepStrictEqual(myRemove(actual, 3), expected);

// Verifique se o array passado por parâmetro não sofreu alterações
const actualArray = [1, 2, 3, 4];
const expectedArray = actualArray.slice();
myRemove(actualArray, 3);

assert.deepStrictEqual(actualArray, expectedArray);
