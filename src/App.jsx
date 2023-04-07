import { useContext, useRef } from "react";
import "./App.css";
import { DataContext } from "./context";


const App = () => {

  const {renders,setRenders} = useContext(DataContext);

  const myRef = useRef();

  const renderCounter = () => {
    setRenders(prevVal => prevVal+1);
  }

  const makeFocus = () => {
    myRef.current.focus();
  }

  return (
    <div>
      <h1>useRef & useContext</h1>
      <input type="text" ref={myRef} onChange={renderCounter} placeholder="write soemthing"/>
      <p>Component Renderd {renders}</p>
      <button onClick={makeFocus}>Focus</button>
    </div>
  )
}

export default App