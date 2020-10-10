function isTriangle(a, b, c) {

  let result = '';

  if (a + b + c == 180) {
    result = 'Os ângulos correspondem aos de um triângulo.';
  } else {
    result = 'Os ângulos não correspondem aos de um triângulo.';
  }

  return result;

}
