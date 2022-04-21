import React from 'react';
import './letter.css';

function Letter({ letter, iCase }) {
  let bg = '#787C7E';
  if (iCase === 'correct') {
    bg = '#6AAA64';
  } else if (iCase === 'close') {
    bg = '#C9B458';
  }

  return <span style={{ background: bg }} className="letter">{letter}</span>;
}

export default Letter;
