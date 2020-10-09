const file = require('../src/stringFunctions');

describe('Mocking functions', () => {
  it('should return a string lowered cased', () => {

    file.upperCase = jest
      .fn()
      .mockImplementation(string => string.toLowerCase());

    expect(file.upperCase('HERCULES')).toBe('hercules');

    file.firstLetter = jest
      .fn()
      .mockImplementation(string => string.charAt(string.length - 1));

    expect(file.firstLetter('hercules')).toBe('s');

    file.concatStrings = jest
      .fn()
      .mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

    expect(file.concatStrings('her', 'cu', 'les')).toBe('hercules');

  });
});
