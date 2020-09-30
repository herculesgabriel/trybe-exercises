const assert = require('assert');

const getLargestNumber = array => array.reduce((acc, num) => acc > num ? acc : num, 0);

const parameter = [45, 8, 2, 50, 1, 7, 99];
const unchangedArray = parameter.slice();
const result = 99;

const output = getLargestNumber(parameter);

assert.strictEqual(typeof getLargestNumber, 'function');

assert.strictEqual(output, result);
assert.deepStrictEqual(parameter, unchangedArray);
