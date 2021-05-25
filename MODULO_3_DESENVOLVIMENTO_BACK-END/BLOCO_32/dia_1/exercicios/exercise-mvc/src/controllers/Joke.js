import JokeModel from '../models/Joke.js';

const listJokes = async (request, response) => {
  const { data: jokes } = await JokeModel.getJokes();

  response.status(200).render('jokes/view', { joke: jokes.joke });
};

export default { listJokes };
