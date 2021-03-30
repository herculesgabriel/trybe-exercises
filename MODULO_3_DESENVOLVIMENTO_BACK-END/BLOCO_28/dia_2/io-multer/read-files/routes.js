const express = require('express');
const fs = require('fs/promises');

const upload = require('./multer');

const routes = express.Router();

routes.get('/ping', (req, res) => {
  res.send('pong');
});

routes.get('/files/:filename', async (req, res) => {
  const { filename } = req.params;

  if (!filename) {
    return res
      .status(400)
      .send('É necessário informar o nome do arquivo!');
  }

  try {
    const file = await fs.readFile(`./uploads/${filename}`, 'ascii');
    const jsonFile = JSON.stringify(file);

    res.status(200).send(jsonFile);
  } catch (error) {
    return res
      .status(500)
      .send(error);
  }
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
