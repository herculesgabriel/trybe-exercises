const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('Get a user by an id', () => {

  it('should have the id in the object users', () => {
    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });

  it('should have the id in the object users', () => {
    return expect(getUserName(5)).resolves.toBe('Paul');
  });

  it('should throw an error when the id does not exists', () => {
    return getUserName(7).catch((error) => {
      expect(error).toEqual({ error: 'User with 7 not found.' });
    });
  });

  it('should throw an error when the id does not exists', () => {
    return expect(getUserName(6)).rejects.toEqual({ error: 'User with 6 not found.' });
  });

});