import React from 'react';

var genericStyle = {
  height: "100%",
  width: "100%",
  display:"inline-flex",
  border: "solid",
  borderColor: "#111",
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
    this.setState({hover: true});
  }
  handleExit(e) {
     this.setState({hover: false});
  }
  render() {
    var dayIndex = this.props.dayIndex;
    var specificStyle = {
      textAlign: 'center',
      flex: 1,
      backgroundColor : this.state.hover ? '#DDD' : '#EEE',
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)} onMouseEnter={this.handleEnter} onMouseOut={this.handleExit}>
        {dayIndex}
      </div>
    );
  }
}

function GenerateWeekMatrix(props) {
  var weekMatrix = [];
  var weekIndex = props.weekIndex;
  var specificStyle = {
    display:"inline-flex",
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
  }
  render() {
    return(
        <GenerateWeekMatrix weekIndex={this.props.weekIndex}/>
    );
  }
}

function GenerateMonthMatrix() {
  var monthMatrix = [];
  var specificStyle = {
    display:"inline-flex",
    flexDirection:'column',
    flex: 1
  };
  for (var j = 1; j < 6; j++) {
    monthMatrix.push(<OneWeekView weekIndex={j}/>);
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
    return(
        <GenerateMonthMatrix/>
    );
  }
}

module.exports = MainFullView;
