const { Book } = require('../models');
const { sortBookByTitle, sortBooksByCreationDate } = require('../utils');

function BookController() {
  const index = async (request, response) => {
    const {
      sort_by_title: sortByTitle,
      sort_by_creation_date: sortByCreationDate,
    } = request.query;

    try {
      let books = await Book.findAll();

      if (sortByTitle && !sortByCreationDate) {
        books = sortBookByTitle(books, sortByTitle);
      }

      if (sortByCreationDate && !sortByTitle) {
        books = sortBooksByCreationDate(books, sortByCreationDate);
      }

      response
        .status(200)
        .json({ books });
    } catch (error) {
      response
        .status(500)
        .json({ message: 'error', error });
    }
  };

  const show = async (request, response) => {
    const { id, author } = request.params;

    if (id) {
      try {
        const book = await Book.findByPk(id);

        if (!book) {
          return response
            .status(200)
            .json({ message: 'no book found' });
        }

        return response
          .status(200)
          .json({ book });
      } catch (error) {
        console.error(error);
        return response
          .status(500)
          .json({ message: 'internal error' });
      }
    }

    try {
      const books = await Book.findAll({ where: { author } });

      response
        .status(200)
        .json({ books });
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .json({ message: 'internal error' });
    }
  };

  const create = async (request, response) => {
    const { title, author, pageQuantity } = request.body;

    try {
      const book = await Book.create({ title, author, pageQuantity });

      response
        .status(200)
        .json({ book });
    } catch (error) {
      console.error(error);

      response
        .status(500)
        .json({ message: 'internal error' });
    }
  };

  const update = async (request, response) => {
    const { id } = request.params;
    const { title, author, pageQuantity } = request.body;

    try {
      const book = await Book.update({ title, author, pageQuantity }, {
        where: { id },
      });

      if (!book) {
        return response
          .status(200)
          .json({ message: 'no book found' });
      }

      response
        .status(200)
        .json({ book });
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .json({ message: 'internal error' });
    }
  };

  const destroy = async (request, response) => {
    const { id } = request.params;

    try {
      const book = await Book.destroy({
        where: { id },
      });

      response
        .status(200)
        .json({ book });
    } catch (error) {
      console.error(error);

      response
        .status(500)
        .json({ message: 'internal error' });
    }
  };

  return {
    index,
    show,
    create,
    update,
    destroy,
  };
}

module.exports = BookController;
