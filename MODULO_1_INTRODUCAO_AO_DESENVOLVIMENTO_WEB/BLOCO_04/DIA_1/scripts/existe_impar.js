function isOdd(a, b, c) {
  let textResult = '';

  if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
    textResult = 'Um dos valores digitados é ímpar';
  } else {
    textResult = 'Nenhum dos valores digitados é ímpar';
  }

  return textResult;
}