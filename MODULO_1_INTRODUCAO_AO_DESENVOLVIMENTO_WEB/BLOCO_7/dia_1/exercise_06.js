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

console.log(changeString('Hercules'));