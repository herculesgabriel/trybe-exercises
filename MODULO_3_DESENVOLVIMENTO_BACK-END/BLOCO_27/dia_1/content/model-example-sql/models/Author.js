const connection = require('./connection');

// cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter(name => name)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// serializa o nome dos campos de 'snake_case' para 'camelCase'

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

// busca todos os autores do banco

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return authors.map(serialize).map(getNewAuthor);
};

/**
 * Busca um autor específico, a partir do seu ID
 * @param {string} id ID do autor a ser recuperado
 */

const findById = async (id) => {
  const [authorData] = await connection.execute(
    'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?',
    [id]
  );

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

// verifica se as informações necessárias para criação de um autor estão corretas

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof firstName !== 'string') return false;

  return true;
};

// cria um novo autor no banco de dados

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName || null, lastName],
);

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
