const readline = require('readline');
const fs = require('fs');

const printFile = (file) => {
  console.log('\n');
  console.log('-----> Início da leitura:');
  console.log(file.toString('utf8'));
  console.log('-----> Fim da leitura');
  console.log('\n');
};

const getFile = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Digite o caminho para o arquivo que deseja ler:\n\n', (filePath) => {
    fs.readFile(filePath, (error, file) => {
      if (error) {
        rl.close();
        return console.log(`O arquivo informado é inválido: ${error}`);
      }
      printFile(file);

      rl.question('\nDigite a palavra que deseja substituir:\n\n', (word) => {
        rl.question('\nDigite a nova palavra:\n\n', (newWord) => {
          const text = file.toString('utf8');
          const newText = text.replace(new RegExp(word, 'g'), newWord);
          printFile(newText);

          rl.question('\nDigite o caminho onde deseja salvar o arquivo:\n\n', (newPath) => {
            fs.readFile(newPath, (error) => {
              if (!error) {
                console.log('\n\narquivo existe\n\n')
                rl.question('Deseja sobrescrever o arquivo? (s/n): ', (answer) => {
                  if (answer !== 's') return rl.close();

                  fs.writeFile(newPath, newText, (error) => {
                    if (error) {
                      console.log(`Erro ao salvar o arquivo: ${error}`);
                      rl.close();
                    }
                    console.log('Arquivo salvo com sucesso!');
                    rl.close();
                  });
                });
                return;
              }
              console.log('\n\narquivo não existe\n\n')

              fs.writeFile(newPath, newText, (error) => {
                if (error) {
                  console.log(`Erro ao salvar o arquivo: ${error}`);
                  rl.close();
                }
                console.log('Arquivo salvo com sucesso!');
                rl.close();
              });
            });
          });
        });
      });
    });
  });
};

getFile();
