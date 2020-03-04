import React from 'react';
import './App.css';
import AmazingButtons from './components/AmazingButtons';
import StarWarsInformation from './components/StarWarsInformation';
import { Provider } from './store/context';
import Header from './components/header/Header';

function App() {

  return (
    <Provider>
      <div className="App">
        <Header></Header>
        <AmazingButtons></AmazingButtons>
        <br />
        <StarWarsInformation></StarWarsInformation>
      </div>
    </Provider>
  );
}

export default App;
