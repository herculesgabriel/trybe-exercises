const valueTest = 'MMXVIII';

function whichNumberIsThis(romanNumber) {
  let table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000
  };
  
  // fix first number being less than second one
  let numbersArray = [];
  let total = 0;

  for (let character in romanNumber) {
    numbersArray[character] = table[romanNumber[character]];
  }

  for (let index in numbersArray) {

    if (numbersArray[index] < numbersArray[index + 1]) {
      numbersArray[index + 1] = numbersArray[index + 1] - numbersArray[index];
    } else {
      total += numbersArray[index];
    }
  }

  return total;
}
