const valueTest = 'LVII';

function whichNumberIsThis(romanNumber) {
  let table = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000
  };

  let numbersArray = [];
  //
  let firstTime = true;
  let total = 0;

  for (let character in romanNumber) {
    numbersArray.push(table[romanNumber[character]]);
    //
    if (firstTime) {
      total = table[romanNumber[character]];
      firstTime = false;
    } else if (table[romanNumber[character]] <= table[romanNumber[character - 1]]) {
      total += table[romanNumber[character]];
    } else if (table[romanNumber[character]] > table[romanNumber[character - 1]]) {
      // total -= 
    }
  }



  // se o número é igual => soma
  // se o próximo número é menor => soma
  // se o próximo número é maior => subtrai


  // romanNumber.split('').forEach((value, index, array) => {
  //   console.log(value, index, array)
  // });

}

whichNumberIsThis(valueTest)