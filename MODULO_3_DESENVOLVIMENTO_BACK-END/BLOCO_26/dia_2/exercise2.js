async function calculation(a, b, c) {
  if (
    typeof a !== 'number'
    || typeof b !== 'number'
    || typeof c !== 'number'
  ) return Promise.reject('Digite apenas números');

  const sum = a + b;
  const mul = sum * c;

  if (mul < 50) return Promise.reject('Valor muito baixo');

  return mul;
}

console.log(calculation(1, '8', 10));
