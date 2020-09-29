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
  return result;
}

const getValueByNumber = (obj, pos) => getValues(obj)[pos];

const verifyPair = (obj, key, value) => obj[key] === value;

const getStudentsWhoWatched = (obj) => obj.numeroEstudantes;

const getInfo = (obj, name) => {
  const lessons = []
  let numberOfStudents = 0;
  for (const lesson in obj) {
    if (obj[lesson]['professor'] === name) {
      lessons.push(obj[lesson]['materia']);
      numberOfStudents += obj[lesson]['numeroEstudantes'];
    }
  }
  return { lessons, numberOfStudents }
}

const createReport = (data, name) => Object.assign({ professor: name }, getInfo(data, name));

// console.log(getKeys(lesson1))
// console.log(getSize(lesson1))
// console.log(getValues(lesson1))
// console.log(getTotalStudents(allLessons))
// console.log(getValueByNumber(lesson1, 0))
// console.log(verifyPair(lesson1, 'turno', 'manhã'))
// console.log(getStudentsWhoWatched(lesson1))
// console.log(createReport(allLessons, 'Maria Clara'))
