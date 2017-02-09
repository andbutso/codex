import React from 'react';

function ChangeZoomLevel(props) {
  var deltaY = props.deltaY;
  console.log(deltaY);
  return <h1>This is a test.</h1>;
}

class WheelingApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.state = {
      deltaX: 0,
      deltaY: 0,
    }
  }

  handleMouseWheel(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
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
          <ChangeZoomLevel deltaY = {this.state.deltaY}/>
          X: {this.state.deltaX} Y: {this.state.deltaY}
        </div>
      );
    }
}

module.exports = WheelingApp;
