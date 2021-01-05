const fs = require('fs');
const util = require('util');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

const question = (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

async function start() {
  const answer = await question('Informe o arquivo que deseja ler:\n\n');

  try {
    const data = await readFile(answer);
    console.log(`Tamanho do arquivo: ${data.byteLength} bytes`);
    console.log('---> Conteúdo do arquivo:');
    console.log(data.toString('utf8'));
    console.log('---> Fim da leitura');
  } catch (error) {
    console.log(`Erro ao ler arquivo: ${error.message}`);
  }
};

start();
