import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Home';
import About from './About';
import Users from './Users';
import EasterEgg from './EasterEgg';
import StrictAccess from './StrictAccess';

const Wrapper = styled.div`
  background-color: blue;
  color: white;
  height: 100vh;
  width: 100vw;

  & ${"a"} {
    color: white;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;

  & ${"li"} ${"a"} {
    font-size: 25px;
    margin: 10px 25px;
    text-decoration: none;
  }
`;

class App extends Component {
  render() {
    const { username, password } = this.props.user;

    return (
      <BrowserRouter>
        <Wrapper>
          <Nav>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/users">Users</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/strictAccess">StrictAccess</a>
            </li>
          </Nav>

          <Switch>

            <Route path="/users/:username?" render={props => <Users user="Carlos" {...props} />} />
            {/* <Route path="/users/:username?" component={Users} /> */}

            <Route path="/about">
              <About greetingMessage="Good Morning" />
            </Route>

            <Route path="/strictAccess">
              {
                (username === 'joao' && password === '1234') ? (
                  <StrictAccess user={this.props.user} />
                ) : (
                    <Redirect to="/" />
                  )
              }

            </Route>

            <Route path="/easteregg" component={EasterEgg} />

            <Route path="/" component={Home} />

          </Switch>

        </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;