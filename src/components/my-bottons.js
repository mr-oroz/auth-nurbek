import React from 'react';

const MyBottons = ({ children }) => {
  return (
    <button
      type='submit'
      className='btn'>
      {children}
    </button>
  );
};

export default MyBottons;