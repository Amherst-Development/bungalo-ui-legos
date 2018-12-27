import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Run npm run docz:dev to start the server!
          </p>
          <a
            className="App-link"
            href="https://www.docz.site"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bungalo's UI Library
          </a>
        </header>
      </div>
    );
  }
}

export default App;
