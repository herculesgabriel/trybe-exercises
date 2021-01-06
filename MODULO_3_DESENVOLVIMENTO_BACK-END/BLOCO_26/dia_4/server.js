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

app.listen(port, () => console.log(`Server started at ${port} port`));
