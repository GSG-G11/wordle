import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>HOW TO PLAY</h1>
      <p className="info">
        Guess the WORDLE in six tries.
        Each guess must be a valid length-letter word. Hit the enter button to submit.
        After each guess, the color of the tiles will
        change to show how close your guess was to the word.
        if you guses right word the difinition of word is display.
      </p>
      <hr />
      <div>
        <h2>Examples</h2>
        <div className="ex-true">
          <div className="ex-true-word">
            <span style={{ background: '#6AAA64' }}>W</span>
            <span>E</span>
            <span>A</span>
            <span>R</span>
            <span>Y</span>
          </div>
          <p>
            The letter
            <b> W </b>
            is in the word and in the correct spot.
          </p>
        </div>
        <div className="ex-true">
          <div className="ex-true-word">
            <span>P</span>
            <span style={{ background: '#C9B458' }}>I</span>
            <span>L</span>
            <span>L</span>
            <span>S</span>
          </div>
          <p>
            The letter
            <b> I </b>
            is in the word but in the wrong spot.
          </p>
        </div>
        <div className="ex-true">
          <div className="ex-true-word">
            <span>V</span>
            <span>A</span>
            <span>G</span>
            <span style={{ background: '#787C7E' }}>U</span>
            <span>E</span>
          </div>
          <p>
            The letter
            <b> U </b>
            is not in the word in any spot
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
