import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const StrictAccess = ({ username, password }) => {
  if (username === 'joao' && password === '1234') {
    return <h1>Hello</h1>;
  }
  return <h1>Access denied. Redirecting...</h1>;
};

export default StrictAccess;
