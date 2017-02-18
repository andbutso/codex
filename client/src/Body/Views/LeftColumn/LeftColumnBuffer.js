import React from 'react';

class LeftColumnBuffer extends React.Component {
  render() {
    var genericStyle = {
      textAlign: 'center',
      border: "solid",
      transform: [{rotate: '90deg'}],
      backgroundColor: 'blue',
      margin: 5,
      borderWidth: 1,
      borderColor: 'green',
      height: '1.9em'
    };
    return(
      <div style={genericStyle}>
        a
      </div>
    );
  }
}

module.exports = LeftColumnBuffer;
