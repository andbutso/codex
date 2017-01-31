import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var MainDiv = React.createClass({
		  render: function() {
      var headerStyle = {
        padding:"50px",
        backgroundColor: "#FFF",
        display: "flex",
        flexDirection: 'column',
        height: "80vh",
        width: "vw",

      };
		      return (
		        <div style={headerStyle}>
            <PageHeader/>
            <PageMain/>
		        </div>
		      );
		    }
		});

  var PageHeader = React.createClass({
  render: function() {
  var headerStyle = {
    padding: 10,
    margin: 10,
    height: "10vh",
    width: "vw",
    backgroundColor: "#FFF",
    borderBottomColor: "#318CE7",
    borderBottomStyle:"solid",
    display: "inline-flex",
    justifyContent: 'space-between',
    flexDirection: 'row'
  };
      return (
        <div style={headerStyle}>
          <LogoBox/>
          <SearchBox/>
          <UserBox/>
        </div>
      );
    }
});

var LogoBox = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      width: "20%",
      padding: 10,
      margin:10,
      color: "#318CE7",
      display:"inline-flex",
      flexDirection:'row'
    };
    return(
      <div style={headerStyle}>
      <img src='Picture3.gif' alt="logo"/>
      STELLENDAR
      </div>
    );
  }
});

var SearchBox = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      width: "50%",
      padding: 10,
      margin: 10,
      borderRadius:"3px",
    position:"center",
    };
    return(
      <input style={headerStyle} placeholder="search class...">
      </input>
    );
  }
});

var UserBox = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      width: "10%",
      padding: 10,
      margin:10,
      color:"#318CE7",
    };
    return(
      <div style={headerStyle}>
      <img src='Picture3.gif'/>
      USER
      </div>
    );
  }
});

var PageMain = React.createClass({
    		  render: function() {
          var headerStyle = {
            padding: 10,
            margin: 10,
            width: "vw",
            backgroundColor: "#FFF",
            display: "flex",
            flexDirection: 'row',
            height: "90%",
          };
    		      return (
    		        <div style={headerStyle}>
                <CreateEventButton />
                  <Letter bgcolor="#58B3FF">M</Letter>
                  <Letter bgcolor="#FF605F">T</Letter>
                  <Letter bgcolor="#FFD52E">W</Letter>
                  <Letter bgcolor="#49DD8E">R</Letter>
                  <Letter bgcolor="#739463">F</Letter>
    		        </div>
    		      );
    		    }
    		});

function ButtonAlert(){
alert("Done");
return(
  <div>
  null
  </div>
)
};

var CreateEventButton = React.createClass({
  render: function(){
    var headerStyle = {
  position:"absolute",
  width:"20px",
  height:"20px",
  backgroundColor: "#FD5E0F",
  borderRadius: "100%",
  color:"white",
  fontWeight: "bold",
  marginBottom:"10px",
  fontFamily:"calibri",
  textAlign:"center",
};
return (
  <div onClick={ButtonAlert} style={headerStyle}>
  +
  </div>
)
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
    backgroundColor: "#FFF",
    borderColor: "#318CE7",
    borderWidth: "2px",
    borderRadius:"3px",
    borderStyle: "solid",
    color: "#318CE7",
    display: "inline-block",
    fontFamily: "monospace",
    fontSize: "24 ",
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

ReactDOM.render(<MainDiv />,
  document.getElementById('root')
);
