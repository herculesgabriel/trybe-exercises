let n = 5;
let quantidadeAsteriscos = 1;
let positicaoInicial = Math.ceil(n / 2);

for (let index1 = 1; index1 <= n && positicaoInicial > 0; index1 += 1) {
  let asteriscos = '';
  let espacos = '';

  for (let index3 = 1; index3 < positicaoInicial; index3 += 1) {
    espacos += ' ';
  }

  for (let index2 = 1; index2 <= quantidadeAsteriscos; index2 += 1) {
    asteriscos += '*';
  }

  quantidadeAsteriscos += 2;
  positicaoInicial -= 1;

  console.log(espacos + asteriscos);
}
