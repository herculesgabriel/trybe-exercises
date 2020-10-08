const { obj1, obj2, obj3 } = require('../src/objectComparison');

describe('compares objects', () => {

  it('should be equal to each other', () => {
    expect(obj1).toEqual(obj3);
  });

  it('should be different from each other', () => {
    expect(obj1).not.toEqual(obj2);
  });

});
