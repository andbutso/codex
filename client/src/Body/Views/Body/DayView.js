import React from 'react';
var DayDetailed = require('./Events/EventDetailedView.js');
var DayOverview = require('./Events/EventOverView.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  margin: 5,
  padding: 5,
  borderWidth: 1
};

class OneDayView extends React.Component {
  constructor(props) {
    super(props);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.state = {
      hover: false,
      dayDate: new Date()
    }
  }

  componentWillMount(){

    {/*Using dayDate, acess database and retreive events for the day*/}
    }

  handleEnter(e) {
    var dayIndex = this.props.dayIndex;
    this.props.changeFocusPoint(dayIndex);
    this.setState({hover: true},this.forceUpdate());
  }
  handleExit(e) {
     this.setState({hover: false},this.forceUpdate());
  }

  render() {
    var dayIndex = this.props.dayIndex;
    var monthDateArray = this.props.monthDateArray;
    var dayDate = monthDateArray[(Math.floor(dayIndex/10)-1)][dayIndex-1-Math.floor(dayIndex/10)*10];
    var dayFlexLevel = this.props.dayFlexLevel;
    var weekFlexLevel = this.props.weekFlexLevel;
    var specificStyle = {
      flexDirection:'column',
      backgroundColor : this.state.hover ? 'yellow' : '#EEE',
      borderColor: 'red',
      textAlign: 'center',
      flex: dayFlexLevel
    };
    var eventSpan = [7,9,15.5,16,19,21];
    var daySpan = [8,20];
    var renderSpan = [];
    var renderChassis = [];
    var zoomLevel = this.props.zoomLevel;

    if (zoomLevel >= 66 && dayFlexLevel >= 0.7 && weekFlexLevel >= 0.9){
      renderSpan.push(daySpan[0]);
      for (var i = 0; i < eventSpan.length; i++) {
        if (eventSpan[i] > daySpan[0] && eventSpan[i] < daySpan[1]) {
          renderSpan.push(eventSpan[i]);
        }
      }
      renderSpan.push(daySpan[1]);
      for (var j = 1; j < renderSpan.length; j++) {
        var k = (renderSpan[j] - renderSpan[j-1]) / (renderSpan[renderSpan.length - 1] - renderSpan[0]);
        renderChassis.push(<DayDetailed flexValue = {k}/>);
      }
    }
    else {
        renderChassis.push(<DayOverview/>);}

    return(
      <div
        style={Object.assign(genericStyle, specificStyle)}
        onMouseEnter={this.handleEnter}
        onMouseOut={this.handleExit}
        >
          <div>
            {dayDate.getDate()}
            -
            {dayDate.getMonth()}
            -
            {daySpan}
          </div>
        {renderChassis}
      </div>
    );
  }
}

module.exports = OneDayView;
