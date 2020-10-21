import React, { Component } from 'react';
import Button from './Button';
import Result from './Result';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clickCount: 0
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.setState((current) => ({
      clickCount: current.clickCount + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <Button handleClick={this.handleClick} />
        <Result result={this.state.clickCount} />
      </div>
    );
  };
};

export default App;
