const API = require('../src/dogPictures');

describe('testando a requisição', () => {
  const API_URL = jest.spyOn(API, 'fetchURL');

  afterEach(API_URL.mockReset);

  it('should check if it get the right message when resolved', () => {
    API_URL.mockResolvedValue('request success');

    API_URL();
    
    expect(API_URL).toHaveBeenCalledTimes(1);
    expect(API_URL()).resolves.toBe('request success');
    expect(API_URL).toHaveBeenCalledTimes(2);
  });

  it('should check if it get the right message when rejected', () => {
    API_URL.mockRejectedValue('request failed');

    expect(API_URL).toHaveBeenCalledTimes(0);

    expect(API_URL()).rejects.toMatch('request failed');
    expect(API_URL).toHaveBeenCalledTimes(1);
  });

});
