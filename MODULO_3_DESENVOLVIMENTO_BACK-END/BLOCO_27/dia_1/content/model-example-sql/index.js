const express = require('express');

const Author = require('./models/Author');

const app = express();

app.use(express.json());

app.get('/authors', async (req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  const isAuthorValid = Author.isValid(first_name, middle_name, last_name);
  if (!isAuthorValid) return res.status(400).json({ message: 'Invalid data' });

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Created successfully!' });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Ouvindo a porta ${port}`)
});
