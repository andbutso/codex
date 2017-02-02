import React from 'react';
import { render } from 'react-dom';

class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div tabIndex="0" onKeyDown={this.props.handleKeyDown}>Fo</div>
    );
  }
}

class KeyingApp extends React.Component {
  constructor(props) {
    super(props);
  }
  handleKeyDown(event) {
    console.log('handling a key press');
  }

  render() {
    return (
      <ChildComponent handleKeyDown={() => this.handleKeyDown()} />
    );
  }
}

module.exports = KeyingApp;
