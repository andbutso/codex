import React from 'react';

var LeftColumnBuffer = require('./LeftColumnBuffer.js');
var LeftColumnMonth = require('./LeftColumnMonth.js');

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'blue',
  margin: 5,
  borderWidth: 1
};

class LeftColumn extends React.Component {

  render() {
    var specificStyle = {
      borderColor: 'green',
      flexDirection:'column',
      flex: 0.05
    };

    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <LeftColumnBuffer
        />
        <LeftColumnMonth
        currentMonth={this.props.currentMonth}
        />
      </div>
    );
  }
}

module.exports = LeftColumn;
