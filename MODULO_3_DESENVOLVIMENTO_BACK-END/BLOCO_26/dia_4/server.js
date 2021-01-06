const express = require('express');

const port = 3000;

const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send({ message: 'Pong!' });
});

app.post('/hello', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) return res.status(200).send({ message: `Hello, ${name}!` });

  res.status(401).send({ message: 'Unauthorized' });
});

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  res.send({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.listen(port, () => console.log(`Server started at ${port} port`));
