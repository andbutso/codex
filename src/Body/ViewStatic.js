import React from 'react';

var focusPoint = 34;

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
    this.props.changeFocusPoint(
      this.props.dayIndex
    );
    this.setState({hover: true});
  }
  handleExit(e) {
     this.setState({hover: false});
  }
  render() {
    var dayIndex = this.props.dayIndex;
    var specificStyle = {
      backgroundColor : this.state.hover ? '#DDD' : 'yellow',
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
    this.state = {
      focusPoint: 34
    }
  }

  changeFocusPoint(focusPoint){
    this.setState({focusPoint: focusPoint});
   }

  render() {
    var weekMatrix = [];
    var focusPoint = Math.floor(this.state.focusPoint/10);
    var weekIndex = this.props.weekIndex;
    var zoomLevel = this.props.zoomLevel;
    var flexLevel = 1 / Math.pow((Math.abs(weekIndex-focusPoint)+1),zoomLevel/6);

    var specificStyle = {
      borderColor: 'blue',
      flexDirection:'row',
      flex: flexLevel
    };
    console.log({flexLevel})
    for (var i = 1; i < 8; i++) {
      var k = i + weekIndex * 10;
      weekMatrix.push(<OneDayView dayIndex={k} changeFocusPoint={this.changeFocusPoint}/>);
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
  }
  render() {
    var specificStyle = {
      borderColor: 'green',
      flexDirection:'column',
      flex: 1
    };
    var monthMatrix = [];
    var zoomLevel = this.props.zoomLevel;
    for (var j = 1; j < 6; j++) {
      if(1 / Math.pow((Math.abs(j-3)+1),zoomLevel/6)>0.1){
      monthMatrix.push(<OneWeekView
        weekIndex={j}
        zoomLevel={this.props.zoomLevel}
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
