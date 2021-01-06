const fs = require('fs');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile('simpsons.json', (err, data) => {
    const file = data.toJSON();
    res.status(200).send({ simpsons: file.data });
  });
});

module.exports = router;
