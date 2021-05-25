import { Router } from 'express';

import Joke from './controllers/Joke.js';

const routes = Router();

routes.get('/', async (request, response) => {
  response.status(200).render('index');
});

routes.get('/jokes', Joke.listJokes);

export { routes };
