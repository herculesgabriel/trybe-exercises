const inquirer = require('inquirer');

function validateHeight(input) {
  const numberToValidate = Number(input);

  if (numberToValidate < 2) return true;
  return 'Error';
};

inquirer.prompt([
  {
    name: 'name',
    message: 'Antes de começarmos, me informe o seu nome:\n\n',
  },
  {
    name: 'weight',
    message: 'Por favor, me informe o seu peso em quilogramas:\n'
      + 'Exemplo: 76.5\n\n'
      + '-> ',
  },
  {
    name: 'height',
    message: 'Agora eu preciso da sua altura em metros:\n'
      + 'Exemplo: 1.64\n\n'
      + '-> ',
    validate: validateHeight,
  }
])
  .then(({ name, weight, height }) => {
    const imc = (weight / (height * height)).toFixed(2);

    console.log(`Olá, ${name}! Seja bem-vindo.\n\n`);

    if (imc < 18.5)
      console.log(`O seu IMC é ${imc}, logo você está abaixo do peso.`);
    if (imc >= 18.5 && imc < 25)
      console.log(`O seu IMC é ${imc}, logo você tem peso normal :)`);
    if (imc >= 25 && imc < 30)
      console.log(`O seu IMC é ${imc}, logo está acima do peso.`);
    if (imc >= 30 && imc < 35)
      console.log(`O seu IMC é ${imc}, logo você está com obesidade de grau I.`);
    if (imc >= 35 && imc < 40)
      console.log(`O seu IMC é ${imc}, logo você está com obesidade de grau II.`);
    if (imc >= 40)
      console.log(`O seu IMC é ${imc}, logo você está com obesidade de grau III.`);
  })
  .catch((error) => (error) && console.log(error));
