const fs = require('fs');

const startScript = Date.now();
let timeFile1;
let timeFile2;
let timeScript;

const printScriptEnd = () => {
  if (timeFile1 && timeFile2) {
    timeScript = Date.now() - startScript;
    console.log(`Tempo total: ${timeScript} milissegundos`);
  }
}

const startFile1 = Date.now();

fs.readFile('./file1.txt', (err, file1) => {
  timeFile1 = Date.now() - startFile1;
  console.log(`file1.txt: lidos ${file1.byteLength} bytes em ${timeFile1} milissegundos`);
  printScriptEnd();
});

const startFile2 = Date.now();

fs.readFile('./file2.txt', (err, file2) => {
  timeFile2 = Date.now() - startFile2;
  console.log(`file2.txt: lidos ${file2.byteLength} bytes em ${timeFile2} milissegundos`);
  printScriptEnd();
});