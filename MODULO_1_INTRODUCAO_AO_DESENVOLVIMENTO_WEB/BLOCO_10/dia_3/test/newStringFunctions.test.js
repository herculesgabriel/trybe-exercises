const file = require('../src/stringFunctions');

describe('Mocking functions', () => {
  it('should return a string lowered cased', () => {

    file.upperCase = jest
      .spyOn(file, 'upperCase')
      .mockImplementation(string => string.toLowerCase());

    expect(file.upperCase('HERCULES')).toBe('hercules');

    file.upperCase.mockRestore();

    expect(file.upperCase('hercules')).toBe('HERCULES');

  });
});
