import React, {useState, useContext} from "react";
import {Quize} from "../helpers/questions";
import {QuizeContext} from "../helpers/contexts";

import '../App.css';



function QuizApp() {

  const[currQuen, setCurrQuen] = useState(0);
  const[option, setOption] = useState("");
  const {score, setScore, setGameState} = useContext(QuizeContext);

  //next question fun
  const nextQuen = () => {
    if(Quize[currQuen].answer === option){
      setScore(score + 1);

    } setCurrQuen(currQuen + 1);
  }

  //submit your Quiz
  const submitQuiz = () => {
    if(Quize[currQuen].answer === option){
      setScore(score + 1);
  } setGameState("results");
}

  return(
    <div className="box">
      <h2 className="title">Quize App</h2>
      <h3 className="quiz">{Quize[currQuen].question}</h3>
      <div className="options">
      <p className="option">
        <input type="checkbox" onClick = {() => {setOption("A")}} className="checkbox"></input>
        {Quize[currQuen].optionA}
      </p>

      <p className="option"> 
        <input type="checkbox" onClick = {() => {setOption("B")}} className="checkbox"></input>
        {Quize[currQuen].optionB}
      </p>

      <p className="option">
        <input type="checkbox" onClick = {() => {setOption("C")}} className="checkbox"></input>
        {Quize[currQuen].optionC}
      </p>

      <p className="option">
        <input type="checkbox" onClick = {() => {setOption("D")}} className="checkbox"></input>
        {Quize[currQuen].optionD}
      </p>
      </div>

      {currQuen == Quize.length - 1 ? <button onClick = {submitQuiz} className="btn">Submit Your Answers</button> : <button onClick={nextQuen} className="btn">Next Question</button>}
    </div> 

  );
}

export default QuizApp;