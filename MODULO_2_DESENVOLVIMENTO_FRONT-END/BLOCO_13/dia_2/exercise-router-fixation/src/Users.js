import React from 'react';

const Users = (props) => {
  const { match: { params: { username = 'Carlos' } } } = props;

  return (
    <div>
      <h2> Users </h2>
      <p> Hello! I'm {username} and this is my awesome Users component </p>
    </div>
  );
};

export default Users;