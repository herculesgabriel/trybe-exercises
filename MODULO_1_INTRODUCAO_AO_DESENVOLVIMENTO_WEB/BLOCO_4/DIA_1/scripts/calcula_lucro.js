let texto_resultado = '';

let valorCusto = 4.75;
let valorVenda = 8.95;

if (valorCusto <= 0 || valorVenda <= 0) {
  console.log('Por favor, digite um valor maior que zero');
} else {
  let imposto = (valorCusto * 20) / 100;
  let custoTotal = valorCusto + imposto;
  let lucro = valorVenda - custoTotal;

  let lucroMilProdutos = lucro * 1000;

  console.log(lucroMilProdutos);
}
