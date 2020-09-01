let valueTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function whichNameIsBiggest(arrayNames) {
  let biggestName = arrayNames[0];

  for (let index in arrayNames) {
    if (arrayNames[index].length > biggestName.length) {
      biggestName = arrayNames[index];
    }
  }
  return biggestName;
}
