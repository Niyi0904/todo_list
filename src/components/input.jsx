import React from 'react';

const Input = ({name, type, onChange, value}) => (
  <div>
    <input 
      className={name}
      type={type}
      onChange={onChange}
      name={name} 
      value={value} 
      required
    />
  </div>
);

export default Input;