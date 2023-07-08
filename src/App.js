import './Calculator.css';
import React,{useState , useRef} from 'react';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result , setResult] = useState(0);

  const plus = (event) => {
    event.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  const minus = (event) => {
    event.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  const times = (event) => {
    event.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  const divide = (event) => {
    event.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  const resetInput = (event) => {
    event.preventDefault();
    inputRef.current.value = 0;
  }

  const resetResult = (event) => {
    event.preventDefault();
    setResult((prevVal) => prevVal*0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input ref={inputRef} type='number' placeholder='Type a number' pattern='[0-9]'/>
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
      </form>
    </div>
  );
}

export default App;
