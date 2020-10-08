const users = [
  {
    login: 'knuth',
    firstName: 'Donald',
    lastName: 'Knuth',
    likes: ['C', 'Unix'],
  },
  {
    login: 'norvig',
    firstName: 'Peter',
    lastName: 'Norvig',
    likes: ['AI', 'Search', 'NASA', 'Mars'],
  },
  {
    login: 'mfowler',
    firstName: 'Martin',
    lastName: 'Fowler',
    likes: ['Design Patterns', 'Refactoring'],
  },
  {
    login: 'kent',
    firstName: 'Kent',
    lastName: 'Beck',
    likes: ['TDD', 'wikis', 'Design Patterns'],
  },
];

const lookup = (login, property) => {
  const foundUser = users.find(user => user.login === login);
  if (foundUser === undefined) throw new Error('Could not find user');

  const info = foundUser[property];
  if (info === undefined) throw new Error('Could not find property');

  return info;
};

module.exports = lookup;
