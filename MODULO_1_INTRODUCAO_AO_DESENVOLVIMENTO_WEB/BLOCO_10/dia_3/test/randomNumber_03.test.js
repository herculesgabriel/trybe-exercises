const file = require('../src/randomNumber');

describe('Generates a random number', () => {

  it('should return a multiplication', () => {



    file.randomNumber = jest
      .spyOn(file, 'randomNumber')
      .mockImplementation((a, b, c) => a * b * c);

    expect(file.randomNumber(2, 3, 4)).toBe(24);
    expect(file.randomNumber).toHaveBeenCalledWith(2, 3, 4);

  });

  it('should return a multiplication', () => {

    file.randomNumber.mockRestore();

    file.randomNumber = jest
      .fn()
    file.randomNumber.mockImplementation(num => num * 2);
    expect(file.randomNumber(5)).toBe(10);

  });

});
