import React from 'react';

var ScrollingApp = React.createClass({
  getInitialState: function() {
      return {
          deltaX: 0,
          deltaY: 0,
          altPressed: false
      };
  },
  handleMouseWheel: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
      console.log('wheel');
      },
  handleKeyDown: function(e) {
      this.setState({altPressed: e.altKey});
      console.log('Down');
  },
  handleKeyUp: function(e) {
      this.setState({altPressed: e.altKey});
      console.log('Up');
  },
  render: function() {
  var letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: '#123',
    display: "flex",
    flexDirection: 'column',
    flex: this.state.flexlevel
  };
      return (
        <div onKeyDown={this.handleKeyDown} onWheel={this.handleMouseWheel} onKeyUp={this.handleKeyUp} style={letterStyle}>
        X: {this.state.deltaX} Y: {this.state.deltaY}
        </div>
      );
    }
});

module.exports = ScrollingApp;
