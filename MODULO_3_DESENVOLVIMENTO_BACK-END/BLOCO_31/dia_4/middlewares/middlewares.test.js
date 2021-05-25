const middlewares = require('./middlewares.js');

describe('Tests all middlewares', () => {
  it('should call next function when passing valid token', () => {
    const token = '123456789-123_45';
    const req = { headers: { authorization: token } };
    const res = { status: jest.fn() };
    const next = jest.fn();

    middlewares.checkAuthToken(req, res, next);

    // expect(next).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});
