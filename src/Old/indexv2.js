import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';



var dayContainer = {
  width: "vw",
  height: "80vh",
  padding: 50,
  display: "flex",
  flexDirection:"row",
  backgroundColor: "#fff",
  fontColor:"#318CE7",
  WebkitFilter: "drop-shadow(0px 0px 5px #666)",
  filter: "drop-shadow(0px 0px 5px #666)"

}

var oneDayContainer = {
    backgroundColor: "#bbb",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row"
  }


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
    backgroundColor: "#FFF",
    borderColor: "#318CE7",
    borderWidth: "2px",
    borderRadius:"3px",
    borderStyle: "solid",
    color: "#318CE7",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "32",
    textAlign: "center",
    flex: this.state.flexlevel
  };

      return (
        <div onClick={this.increase} style={letterStyle}>
          {this.props.children}
        </div>
      );
    }
});

var DayContainer = React.createClass({
  render: function() {
    return(
      <div style={dayContainer}>
      <Letter>M</Letter>
	    <Letter>T</Letter>
	    <Letter>W</Letter>
	    <Letter>R</Letter>
	    <Letter>F</Letter>
      </div>
    );
  }
});


ReactDOM.render(<DayContainer />,
  document.getElementById('root')
);
