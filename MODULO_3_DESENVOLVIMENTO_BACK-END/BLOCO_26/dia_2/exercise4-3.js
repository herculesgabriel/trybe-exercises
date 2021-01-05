const readline = require('readline');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const printFile = (file) => {
  console.log('\n');
  console.log('-----> Início da leitura:');
  console.log(file.toString('utf8'));
  console.log('-----> Fim da leitura');
  console.log('\n');
};

const question = async (message) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question(message, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
};

const start = async () => {
  const filePath = await question('Digite o caminho para o arquivo que deseja ler:\n\n');

  try {
    const file = await readFile(filePath);
    printFile(file);

    const oldWord = await question('\nDigite a palavra que deseja substituir:\n\n');
    const newWord = await question('\nDigite a nova palavra:\n\n');

    const text = file.toString('utf8');
    const newText = text.replace(new RegExp(oldWord, 'g'), newWord);
    printFile(newText);

    const newPath = await question('\nDigite o caminho onde deseja salvar o arquivo:\n\n');

    try {
      await readFile(newPath);
      const answer = await question('Deseja sobrescrever o arquivo? (s/n): ');

      if (answer !== 's') return console.log('OK, cancelado.');

      await writeFile(newPath, newText);

      return console.log('Arquivo salvo com sucesso!');
    } catch (err) {
      await writeFile(newPath, newText);
      console.log('Arquivo salvo com sucesso!');
    }

  } catch (err) {
    return console.log(`Erro ao ler o arquivo: ${err}`);
  }
};

start();
