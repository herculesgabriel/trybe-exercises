const express = require('express');
const multer = require('multer');

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

server.post('/images', upload.single('image'), (req, res) => {
  res.status(200).send(req.file?.filename);
});

server.listen(3333, () => console.log('Server started at port 3333'));
