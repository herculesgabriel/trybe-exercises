const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Informe o arquivo que deseja ler:\n\n', (file) => {
  fs.readFile(file, 'utf8', (error, data) => {
    if (error) {
      return console.log(`Erro ao ler o arquivo: ${error}`)
    }

    const stats = fs.statSync(file);
    const fileSizeInBytes = stats.size;
    
    console.log(`Tamanho do arquivo: ${fileSizeInBytes} bytes`)
    console.log('---> Conteúdo do arquivo:')
    console.log(data)
    console.log('---> Fim da leitura')
  });

  rl.close();
});
