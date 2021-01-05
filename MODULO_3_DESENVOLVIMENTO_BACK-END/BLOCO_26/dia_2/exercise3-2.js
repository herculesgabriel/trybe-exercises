const readline = require('readline');
const fs = require('fs');

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (error, data) => {
      if (error) {
        return reject(`Erro ao ler o arquivo: ${error}`);
      }
      resolve(data);
    });
  });
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Informe o arquivo que deseja ler:\n\n', (file) => {
  readFilePromise(file)
    .then((data) => {
      console.log(`Tamanho do arquivo: ${data.byteLength} bytes`);
      console.log('---> Conteúdo do arquivo:');
      console.log(data.toString('utf8'));
      console.log('---> Fim da leitura');
    })
    .catch(error => console.log(error));

  rl.close();
});
