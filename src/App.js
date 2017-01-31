import React, { Component } from 'react';
import './App.css';
var PageHeader = require('./Header/Header.js');
var PageBody = require('./Body/Body.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <PageBody/>
      </div>
    );
  }
}

export default App;
