import React from 'react';
var FullChassis = require('./Day.js');
var zoomLevel = 75;
var genericStyle = {
  height: "100%",
  width: "100%",
  display:"inline-flex",
  border: "solid",
  borderColor: "#111",
  borderWidth: 1
};

var OneDay = React.createClass({
  render: function(){
    var specificStyle = {
      textAlign: 'center',
      display:"inline-flex",
      flexDirection:'column',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        1
      </div>
    );
  }
});


var ThreeDay = React.createClass({
  render: function(){
    var sendFlex = 20 / Math.min(Math.max(80 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
      <OneDay flexLevel = "1"/>
      <OneDay flexLevel = {sendFlex}/>
      <OneDay flexLevel = "1"/>
      </div>
    );
  }
});

var TwoDayL = React.createClass({
  render: function(){
    var sendFlex = 20 / Math.min(Math.max(60 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <OneDay flexLevel = "1"/>
        <OneDay flexLevel = {sendFlex}/>
      </div>
    );
  }
});

var TwoDayR = React.createClass({
  render: function(){
    var sendFlex = 20 / Math.min(Math.max(60 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <OneDay flexLevel = {sendFlex}/>
        <OneDay flexLevel = "1"/>
      </div>
    );
  }
});

var OneWeek = React.createClass({
  render: function(props){
    var sendFlex = 3 * 20 / Math.min(Math.max(60 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <TwoDayL flexLevel = "2"/>
        <ThreeDay flexLevel = {sendFlex}/>
        <TwoDayR flexLevel = "2"/>
      </div>
    );
  }
});

var TwoWeek = React.createClass({
  render: function(){
    var sendFlex = 20 / Math.min(Math.max(40 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'column',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
      <OneWeek flexLevel = {sendFlex}/>
      <OneWeek flexLevel = "1"/>
      </div>
    );
  }
});

var MainFullView = React.createClass({
  render: function(){
    var sendFlex = 20 / Math.max(20 - zoomLevel,0);
    var mainContainerStyle = {
      padding: 10,
      height: "80vh",
      width: "vw",
      border: "solid",
      borderColor: "#321",
      borderWidth: 1,
      display:"inline-flex",
      flexDirection:'column'
    };
    if (zoomLevel < 20) {
      return (
        <div style={mainContainerStyle}>
          <TwoWeek flexLevel = {sendFlex}/>
          <TwoWeek flexLevel = "1"/>
        </div>
      );
    } else if (zoomLevel >= 20 && zoomLevel < 40) {
      return (
        <div style={mainContainerStyle}>
          <TwoWeek/>
        </div>
      );
    } else if (zoomLevel >= 40 && zoomLevel < 60) {
      return (
        <div style={mainContainerStyle}>
          <OneWeek/>
        </div>
      );
    } else if (zoomLevel >= 60 && zoomLevel < 80) {
      return (
        <div style={mainContainerStyle}>
          <ThreeDay/>
        </div>
      );
    } else if (zoomLevel >= 80 && zoomLevel < 100) {
      return (
        <div style={mainContainerStyle}>
          <OneDay/>
        </div>
      );
    } else if (zoomLevel = 100) {
      return (
        <div style={mainContainerStyle}>
          This is it.
        </div>
      );
   }
  }
});

module.exports = MainFullView;
