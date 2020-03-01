import React from 'react';
import logo from './logo.svg';
import starImage from './star.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <button className="btn-amazing">
          <img src={starImage} className="star" alt="logo" />
          Do. Or do not. There is no try.
        <img src={starImage} className="star" alt="logo" />
          <div className="shiny"></div>
        </button>
      </div>

      <br />

      <div class="questions-section">
        <div class="question-answer">
          <div class="question">What character (person) appeared in the most of StarWars films?</div>
          <div id="mostAppearedAnswer" class="answer">Some answer</div>
        </div>
      </div>
    </div>
  );
}

export default App;
