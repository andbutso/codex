import React from 'react';

class LeftColumnMonth extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var genericStyle = {
      display: 'inline-block',
      textAlign: 'center',
      transform: [{rotate: '90deg'}],
      border: "solid",
      backgroundColor: 'yellow',
      margin: 5,
      borderWidth: 1,
      borderColor: 'green',
      flex: 1
    };
    return(
      <div style={genericStyle}>
        {this.props.currentMonth}
      </div>
    );
  }
}

module.exports = LeftColumnMonth;
