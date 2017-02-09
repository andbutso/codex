import React from 'react';

var FullChassis = require('./Day.js');
var ScrollingApp = require('./Controls/ScrollControl.js');
var KeyingApp = require('./Controls/KeyControl.js');
var zoomLevel = 0;

var genericStyle = {
  height: "100%",
  width: "100%",
  display:"inline-flex",
  border: "solid",
  borderColor: "#111",
  borderWidth: 1
};

class OneDay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var specificStyle = {
      textAlign: 'center',
      display:"inline-flex",
      flexDirection:'column',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        {this.props.flexLevel}
        {zoomLevel}
      </div>
    );
  }
}

class ThreeDay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sendFlex = 20 / Math.min(Math.max(80 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
      <OneDay flexLevel="1"/>
      <OneDay flexLevel={sendFlex}/>
      <OneDay flexLevel="1"/>
      </div>
    );
  }
}

class TwoDayL extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sendFlex = 20 / Math.min(Math.max(60 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <OneDay flexLevel="1"/>
        <OneDay flexLevel={sendFlex}/>
      </div>
    );
  }
}

class TwoDayR extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sendFlex = 20 / Math.min(Math.max(60 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <OneDay flexLevel={sendFlex}/>
        <OneDay flexLevel="1"/>
      </div>
    );
  }
}

class OneWeek extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sendFlex = 3 * 20 / Math.min(Math.max(60 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'row',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
        <TwoDayL flexLevel="2"/>
        <ThreeDay flexLevel={sendFlex}/>
        <TwoDayR flexLevel="2"/>
      </div>
    );
  }
}

class TwoWeek extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var sendFlex = 20 / Math.min(Math.max(40 - zoomLevel, 0), 20);
    var specificStyle = {
      display:"inline-flex",
      flexDirection:'column',
      flex: this.props.flexLevel
    };
    return(
      <div style={Object.assign(genericStyle, specificStyle)}>
      <OneWeek flexLevel={sendFlex}/>
      <OneWeek flexLevel="1"/>
      </div>
    );
  }
}

class MainFullView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var zoomLevel = this.props.zoomLevel;
    var sendFlex = 20 / Math.max(20 - zoomLevel,0);
    var mainContainerStyle = {
      padding: 10,
      height: "80vh",
      width: "100%",
      border: "solid",
      borderColor: "#321",
      borderWidth: 1,
      display:"inline-flex",
      flexDirection:'column'
    };

    if (zoomLevel < 20) {
      return (
        <div style={mainContainerStyle}>
          <TwoWeek flexLevel={sendFlex}/>
          <TwoWeek flexLevel="1"/>
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
}

module.exports = MainFullView;
