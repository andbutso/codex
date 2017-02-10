import React from 'react';

var genericStyle = {
  display:"inline-flex",
  border: "solid",
  backgroundColor: 'orange',
  padding: 10,
  borderWidth: 1
};

class Chassis extends React.Component {
  render() {
      return (
        <div style={genericStyle}>
        </div>
      );
    }
};

module.exports = Chassis;
