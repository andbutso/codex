import React from 'react';

function() {
  let style = { transform: 'translateY(0px)' };

  window.addEventListener('scroll', (event) => {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    style.transform = 'translateY(' + itemTranslate + 'px)');
  });

  return (
    <div style={style}></div>
  );
}


componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
},

componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
},

handleScroll: function(event) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    this.setState({
      transform: itemTranslate
    });
},
