import React from 'react';
import ReactDom from 'react-dom';

// const template = React.createElement('p', {}, 'testing 211');
const template = <p>testing 1234</p>; 

ReactDom.render(template, document.getElementById('app'));