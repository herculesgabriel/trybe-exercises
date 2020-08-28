let texto_resultado = '';

let valor = 75;

if (valor < 0 || valor > 100) {
  texto_resultado = 'Erro. Digite um número entre 0 e 100';
} else {
  if (valor >= 90) {
    texto_resultado = 'A';
  } else if (valor >= 80) {
    texto_resultado = 'B';
  } else if (valor >= 70) {
    texto_resultado = 'C';
  } else if (valor >= 60) {
    texto_resultado = 'D';
  } else if (valor >= 50) {
    texto_resultado = 'E';
  } else if (valor < 50) {
    texto_resultado = 'F';
  }

  console.log(texto_resultado);
}
