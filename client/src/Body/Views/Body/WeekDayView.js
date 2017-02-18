import React from 'react';
var OneDayLabel = require('./OneDayLabel.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'orange',
  margin: 5,
  borderWidth: 1
};

class WeekDayView extends React.Component {

  render() {
    var specificStyle = {
      borderColor: 'blue',
      flexDirection:'row',
      height: "1.9em"
    };
    var labelMatrix = [];
    for (var i = 1; i < 8; i++) {
      var dayFlexArray = this.props.dayFlexArray;
      if(dayFlexArray[i-1]>0.1){
      labelMatrix.push(<OneDayLabel
        dayFlexLevel={dayFlexArray[i-1]}
        weekDay={i}
        />);
      }
    }
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        {labelMatrix}
      </div>
    );
  }
}

module.exports = WeekDayView;
