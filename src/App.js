import React, { Component } from 'react';
import logo from './logo.svg';
import Img from './img';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Disqus Thread</h1>
        </header>
        <Img />                
      </div>
    );
  }
}

export default App;
