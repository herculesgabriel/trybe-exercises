const express = require('express');

const BookController = require('./controllers/book');

const routes = express.Router();

const bookController = BookController();

routes.route('/books')
  .get(bookController.index)
  .post(bookController.create);

routes.route('/books/:id')
  .get(bookController.show)
  .put(bookController.update)
  .delete(bookController.destroy);

routes.route('/books/authors/:author')
  .get(bookController.show);

module.exports = routes;
