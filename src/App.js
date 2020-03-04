import React from 'react';
import logo from './logo.svg';
import './App.css';
import AmazingButtons from './components/AmazingButtons';
import StarWarsInformation from './components/StarWarsInformation';
import { Provider } from './store/context';

function App() {

  return (
    <Provider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <AmazingButtons></AmazingButtons>

        <br />

        <StarWarsInformation></StarWarsInformation>

      </div>
    </Provider>
  );
}

export default App;
