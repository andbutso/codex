import React from 'react';

class Chassis extends React.Component {

  var eventSpan = [7,9,15,16,19,21];
  var daySpan = [8,20];
  var renderSpan = [];
  var renderChassis = [];

  render() {
      var chassisStyle = {
        padding: 5,
        margin: 5,
        backgroundColor: "#EEE",
        width: "95%",
        height: 100,
        flex: this.props.flexValue,
        border: "solid",
        borderColor: "#111",
        borderWidth: 1
      };
      return (
        <div style={chassisStyle}>
        </div>
      );
    }
};

class FullChassis extends React.Component {
  render: function() {
    renderSpan.push(daySpan[0]);
    for (var i = 0; i < eventSpan.length; i++) {
      if (eventSpan[i] > daySpan[0] && eventSpan[i] < daySpan[1]) {
        renderSpan.push(eventSpan[i]);
      }
    }
    renderSpan.push(daySpan[1]);
    for (var j = 1; j < renderSpan.length; j++) {
      var k = (renderSpan[j] - renderSpan[j-1]) / (renderSpan[renderSpan.length - 1] - renderSpan[0]);
      renderChassis.push(<Chassis flexValue = {k}/>);
    }
    return (
      <div>
        {renderChassis}
      </div>
    );
  }
};

module.exports = FullChassis;
