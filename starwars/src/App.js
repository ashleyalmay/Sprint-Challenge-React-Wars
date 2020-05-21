import React from 'react';
import './App.css';
import Characters from "./components/Character";
import Characters1 from "./components/Character2";
import Characters2 from "./components/Character3";
import Characters3 from "./components/Character4";
import Characters4 from "./components/Character5";
import Characters5 from "./components/Character6";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {/* <h1 className="Header">Pokemon Team Stats</h1> */}
      <img src="https://fontmeme.com/permalink/200521/85fbe365f0c754ab6924c55ff4eb35d8.png" alt="pokemon font yellow and blue text pokemon team stats" />
      <Characters/>
    <Characters1/>
    <Characters2/>
    <Characters3/>
    <Characters4/>
    <Characters5/>
    </div>
  );
}

export default App;
