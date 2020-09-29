const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
const actual = [1, 2, 3, 4];
let expected = [1, 2, 4];
assert.deepStrictEqual(myRemoveWithoutCopy(actual, 3), expected);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
expected = [1, 2, 3, 4];
assert.notDeepStrictEqual(myRemoveWithoutCopy(actual, 3), expected);

// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
const actualArray = [1, 2, 3, 4];
const expectedArray = actualArray.slice();
myRemoveWithoutCopy(actualArray, 3);

assert.notDeepStrictEqual(actualArray, expectedArray);

// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemoveWithoutCopy(actual, 5), expected);