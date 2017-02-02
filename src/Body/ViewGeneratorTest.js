import React from 'react';

class OneWeekView extends React.Component {
  constructor(props) {
    super(props);
  }
  handleMouseHover(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({active: true});
      }
  render() {
  }
}

  var zoomLevel = this.props.zoomLevel;
  generateWeekMatrix(props) {

  }
  generateDayMatrix(props) {

  }
  render() {
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
