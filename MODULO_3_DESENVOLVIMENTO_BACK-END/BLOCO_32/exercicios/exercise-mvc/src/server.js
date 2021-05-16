import express from 'express';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

import { routes } from './routes.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesPath = resolve(__dirname, '..', 'public', 'images');
const viewsPath = resolve(__dirname, 'views');

const app = express();

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(imagesPath));

// app.get('/', async (request, response) => {
//   response.status(200).render('index');
// });

app.use(routes);

app.listen(3000, () => {
  console.log('🚀 Server started at port 3000');
});
