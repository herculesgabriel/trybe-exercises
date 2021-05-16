import axios from 'axios';

const queryParams = 'blacklistFlags=nsfw,religious,political,racist,sexist&type=single';

const jokeApi = axios.create({
  baseURL: `https://sv443.net/jokeapi/v2/joke/Programming?${queryParams}`,
});

export { jokeApi };
