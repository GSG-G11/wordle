/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './style.css';

function Input({
  submitInput, length, words, setWords, submit, setSubmit, setWrong, isRight,
}) {
  const [input, setInputState] = useState('');
  const handleChange = (e) => {
    setInputState(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitInput(input.trim());
    setWords([...words, input.trim()]);
    setInputState('');
  };

  useEffect(() => {
    if (input.trim().length === length) {
      document.getElementById('input').addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          if (submit < 6) {
            setWrong('');
            handleSubmit(e);
            setSubmit(submit + 1);
          } else {
            !isRight && setWrong('try again');
            document.getElementById('input').disabled = true;
          }
        }
      });
    }
  }, [input, submit, words]);

  return (
    <input
      type="text"
      id="input"
      maxLength={length}
      minLength={length}
      value={input}
      onChange={(e) => handleChange(e)}
      placeholder={`Guses word with ${length} character`}
    />
  );
}

export default Input;
