import React from 'react';
import AmazingButtons from './components/AmazingButtons';
import StarWarsQuestions from './components/StarWarsQuestions';
import { Provider } from './store/context';
import Header from './components/header/Header';

function App() {

  return (
    <Provider>
      <div className="App">
        <Header></Header>
        <AmazingButtons></AmazingButtons>
        <StarWarsQuestions></StarWarsQuestions>
      </div>
    </Provider>
  );
}

export default App;
