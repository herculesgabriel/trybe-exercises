import { jokeApi } from '../services/axios.js';

const getJokes = async () => {
  const joke = await jokeApi();
  return joke;
};

export default { getJokes };
