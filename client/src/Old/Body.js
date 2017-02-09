import React from 'react';

var eventSpan = [7,9,15,16,19,21];
var daySpan = [8,20];
var renderSpan = [];
var renderChassis = [];
var Chassis = React.createClass({
  render: function() {
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
});

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

var PageBody = React.createClass({
  render: function() {
  var bodyStyle = {
    padding: 10,
    margin: 10,
    width: "vw",
    backgroundColor: "#FFF",
    display: "flex",
    flexDirection: 'row',
    height: "90%",
  };
      return (
        <div style={bodyStyle}>
          <Letter bgcolor="#58B3FF">{renderChassis}</Letter>
          <Letter bgcolor="#FF605F">T</Letter>
          <Letter bgcolor="#FFD52E">W</Letter>
          <Letter bgcolor="#49DD8E">R</Letter>
          <Letter bgcolor="#739463">F</Letter>
        </div>
      );
    }
});

var Letter = React.createClass({
  getInitialState: function() {
    return {
      flexlevel: 20
    };
  },
  increase: function(e) {
    var currentFlex = this.state.flexlevel;
   if (e.shiftKey) {
     if(currentFlex > 1){
       currentFlex -= 1;
     }
   } else {
     currentFlex += 1;
   }
   this.setState({
   flexlevel: currentFlex
 });
 },
  render: function() {
  var letterStyle = {
    padding: 10,
    margin: 10,
    backgroundColor: this.props.bgcolor,
    display: "flex",
    flexDirection: 'column',
    flex: this.state.flexlevel
  };
      return (
        <div onClick={this.increase} style={letterStyle}>
          {this.props.children}
        </div>
      );
    }
});

module.exports = PageBody;
