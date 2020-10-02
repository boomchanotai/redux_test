import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';

function App() {

  const counter = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
      <h1>Counter : {counter}</h1>
      <div style={{display: "inline"}}>
        <button onClick={() => dispatch(increment(1))}>+</button>
        <button onClick={() => dispatch(decrement(1))}>-</button>
      </div>
      </header>
    </div>
  );
}

export default App;
