const myFizzBuzz = require('../src/myFizzBuzz');

describe('receives a number an return either a value or the number itself depending on wether the number is divided by 3, 5, both or any', () => {

  it("since 15 is divided by 3 and 5 should return 'fizzbuzz'", () => {
    const received = myFizzBuzz(15);
    const expected = 'fizzbuzz';
    expect(received).toBe(expected);
  });

  it("since 9 is divided by 3 it should return 'fizz'", () => {
    const received = myFizzBuzz(9);
    const expected = 'fizz';
    expect(received).toBe(expected);
  });

  it("since 10 is divided by 5 it should return 'buzz'", () => {
    const received = myFizzBuzz(10);
    const expected = 'buzz';
    expect(received).toBe(expected);
  });

  it("since 7 is divided neither by 5 nor 3 it should return 7", () => {
    const received = myFizzBuzz(7);
    const expected = 7;
    expect(received).toBe(expected);
  });

  it("since '15' is an string it should return false", () => {
    const received = myFizzBuzz('15');
    const expected = false;
    expect(received).toBe(expected);
  });

});
