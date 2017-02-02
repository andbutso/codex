import React from 'react';

var genericStyle = {
  height: "100%",
  width: "100%",
  display:"inline-flex",
  border: "solid",
  borderColor: "#111",
  borderWidth: 1
};

class OneDayView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <GenerateDayMatrix/>
      </div>
    );
  }
}

function GenerateWeekMatrix() {
  var weekMatrix;
  weekMatrix = [];
  for i = 1..7 {
    weekMatrix.push(OneDayView)
  }
  return {dayMatrix}/>;
}

class OneWeekView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <GenerateDayMatrix/>
      </div>
    );
  }
}

function GenerateMonthMatrix() {
  var monthMatrix;
  monthMatrix = [];
  for i = 1..5 {
    monthMatrix.push(OneWeekView)
  }
  return {dayMatrix}/>;
}

class MainFullView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <GenerateMonthMatrix/>
      </div>
    );
  }
}

module.exports = MainFullView;
