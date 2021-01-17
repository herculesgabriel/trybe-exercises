const connection = require('./connection');

const isValid = (id, firstName, lastName, email, password) => {
  if (!id || typeof id !== 'number') return false;
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (!email || typeof email !== 'string') return false;
  if (!password || typeof password !== 'string' || password.length < 6) return false;

  return true;
};

const errorHandler = (err) => {
  console.log(err);
  process.exit(1);
};

const getAllUsers = () => connection().then(db => db.collection('users').find().toArray());

const getUser = async (id) => connection()
  .then(db => db.collection('users').findOne({ _id: Number(id) }))
  .catch(errorHandler);

const createUser = (id, firstName, lastName, email, password) => connection()
  .then(db => db.collection('users').insertOne({
    _id: id,
    firstName,
    lastName,
    email,
    password,
  }))
  .catch(errorHandler);

const editUser = async (id, newFirstName, newLastName, newEmail, newPassword) => {
  const userToEdit = await connection()
    .then(db => db.collection('users').findOne({ _id: Number(id) }));

  const {
    firstName: oldFirstName,
    lastName: oldLastName,
    email: oldEmail,
    password: oldPassword,
  } = userToEdit;

  connection()
    .then(db => db.collection('users').updateOne(
      { _id: Number(id) },
      {
        $set: {
          firstName: newFirstName || oldFirstName,
          lastName: newLastName || oldLastName,
          email: newEmail || oldEmail,
          password: newPassword || oldPassword,
        }
      }
    ))
    .catch(errorHandler);
};

const deleteUser = (id) => connection()
  .then(db => db.collection('users').deleteOne({ _id: Number(id) }))
  .catch(errorHandler);

module.exports = {
  isValid,
  createUser,
  getAllUsers,
  getUser,
  editUser,
  deleteUser,
};
