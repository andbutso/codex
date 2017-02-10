import React from 'react';
import logo from '../Images/Logo.jpg';
import userPicture from '../Images/User.jpg';

var LogoBox = React.createClass({
  render: function(){
    var headerStyle = {
      height: 20,
      width: "10%",
      padding: 10,
      margin: 10,
      display:"inline-flex",
      flexDirection:'row'
    };
    var textStyle = {
      color: "#318CE7",
      flex: 1,
    };
    return(
      <div style={headerStyle}>
        <div style={textStyle}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={textStyle}>
          Codex
        </div>
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
      margin: 10,
      display:"inline-flex",
      flexDirection:'row'
    };
    var textStyle = {
      color: "#318CE7",
      flex: 1,
    };
    return(
      <div style={headerStyle}>
        <div style={textStyle}>
          <img src={userPicture} className="User-logo" alt="logo" />
        </div>
        <div style={textStyle}>
          George
        </div>
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
    borderWidth: 1,
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

module.exports = PageHeader;
