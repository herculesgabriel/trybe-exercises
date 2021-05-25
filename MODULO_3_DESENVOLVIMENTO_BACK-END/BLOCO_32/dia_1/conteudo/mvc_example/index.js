const express = require('express');

const authorController = require('./controllers/AuthorController');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/authors', authorController.listAuthors);
app.get('/authors/new', authorController.newAuthor);
app.get('/authors/:id', authorController.showAuthor);

app.post('/authors', authorController.createAuthor);

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`🌱 Ouvindo a porta ${PORT}`);
});
