const { getMaxListeners } = require('process');
const file = require('../src/randomNumber');

describe('Generates a random number', () => {

  it('should return 10', () => {

    file.randomNumber = jest
      .fn()
      .mockReturnValue(10);

    file.randomNumber();
    expect(file.randomNumber).toBeCalled();
    expect(file.randomNumber).toBeCalledTimes(1);

    expect(file.randomNumber()).toBe(10);
    expect(file.randomNumber).toBeCalledTimes(2);

  });

  it('should slkfsjdklfjdklfjslk', () => {

    file.randomNumber = jest
      .fn()
      .mockReturnValue(10);

    file.randomNumber.mockImplementationOnce((a, b) => a / b);

    expect(file.randomNumber(10, 2)).toBe(5);
    expect(file.randomNumber).toHaveBeenCalled();
    expect(file.randomNumber).toHaveBeenCalledTimes(1);
    expect(file.randomNumber).toHaveBeenCalledWith(10, 2);

    expect(file.randomNumber()).toBe(10);
    expect(file.randomNumber).toHaveBeenCalledTimes(2);

  });

});