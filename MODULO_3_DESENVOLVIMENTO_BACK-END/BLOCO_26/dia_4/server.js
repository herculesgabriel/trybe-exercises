const express = require('express');
const app = express();

const port = 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send({ message: 'Pong!' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  
  res.send({ name: `Hello, ${name}` });
});

app.listen(port, () => console.log(`Server started at ${port} port`));
