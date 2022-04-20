/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Input({ submitInput, length, words, setWords, submit, setSubmit, setWrong, setCases, setEntireCases, setWordInput }) {
  const [input, setInputState] = useState('');
  // const [submit, setSubmit] = useState(0);
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
            setCases([]);
            setWrong('try again');
            setWords([]);
            setSubmit(0);
            setEntireCases([]);
            setWordInput('');
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
    />
  );
}

export default Input;
