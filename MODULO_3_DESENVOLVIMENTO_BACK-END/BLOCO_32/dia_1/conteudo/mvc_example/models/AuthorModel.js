const connection = require('../config/connection');
const { getNewAuthor, serialize, isValid } = require('./utils')

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );

  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const [author] = await connection.execute(
    'SELECT * FROM authors WHERE id = ?', [id],
  );

  if (!author.length) {
    return null;
  }

  return author.map(serialize).map(getNewAuthor)[0];
};

const create = async ({ first_name, middle_name, last_name }) => {
  await connection.execute(
    `INSERT INTO authors (first_name, middle_name, last_name) VALUES (?, ?, ?)`,
    [first_name, middle_name, last_name]
  );
};

module.exports = {
  getAll,
  findById,
  create,
};
