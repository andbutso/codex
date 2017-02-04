import React from 'react';
var OneMonthView = require('./ViewStatic.js');

class ViewControl extends React.Component {
  constructor(props) {
    super(props);
    this.generateViewMatrix = this.generateViewMatrix.bind(this);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.changeFocusPoint = this.changeFocusPoint.bind(this);
    this.state = {
      deltaX: 0,
      deltaY: 0,
      zoomLevel: 0,
      focusPoint: 34,
      weekFlexArray: [1,1,1,1,1],
      dayFlexArray: [1,1,1,1,1,1,1]
    }
  }

  generateViewMatrix() {
    var weekFlexArray = [];
    var weekFocus = Math.floor(this.state.focusPoint/10);
    for (var j = 1; j < 6; j++) {
      var k = 1 / Math.pow((Math.abs(j-weekFocus)+1),this.state.zoomLevel/6);
      weekFlexArray.push(k);
    }
    this.setState({weekFlexArray: weekFlexArray});
    var dayFlexArray = [];
    var dayFocus = this.state.focusPoint - Math.floor(this.state.focusPoint/10) * 10;
    for (var j = 1; j < 8; j++) {
      var k = 1 / Math.pow((Math.abs(j-weekFocus)+1),this.state.zoomLevel/12);
      dayFlexArray.push(k);
    }
    this.setState({dayFlexArray: dayFlexArray});
  }

  handleMouseWheel(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
    var zoomLevel = this.state.zoomLevel;
    zoomLevel = Math.min(Math.max(zoomLevel + this.state.deltaY / 2,0),100);
    this.setState({zoomLevel: zoomLevel});
    this.generateViewMatrix();
  }

  changeFocusPoint(focusPoint) {
    this.setState({
      focusPoint: focusPoint
    });
    this.generateViewMatrix();
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
        <OneMonthView
          changeFocusPoint={this.changeFocusPoint}
          weekFlexArray={this.state.weekFlexArray}
          dayFlexArray={this.state.dayFlexArray}
        />
      </div>
    );
    }
}

module.exports = ViewControl;
