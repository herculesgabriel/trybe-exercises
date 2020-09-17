// const statesList = document.getElementById('state');
const date = document.getElementById('date').value;
const buttonSubmit = document.getElementById('button-submit');

const states = [
  ['Acre', 'AC'],
  ['Alagoas', 'AL'],
  ['Amapá', 'AP'],
  ['Amazonas', 'AM'],
  ['Bahia', 'BA'],
  ['Ceará', 'CE'],
  ['Espírito Santo', 'ES'],
  ['Goiás', 'GO'],
  ['Maranhão', 'MA'],
  ['Mato Grosso', 'MT'],
  ['Mato Grosso do Sul', 'MS'],
  ['Minas Gerais', 'MG'],
  ['Pará', 'PA'],
  ['Paraíba', 'PB'],
  ['Paraná', 'PR'],
  ['Pernambuco', 'PE'],
  ['Piauí', 'PI'],
  ['Rio de Janeiro', 'RJ'],
  ['Rio Grande do Norte', 'RN'],
  ['Rio Grande do Sul', 'RS'],
  ['Rondônia', 'RO'],
  ['Roraima', 'RR'],
  ['Santa Catarina', 'SC'],
  ['São Paulo', 'SP'],
  ['Sergipe', 'SE'],
  ['Tocantins', 'TO'],
  ['Distrito Federal', 'DF'],
];

// function getStates() {
//   states.forEach((state) => {
//     const option = document.createElement('option');
//     option.setAttribute('value', state[1]);
//     option.textContent = state[0];
//     statesList.appendChild(option);
//   });
// }

function validateDate() {
  const day = date.substr(0, 2);
  const month = date.substr(3, 2);
  const year = date.substr(6, 4);

  const validDay = (day > 0 && day <= 31);
  const validMonth = (month > 0 && month <= 12);
  const validYear = (year >= 0);

  console.log(day)
  console.log(month)
  console.log(year)
  console.log(validDay)
  console.log(validMonth)
  console.log(validYear)

  return console.log(validDay && validMonth && validYear);
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  (validateDate()) ? console.log('ok') : console.log('mmm :(');
});
// getStates();
