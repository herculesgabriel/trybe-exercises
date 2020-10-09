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

});
