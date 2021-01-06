const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Digite o caminho para o diretório: ', (path) => {
  const startTimeCount = Date.now();
  const strings = fs.readdirSync(path);

  const totalFileSize = strings.reduce((acc, file) => {
    const data = fs.readFileSync(file);
    return acc + data.byteLength;
  }, 0);

  const totalTime = Date.now() - startTimeCount;
  console.log(`O diretório especificado contém ${strings.length} arquivos`);
  console.log(`O tamanho total dos arquivos é de ${totalFileSize} bytes`);
  console.log(`O tempo total de execução foi de ${totalTime} milissegundos`);

  rl.close();
});
