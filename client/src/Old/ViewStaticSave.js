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
      hover: false
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
    var flexLevel = this.props.flexLevel;
    var specificStyle = {
      borderColor: 'blue',
      flexDirection:'row',
      flex: flexLevel
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
  }
  render() {
    var specificStyle = {
      borderColor: 'green',
      flexDirection:'column',
      flex: 1
    };
    var monthMatrix = [];
    for (var j = 1; j < 6; j++) {
      var weekFlexArray = this.props.weekFlexArray;
      if(weekFlexArray[j-1]>0.1){
      monthMatrix.push(<OneWeekView
        weekIndex={j}
        dayFlexArray={this.props.dayFlexArray}
        changeFocusPoint={this.props.changeFocusPoint}
        flexLevel={weekFlexArray[j-1]}
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
