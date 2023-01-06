import React from 'react';

const MyInputs = ({ onChange, placeholder, type, value, name }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      type={type} 
      placeholder={placeholder} />
  );
};

export default MyInputs;