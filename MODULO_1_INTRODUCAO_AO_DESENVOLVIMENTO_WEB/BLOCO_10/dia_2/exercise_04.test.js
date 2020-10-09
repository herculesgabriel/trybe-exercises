const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('gets a list of repositories names', () => {

  it('should have the mentioned repositories', () => {
    const url = 'https://api.github.com/users/tryber/repos';
  
    return getRepos(url).then(result => {
      const expected = ['covid-news-api', 'lifecycle-clock'];
  
      expect(result).toEqual(expect.arrayContaining(expected));
      expect(result).toContain('sd-00-block5-project-pixels-art');
    });
  
  });
  
  it('should not have the mentioned repositories ', () => {
    const url = 'https://api.github.com/users/tryber/repos';
  
    return getRepos(url).then(result => {
      const expected = ['sd-01-week4-5-project-todo-list', 'sd-01-week4-5-project-facebook'];
  
      expect(result).not.toEqual(expect.arrayContaining(expected));
      expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
    });
  
  });

});
