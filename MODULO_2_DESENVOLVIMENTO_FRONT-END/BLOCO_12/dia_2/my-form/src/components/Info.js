import React, { Component } from 'react';

class Info extends Component {
  render() {
    if (Object.keys(this.props).length === 0) {
      return (
        <h1>Hello</h1>
      );
    }
    const {
      name, email, cpf, address, city, state, type, resume, job_title, description
    } = this.props.result;

    return (
      <p className="result">
        {
          `Meu nome é ${name} e eu trabalho como ${job_title}. ${resume}
        Moro nessa cidade maravilhosa chamada ${city}, ${state}.
        Meu endereço completo? Claro! É ${address}, ${type}.
        Falando mais um pouco sobre meu antigo emprego, é o seguinte: ${description}
        É isso! Se precisar falar comigo, pode me contatar nesse e-mail: ${email}.
        
        CPF: ${cpf}`
        }
      </p>
    );
  };
};

export default Info;