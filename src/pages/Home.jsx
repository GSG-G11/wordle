import React, { useState, useEffect } from 'react';
import Input from '../components/input/Input';
import Letter from '../components/Letter';

function Home() {
  const [word, setWord] = useState({});
  const [wordInput, setWordInput] = useState('');
  const [isRight, setRight] = useState(false);
  const [cases, setCases] = useState([]);
  const submitInput = (inputValue) => {
    setWordInput(inputValue);
  };
  useEffect(() => {
    fetch('https://random-words-api.vercel.app/word')
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (wordInput) {
      if (wordInput.toLowerCase() === word.word.toLowerCase()) {
        setRight(true);
      }
      const wordArr = word.word.split('');
      const inputtedArr = wordInput.split('');
      setCases([]);
      inputtedArr.forEach((letter, i) => {
        if (letter === wordArr[i]) {
          setCases((prevCases) => [...prevCases, 'correct']);
        } else if (wordArr.includes(letter)) {
          setCases((prevCases) => [...prevCases, 'close']);
        } else {
          setCases((prevCases) => [...prevCases, 'wrong']);
        }
      });
    }
  }, [wordInput]);

  console.log(cases);
  return (
    <div className="App">
      <h1>{word.word}</h1>
      <Input submitInput={submitInput} length={word.word?.length} />
      <div className="letters">
        {wordInput
          ? wordInput.toLowerCase().split('')
            .map((letter, index) => (
              <Letter letter={letter} iCase={cases[index]} />
            ))
          : null}
      </div>
      {isRight && (
        <p>
          ( Congrants ... the definition is
          <br />
          {word?.definition}
          )
        </p>
      )}
    </div>
  );
}

export default Home;
