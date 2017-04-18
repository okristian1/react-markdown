import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Textform from './markdown.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Markdown Preview</h2>
        </div>
        <p className="App-intro">
        Intro
        </p>
        <Textform/>
      </div>
    );
  }
}

export default App;
