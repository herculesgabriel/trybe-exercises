const fs = require('fs');

const DISK_PATH = './disk';

class SecondaryMemory {
  load(value) {
    const disk = fs.readdirSync(DISK_PATH);
    const nextFilename = `${DISK_PATH}/cel${disk.length}`;

    fs.writeFileSync(nextFilename, value, {
      encoding: 'utf-8'
    });
  }

  get(index) {
    const fileName = `${DISK_PATH}/cel${index}`;
    const data = fs.readFileSync(fileName, 'utf-8');

    return Number(data) || 0;
  }

  clean() {
    fs.rmdirSync(DISK_PATH, { recursive: true });
    fs.mkdirSync(DISK_PATH);
  }
}

module.exports = SecondaryMemory;
