const { Router } = require('express');
const fs = require('fs/promises');
const path = require('path');

const upload = require('./middlewares/multer');

const routes = Router();

const uploadsDir = path.resolve(__dirname, 'uploads');

routes.get('/', (req, res) => res.status(200).send('OK'));

routes.get('/files', async (req, res) => {
  const files = await fs.readdir(uploadsDir);

  res
    .status(200)
    .json({ files });
});

routes.get('/files/:filename', async (req, res) => {
  const { filename } = req.params;

  const baseURL = 'http://localhost:3333/uploads/';
  const files = await fs.readdir(uploadsDir);
  const foundFile = files.some((file) => file === filename);

  if (!foundFile) {
    return res
      .status(400)
      .json({ error: "File doesn't exist!'" });
  }

  res
    .status(200)
    .json({ file: `${baseURL}${filename}` });
});

routes.post('/files', upload.single('file'), async (req, res, next) => {
  if (!req.file) {
    return next(new Error('422'));
  }

  res
    .status(200)
    .json({ status: 'Created' });
});

module.exports = routes;
