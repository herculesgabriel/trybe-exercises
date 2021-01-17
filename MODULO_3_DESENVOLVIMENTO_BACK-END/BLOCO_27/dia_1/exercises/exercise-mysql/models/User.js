const connection = require('./connection');

const isValid = (firstName, lastName, email, password) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;

  return true;
};

const getAllUsers = () => connection.execute('SELECT * FROM users').then(data => data[0]);

const getUser = async (id) => {
  const [user] = await connection.execute(
    'SELECT first_name, last_name, email, password FROM users WHERE id = ?',
    [id],
  );

  return user[0];
};

const createUser = (firstName, lastName, email, password) => connection.execute(
  'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)',
  [firstName, lastName, email, password],
);

const editUser = async (id, newFirstName, newLastName, newEmail, newPassword) => {
  const [user] = await connection.execute(
    'SELECT first_name, last_name, email, password FROM users WHERE id = ?',
    [id],
  );

  const {
    first_name: oldFirstName,
    last_name: oldLastName,
    email: oldEmail,
    password: oldPassword,
  } = user[0];

  connection.execute(
    `UPDATE users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ?`,
    [
      newFirstName || oldFirstName,
      newLastName || oldLastName,
      newEmail || oldEmail,
      newPassword || oldPassword,
      id,
    ],
  );
};

const deleteUser = (id) => connection.execute(
  'DELETE FROM users WHERE id = ?',
  [id],
);

module.exports = {
  isValid,
  createUser,
  getAllUsers,
  getUser,
  editUser,
  deleteUser,
};
