let n = 5;

for (let index1 = 1; index1 <= n; index1 += 1) {
  let asteriscos = '';
  let espacos = '';

  for (let index2 = 0; index2 < index1; index2 += 1) {
    asteriscos += '*';
  }

  for (let index3 = 1; index3 <= n - index1; index3 += 1) {
    espacos += ' ';
  }

  console.log(espacos + asteriscos);

}