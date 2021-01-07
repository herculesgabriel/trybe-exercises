module.exports = (req, res, next) => {
  const { operation, number1, number2 } = req.params;

  if (operation === 'subtração')
    return res.status(200).send({ result: number1 - number2 });

  next();
};
