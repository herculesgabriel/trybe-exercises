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

// Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTime = (obj, key, value) => obj = obj[key] = value;

addTime(lesson2, 'turno', 'manhã');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const getKeys = (obj) => Object.keys(obj);

// console.log(getKeys(lesson1))

// Crie uma função para mostrar o tamanho de um objeto.
const getSize = (obj) => Object.keys(obj).length

// console.log(getSize(lesson1))

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const getValues = (obj) => Object.values(obj)

// console.log(getValues(lesson1))

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
// const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })

// console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// const getTotalStudents = (objArr) => objArr.reduce((acc, { numeroEstudantes }) => acc + numeroEstudantes, 0)
const getTotalStudents = (objArr) => objArr

// console.log('---')
// console.log(getTotalStudents(allLessons))
// console.log('---')

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
// const getValueByNumber = (obj, pos) =>

// console.log(getValueByNumber(lesson1, 0));

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