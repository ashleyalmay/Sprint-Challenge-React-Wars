import React from 'react';
import './App.css';
import Characters from "./components/Character";
import Characters1 from "./components/Character2";
import Characters2 from "./components/Character3";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Pokemon Information</h1>
      <Characters/>
    <Characters1/>
    <Characters2/>
    </div>
  );
}

export default App;
