import React from 'react';
var OneMonthView = require('./ViewStatic.js');
var zoomLevel = 0;

function ChangeView(props) {
  var deltaY = props.deltaY;
  zoomLevel = Math.min(Math.max(zoomLevel + deltaY / 2,0));
  return <OneMonthView zoomLevel={zoomLevel}/>;
}

class ViewControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.state = {
      deltaX: 0,
      deltaY: 0,
      weekFlexArray: [1,1,1,1,1],
      dayFlexArray: [1,1,1,1,1,1,1]
    }
  }

  handleMouseWheel(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
      }

  render() {
  var genericStyle = {
    margin: 10,
    height: "80vh",
    width: "vw",
    display:"inline-flex",
    border: "solid",
    borderColor: "#111",
    borderWidth: 1
  };

      return (
        <div onWheel={this.handleMouseWheel} style={genericStyle}>
          <ChangeView deltaY={this.state.deltaY}/>
        </div>
      );
    }
}

module.exports = ViewControl;
