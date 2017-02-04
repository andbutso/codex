import React from 'react';

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'grey',
  borderWidth: 1
};

class OneDayView extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.state = {
      hover: false,
      flexLevel: 20
    }
  }

  handleEnter(e) {
    var dayIndex = this.props.dayIndex;
    this.props.changeFocusPoint(dayIndex);
    this.setState({hover: true});
  }
  handleExit(e) {
     this.setState({hover: false});
  }
  render() {
    var dayIndex = this.props.dayIndex;
    var specificStyle = {
      backgroundColor : this.state.hover ? 'yellow' : '#EEE',
      borderColor: 'red',
      textAlign: 'center',
      flex: 1
    };
    return(
      <div
        style={Object.assign(genericStyle, specificStyle)}
        onMouseEnter={this.handleEnter}
        onMouseOut={this.handleExit}
        >
        {dayIndex}
      </div>
    );
  }
}

class OneWeekView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var weekMatrix = [];
    var weekIndex = this.props.weekIndex;
    var weekFlexValue = this.props.weekFlexValue;
    var specificStyle = {
      borderColor: 'blue',
      flexDirection:'row',
      flex: weekFlexValue
    };
    for (var i = 1; i < 8; i++) {
      var k = i + weekIndex * 10;
      weekMatrix.push(<
        OneDayView dayIndex={k}
        changeFocusPoint={this.props.changeFocusPoint}
        />);
    }
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        {weekMatrix}
      </div>
    );
  }
}

class OneMonthView extends React.Component {
  constructor(props) {
    super(props);
    this.changeFocusPoint = this.changeFocusPoint.bind(this);
    this.state = {
      focusPoint: 34,
      weekFlexArray: [1,1,1,1,1],
      dayFlexArray: [1,1,1,1,1,1,1]
    }
  }
  changeFocusPoint(focusPoint) {
    var focusWeek = Math.floor(this.state.focusPoint/10);
    var weekFlexArray = [];
    for (var j = 1; j < 6; j++) {
      var k = Math.round((1 / Math.pow((Math.abs(j-focusWeek)+1),this.props.zoomLevel/6))*1000)/1000;
      weekFlexArray.push(
        k
      );
      console.log(weekFlexArray);
    }
    this.setState({
      focusPoint: focusPoint,
      weekFlexArray: weekFlexArray
    });
   }
  render() {
    var specificStyle = {
      borderColor: 'green',
      flexDirection:'column',
      flex: 1
    };
    var monthMatrix = [];
    for (var j = 1; j < 6; j++) {
      var weekFlexArray=this.state.weekFlexArray;
      if(weekFlexArray[j-1]>0.1){
      monthMatrix.push(<OneWeekView
        weekIndex={j}
        weekFlexValue={weekFlexArray[j-1]}
        changeFocusPoint={this.changeFocusPoint}
        />);
      }
    }
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        {monthMatrix}
      </div>
    );
  }
}

module.exports = OneMonthView;
