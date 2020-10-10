let n = 15;
let quantidadeAsteriscos = 1;
let positicaoInicial = Math.ceil(n / 2);
let something = 0;
let primeiraVez = true;

for (let index1 = 1; index1 <= n && positicaoInicial > 0; index1 += 1) {
  let asteriscoInicial = '';
  let asteriscoFinal = '';
  let espacosIniciais = '';
  let espacosMedios = '';

  for (let index3 = 1; index3 < positicaoInicial; index3 += 1) {
    espacosIniciais += ' ';
  }

  asteriscoInicial += '*';

  for (let index3 = 1; index3 < something; index3 += 1) {
    espacosMedios += ' ';
  }

  if (!primeiraVez) {
    asteriscoFinal += '*';
  }

  quantidadeAsteriscos += 2;
  positicaoInicial -= 1;
  something += 2;
  primeiraVez = false;

  let result = espacosIniciais + asteriscoInicial + espacosMedios + asteriscoFinal;

  if (result.length === n) {
    let espacosMedios = '';

    for (let index3 = 1; index3 < n - 1; index3 += 1) {
      espacosMedios += '*';
    }
    result = espacosIniciais + asteriscoInicial + espacosMedios + asteriscoFinal;
    console.log(result);

  } else {
    console.log(result);
  }
}
