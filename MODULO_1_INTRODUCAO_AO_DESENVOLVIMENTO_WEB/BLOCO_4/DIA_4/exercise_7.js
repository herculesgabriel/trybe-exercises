const valueTest = [2, 3, 6, 7, 10, 1];

function whichIndexIsGreater(array) {
  let greaterValue = array[0];
  let greaterIndex = 0;  

  for (let index in array) {
    if (array[index] > greaterValue) {
      console.log(`${array[index]} é maior que ${greaterValue}`);
      greaterValue = array[index];
      greaterIndex = index;
    }
  }
  return greaterIndex;
}
