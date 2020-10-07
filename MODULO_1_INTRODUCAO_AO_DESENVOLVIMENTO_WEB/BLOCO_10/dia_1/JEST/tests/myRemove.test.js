const myRemove = require('../src/myRemove');

describe('removes an specific item from the given array', () => {

  it('remove 3 from [1, 2, 3, 4] should return [1, 2, 4]', () => {
    const received = myRemove([1, 2, 3, 4], 3);
    expect(received).toEqual([1, 2, 4]);
  });

  it('should not return [1, 2, 3, 4] when asked to remove the number 3', () => {
    const received = myRemove([1, 2, 3, 4], 3);
    expect(received).not.toEqual([1, 2, 3, 4]);
  });

  it('parameter is not changed inside array', () => {
    const parameter = [1, 2, 3, 4];
    const expected = parameter.slice();
    myRemove(parameter, 3);
    expect(expected).toEqual([1, 2, 3, 4]);
  });

  it('array did not change when the value does not exists inside array', () => {
    const expected = myRemove([1, 2, 3, 4], 5);
    expect(expected).toEqual([1, 2, 3, 4]);
  });

});