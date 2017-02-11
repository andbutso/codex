import React from 'react';
import logo from '../Images/Logo.jpg';
import userPicture from '../Images/User.jpg';
import Fetch from 'react-fetch';

class LogoBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
    return (
      <div style={Object.assign(headerStyle)}>
        <div style={Object.assign(textStyle)}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div style={Object.assign(textStyle)}>
          Codex
        </div>
      </div>
    );
  }
}

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    var headerStyle = {
      height: 20,
      width: "40%",
      padding: 10,
      margin: 10,
      borderRadius:"3px",
    position:"center",
    };

    return (
      <input style={Object.assign(headerStyle)} placeholder="search class...">
      </input>
    );
  }
}

class UserBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
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
    return (
      <div style={Object.assign(headerStyle)}>
        <div style={Object.assign(textStyle)}>
          <img src={userPicture} className="User-logo" alt="logo" />
        </div>
        <div style={Object.assign(textStyle)}>
          George
        </div>
      </div>
    );
  }
}

class ButtonTest extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  sendPoop() {
    fetch('http://localhost:3000/api/console')
  }

  render () {
    return (
      <button onClick={this.sendPoop()}>Send poop</button>
    )
  }
}

class PageHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
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
      <div style={Object.assign(headerStyle)}>
        <LogoBox/>
        <ButtonTest/>
        <SearchBox/>
        <UserBox/>
      </div>
    );
  }
}



module.exports = PageHeader;
