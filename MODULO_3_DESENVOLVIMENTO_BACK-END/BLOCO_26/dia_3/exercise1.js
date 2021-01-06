const fs = require('fs');

console.time('read all files');

console.time('read file 1');
const textFile1 = fs.readFileSync('file1.txt');
console.timeEnd('read file 1');

console.time('read file 2');
const textFile2 = fs.readFileSync('file2.txt');
console.timeEnd('read file 2');

console.log(textFile1.byteLength);
console.log(textFile2.byteLength);

console.timeEnd('read all files');
