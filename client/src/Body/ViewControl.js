import React from 'react';
var OneMonthView = require('./Views/Body/MonthView.js');
var LeftColumn = require('./Views/LeftColumn/LeftColumn.js');
const dateOffset = [28,14,7,3,1];
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
const monthArray=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

class ViewControl extends React.Component {
  constructor(props) {
    super(props);
    this.generateViewMatrix = this.generateViewMatrix.bind(this);
    this.handleMouseWheel = this.handleMouseWheel.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.changeFocusPoint = this.changeFocusPoint.bind(this);
    this.changeDateOffset = this.changeDateOffset.bind(this);
    this.changeZoomLevel = this.changeZoomLevel.bind(this);
    this.resetMonthOffsetArray = this.resetMonthOffsetArray.bind(this);

    this.state = {
      focusPoint: 34,
      deltaX: 0,
      deltaY: 0,
      zoomLevel: 0,
      swipeLevel: 0,
      centralDate: new Date(),
      weekFlexArray: [1,1,1,1,1],
      dayFlexArray: [1,1,1,1,1,1,1],
      monthOffsetArray: []
    }
  }

  componentWillMount(){
    var m = this.state.centralDate.getDay();
    var monthOffsetArray = this.state.monthOffsetArray;
    for (var j = 1; j < 6; j++) {
      var weekOffsetArray = [];
      for (var l = 1; l < 8; l++) {
        var k = 7 * (j - 3) + (l - 1) - (m - 1);
        weekOffsetArray.push(k);
      }
      monthOffsetArray.push(weekOffsetArray);
    }
    this.setState({monthOffsetArray: monthOffsetArray});
  }

  componentDidMount(){
  }

  changeFocusPoint(focusPoint) {
    this.setState({
      focusPoint: focusPoint
    });
   }

   handleMouseWheel(e) {
     e.preventDefault();
     e.stopPropagation();
     this.setState({deltaX: e.deltaX, deltaY: e.deltaY});
     this.changeZoomLevel(this.state.deltaY / 20);

     var zoomLevel = this.state.zoomLevel;
     var swipeLevel = this.state.swipeLevel;
     swipeLevel = swipeLevel + this.state.deltaX/100;
     if (Math.abs(swipeLevel) > 1){
       var span = dateOffset[Math.min(Math.floor((zoomLevel+20)/50),4)];
       this.changeDateOffset(Math.round(swipeLevel)*span);
       this.setState({swipeLevel: 0});
     }
     else {
       this.setState({swipeLevel: swipeLevel});
     }
     this.generateViewMatrix();
   }

   handleKeyPress(e) {
     var currentDate = this.state.centralDate;
     var zoomLevel = this.state.zoomLevel;
     var span = dateOffset[Math.floor((zoomLevel+20)/50)];

     switch(e.keyCode){
       case 38:
       this.changeZoomLevel(5);
       break;

       case 40:
       this.changeZoomLevel(-5);
       break;

       case 37:
       this.changeDateOffset(-span);
       break;

       case 39:
       this.changeDateOffset(span);
       break;
     }
     this.generateViewMatrix();
   }

   changeZoomLevel(zoom){
     var currentDate = this.state.centralDate;
     var zoomLevel = this.state.zoomLevel;
     if (zoomLevel>100 && zoomLevel + zoom <= 100){
       this.resetMonthOffsetArray();
     }
     var span = dateOffset[Math.floor((zoomLevel+20)/50)];
     zoomLevel = Math.min(Math.max(zoomLevel + zoom,0),200);
     this.setState({zoomLevel: zoomLevel});
   }

   resetMonthOffsetArray(){
     var currentDate = this.state.centralDate;
     var monthOffsetArray = this.state.monthOffsetArray;
     var firstDay = new Date(currentDate);
     firstDay = (new Date(firstDay.setDate(firstDay.getDate()+monthOffsetArray[0][0])).getDay()-1+7)%7;
     this.changeDateOffset(firstDay);
     console.log(firstDay);
   }

   changeDateOffset(offset){
     var monthOffsetArray = this.state.monthOffsetArray;
     for (var j = 1; j < 6; j++) {
       for (var l = 1; l < 8; l++) {
         monthOffsetArray[j-1][l-1] = monthOffsetArray[j-1][l-1] + offset;
       }
     }
     this.setState({monthOffsetArray: monthOffsetArray});
     this.generateViewMatrix();
   }

  generateViewMatrix() {
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

  generateDateMatrix() {
  }

  render() {
    var genericStyle = {
      margin: 5,
      height: "80vh",
      width: "vw",
      display:"inline-flex",
      flexDirection:"row",
      border: "solid",
      borderColor: "#111",
      borderWidth: 1
    };

    var currentDate = this.state.centralDate;
    var m = currentDate.getDay();
    var monthDateArray = [];
    var monthOffsetArray = this.state.monthOffsetArray;
    for (var j = 1; j < 6; j++) {
      var weekDateArray = [];
      for (var l = 1; l < 8; l++) {
        var dayDate = new Date(currentDate);
        dayDate = new Date(dayDate.setDate(dayDate.getDate()+monthOffsetArray[j-1][l-1]));
        weekDateArray.push(dayDate);
      }
      monthDateArray.push(weekDateArray);
    }
    var focusPoint = this.state.focusPoint;
    var focusDate = new Date(monthDateArray[Math.floor(focusPoint/10)-1][focusPoint - Math.floor(focusPoint/10) * 10-1]);
    var currentMonth = monthArray[focusDate.getMonth()].concat(" ",focusDate.getFullYear());

    return (
      <div
      tabIndex="0"
      onWheel={this.handleMouseWheel}
      onKeyDown={this.handleKeyPress}
      style={genericStyle}
      >
        <LeftColumn
          currentMonth={currentMonth}
        />
        <OneMonthView
          changeFocusPoint={this.changeFocusPoint}
          weekFlexArray={this.state.weekFlexArray}
          dayFlexArray={this.state.dayFlexArray}
          zoomLevel={this.state.zoomLevel}
          monthDateArray={monthDateArray}
        />
      </div>
    );
    }
}

module.exports = ViewControl;
