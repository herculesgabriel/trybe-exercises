const os = require('os');

const platform = os.platform();
const release = os.release();
const version = os.version();
const cpus = os.cpus();
const arch = os.arch();
const totalmem = os.totalmem();
const freemem = os.freemem();

console.log(`Platform: ${platform}`);
console.log(`Release: ${release}`);
console.log(`Version: ${version}`);
console.log(`Arch: ${arch}`);
console.log(`CPU: ${cpus[0].model} x ${cpus.length}`);
console.log(`Total memory: ${totalmem / 1024 / 1024 / 1024}GB`);

console.log(`Process ID: ${process.pid}`);

setInterval(() => {
  const totalMemory = os.totalmem() / 1024 / 1024;
  const freeMemory = os.freemem() / 1024 / 1024;

  const usedMemory = (totalMemory - freeMemory).toFixed(2);

  console.log(`Uso de memória: ${usedMemory}/${totalMemory}MB`);
}, 1000);
