import React from 'react';

const InputError = (props) => {
  return (
    <div className="container justify-content-center">
      <p className="lead" style={{color: 'red'}}>Please make sure the form is filled correctly.</p>
    </div>
  );
};

export default InputError;