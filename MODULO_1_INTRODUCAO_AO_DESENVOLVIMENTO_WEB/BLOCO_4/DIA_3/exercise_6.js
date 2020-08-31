let dividendo = 7;
let isPrime = true;

for (let divisor = 2; divisor < dividendo; divisor += 1) {
  if (dividendo % divisor === 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime)