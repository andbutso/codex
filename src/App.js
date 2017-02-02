import React, { Component } from 'react';
import './App.css';
var PageHeader = require('./Header/Header.js');
var ViewControl = require('./Body/ViewControl.js');

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <ViewControl/>
      </div>
    );
  }
}

export default App;
