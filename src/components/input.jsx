import React from 'react';

const Input = ({name, type, onChange}) => (
  <div>
    <input 
      className={name}
      type={type}
      onChange={onChange}
    />
  </div>
);

export default Input;