import React from 'react';

var focusPoint = 34;

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'blue',
  margin: 5,
  padding: 5,
  borderWidth: 1
};

class OneDayView extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.increase = this.increase.bind(this);
    this.state = {
      hover: false,
      flexLevel: 20
    }
  }

  increase(e) {
   var currentFlex = this.state.flexLevel;
   if (e.shiftKey) {
     if(currentFlex > 1){
       currentFlex -= 1;
     }
   } else {
     currentFlex += 1;
   }
   this.setState({flexLevel: currentFlex});
  }
  handleEnter(e) {
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
      flex: this.state.flexLevel
    };
    return(
      <div
        style={Object.assign(genericStyle, specificStyle)}
        onClick={this.increase}
        onMouseEnter={this.handleEnter}
        onMouseOut={this.handleExit}>
        {dayIndex}
      </div>
    );
  }
}

function GenerateWeekMatrix(props) {
  var weekMatrix = [];
  var weekIndex = props.weekIndex;
  var flexLevel = props.flexLevel ;
  var specificStyle = {
    borderColor: 'blue',
    flexDirection:'row',
    flex: 1
  };
  for (var i = 1; i < 8; i++) {
    var k = i + weekIndex * 10;
    weekMatrix.push(<OneDayView dayIndex={k}/>);
  }
  return (
    <div style={Object.assign(genericStyle, specificStyle)}>
      {weekMatrix}
    </div>
  );
}

class OneWeekView extends React.Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.state = {
      flexlevel: 20
    }
  }
  increase(e) {
   var currentFlex = this.state.flexLevel;
   if (e.shiftKey) {
     if(currentFlex > 1){
       currentFlex -= 1;
     }
   } else {
     currentFlex += 1;
   }
   this.setState({flexLevel: currentFlex});
   console.log({currentFlex});
  }
  render() {
    return(
        <GenerateWeekMatrix
          weekIndex={this.props.weekIndex}
          zoomLevel={this.props.zoomLevel}
          flexLevel={this.props.flexLevel}
        />
    );
  }
}

function GenerateMonthMatrix(props) {
  var monthMatrix = [];
  var zoomLevel = props.zoomLevel;
  var specificStyle = {
    borderColor: 'green',
    flexDirection:'column',
    flex: 1
  };
  for (var j = 1; j < 6; j++) {
    var flexLevel = j;
    monthMatrix.push(<OneWeekView weekIndex={j} zoomLevel={zoomLevel} flexLevel={flexLevel}/>);
  }
  return(
    <div style={Object.assign(genericStyle, specificStyle)}>
      {monthMatrix}
    </div>
 );
}

class MainFullView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var zoomLevel = this.props.zoomLevel;
    return(
        <GenerateMonthMatrix zoomLevel={zoomLevel}/>
    );
  }
}

module.exports = MainFullView;
