import React from 'react';
import Title from "./Title";
import DadJoke from "./DadJoke";
import './App.css';
import Bikes from "./Bikes";


function App() {
  console.log("Hei");
  return(
    <div className="App">
      <Title /> 
      <DadJoke />
      <Bikes />
    </div>
  );
}

export default App;
