import React from 'react';
import 'remixicon/fonts/remixicon.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/header/index';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css';
import './fonts/font.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
