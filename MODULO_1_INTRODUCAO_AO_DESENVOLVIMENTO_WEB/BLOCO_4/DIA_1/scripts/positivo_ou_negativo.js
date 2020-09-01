function positiveOrNegative(number) {
  let result = '';

  if (number == 0) {
    result = 'zero';
  } else if (number > 0) {
    result = 'positive';
  } else {
    result = 'negative';
  }

  return result;
}