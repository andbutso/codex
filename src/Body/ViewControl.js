import React from 'react';
var OneMonthView = require('./ViewStatic.js');

class ViewControl extends React.Component {
  constructor(props) {
    super(props);
    this.generateViewMatrix = this.generateViewMatrix.bind(this);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.changeFocusPoint = this.changeFocusPoint.bind(this);
    this.state = {
      focusPoint: 34,
      deltaX: 0,
      deltaY: 0,
      zoomLevel: 0,
      weekFlexArray: [1,1,1,1,1],
      dayFlexArray: [1,1,1,1,1,1,1]
    }
  }

  changeFocusPoint(focusPoint) {
    this.setState({
      focusPoint: focusPoint
    });
    this.generateViewMatrix();
   }

   handleMouseWheel(e) {
     e.preventDefault();
     e.stopPropagation();
     this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
     var zoomLevel = this.state.zoomLevel;
     zoomLevel = Math.min(Math.max(zoomLevel + this.state.deltaY / 10,0),350);
     this.setState({zoomLevel: zoomLevel});
     this.generateViewMatrix();
   }

  generateViewMatrix() {
    const zoomArray = [
    [100,50,0,0,0],
    [75,100,50,25,25],
    [50,50,100,50,50],
    [25,25,50,100,75],
    [0,0,0,50,100],
    ];
    const dZoomArray = [
    [200,167,133,100,100,100,100],
    [183,200,167,133,117,117,117],
    [167,167,200,167,133,133,133],
    [150,150,167,200,167,150,150],
    [133,133,133,167,200,167,167],
    [117,117,117,133,167,200,183],
    [100,100,100,100,133,167,200]
    ];
    var weekFlexArray = [];
    var weekFocus = Math.floor(this.state.focusPoint/10);
    var zoomLevel = this.state.zoomLevel;
    var adjZoomLevel;
    if(zoomLevel>=0 && zoomLevel<50){
       adjZoomLevel = zoomLevel;
    }
    else if(zoomLevel>=50 && zoomLevel<100){
      adjZoomLevel = 50;
    }
    else if (zoomLevel>=100 && zoomLevel<150) {
       adjZoomLevel = zoomLevel - 50;
    }
    else if (zoomLevel>=150 && zoomLevel<200) {
       adjZoomLevel = 100;
    }
    else if (zoomLevel>=200 && zoomLevel<267) {
      adjZoomLevel = zoomLevel - 100;
    }
    else if (zoomLevel>=267 && zoomLevel<317) {
       adjZoomLevel = 167;
    }
    else {
      adjZoomLevel = zoomLevel - 150;
    }
    zoomLevel = adjZoomLevel;
    console.log(zoomLevel);
    for (var j = 1; j < 6; j++) {
      var k = 1;
      if(j<weekFocus){
        k = 1 / ((Math.max(Math.min(zoomLevel,zoomArray[j+1-1][weekFocus-1]),zoomArray[j-1][weekFocus-1])-zoomArray[j-1][weekFocus-1])/(zoomArray[j+1-1][weekFocus-1]-zoomArray[j-1][weekFocus-1])*(10-1)+1);
      }
      else if (j>weekFocus) {
        k = 1 / ((Math.max(Math.min(zoomLevel,zoomArray[j-1-1][weekFocus-1]),zoomArray[j-1][weekFocus-1])-zoomArray[j-1][weekFocus-1])/(zoomArray[j-1-1][weekFocus-1]-zoomArray[j-1][weekFocus-1])*(10-1)+1);
      }
      weekFlexArray.push(k);
    }
    this.setState({weekFlexArray: weekFlexArray});
    var dayFlexArray = [];
    var dayFocus = this.state.focusPoint - Math.floor(this.state.focusPoint/10) * 10;
    for (var l = 1; l < 8; l++) {
      var m = 1;
      if(l<dayFocus){
        m = 1 / ((Math.max(Math.min(zoomLevel,dZoomArray[l+1-1][dayFocus-1]),dZoomArray[l-1][dayFocus-1])-dZoomArray[l-1][dayFocus-1])/(dZoomArray[l+1-1][dayFocus-1]-dZoomArray[l-1][dayFocus-1])*(10-1)+1);
      }
      else if (l>dayFocus) {
        m = 1 / ((Math.max(Math.min(zoomLevel,dZoomArray[l-1-1][dayFocus-1]),dZoomArray[l-1][dayFocus-1])-dZoomArray[l-1][dayFocus-1])/(dZoomArray[l-1-1][dayFocus-1]-dZoomArray[l-1][dayFocus-1])*(10-1)+1);
      }
      dayFlexArray.push(m);
    }
    this.setState({dayFlexArray: dayFlexArray});
  }

  componentWillMount() {
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
