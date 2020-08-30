let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let quantidadeItems = numbers.length;
let somaItems = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
let mediaAritmetica = somaItems / quantidadeItems;

if (mediaAritmetica > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}