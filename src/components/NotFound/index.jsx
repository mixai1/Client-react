import React from 'react';
import { Redirect } from 'react-router-dom';

const NotFound = () => {
  return (
    <Redirect to="/">
    <div>
      <h1>NotFound:(</h1>
      <p>Sorry, nothing was found at this address.</p>
    </div>
    </Redirect>
  );
};

export default NotFound;