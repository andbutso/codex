import React from 'react';

class DayOverview extends React.Component {
  render() {
    var genericStyle = {
      display:"inline-flex",
      border: "solid",
      backgroundColor: 'red',
      borderWidth: 1,
      flex: 1
    };
    return (
      <div style={genericStyle}>
      </div>
    );
  }
};

module.exports = DayOverview;
