import React, { Component } from 'react';

class Button extends Component {
  render() {
    return <button onClick={this.props.handleClick}>Clique</button>;
  };
};

export default Button;
