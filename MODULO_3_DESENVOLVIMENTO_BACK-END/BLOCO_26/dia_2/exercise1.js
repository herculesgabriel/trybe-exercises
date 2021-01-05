function calculation(a, b, c) {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== 'number'
      || typeof b !== 'number'
      || typeof c !== 'number'
    ) return reject('Digite apenas números');

    const sum = a + b;
    const mul = sum * c;

    if (mul < 50) return reject('Valor muito baixo');

    resolve(mul);
  });
}

calculation(3, 2, '5')
  .then(result => console.info(result))
  .catch(error => console.error(error))