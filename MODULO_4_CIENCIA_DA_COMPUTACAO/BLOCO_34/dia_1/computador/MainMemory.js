class MainMemory {
  constructor() {
    this.loadedMemory = [];
  }

  load(value) {
    this.loadedMemory.push(value.toString());
  }

  get(index) {
    const data = this.loadedMemory[index];

    return Number(data) || 0;
  }

  clean() {
    this.loadedMemory = [];
  }
}

module.exports = MainMemory;
