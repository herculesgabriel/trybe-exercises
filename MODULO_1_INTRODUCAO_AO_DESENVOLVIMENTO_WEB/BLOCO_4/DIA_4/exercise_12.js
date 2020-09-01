const wordTest = 'Trybe';
const endingTest = 'be';

function verifyEnding(word, ending) {
  let isTheEnding = true;
  let stringWord = word.split('');
  let stringEnding = ending.split('');

  for (let index = 0; index < stringEnding.length; index += 1) {
    if (stringWord[stringWord.length - stringEnding.length + index] != stringEnding[index]) {
      isTheEnding = false;
    }
  }

  return isTheEnding;
}
