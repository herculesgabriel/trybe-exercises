const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAnimal = Animals.find(animal => animal.name === name);

      if (foundAnimal !== undefined) {
        return resolve(foundAnimal);
      }

      return reject('Nenhum animal com esse nome!');

    }, 100);
  });
};

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalsArray = Animals.filter(animal => animal.age === age);

      if (animalsArray.length !== 0) {
        return resolve(animalsArray);
      }

      return reject('Nenhum animal com essa idade!');

    }, 100);
  });
};

const getAnimal = (parameter, callback) => callback(parameter).then(animal => animal);

// ---------------------

describe('Testando promise - findAnimalByName', () => {

  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco', findAnimalByName).then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob', findAnimalByName).catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(2, findAnimalByAge).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(6, findAnimalByAge).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });

});