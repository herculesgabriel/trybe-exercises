let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplied = [];
let index = 0;

for (let i = 1; i <= numbers.length; i += 1) {

  if (numbers[i] == undefined) {
    numbersMultiplied.push(numbers[index] * 2);
  } else {
    numbersMultiplied.push(numbers[index] * numbers[i]);
  }

  index += 1;
}

console.log(numbersMultiplied);