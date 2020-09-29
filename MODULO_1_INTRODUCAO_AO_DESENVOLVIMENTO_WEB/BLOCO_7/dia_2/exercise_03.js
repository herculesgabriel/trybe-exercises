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

const verifyPair = (obj, key, value) => {
  return Object.entries(obj).some((arr) => (arr[0] === key && arr[1] === value))
}

const getStudentsWhoWatched = (obj) => {
  let total = 0;
  for (const key in obj)
    if (obj[key]['materia'] === 'Matemática')
      total += obj[key]['numeroEstudantes'];

  return total;
}

const reportTemplate = (string, ...keys) => {
  let text = string.slice();
  const result = [];
  return function (data) {
    for (const lesson in data) {
      keys.forEach((key, index) => {
        text[index] = text[index] + data[lesson][key];
      });

      result.push(text);
      text = string.slice();
    }
    return result.join('');
  }
}

const getReport = reportTemplate`- Professor(a): ${'professor'} - Turno da ${'turno'}
Aula de ${'materia'}: ${'numeroEstudantes'} estudantes\n`;
