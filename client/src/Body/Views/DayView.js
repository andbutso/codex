import React from 'react';
var Chassis = require('./EventView.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'orange',
  padding: 10,
  borderWidth: 1
};

class OneDayView extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.state = {
      hover: false,
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

  componentWillMount(){
  }

  render() {
    var dayIndex = this.props.dayIndex;
    var dayFlexLevel = this.props.dayFlexLevel;
    var weekDateArray = this.props.weekDateArray;
    var dayDate = weekDateArray[(Math.floor(dayIndex/10)-1)*7+dayIndex-1-Math.floor(dayIndex/10)*10];
    var dayStringDate = dayDate.toString();
    var specificStyle = {
      flexDirection:'column',
      backgroundColor : this.state.hover ? 'yellow' : '#EEE',
      borderColor: 'red',
      textAlign: 'center',
      flex: dayFlexLevel
    };
    var eventSpan = [7,9,15,16,19,21];
    var daySpan = [8,20];
    var renderSpan = [];
    var renderChassis = [];

    renderSpan.push(daySpan[0]);
    for (var i = 0; i < eventSpan.length; i++) {
      if (eventSpan[i] > daySpan[0] && eventSpan[i] < daySpan[1]) {
        renderSpan.push(eventSpan[i]);
      }
    }
    renderSpan.push(daySpan[1]);
    for (var j = 1; j < renderSpan.length; j++) {
      var k = (renderSpan[j] - renderSpan[j-1]) / (renderSpan[renderSpan.length - 1] - renderSpan[0]);
      renderChassis.push(<Chassis flexValue = {k}/>);
    }

    return(
      <div
        style={Object.assign(genericStyle, specificStyle)}
        onMouseEnter={this.handleEnter}
        onMouseOut={this.handleExit}
        >
        {renderChassis}
      </div>
    );
  }
}

module.exports = OneDayView;
