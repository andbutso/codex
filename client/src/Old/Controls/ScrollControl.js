import React from 'react';

class ScrollingApp extends React.Component {
  constructor(props) {
    super(props);
    this._handleScroll = this._handleScroll.bind(this);
  }

  _handleScroll(e) {
    console.log('scrolling');
  }
  componentDidMount() {
    this.refs.list.addEventListener('scroll', this._handleScroll);
  }
  componentWillUnmount() {
    this.refs.list.removeEventListener('scroll', this._handleScroll);
  }
  render() {
    return (
      <div ref="list" style={{ border: 'solid 1px #CCC', height: '300px', width: '150px', overflow: 'scroll' }}>
        <h1>Hello world</h1>
        <div style={{ height: '301px', width: '150px' }}></div>
      </div>
    );
  }
}

module.exports = ScrollingApp;
