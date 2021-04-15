import React, {useContext} from "react";
import {QuizeContext} from "../helpers/contexts";

import '../App.css';



function Home() {

  const{gameState, setGameState} = useContext(QuizeContext);

  return(
    <div className="box">
      <h2 className="title">Quize App</h2>
      <button onClick = {() => {setGameState("quize");}} class="btn btn-start">Click to start The Quize</button>
    </div> 

  );
}


export default Home;