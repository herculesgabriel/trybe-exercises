const express = require('express');

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!",
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também",
  },
];

const app = express();

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;

  const foundPost = posts.find(post => post.id === parseInt(id));

  if (foundPost) return res.status(200).json(foundPost);

  res.status(401).send({ message: 'id not found' });
});

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

app.listen(3000, () => console.log('Started server at port 3000'));
