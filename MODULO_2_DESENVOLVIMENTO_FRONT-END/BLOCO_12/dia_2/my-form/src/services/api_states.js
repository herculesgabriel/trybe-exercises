import axios from 'axios';

const getStates = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
});

export default getStates;
