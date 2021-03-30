const express = require('express');
const multer = require('multer');

const app = express();

app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

// const upload = multer({ dest: 'uploads' });
const upload = multer({ storage });

app.get('/ping', (request, response) => {
  response.send('pong');
});

app.post('/files/upload', upload.single('file'), (req, res) => {
  res.status(200).send();
});

module.exports = app;
