import React from 'react';
var zoomLevel = 40;

var OneDay = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      display:"inline-flex",
      flexDirection:'row'
    };
    return(
      <div style={headerStyle}>
      </div>
    );
  }
});

var ThreeDay = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      display:"inline-flex",
      flexDirection:'row'
    };
    return(
      <div style={headerStyle}>
        <OneDay/>
        <OneDay/>
        <OneDay/>
      </div>
    );
  }
});

var TwoDay = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      display:"inline-flex",
      flexDirection:'row'
    };
    return(
      <div style={headerStyle}>
        <OneDay/>
        <OneDay/>
      </div>
    );
  }
});

var OneWeek = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      display:"inline-flex",
      flexDirection:'row'
    };
    return(
      <div style={headerStyle}>
        <TwoDay/>
        <ThreeDay/>
        <TwoDay/>
      </div>
    );
  }
});

var TwoWeek = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      display:"inline-flex",
      flexDirection:'row'
    };
    return(
      <div style={headerStyle}>
        <OneWeek/>
        <OneWeek/>
      </div>
    );
  }
});

function MainView() {
  if (zoomLevel < 20) {
    return (
      <div>
        <TwoWeek/>
        <TwoWeek/>
      </div>
    );
  } else if (zoomLevel < 40) {
    return (
      <div>
        <TwoWeek/>
      </div>
    );
  } else if (zoomLevel < 60) {
    return (
      <div>
        <OneWeek/>
      </div>
    );
  } else if (zoomLevel < 80) {
    return (
      <div>
        <ThreeDay/>
      </div>
    );
  } else if (zoomLevel < 100) {
    return (
      <div>
        <OneDay/>
      </div>
    );
  } else if (zoomLevel = 100) {
    return (
      <div>
        <Event/>
      </div>
    );
 }
}

module.exports = MainView;
