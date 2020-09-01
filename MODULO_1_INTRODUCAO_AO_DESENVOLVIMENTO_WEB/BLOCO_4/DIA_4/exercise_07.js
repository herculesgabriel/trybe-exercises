const valueTest = [2, 3, 6, 7, 10, 1];

function whichIndexIsHigher(array) {
  let higherValue = array[0];
  let higherIndex = 0;

  for (let index in array) {
    if (array[index] > higherValue) {
      higherValue = array[index];
      higherIndex = index;
    }
  }
  return higherIndex;
}
