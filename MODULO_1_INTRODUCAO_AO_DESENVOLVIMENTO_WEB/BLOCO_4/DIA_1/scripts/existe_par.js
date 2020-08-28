let texto_resultado = '';

let valor_a = 5;
let valor_b = 2;
let valor_c = 3;

if (valor_a % 2 == 0 || valor_b % 2 == 0 || valor_c % 2 == 0) {
  texto_resultado = 'Um dos valores digitados é par';
} else {
  texto_resultado = 'Nenhum dos valores digitados é par';
}

console.log(texto_resultado);
