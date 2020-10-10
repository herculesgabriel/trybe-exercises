function whichIsGreaterThree(a, b, c) {
  let result = '';

  if (a == b && b == c) {
    result = 'É preciso digitar valores diferentes!';
  } else {
    if (a > b && a > c) {
      result = a;
    } else if (b > a && b > c) {
      result = b;
    } else {
      result = c;
    }
  }

  return result;

}
