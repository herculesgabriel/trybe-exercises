import React from 'react';

const task = value => <li>{value}</li>;

const commitments = ['terminar projeto', 'lavar a louça', 'ligar para o gerente'];

const App = () => {
  return commitments.map(item => task(item));
};

export default App;
