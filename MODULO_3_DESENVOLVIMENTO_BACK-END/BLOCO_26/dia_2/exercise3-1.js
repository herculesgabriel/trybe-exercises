const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Informe o arquivo que deseja ler:\n\n', (file) => {
  fs.readFile(file, (error, data) => {
    if (error) {
      return console.log(`Erro ao ler o arquivo: ${error}`)
    }

    console.log(`Tamanho do arquivo: ${data.byteLength} bytes`);
    console.log('---> Conteúdo do arquivo:');
    console.log(data.toString('utf8'));
    console.log('---> Fim da leitura');
  });

  rl.close();
});
