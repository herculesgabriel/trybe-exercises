const express = require('express');
const fs = require('fs/promises');

const upload = require('./multer');

const routes = express.Router();

routes.get('/ping', (req, res) => {
  res.send('pong');
});

routes.get('/files/text/:filename', async (req, res) => {
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

routes.post('/files/text/upload', upload.single('file'), (req, res) => {
  res.status(200).send(req.file?.filename);
});

routes.post('/files/text', async (req, res) => {
  const { text } = req.body;

  const filename = `${Date.now()}.txt`;

  await fs.writeFile(`./uploads/${filename}`, text, { flag: 'wx' });

  res.status(200).send(filename);
});

module.exports = routes;
