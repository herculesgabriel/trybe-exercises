const AuthorModel = require('../models/AuthorModel');
const { validParams } = require('./utils');

const listAuthors = async (request, response) => {
  const authors = await AuthorModel.getAll();

  response
    .status(200)
    .render('authors/index', { authors });
};

const showAuthor = async (request, response) => {
  const { id } = request.params;

  const author = await AuthorModel.findById(id);

  if (!author) {
    return response
      .status(404)
      .render('404');
  }

  response
    .status(200)
    .render('authors/show', { author });
};

const newAuthor = (request, response) => {
  response.status(200).render('authors/new', { message: null });
};

const createAuthor = async (request, response) => {
  const { first_name, middle_name, last_name } = request.body;

  const valid = validParams(first_name, middle_name, last_name);

  if (!valid) {
    return response
      .status(400)
      .render('authors/new', { message: 'Dados inválidos' });
  }

  try {
    await AuthorModel.create({ first_name, middle_name, last_name });

    response
      .redirect('authors');
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .render('error');
  }
};

module.exports = {
  listAuthors,
  showAuthor,
  newAuthor,
  createAuthor,
};
