const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTime = (obj, key, value) => obj = obj[key] = value;

addTime(lesson2, 'turno', 'manhã');

const getKeys = (obj) => Object.keys(obj);

const getSize = (obj) => Object.keys(obj).length;

const getValues = (obj) => Object.values(obj);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const getTotalStudents = (allLessons) => {
  let result = 0;
  for (const lesson in allLessons)
    result += allLessons[lesson]['numeroEstudantes'];
  return result
}

const getValueByNumber = (obj, pos) => {
  const keys = getKeys(obj);
  for (const key in keys)
    if (key == pos) return (obj[keys[key]])
}

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
// console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
const verifyPair = (obj, key, value) => {
  return Object.entries(obj).some((arr) => (arr[0] === key && arr[1] === value))
}

// console.log(verifyPair(lesson3, 'turno', 'noite'))
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// console.log('')
const getStudentsWhoWatched = (obj) => {
  let total = 0;
  for (const key in obj)
    if (obj[key]['materia'] === 'Matemática')
      total += obj[key]['numeroEstudantes'];

  return total;
}

// console.log(getStudentsWhoWatched(allLessons))

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

/*
{
  lesson1: {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã'
  },
  lesson2: {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno: 'manhã'
  },
  lesson3: {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite'
  }
}
*/