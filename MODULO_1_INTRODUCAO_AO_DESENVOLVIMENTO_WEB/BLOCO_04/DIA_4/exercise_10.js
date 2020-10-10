let valueTest = [2, 3, 2, 5, 8, 2, 3];

function whichNumberRepeatTheMost(arrayNumbers) {

  let highestNumberRepeatedTimes = 0;
  let numberToCompareRepeatedTimes = 0;
  let highestNumber = 0;

  for (let number in arrayNumbers) {
    let numberToCompare = arrayNumbers[number];

    for (let index in arrayNumbers) {
      if (numberToCompare === arrayNumbers[index]) {
        numberToCompareRepeatedTimes += 1;
      }
    }
    if (numberToCompareRepeatedTimes > highestNumberRepeatedTimes) {
      highestNumberRepeatedTimes = numberToCompareRepeatedTimes;
      highestNumber = number;
    }
    numberToCompareRepeatedTimes = 0;
  }
  return arrayNumbers[highestNumber];
}
