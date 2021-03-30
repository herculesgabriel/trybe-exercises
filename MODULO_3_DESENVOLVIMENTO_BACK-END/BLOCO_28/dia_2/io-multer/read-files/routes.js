const express = require('express');
const fs = require('fs/promises');

const upload = require('./multer');

const routes = express.Router();

routes.get('/ping', (req, res) => {
  res.send('pong');
});

routes.post('/files/upload', upload.single('file'), (req, res) => {
  res.status(200).send('OK');
});

routes.post('/files/text/upload', async (req, res) => {
  const { text } = req.body;

  await fs.writeFile(`./uploads/${Date.now()}.txt`, text, { flag: 'wx' });

  res.status(200).send('OK');
});

module.exports = routes;
