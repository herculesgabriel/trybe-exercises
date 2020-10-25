import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

const Bonus = styled.p`
  color: blue;
  margin: 10px
`;

const About = ({ greetingMessage = 'Hi There' }) => (
  <Wrapper>
    <div>
      <h2>About</h2>
      <p> {greetingMessage}, this is my awesome About component </p>
    </div>

    <Link to="EasterEgg">
      <Bonus>Psiu!</Bonus>
    </Link>
  </Wrapper>
);

export default About;