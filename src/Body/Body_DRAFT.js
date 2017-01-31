import React from 'react';
var EventElements = require('./Event_Elements.js');

var zoomLevel = 100;

var renderMatrix = [
[1,80],
[2,60],
[3,40],
[4,30],
[5,20],
[6,10],
];

var inFull = [];
var inTwo = [];
var inOne = [];
var inDay = [];
var inEvent = [];
var columnStyle = {
  margin: 1,
  borderBottomColor: "#318CE7",
  borderBottomStyle:"solid",
  borderWidth: 1,
  display: "flex",
  flexDirection: 'column',
};
var rowStyle = {
  margin: 1,
  borderBottomColor: "#318CE7",
  borderBottomStyle:"solid",
  borderWidth: 1,
  display: "flex",
  flexDirection: 'column',
};
zoom: function(e) {
 if (e.shiftKey) {
   if(zoomLevel > 0){
     zoomLevel -= 1;
   }
 } else {
   if(zoomLevel < 101){
     zoomLevel += 1;
   }
 }
};

var standardBox = React.createClass({
render: function() {
    return (
      <div style={this.props.direction}></div>
    );
  }
});

var MainView = React.createClass({
  render: function() {
    if (zoomLevel > daySpan[0] && eventSpan[i] < daySpan[1]) {
      renderSpan.push(eventSpan[i]);
    }
  };
    return (
      <div>
      </div>
    );
});


function CreateRender(){
  for (var i = 0; i < EventElements.length; i++) {
    if (EventElements[i,1] == 1) {
      inEvent.push(EventElements[i,0]);
    }
  }
  for (var i = 0; i < EventElements.length; i++) {
    if (EventElements[i,1] == 1) {
      inEvent.push(EventElements[i,0]);
    }
  }


return(
  <div>
  null
  </div>
)
};

module.exports = MainView;
