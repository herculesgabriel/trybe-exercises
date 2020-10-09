const fetch = require('node-fetch');
const API_URL = 'https://dog.ceo/api/breeds/image/rando';

function fetchURL() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => (data.status === 'success') ? Promise.resolve(data) : Promise.reject(data));
}

module.exports = { fetchURL };
