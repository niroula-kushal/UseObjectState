import React from 'react';
import logo from './logo.svg';
import './App.css';
import useObjectState from './UseObjectState.js';

function App() {
  const [state, updateState] = useObjectState({
    name : "Name",
    unchangedValue : 12
  });
  const updateName = () => updateState({
    name : "New updated name"
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Name : {state.name}
        </p>
        <p>
          This value `{state.unchangedValue}` will not change when updating state
        </p>
        <a
          className="App-link"
          href="#"
          rel="noopener noreferrer"
          onClick={updateName}
        >
          Click to update name
        </a>
      </header>
    </div>
  );
}

export default App;
