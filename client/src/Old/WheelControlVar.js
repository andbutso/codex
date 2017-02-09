import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
};

class WheelingApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deltaX: 0,
      deltaY: 0,
    };
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
  }

  getInitialState() {
      return {
          deltaX: 0,
          deltaY: 0,
      };
  }

  handleMouseWheel(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
      console.log('wheel');
      }

  render() {
  var letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: '#123',
    display: "flex",
    flexDirection: 'column',
    flex: this.state.flexlevel
  };

      return (
        <div onWheel={this.handleMouseWheel} style={letterStyle}>
        X: {this.state.deltaX} Y: {this.state.deltaY}
        </div>
      );
    }
}

module.exports = WheelingApp;
