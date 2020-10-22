import React, { Component } from 'react';
import getStates from '../services/api_states';
import Info from './Info';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleMouseEvent = this.handleMouseEvent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.fillStates = this.fillStates.bind(this);

    this.state = {
      info: {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: '',
        type: '',
        resume: '',
        job_title: '',
        description: '',
      },
      alert: true,
      valid: false,
      states: [],
    };
  };

  componentDidMount() {
    this.fillStates();
  };

  fillStates() {
    getStates.get()
      .then(response => this.setState({ states: response.data }))
      .catch(() => this.setState({ states: [{ sigla: '', nome: 'Falha ao carregar estados' }] }));
  };

  handleChange({ target }) {
    const { name } = target;
    const value = target.name === 'type' ? target.id :
      target.name === 'name' ? target.value.toUpperCase() : target.value;

    this.setState((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        [name]: value,
      }
    }));
  };

  handleMouseEvent() {
    if (this.state.alert) {
      alert('Preencha com cuidado esta informação.');
      this.setState({ alert: false });
    }
  };

  handleReset() {
    this.setState((prevState) => ({
      ...prevState,
      info: {
        name: '',
        email: '',
        cpf: '',
        address: '',
        city: '',
        state: '',
        type: '',
        resume: '',
        job_title: '',
        description: '',
      },
      valid: false,
    }), () => {
      document.getElementById('state').value = '';
      document.querySelector('[name=type]:checked').checked = false;
    });
  };

  handleSubmit() {
    const values = Object.values(this.state.info);
    const allValid = values.every(field => field.length > 0);

    this.setState({ valid: allValid });
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" maxLength="40" required
              onChange={this.handleChange} value={this.state.info.name}
            />

            <div className="group">
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" maxLength="50" required
                onChange={this.handleChange} value={this.state.info.email}
              />

              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" maxLength="11" required
                onChange={this.handleChange} value={this.state.info.cpf}
              />
            </div>

            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" name="address" maxLength="200" required
              onChange={this.handleChange} value={this.state.info.address}
            />
            {/* // TODO Remover qualquer caractere especial que seja digitado */}

            <div className="group">
              <label htmlFor="city">Cidade:</label>
              <input type="text" id="city" name="city" maxLength="28" required
                onChange={this.handleChange} value={this.state.info.city}
              />
              {/* // TODO Ao remover o foco desse campo (evento onBlur), verificar se o nome da cidade começa com números. Caso comece, limpar o campo. */}

              <label htmlFor="state">Estado:</label>
              <select name="state" id="state" required onChange={this.handleChange}>
                <option value="">Selecione um estado</option>
                {
                  this.state.states.length > 0 && this.state.states.map((state) =>
                    <option key={state.sigla} value={`${state.sigla}`}>{state.nome}</option>)
                }
              </select>
            </div>

            <label>Tipo:</label>

            <div className="group">
              <label htmlFor="house">
                <input type="radio" name="type" id="house" onChange={this.handleChange} required /> Casa </label>
              <label htmlFor="apartment">
                <input type="radio" name="type" id="apartment" onChange={this.handleChange} /> Apartamento </label>
            </div>

          </fieldset>

          <fieldset>
            <legend>Informações sobre o último emprego</legend>

            <label htmlFor="resume">Resumo do currículo:</label>
            <textarea name="resume" id="resume" rows="8" maxLength="1000" required
              onChange={this.handleChange} value={this.state.info.resume}
            />

            <label htmlFor="job_title">Cargo:</label>
            <textarea name="job_title" id="job_title" rows="2" maxLength="40" required
              onChange={this.handleChange} value={this.state.info.job_title} onMouseEnter={this.handleMouseEvent}
            />

            <label htmlFor="description">Descrição do cargo:</label>
            <textarea name="description" id="description" rows="4" maxLength="500" required
              onChange={this.handleChange} value={this.state.info.description}
            />

          </fieldset>

          <button type="button" onClick={this.handleReset}>
            Limpar
            </button>
          <button type="button" onClick={this.handleSubmit}>
            Cadastrar
            </button>

        </form>

        {
          this.state.valid ? <Info result={this.state.info} /> : <Info />
        }
      </>
    );
  };
};

export default Form;