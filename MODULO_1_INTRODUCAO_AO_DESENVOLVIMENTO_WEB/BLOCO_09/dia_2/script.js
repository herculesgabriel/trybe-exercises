const divideNumbers = (number) => [2, 3, 5, 10].map(num => number / num);

const sumArray = (array) => array.reduce((acc, num) => num + acc);

const connect = new Promise((resolve, rejected) => {
  // array, 50, random, **2
  const arr = [...Array(10).keys()].map(() => (Math.random() * 51) ** 2);
  const result = arr.reduce((acc, num) => acc + num);

  if (result < 8000) {
    return resolve(result);
  }
  rejected(result);
})
  .then(response => divideNumbers(response))
  .then(array => console.log(`Parabéns! O resultado foi ${sumArray(array)}`))
  .catch(response => console.log(`É mais de oito mil! Seu número foi ${response} : (`));
