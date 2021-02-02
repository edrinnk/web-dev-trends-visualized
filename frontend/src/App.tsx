import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let temp: any = window;
  temp = Object.keys(temp).includes('token') ? temp.token : null;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* <p>My Token = {window.token}</p> */}
        <p>My Token = {temp}</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
