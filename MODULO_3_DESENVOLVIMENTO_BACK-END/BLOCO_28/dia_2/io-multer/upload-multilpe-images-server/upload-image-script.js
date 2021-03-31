const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const form = new FormData();

const JPEG_FILE = fs.createReadStream(path.resolve(__dirname, 'images', 'jpeg-example.jpg'));
const PNG_FILE = fs.createReadStream(path.resolve(__dirname, 'images', 'png-example.png'));

form.append('images', JPEG_FILE);
form.append('images', PNG_FILE);

const formHeaders = form.getHeaders();

axios.post('http://localhost:3333/images', form, {
  headers: {
    ...formHeaders,
  },
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
