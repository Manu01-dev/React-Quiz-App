import React, {useState, useContext} from "react";
import Home from './components/Home';
import QuizApp from './components/QuizApp';
import Results from './components/Results';

import {QuizeContext} from './helpers/contexts';

import './App.css';



function App() {

  const [gameState, setGameState] = useState("home");
  const [score, setScore] = useState(0);

  return(
    <div className="app">
      
      <div className="top">
      <a href="#"className="brand-name">QuizApp</a>

      </div>

      <div className="bottom">
        <h3 className="fotter">Happly Developed by <span>Manu</span></h3>
      </div>

      <QuizeContext.Provider value={{ gameState, setGameState, score, setScore }}>
      {gameState === "home" && <Home />}
      {gameState === "quize" && <QuizApp />}
      {gameState === "results" && <Results />}
      </QuizeContext.Provider>

    </div> 

  );
}


export default App;
