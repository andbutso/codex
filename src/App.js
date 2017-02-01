import React, { Component } from 'react';
import './App.css';
var PageHeader = require('./Header/Header.js');
var MainFullView = require('./Body/ViewGenerator.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <MainFullView/>
      </div>
    );
  }
}

export default App;
