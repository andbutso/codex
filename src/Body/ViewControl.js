import React from 'react';
var MainFullView = require('./ViewGenerator.js');
var zoomLevel = 0;

function ChangeView(props) {
  var deltaY = props.deltaY;
  zoomLevel = Math.min(Math.max(zoomLevel + deltaY / 10,0),100);
  return <MainFullView zoomLevel = {zoomLevel}/>;
}

class ViewControl extends React.Component {
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
  var genericStyle = {
    height: "80vh",
    width: "100%",
    display:"inline-flex",
    border: "solid",
    borderColor: "#111",
    borderWidth: 1
  };

      return (
        <div onWheel={this.handleMouseWheel} style={genericStyle}>
          <ChangeView deltaY = {this.state.deltaY}/>
        </div>
      );
    }
}

module.exports = ViewControl;
