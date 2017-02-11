import React from 'react';
var OneWeekView = require('./WeekView.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'blue',
  margin: 5,
  borderWidth: 1
};

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var specificStyle = {
      borderColor: 'green',
      flexDirection:'column',
      flex: 0.1
    };
    var monthMatrix = [];
    for (var j = 1; j < 6; j++) {
      var weekFlexArray = this.props.weekFlexArray;
      if(weekFlexArray[j-1]>0.1){
      monthMatrix.push(<OneWeekView
        weekIndex={j}
        dayFlexArray={this.props.dayFlexArray}
        changeFocusPoint={this.props.changeFocusPoint}
        weekFlexLevel={weekFlexArray[j-1]}
        weekDateArray={this.props.weekDateArray}
        zoomLevel={this.props.zoomLevel}
        />);
      }
    }
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        test
      </div>
    );
  }
}

module.exports = LeftColumn;
