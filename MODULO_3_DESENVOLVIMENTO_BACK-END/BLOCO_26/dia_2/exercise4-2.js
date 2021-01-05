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

const question = (message) => {
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

question('Digite o caminho para o arquivo que deseja ler:\n\n')
  .then(() => readFile(filePath))
  .then((file) => {
    printFile(file);

    question('\nDigite a palavra que deseja substituir:\n\n')
      .then((word) => {
        question('\nDigite a nova palavra:\n\n')
          .then((newWord) => {
            const text = file.toString('utf8');
            const newText = text.replace(new RegExp(word, 'g'), newWord);
            printFile(newText);

            question('\nDigite o caminho onde deseja salvar o arquivo:\n\n')
              .then((newPath) => {
                readFile(newPath)
                  .then(() => {
                    question('Deseja sobrescrever o arquivo? (s/n): ')
                      .then((answer) => {
                        if (answer !== 's') return console.log('OK, cancelado.');

                        writeFile(newPath, newText)
                          .then(() => console.log('Arquivo salvo com sucesso!'))
                          .catch((err) => console.log(`Erro ao salvar o arquivo: ${err}`));
                      })
                  })
                  .catch(() => {
                    writeFile(newPath, newText)
                      .then(() => console.log('Arquivo salvo com sucesso!'))
                      .catch((err) => console.log(`Erro ao salvar o arquivo: ${err}`));
                  });
              })
          });
      });
  })
  .catch((err) => console.log(`Erro ao ler o arquivo: ${err}`));
