const { ObjectId } = require('mongodb');
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

// trata os erros

const errorHandler = (err) => {
  console.log(err);
  process.exit(1);
};

// busca todos os autores do banco

const getAll = async () => connection()
  .then(db => db.collection('authors').find().toArray())
  .then(authors => authors.map(({
    _id, firstName, middleName, lastName
  }) => getNewAuthor({
    id: _id,
    firstName,
    middleName,
    lastName,
  })))
  .catch(errorHandler);

/**
 * Busca um autor específico, a partir do seu ID
 * @param {string} id ID do autor a ser recuperado
 */

const findById = async (id) => {
  const authorData = await connection()
    .then(db => db.collection('authors').findOne(ObjectId(id)))
    .catch(errorHandler);

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

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

const create = async (firstName, middleName, lastName) => connection()
  .then(db => db.collection('authors').insertOne({ firstName, middleName, lastName }))
  .then(res => getNewAuthor({ id: res.insertedId, firstName, middleName, lastName }));

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
