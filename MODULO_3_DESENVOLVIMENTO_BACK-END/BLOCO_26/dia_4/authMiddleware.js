module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  const tokenMinimumLength = 16;

  if (authorization && authorization.length === tokenMinimumLength) return next();

  res.status(401).send({ message: 'Token inválido!' });
};
