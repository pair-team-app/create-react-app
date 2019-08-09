import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button>Login</button>
          <button>Signup</button>
        </p>
        <a
          className="App-link"
          href="https://designengine.ai"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design Playground
        </a>
      </header>
    </div>
  );
}

export default App;
