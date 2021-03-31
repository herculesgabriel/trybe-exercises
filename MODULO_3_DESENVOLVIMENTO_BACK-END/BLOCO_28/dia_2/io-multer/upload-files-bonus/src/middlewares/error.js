module.exports = (error, req, res, next) => {
  if (error.message === '422') {
    return res
      .status(422)
      .json({ error: 'You need to provide either a filename and a file!' });
  }

  if (error.message === '409') {
    return res
      .status(422)
      .json({ error: 'Filename already exists!' });
  }

  return res
    .status(500)
    .json({ error });
}
