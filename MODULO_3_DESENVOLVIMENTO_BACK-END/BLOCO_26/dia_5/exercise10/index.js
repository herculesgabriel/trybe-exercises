const express = require('express');

const recipes = [
  {
    id: 12345,
    nome: 'farofa de bacon',
    ingredientes: ['farofa', 'bacon'],
  },
  {
    id: 12346,
    nome: 'ovo mexido',
    ingredientes: ['ovo'],
  },
];

const app = express();

app.use(express.json());

app.put('/recipe/:id/ingredients', (req, res) => {
  const { id } = req.params;
  const { remove, insert } = req.body;

  const recipeFoundIndex = recipes.findIndex(recipe => recipe.id === parseInt(id));
  if (recipeFoundIndex === -1)
    return res.status(401).send({ message: 'recipe not found' });

  if (insert) {
    recipes[recipeFoundIndex].ingredientes = [
      ...recipes[recipeFoundIndex].ingredientes,
      ...insert
    ];
  }

  if (remove) {
    remove.forEach((itemToRemove) => {
      const ingredientToRemoveIndex = recipes[recipeFoundIndex].ingredientes.findIndex(
        ingrediente => ingrediente === itemToRemove
      );
      if (ingredientToRemoveIndex !== -1)
        recipes[recipeFoundIndex].ingredientes.splice(ingredientToRemoveIndex, 1);
    });
  }

  res.status(200).send({ message: 'OK', recipe: recipes[recipeFoundIndex] });
});

app.listen(3000, () => console.log('Started server at port 3000'));
