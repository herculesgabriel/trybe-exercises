const express = require('express');

const users = [
  {
    id: 2,
    user: 'antonio',
    comments: ["Hoje o dia está maneiro!", "Agora não está muito"],
  },
  {
    id: 3,
    user: "rodrigo",
    comments: ["To aqui também", "Agora não tô"],
  },
];

const app = express();

app.get('/comments', (req, res) => {
  const { filter } = req.query;

  if (filter) {
    const searchPattern = new RegExp(filter, 'i');

    const filteredComments = users.reduce((acc, user) => {
      const comments = user.comments.filter(comment => comment.match(searchPattern));
      return [...acc, ...comments];
    }, []);

    return res.status(200).send(filteredComments);
  }

  const allComments = users.reduce((acc, { comments }) => [...acc, ...comments], []);

  res.status(200).send(allComments);
});

app.listen(3000, () => console.log('Started server at port 3000'));
