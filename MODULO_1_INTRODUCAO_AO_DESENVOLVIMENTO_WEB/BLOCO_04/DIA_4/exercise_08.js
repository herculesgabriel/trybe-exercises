const valueTest = [2, 4, 6, 7, 10, 0, -3];

function whichIndexIsLess(array) {
  let lowestValue = array[0];
  let lowestIndex = 0;

  for (let index in array) {
    if (array[index] < lowestValue) {
      lowestValue = array[index];
      lowestIndex = index;
    }
  }
  return lowestIndex;
}
