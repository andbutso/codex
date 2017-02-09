import React from 'react';
var OneMonthView = require('./ViewContents.js');

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
      swipeLevel: 0,
      centralDate: new Date(),
      weekFlexArray: [1,1,1,1,1],
      dayFlexArray: [1,1,1,1,1,1,1]
    }
  }

  componentWillMount(){
    this.setState({
      centralDate: new Date()
    });
   }

   componentDidMount(){
     console.log(this.state.centralDate);
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
     zoomLevel = Math.round(Math.min(Math.max(zoomLevel + this.state.deltaY / 20,0),200));
     this.setState({zoomLevel: zoomLevel});

     var currentDate = this.state.centralDate;
     var swipeLevel = this.state.swipeLevel;
     const dateOffset = [28,14,7,3,1];
     swipeLevel = swipeLevel + this.state.deltaX/100;
     if (Math.abs(swipeLevel) > 1){
       var span = dateOffset[Math.floor(zoomLevel/50)];
       var newDate = new Date(currentDate.setDate(currentDate.getDate() + Math.abs(swipeLevel)/swipeLevel*span));
       this.setState({centralDate: newDate});
       this.setState({swipeLevel: 0});
       console.log(zoomLevel);
       console.log(span);
     }
     else {
       this.setState({swipeLevel: swipeLevel});
     }
     this.generateViewMatrix();
   }

   handleArrows(e) {
     console.log(test);
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
    var zoomLevel = Math.round(zoomLevel + 50 / (2 * Math.PI) * Math.sin(zoomLevel * 2 * Math.PI / 50 - Math.PI));
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
    this.setState({weekFlexArray: weekFlexArray},
    this.sendStateToParent);
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

    var currentDate = this.state.centralDate;
    var m = currentDate.getDay();
    var monthDateArray = [];
    var weekDateArray = [];
    for (var j = 1; j < 6; j++) {
      for (var l = 1; l < 8; l++) {
        var k = 7 * (j - 3) + (l - 1) - (m - 1);
        var dayDate = new Date(currentDate);
        dayDate = new Date(dayDate.setDate(dayDate.getDate() + k));
        weekDateArray.push(dayDate);
      }
      monthDateArray.push(weekDateArray);
    }

    return (
      <div
      onWheel={this.handleMouseWheel}
      onKeyDown={this.handleArrows}
      style={genericStyle}
      >
        <OneMonthView
          changeFocusPoint={this.changeFocusPoint}
          weekFlexArray={this.state.weekFlexArray}
          dayFlexArray={this.state.dayFlexArray}
          weekDateArray={weekDateArray}
        />
      </div>
    );
    }
}

module.exports = ViewControl;
