const result = document.getElementById('jokeContainer');
const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fetchJoke = async (url, specs) => {
  if (url) {
    const joke = await fetch(url, specs)
      .then(response => response.json())
      .then(data => data);
    return result.textContent = joke.joke;
  }

  throw new Error('Indisponível no momento :(');
};

window.onload = () => fetchJoke(API_URL, myObject);
