require('dotenv').config();
const express = require('express');
const routes = require('./routes');
// const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
