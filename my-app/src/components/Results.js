import React, {useContext} from "react";
import {QuizeContext} from "../helpers/contexts";
import { Quize } from "../helpers/questions";

import '../App.css';



function Results() {

  const {score, setScore, setGameState} = useContext(QuizeContext);

  const Reset = () => {
    setScore(0);
    setGameState("home");
  }

  return(
    <div className="box">
      <h2 className="title">Quize App</h2>
      <h4 className="sub-title">Results</h4>
      <p className="score">{score}/{Quize.length}</p>
      <button onClick = {Reset} className="btn">Back to Main Page</button>
    </div> 

  );
}


export default Results;