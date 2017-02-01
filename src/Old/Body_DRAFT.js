import React from 'react';
var EventElements = require('./Event_Elements.js');

var zoomLevel = 40;
var oneDayView = [];
var threeDayView = [];
var twoDayView = [];
var oneWeekView = [];
var twoWeekView = [];

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);


function StandardBox(props) {
  return (
    <div className={props.boxCode}
    />
  );
}


 = React.createClass({
render: function() {
    return (
      <div style={this.props.direction}></div>
    );
  }
});

var MainView = React.createClass({
  render: function() {
    oneDayView.push(standardBox{direction = column});
    threeDayView.push(standardBox{direction = column});
    return (
      <div style={this.props.direction}></div>
    );
  }
});





mainView.push({standardBox});

var renderMatrix = [
[1,0],
[2,20],
[3,40],
[4,60],
[5,80],
[6,100],
];






var MainView = React.createClass({
  render: function() {
    if (zoomLevel > renderMatrix[0,1] && eventSpan[i] < daySpan[1]) {
      mainView.push(eventSpan[i]);
    }
  };
  return (
    <div>
    </div>
  );
});


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
