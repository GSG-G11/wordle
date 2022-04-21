/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Input from '../components/input/Input';
import Letter from '../components/Letter';
import guses from './guses.png';

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
  const changeWord = () => {
    fetch('https://random-words-api.vercel.app/word')
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0]);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    changeWord();
  }, []);
  useEffect(() => {
    if (wordInput) {
      if (wordInput.toLowerCase() === word.word.toLowerCase()) {
        setRight(true);
      }
      const wordArr = word.word.toLowerCase().split('');
      const inputtedArr = wordInput.toLocaleLowerCase().split('');
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
    if (cases.length > 0) {
      setEntireCases([...entireCases, cases]);
    }
  }, [cases]);

  const resetEverything = (newWord = true) => {
    document.getElementById('input').disabled = false;

    newWord && changeWord();
    setWordInput('');
    setCases([]);
    setEntireCases([]);
    setWords([]);
    setSubmit(0);
    setWrong('');
    isRight && setRight(!isRight);
  };
  // const close = () => {
  //   setRight(!isRight)
  // };
  return (
    <div className="Home">
      <Input
        isRight={isRight}
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
          : (
            <div>
              <img className="guses" src={guses} alt="guses" />
            </div>
          )}
      </div>
      {isRight && (
      <div>
        <button onClick={resetEverything} type="button" className="close-definition"><i className="ri-close-circle-line" /></button>
        <div className="definition">
          <h1>The Definition</h1>
          <p>{word?.definition}</p>
          <button className="try-btn" type="button" onClick={resetEverything}>Play Again</button>
        </div>
      </div>
      )}
      { wrong && (
      <div>
        <button onClick={resetEverything} type="button" className="close-definition"><i className="ri-close-circle-line" /></button>
        <div className="wrong">
          <button className="try-btn-wrong" type="button" onClick={() => resetEverything(false)}>Try Again</button>
          <button className="try-btn" type="button" onClick={resetEverything}>Another Word</button>
        </div>
      </div>
      )}
    </div>
  );
}

export default Home;
