const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();

const JPEG_FILE = fs.createReadStream('./images/jpeg-example.jpg');
const PNG_FILE = fs.createReadStream('./images/png-example.png');

form.append('image', JPEG_FILE);
// form.append('image', PNG_FILE);

const formHeaders = form.getHeaders();

axios.post('http://localhost:3333/images', form, {
  headers: {
    ...formHeaders,
  },
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
