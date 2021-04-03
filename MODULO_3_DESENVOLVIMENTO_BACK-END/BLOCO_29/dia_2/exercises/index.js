const express = require('express');

const app = express();

const { PORT, MESSAGE } = process.env;

app.get('/', (request, response) => {
  response
    .status(200)
    .json({ message: MESSAGE });
});

app.get('/error', (request, response) => {
  process.exit(1);
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
