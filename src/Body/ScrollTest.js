import React from 'react';
import ReactDOM from 'react-dom';

export default class ScrollingApp extends React.Component {
   constructor(){
     super();
   }

   handleScroll(e) {
     console.log('Scroll event is being called', e);
   }

   componentDidMount() {
       const holder = ReactDOM.findDOMNode(this.refs.holder)
       holder.addEventListener('mousewheel', this.handleScroll);
   }

   componentWillUnmount() {
       const holder = ReactDOM.findDOMNode(this.refs.holder)
       holder.removeEventListener('mousewheel', this.handleScroll);
   }

   render() {


     return (
       <div className="my_holder" ref="holder" style={{ border: 'solid 1px #CCC', height: '300px', width: '150px'}}/>)
}
}
