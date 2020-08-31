let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantidadeItems = numbers.length;
let somaItems = 0;

for (let index = 0; index < numbers.length; index += 1) {
  somaItems += numbers[index];
}

let mediaAritmetica = somaItems / quantidadeItems;

if (mediaAritmetica > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}