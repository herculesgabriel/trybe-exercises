function whichIsGreaterTwo(a, b) {
  let result = '';

  if (a == b) {
    result = 'É preciso digitar valores diferentes!';
  } else if (a > b) {
    result = a;
  } else {
    result = b;
  }

  return result;
}
