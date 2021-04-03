const express = require('express');

const app = express();

const { PORT = 3000, PM2_PUBLIC_KEY = '' } = process.env;

app.get('/', (request, response) => response
  .status(200)
  .json({ message: `That's my public key: ${PM2_PUBLIC_KEY}` })
);

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
