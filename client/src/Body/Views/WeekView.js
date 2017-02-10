import React from 'react';
var OneDayView = require('./DayView.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'orange',
  padding: 10,
  borderWidth: 1
};

class OneWeekView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var weekIndex = this.props.weekIndex;
    var weekFlexLevel = this.props.weekFlexLevel;
    var specificStyle = {
      borderColor: 'blue',
      flexDirection:'row',
      flex: weekFlexLevel
    };
    var weekMatrix = [];
    for (var i = 1; i < 8; i++) {
      var dayFlexArray = this.props.dayFlexArray;
      var k = i + weekIndex * 10;
      if(dayFlexArray[i-1]>0.1){
      weekMatrix.push(<OneDayView
        dayIndex={k}
        changeFocusPoint={this.props.changeFocusPoint}
        dayFlexLevel={dayFlexArray[i-1]}
        weekDateArray={this.props.weekDateArray}
        />);
      }
    }
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        {weekMatrix}
      </div>
    );
  }
}

module.exports = OneWeekView;
