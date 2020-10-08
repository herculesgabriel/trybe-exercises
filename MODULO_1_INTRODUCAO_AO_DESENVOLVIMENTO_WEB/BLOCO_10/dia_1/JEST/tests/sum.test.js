const sum = require('../src/sum');

describe('sum two numbers', () => {

  it('4 plus 5 equal to 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('0 plus 0 equal to 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should throw a error with string values', () => {
    expect(() => sum(4, '5')).toThrow();
  });

  it("the Error message should contain 'parameters must be numbers'", () => {
    expect(() => {
      sum(4, '5')
    }).toThrow('parameters must be numbers');
  });

});
