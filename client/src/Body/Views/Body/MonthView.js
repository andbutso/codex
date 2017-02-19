import React from 'react';
var OneWeekView = require('./WeekView.js');
var WeekDayView = require('./WeekDayView.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'blue',
  margin: 5,
  borderWidth: 1
};

class OneMonthView extends React.Component {

  render() {
    var specificStyle = {
      borderColor: 'green',
      flexDirection:'column',
      flex: 1
    };
    var monthMatrix = [];
    monthMatrix.push(<WeekDayView
      dayFlexArray={this.props.dayFlexArray}
      monthDateArray={this.props.monthDateArray}      
    />);

    for (var j = 1; j < 6; j++) {
      var weekFlexArray = this.props.weekFlexArray;
      if(weekFlexArray[j-1]>0.1){
        monthMatrix.push(<OneWeekView
          weekIndex={j}
          dayFlexArray={this.props.dayFlexArray}
          changeFocusPoint={this.props.changeFocusPoint}
          weekFlexLevel={weekFlexArray[j-1]}
          monthDateArray={this.props.monthDateArray}
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
