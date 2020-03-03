import React from 'react';
import logo from './logo.svg';
import './App.css';
import AmazingButtons from './components/AmazingButtons';
import StarWarsInformation from './components/StarWarsInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <AmazingButtons></AmazingButtons>

      <br />

      <StarWarsInformation></StarWarsInformation>
      
    </div>
  );
}

export default App;
