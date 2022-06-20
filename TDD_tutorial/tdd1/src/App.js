import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [onOff,setonOff] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{counter}</h3>
        <div>
          <button data-testid="minus-button" disabled={onOff} onClick ={()=> setCounter((count) => count-1)}>-</button>
          <button data-testid="plus-button" disabled={onOff} onClick ={()=> setCounter((count) => count+1)}>+</button>
        </div>
        <div>
          <button data-testid="on/off-button" style ={{backgroundColor:"blue"}} onClick = {() => setonOff((prev)=>!prev)}>on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
