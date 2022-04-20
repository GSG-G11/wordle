import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function index() {
  return (
    <header>
      <Link to="about"><i className="ri-question-line" /></Link>
      <Link to="/"><h1>Wordle</h1></Link>
      <i className="ri-settings-5-fill" />
    </header>
  );
}
