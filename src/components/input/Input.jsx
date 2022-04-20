/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Input({ submitInput, length }) {
  const [input, setInputState] = useState('');
  const handleChange = (e) => {
    setInputState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitInput(input.trim());
    setInputState('');
  };

  useEffect(() => {
    if (input.trim().length === length) {
      document.getElementById('input').addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          handleSubmit(e);
        }
      });
    }
  }, [input]);

  return (
     <input 
      type="text"
      id="input"
      maxLength={length}
      minLength={length}
      value={input}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default Input;
