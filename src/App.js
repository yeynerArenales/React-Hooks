import React from 'react';
import './App.css';
import Header from './components/Header';
import Characters from './components/Characters';

function App() {

  document.title = "Rick and Morty"
  return (
    <div className="App">
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
