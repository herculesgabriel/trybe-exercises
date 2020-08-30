let arrayDeNumeros = [];
let numerosDivididos = [];

for (let contador = 1; contador <= 25; contador++) {
  let numeroParaDividir = 0;
  arrayDeNumeros.push(contador);
  numeroParaDividir = arrayDeNumeros[contador - 1];
  numerosDivididos.push(numeroParaDividir / 2);
}

console.log('arrayDeNumeros: ' + arrayDeNumeros);
console.log('numerosDivididos: ' + numerosDivididos);