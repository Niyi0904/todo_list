import React from 'react';

const Input = ({name, type, onChange, value, placeholder}) => (
  <div>
    <input 
      className={name}
      type={type}
      onChange={onChange}
      name={name} 
      value={value} 
      required
      placeholder={placeholder}
    />
  </div>
);

export default Input;