
const assert = require('assert');

const alunos = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const notas = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function studentAverage() {

  const average = alunos.map((student, index) => {
    const sum = notas[index].reduce((acc, num) => {
      return acc + num;
    }, 0);
    return (sum / notas[index].length);
  });
  return alunos.map((student, index) => {
    return { name: student, average: average[index] }
  });
}

assert.deepStrictEqual(studentAverage(), expected);
