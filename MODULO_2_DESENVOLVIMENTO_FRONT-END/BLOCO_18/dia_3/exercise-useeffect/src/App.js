import { useEffect, useState } from 'react';
import './App.css';

// ! Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
// ! A mensagem de acerto é removida 4 segundos depois de ser exibida;

function App() {
  const generateRandomNumber = () => Math.floor(Math.random() * 100);

  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  setInterval(() => setRandomNumber(generateRandomNumber()), 2000);
  
  useEffect(() => {
    if (randomNumber % 3 === 0 || randomNumber % 5 === 0) {
      setMessage('Acerto');
    } else {
      setMessage('Erro');
    }/

    return () => clearInterval();
  }, [randomNumber]);

  return (
    <>
      <h1>Random Number</h1>
      <h1>{randomNumber}</h1>
    </>
  );
}

export default App;
