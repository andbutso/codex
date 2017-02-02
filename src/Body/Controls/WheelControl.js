import React from 'react';

var WheelingApp = React.createClass({
  getInitialState: function() {
      return {
          deltaX: 0,
          deltaY: 0,
      };
  },
  handleMouseWheel: function(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
      console.log('wheel');
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
        <div onWheel={this.handleMouseWheel} style={letterStyle}>
        X: {this.state.deltaX} Y: {this.state.deltaY}
        </div>
      );
    }
});

module.exports = WheelingApp;
