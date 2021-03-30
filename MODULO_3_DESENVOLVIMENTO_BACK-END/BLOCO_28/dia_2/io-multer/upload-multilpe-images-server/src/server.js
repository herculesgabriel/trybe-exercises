const express = require('express');
const multer = require('multer');
const fs = require('fs/promises');
const path = require('path');

const server = express();

server.use(express.json());

server.use('/uploads', express.static('src/uploads'));

const storage = multer.diskStorage({
  destination: 'src/uploads',
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

server.get('/', (req, res) => res.status(200).send('OK'));

server.get('/images', upload.array('images'), async (req, res) => {
  const baseURL = 'http://localhost:3333/uploads/';
  const fileNames = await fs.readdir(path.resolve(__dirname, 'uploads'));
  const filePaths = fileNames.map((file) => `${baseURL}${file}`);

  res.status(200).json({ files: filePaths });
});

server.post('/images', upload.array('images'), (req, res) => {
  const filenames = req.files.map(({ filename }) => filename);

  res.status(200).json({ filenames });
});

server.listen(3333, () => console.log('Server started at port 3333'));
