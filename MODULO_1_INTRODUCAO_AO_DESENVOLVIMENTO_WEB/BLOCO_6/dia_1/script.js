const statesList = document.getElementById('state');
const buttonSubmit = document.getElementById('button-submit');
const result = document.getElementById('result');

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

function getStates() {
  states.forEach((state) => {
    const option = document.createElement('option');
    option.setAttribute('value', state[1]);
    option.textContent = state[0];
    statesList.appendChild(option);
  });
}

function validateDate() {
  const date = document.getElementById('date').value;
  const day = date.substr(0, 2);
  const month = date.substr(3, 2);
  const year = date.substr(6, 4);

  const validDay = (day > 0 && day <= 31);
  const validMonth = (month > 0 && month <= 12);
  const validYear = (year >= 0);

  return validDay && validMonth && validYear;
}

function saveData() {
  let dataList = {
    Nome: document.getElementById('name').value,
    Email: document.getElementById('email').value,
    CPF: document.getElementById('cpf').value,
    Endereço: document.getElementById('address').value,
    Cidade: document.getElementById('city').value,
    Estado: document.getElementById('state').value,
    Resumo: document.getElementById('summary').value,
    Cargo: document.getElementById('position').value,
    Descrição: document.getElementById('description').value,
  };
  createAnswer(dataList);
}

function createAnswer(dataList) {
  for (const key in dataList) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${key}</strong>: ${dataList[key]}`;
    result.appendChild(li);
  }
}

function returnError() {
  result.innerHTML = `A data digitada é inválida.`
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  (validateDate()) ? saveData() : returnError();
});

getStates();
