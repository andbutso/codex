import React from 'react';

class DayDetailed extends React.Component {
  render() {
    var k = this.props.flexValue;
    var detailedStyle = {
      display:"inline-flex",
      border: "solid",
      backgroundColor: 'orange',
      padding: 1,
      borderWidth: 1,
      flex: k
    };
    return (
      <div style={detailedStyle}>
      </div>
    );
  }
};


module.exports = DayDetailed;
