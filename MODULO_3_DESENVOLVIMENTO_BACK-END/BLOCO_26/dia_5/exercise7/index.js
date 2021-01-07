const express = require('express');

const recipes = [
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

app.use(express.json());

app.put('/recipe/:id', (req, res) => {
  const { id } = req.params;

  const foundRecipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (foundRecipe) {
    const { name, ingredientes } = req.body;
    const updatedRecipe = { id, name, ingredientes };
    const recipeIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));

    recipes.splice(recipeIndex, 1, updatedRecipe);

    return res.status(200).send({
      old: foundRecipe,
      new: updatedRecipe,
    });
  }

  res.status(401).send({ message: 'recipe not found' });
});

app.get('/recipes', (req, res) => res.status(200).send(recipes));

app.listen(3000, () => console.log('Started server at port 3000'));
