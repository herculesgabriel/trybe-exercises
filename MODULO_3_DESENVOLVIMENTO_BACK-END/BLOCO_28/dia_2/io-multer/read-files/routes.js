const express = require('express');
const multer = require('multer');
const fs = require('fs/promises');

const routes = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

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
