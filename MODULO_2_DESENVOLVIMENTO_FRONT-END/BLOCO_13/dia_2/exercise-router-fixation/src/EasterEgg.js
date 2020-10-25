import React from 'react';
import { Link } from 'react-router-dom';

const EasterEgg = () => {
  return (
    <>
      <h1>You got it!</h1>
      <Link to="/">
        <h3>Click here to get back to the homepage</h3>
      </Link>
    </>
  );
};

export default EasterEgg;
