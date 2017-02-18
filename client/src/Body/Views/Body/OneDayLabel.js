import React from 'react';

var genericStyle = {
  textAlign: 'center',
  border: "solid",
  backgroundColor: 'green',
  margin: 5,
  borderWidth: 1
};

class OneDayLabel extends React.Component {

  render() {
    var dayArray=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    var dayFlexLevel = this.props.dayFlexLevel;
    var weekDay = this.props.weekDay;
    var specificStyle = {
      flex: dayFlexLevel
    };

    return(
      <div
        style={Object.assign(genericStyle, specificStyle)}
        >
          {dayArray[weekDay-1]}
      </div>
    );
  }
}

module.exports = OneDayLabel;
