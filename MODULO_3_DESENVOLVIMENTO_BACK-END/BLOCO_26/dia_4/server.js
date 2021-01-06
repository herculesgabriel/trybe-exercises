const express = require('express');
const app = express();

const port = 3000;

app.get('/ping', (req, res) => {
  res.send({ message: 'Pong!' });
});

app.listen(port, () => console.log(`Server started at ${port} port`));
