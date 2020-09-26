const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Java',
  'Linux'
]

const changeString = string => {
  const sentence = 'Tryber x aqui!';
  return sentence.replace('x', string);
};

const concatStrings = changeString => {
  skills.sort();
  let result = `${changeString} Minhas cinco principais habilidades são:`;

  for (const skill of skills) {
    result += `\n- ${skill}`
  }

  return result;
};

console.log(concatStrings(changeString('Hercules')));