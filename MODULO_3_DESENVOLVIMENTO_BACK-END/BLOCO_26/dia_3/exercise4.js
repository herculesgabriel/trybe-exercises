const fs = require('fs');

const startTimeCount = Date.now();

fs.readdir('./', (err, files) => {
  if (err) return console.log(`Erro ao ler diretório: ${err}`);

  console.log(`O diretório especificado contém ${files.length} arquivos`);

  const fileSizes = [];

  const calculateSize = () => {
    if (fileSizes.length === files.length) {
      const totalFileSize = fileSizes.reduce((acc, size) => acc + size, 0);
      const totalTime = Date.now() - startTimeCount;

      console.log(`O tamanho total dos arquivos é de ${totalFileSize} bytes`);
      console.log(`O tempo total de execução foi de ${totalTime} milissegundos`);
    }
  };

  files.forEach((file) => {
    fs.readFile(file, (err, data) => {
      fileSizes.push(data.byteLength);
      calculateSize();
    });
  });
});
