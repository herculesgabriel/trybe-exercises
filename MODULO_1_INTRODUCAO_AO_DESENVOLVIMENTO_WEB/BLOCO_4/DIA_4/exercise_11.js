const valueTest = 5;

function sumAllNumbers(number) {
  let sum = 0;

  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}
