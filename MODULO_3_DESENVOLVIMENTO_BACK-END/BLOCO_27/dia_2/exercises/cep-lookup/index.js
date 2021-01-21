require('dotenv').config();
const express = require('express');
const Cep = require('./controllers/Cep');

const app = express();

app.get('/lookup', Cep.getCep);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
