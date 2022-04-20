/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Input from '../components/input/Input';
import Letter from '../components/Letter';

function Home() {
  const [word, setWord] = useState({});
  const [wordInput, setWordInput] = useState('');
  const [isRight, setRight] = useState(false);
  const [cases, setCases] = useState([]);
  const [entireCases, setEntireCases] = useState([]);
  const [words, setWords] = useState([]);
  const [submit, setSubmit] = useState(0);
  const [wrong, setWrong] = useState('');
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
    console.log(words);
    if (wordInput) {
      if (wordInput.toLowerCase() === word.word.toLowerCase()) {
        setRight(true);
      }
      const wordArr = word.word.toLowerCase().split('');
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
  }, [wordInput, submit]);

  useEffect(() => {
    if (cases.length>0) {
      setEntireCases([...entireCases, cases]);
    }
  }, [cases]);

  return (
    <div className="Home">
      <h1>{word.word}</h1>
      <Input
        submitInput={submitInput}
        words={words}
        setWords={setWords}
        length={word.word?.length}
        submit={submit}
        setSubmit={setSubmit}
        setWrong={setWrong}
        setCases={setCases}
        setEntireCases={setEntireCases}
        setWordInput={setWordInput}
      />
      <div className="grid">
        <div
          className="letters"
          style={{ 'grid-template-columns': `repeat(${word.word?.length}, 1fr)` }}
        >
          {wordInput
            ? wordInput
              .toLowerCase()
              .split('')
              .map((letter, index) => <Letter letter={letter} iCase={cases[index]} />)
            : null}
        </div>
      </div>
      <div className="displays">
        {words.length > 0
          ? words.map((wo, rowI) => (
            <div className="result">
              {wo
                .toLowerCase()
                .split('')
                .map((letter, index) => {
                  if (submit === rowI) {
                    return <Letter letter={letter} iCase={cases[index]} />;
                  }
                  return <Letter letter={letter} iCase={entireCases[rowI] ? entireCases[rowI][index] : 'wrong'} />;
                })}
            </div>
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
      { wrong && <p>{wrong}</p> }
    </div>
  );
}

export default Home;
