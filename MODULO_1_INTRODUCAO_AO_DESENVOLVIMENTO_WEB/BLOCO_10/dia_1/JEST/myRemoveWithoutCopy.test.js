const myRemoveWithoutCopy = require('./myRemoveWithoutCopy');

describe('receives a number and an array, then return the same array without the given number', () => {

  it('removes 3 from [1, 2, 3, 4] resulting in [1, 2, 4]', () => {
    const received = myRemoveWithoutCopy([1, 2, 3, 4], 3);
    const expected = [1, 2, 4];
    expect(received).toEqual(expected);
  });

  it('calling the function with [1, 2, 3, 4] and 3 as parameters should not return [1, 2, 3, 4]', () => {
    const received = myRemoveWithoutCopy([1, 2, 3, 4], 3);
    const expected = [1, 2, 3, 4];
    expect(received).not.toEqual(expected);
  });

  it('should modify the array inside function', () => {
    const parameter = [1, 2, 3, 4];
    myRemoveWithoutCopy(parameter, 3);
    const expected = [1, 2, 3, 4];
    expect(parameter).not.toEqual(expected);
  });

  it('should not change the array since 5 is not inside expected', () => {
    const received = myRemoveWithoutCopy([1, 2, 3, 4], 5);
    const expected = [1, 2, 3, 4];
    expect(received).toEqual(expected);
  });


});
