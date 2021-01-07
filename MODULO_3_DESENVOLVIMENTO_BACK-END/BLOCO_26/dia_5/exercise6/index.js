const express = require('express');

let recipes = [
  {
    id: 12345,
    name: 'farofa de bacon',
    ingredientes: ['farofa', 'bacon'],
  },
  {
    id: 12346,
    name: 'ovo mexido',
    ingredientes: ['ovo'],
  },
];

const app = express();

app.put('/recipe/:id', (req, res) => {
  const { id } = req.params;

  const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (foundRecipe) {
    recipes = recipes.filter(recipe => recipe.id !== parseInt(id));
    return res.status(200).send(foundRecipe);
  }

  res.status(401).send({ message: 'recipe not found' });
});

app.listen(3000, () => console.log('Started server at port 3000'));
